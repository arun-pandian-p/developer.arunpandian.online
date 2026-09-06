import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { SiteCMSData, ThemePreset } from '../types/cms';
import { DEFAULT_CMS_DATA } from '../data/defaultCMSData';
import { THEME_PRESETS } from '../data/themePresets';
import { supabase, uploadMediaFile } from '../lib/supabaseClient';

interface CMSContextType {
  cmsData: SiteCMSData;
  updateCMSData: (updater: (prev: SiteCMSData) => SiteCMSData) => void;
  updateField: <K extends keyof SiteCMSData>(section: K, data: Partial<SiteCMSData[K]>) => void;
  toggleElementVisibility: (elementKey: string) => void;
  isElementVisible: (elementKey: string, defaultVal?: boolean) => boolean;
  updateElementStyle: (elementKey: string, stylePatch: Partial<import('../types/cms').ElementStyleConfig>) => void;
  getElementStyle: (elementKey: string) => import('../types/cms').ElementStyleConfig | undefined;
  applyThemePreset: (presetId: string) => void;
  currentThemePreset: ThemePreset;
  isSaving: boolean;
  saveStatus: 'saved' | 'saving' | 'error' | 'local-only';
  saveToSupabase: () => Promise<boolean>;
  resetToDefaults: () => void;
  uploadMedia: (file: File) => Promise<string>;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const LOCAL_STORAGE_KEY = 'arun_developer_cms_state_v2';

const CMSContext = createContext<CMSContextType | null>(null);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cmsData, setCmsData] = useState<SiteCMSData>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_CMS_DATA, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Could not read from localStorage:', e);
    }
    return DEFAULT_CMS_DATA;
  });

  const [history, setHistory] = useState<SiteCMSData[]>([DEFAULT_CMS_DATA]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | 'error' | 'local-only'>('saved');

  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Find active theme preset
  const currentThemePreset =
    THEME_PRESETS.find((p) => p.id === cmsData.theme?.activePresetId) || THEME_PRESETS[0];

  // Apply dynamic theme CSS variables and SEO / Favicon to document
  useEffect(() => {
    const root = document.documentElement;
    const theme = cmsData.theme;
    const activePreset = currentThemePreset;

    root.style.setProperty('--color-primary', theme.primaryColor || activePreset.primary);
    root.style.setProperty('--color-accent', theme.accentColor || activePreset.accent);
    root.style.setProperty('--color-bg-light', activePreset.bgLight);

    // Dynamic SEO Title
    if (cmsData.seo?.siteTitle) {
      document.title = cmsData.seo.siteTitle;
    }

    // Dynamic Meta Description
    if (cmsData.seo?.metaDescription) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', cmsData.seo.metaDescription);
    }

    // Dynamic Favicon
    const faviconUrl = cmsData.seo?.faviconUrl || '/assets/hero.png';
    let linkFavicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement | null;
    if (!linkFavicon) {
      linkFavicon = document.createElement('link');
      linkFavicon.rel = 'icon';
      document.head.appendChild(linkFavicon);
    }
    linkFavicon.href = faviconUrl;
  }, [cmsData.theme, cmsData.seo, currentThemePreset]);

  // Load from Supabase on mount
  useEffect(() => {
    let isMounted = true;

    async function loadRemoteData() {
      try {
        const { data, error } = await supabase
          .from('portfolio_cms')
          .select('content')
          .eq('id', 'developer_portfolio')
          .single();

        if (!error && data?.content && isMounted) {
          const merged = { ...DEFAULT_CMS_DATA, ...data.content };
          setCmsData(merged);
          setHistory([merged]);
          setHistoryIndex(0);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(merged));
          setSaveStatus('saved');
        }
      } catch (err) {
        console.info('Supabase initial fetch info (using stored cache):', err);
      }
    }

    loadRemoteData();

    // Supabase Realtime channel subscription
    const channel = supabase
      .channel('realtime_portfolio_cms')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'portfolio_cms' },
        (payload: any) => {
          if (payload.new?.content) {
            setCmsData(payload.new.content);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(payload.new.content));
          }
        }
      )
      .subscribe();

    return () => {
      isMounted = false;
      supabase.removeChannel(channel);
    };
  }, []);

  // Save / Publish to Supabase
  const saveToSupabase = useCallback(async (dataToSave?: SiteCMSData): Promise<boolean> => {
    setIsSaving(true);
    setSaveStatus('saving');

    const targetData = dataToSave || cmsData;

    try {
      const payload = {
        id: 'developer_portfolio',
        content: targetData,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from('portfolio_cms')
        .upsert(payload, { onConflict: 'id' });

      if (error) {
        console.warn('Supabase upsert warning:', error.message);
        setSaveStatus('local-only');
        setIsSaving(false);
        return true;
      }

      setSaveStatus('saved');
      setIsSaving(false);
      return true;
    } catch (err) {
      console.warn('Supabase fallback:', err);
      setSaveStatus('local-only');
      setIsSaving(false);
      return true;
    }
  }, [cmsData]);

  // Update CMS data helper with auto-save debounce
  const updateCMSData = useCallback((updater: (prev: SiteCMSData) => SiteCMSData) => {
    setCmsData((prev) => {
      const next = updater(prev);
      next.updatedAt = new Date().toISOString();

      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(next));
      } catch (e) {
        console.warn('LocalStorage save error:', e);
      }

      setHistory((oldHist) => {
        const sliced = oldHist.slice(0, historyIndex + 1);
        return [...sliced, next];
      });
      setHistoryIndex((prevIdx) => prevIdx + 1);

      // Trigger debounced Supabase background sync (800ms)
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = setTimeout(() => {
        saveToSupabase(next);
      }, 800);

      return next;
    });
  }, [historyIndex, saveToSupabase]);

  // Specific section updater
  const updateField = useCallback(
    <K extends keyof SiteCMSData>(section: K, data: Partial<SiteCMSData[K]>) => {
      updateCMSData((prev) => {
        const currentSection = prev[section];
        let updatedSection: any;

        if (Array.isArray(currentSection)) {
          updatedSection = data;
        } else if (typeof currentSection === 'object' && currentSection !== null) {
          updatedSection = { ...currentSection, ...data };
        } else {
          updatedSection = data;
        }

        return {
          ...prev,
          [section]: updatedSection,
        };
      });
    },
    [updateCMSData]
  );

  // Toggle individual element visibility live
  const toggleElementVisibility = useCallback((elementKey: string) => {
    updateCMSData((prev) => {
      const currentVis = prev.elementVisibility || {};
      const isCurrentlyVisible = currentVis[elementKey] !== false; // defaults to true
      return {
        ...prev,
        elementVisibility: {
          ...currentVis,
          [elementKey]: !isCurrentlyVisible,
        },
      };
    });
  }, [updateCMSData]);

  // Check element visibility helper
  const isElementVisible = useCallback(
    (elementKey: string, defaultVal: boolean = true) => {
      if (!cmsData.elementVisibility) return defaultVal;
      return cmsData.elementVisibility[elementKey] !== false;
    },
    [cmsData.elementVisibility]
  );

  // Apply theme preset
  const applyThemePreset = useCallback((presetId: string) => {
    const preset = THEME_PRESETS.find((p) => p.id === presetId);
    if (!preset) return;

    updateCMSData((prev) => ({
      ...prev,
      theme: {
        ...prev.theme,
        activePresetId: preset.id,
        primaryColor: preset.primary,
        accentColor: preset.accent,
      },
    }));
  }, [updateCMSData]);

  // Media upload handler
  const uploadMedia = useCallback(async (file: File): Promise<string> => {
    const res = await uploadMediaFile(file);
    if (res.url) {
      updateCMSData((prev) => ({
        ...prev,
        customMediaList: [
          {
            id: `media_${Date.now()}`,
            name: file.name,
            type: file.type.startsWith('video')
              ? 'video'
              : file.type.includes('pdf')
              ? 'pdf'
              : 'image',
            url: res.url,
            uploadedAt: new Date().toISOString(),
          },
          ...(prev.customMediaList || []),
        ],
      }));
      return res.url;
    }
    throw new Error('Upload failed');
  }, [updateCMSData]);

  // Reset to default
  const resetToDefaults = useCallback(() => {
    if (window.confirm('Reset all website edits back to initial default state?')) {
      setCmsData(DEFAULT_CMS_DATA);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      saveToSupabase(DEFAULT_CMS_DATA);
    }
  }, [saveToSupabase]);

  // Undo / Redo
  const undo = useCallback(() => {
    if (historyIndex > 0) {
      const prevIdx = historyIndex - 1;
      setHistoryIndex(prevIdx);
      setCmsData(history[prevIdx]);
    }
  }, [historyIndex, history]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const nextIdx = historyIndex + 1;
      setHistoryIndex(nextIdx);
      setCmsData(history[nextIdx]);
    }
  }, [historyIndex, history]);

  // Update specific element Figma-style properties
  const updateElementStyle = useCallback(
    (elementKey: string, stylePatch: Partial<import('../types/cms').ElementStyleConfig>) => {
      updateCMSData((prev) => {
        const currentStyles = prev.elementStyles || {};
        const currentElementStyle = currentStyles[elementKey] || {};
        return {
          ...prev,
          elementStyles: {
            ...currentStyles,
            [elementKey]: {
              ...currentElementStyle,
              ...stylePatch,
            },
          },
        };
      });
    },
    [updateCMSData]
  );

  // Get specific element style
  const getElementStyle = useCallback(
    (elementKey: string) => {
      return cmsData.elementStyles?.[elementKey];
    },
    [cmsData.elementStyles]
  );

  return (
    <CMSContext.Provider
      value={{
        cmsData,
        updateCMSData,
        updateField,
        toggleElementVisibility,
        isElementVisible,
        updateElementStyle,
        getElementStyle,
        applyThemePreset,
        currentThemePreset,
        isSaving,
        saveStatus,
        saveToSupabase: () => saveToSupabase(cmsData),
        resetToDefaults,
        uploadMedia,
        undo,
        redo,
        canUndo: historyIndex > 0,
        canRedo: historyIndex < history.length - 1,
      }}
    >
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};
