import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://zyxwdvhbcoovfrtkczlc.supabase.co';
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_3mc99Lfcb0v_FIt7Wq8WzA_cnDl5eXh';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});

// Helper for file/media upload (Images, Videos, PDFs, Docs)
export async function uploadMediaFile(
  file: File,
  bucket: string = 'portfolio-media'
): Promise<{ url: string; error?: string }> {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
    const filePath = `${fileName}`;

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true,
      });

    if (error) {
      console.warn('Supabase storage upload returned warning/fallback:', error.message);
      // Fallback to local Data URL representation for immediate local & state persistence
      const dataUrl = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
      return { url: dataUrl };
    }

    const { data: publicUrlData } = supabase.storage
      .from(bucket)
      .getPublicUrl(data.path);

    return { url: publicUrlData.publicUrl };
  } catch (err: any) {
    console.warn('Storage fallback triggered:', err);
    const dataUrl = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(file);
    });
    return { url: dataUrl };
  }
}
