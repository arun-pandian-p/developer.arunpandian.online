import React, { useEffect, useState, useRef } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING DIGITAL STUDIO');
  const [phase, setPhase] = useState<1 | 2 | 3 | 4>(1);
  const [isExiting, setIsExiting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Check if user has already seen preloader in current session
  const isFirstVisit = !sessionStorage.getItem('arun_preloader_seen');

  useEffect(() => {
    // If not first visit, run lightweight fast transition (300ms)
    if (!isFirstVisit) {
      setProgress(100);
      setStatusText('READY');
      setPhase(4);
      const timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(onComplete, 350);
      }, 200);
      return () => clearTimeout(timer);
    }

    // 1.5 - 2.2s Total Full Preloader Sequence
    const duration = 2000;
    const startTime = performance.now();

    // Phase 1 -> Phase 2 -> Phase 3 Timers
    const p2Timer = setTimeout(() => setPhase(2), 350);
    const p3Timer = setTimeout(() => setPhase(3), 700);

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      
      setProgress(pct);

      // Status text progressive updates
      if (pct > 25 && pct <= 50) {
        setStatusText('LOADING EXPERIENCE');
      } else if (pct > 50 && pct <= 85) {
        setStatusText('CONNECTING SYSTEMS');
      } else if (pct > 85) {
        setStatusText('READY');
      }

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setStatusText('READY');
        setPhase(4);
        sessionStorage.setItem('arun_preloader_seen', 'true');
        
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onComplete, 500);
        }, 300);
      }
    };

    const animFrame = requestAnimationFrame(updateProgress);

    return () => {
      clearTimeout(p2Timer);
      clearTimeout(p3Timer);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  // Lightweight 3D Rotating Canvas Wireframe Geometry
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let rotation = 0;

    const render3D = () => {
      rotation += 0.02;
      const w = canvas.width = 160;
      const h = canvas.height = 160;
      const cx = w / 2;
      const cy = h / 2;
      const size = 36;

      ctx.clearRect(0, 0, w, h);

      // 3D Cube Vertices
      const vertices = [
        [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
        [-1, -1, 1],  [1, -1, 1],  [1, 1, 1],  [-1, 1, 1]
      ];

      const edges = [
        [0,1],[1,2],[2,3],[3,0],
        [4,5],[5,6],[6,7],[7,4],
        [0,4],[1,5],[2,6],[3,7]
      ];

      const projected = vertices.map(([x, y, z]) => {
        // Rotate around Y and X
        const radY = rotation;
        const radX = rotation * 0.7;

        let x1 = x * Math.cos(radY) + z * Math.sin(radY);
        let z1 = -x * Math.sin(radY) + z * Math.cos(radY);

        let y2 = y * Math.cos(radX) - z1 * Math.sin(radX);
        let z2 = y * Math.sin(radX) + z1 * Math.cos(radX);

        const fov = 150;
        const scale = fov / (fov + z2 * 40);

        return [cx + x1 * size * scale, cy + y2 * size * scale];
      });

      ctx.strokeStyle = '#fda228';
      ctx.lineWidth = 1.2;

      edges.forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(projected[i][0], projected[i][1]);
        ctx.lineTo(projected[j][0], projected[j][1]);
        ctx.stroke();
      });

      animId = requestAnimationFrame(render3D);
    };

    render3D();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#080808] text-white flex flex-col justify-between p-6 sm:p-12 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting ? '-translate-y-full opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      
      {/* TECHNICAL HUD — TOP BAR */}
      <div className="flex items-center justify-between font-mono-code text-[10px] sm:text-xs text-zinc-500 tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          <span>ARUN PANDIAN / STUDIO</span>
        </div>
        <div className="text-zinc-400">SYSTEM 01</div>
      </div>

      {/* CENTER BRANDING & 3D WIREFRAME */}
      <div className="flex flex-col items-center justify-center space-y-6 my-auto text-center">
        
        {/* Phase 1 — Amber Dot & Main Title */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-mono-code uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            INITIALIZING
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase font-syne text-white">
            ARUN PANDIAN
          </h1>

          <div className="text-xs sm:text-sm font-mono-code text-amber-400 tracking-[0.3em] uppercase">
            SAAS &nbsp;·&nbsp; AI &nbsp;·&nbsp; AUTOMATION
          </div>
        </div>

        {/* Subtle 3D Rotating Cube Canvas */}
        <div className="w-24 h-24 my-2 flex items-center justify-center opacity-80">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>

        {/* Phase 2 — System Badges */}
        <div className={`flex flex-wrap justify-center gap-3 transition-all duration-500 ${
          phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {['SAAS DEVELOPMENT', 'AI AGENTS', 'N8N AUTOMATION'].map((item, idx) => (
            <span 
              key={idx} 
              className="px-3.5 py-1.5 rounded-xl bg-zinc-900/90 border border-white/10 text-[10px] font-mono-code text-zinc-300 tracking-wider"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Phase 3 — Percentage Counter & Dynamic Status */}
        <div className="space-y-2 pt-4">
          <div className="text-5xl sm:text-7xl font-black font-mono-code text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-indigo-400">
            {String(progress).padStart(2, '0')}%
          </div>

          <div className="text-xs font-mono-code text-zinc-400 tracking-widest uppercase">
            {statusText}
          </div>
        </div>

      </div>

      {/* TECHNICAL HUD — BOTTOM BAR & PROGRESS LINE */}
      <div className="space-y-4">
        {/* GPU ScaleX Progress Line */}
        <div className="w-full h-[2px] bg-zinc-900 overflow-hidden relative">
          <div 
            className="h-full bg-gradient-to-r from-amber-400 via-amber-300 to-indigo-500 transition-transform duration-75 origin-left"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>

        <div className="flex items-center justify-between font-mono-code text-[10px] sm:text-xs text-zinc-500 tracking-widest uppercase">
          <div className="hidden sm:flex gap-4">
            <span>SAAS</span>
            <span>AI AGENTS</span>
            <span>N8N AUTOMATION</span>
          </div>
          <div className="sm:hidden text-zinc-400">ARUN PANDIAN STUDIO</div>
          <div>IND / 2026</div>
        </div>
      </div>

    </div>
  );
};
