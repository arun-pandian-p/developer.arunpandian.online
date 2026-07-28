import React, { useEffect, useState } from 'react';
import { Activity, Radio } from 'lucide-react';

export const HUDScrubber: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
      setScrollProgress(progress);
      setCurrentFrame(Math.min(120, Math.max(1, Math.floor(progress * 120))));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-xl bg-zinc-950/90 border border-white/10 text-xs font-mono-code backdrop-blur-md shadow-2xl text-zinc-300">
      <div className="flex items-center gap-2 pr-3 border-r border-zinc-800">
        <Radio size={13} className="text-emerald-400 animate-pulse" />
        <span className="text-emerald-400 font-semibold">LIVE HUD</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-zinc-500">Progress:</span>
        <span className="text-amber-400 font-bold w-12">{(scrollProgress * 100).toFixed(1)}%</span>
      </div>

      <div className="flex items-center gap-2 pl-3 border-l border-zinc-800">
        <Activity size={13} className="text-indigo-400" />
        <span className="text-zinc-500">3D Frame:</span>
        <span className="text-indigo-400 font-bold">{String(currentFrame).padStart(3, '0')}/120</span>
      </div>

      {/* Animejs style Scrubber Bar */}
      <div className="w-20 h-1.5 bg-zinc-800 rounded-full overflow-hidden ml-1">
        <div 
          className="h-full bg-gradient-to-r from-amber-400 to-indigo-500 rounded-full transition-all duration-75"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </div>
  );
};
