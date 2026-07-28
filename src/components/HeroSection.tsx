import React, { useEffect, useRef } from 'react';
import { Sparkles, MessageSquare, ArrowDownRight, ArrowRight, ShieldCheck, Zap, Bot, Layers, Workflow } from 'lucide-react';

interface HeroSectionProps {
  onOpenWhatsApp: () => void;
  onOpenIntake: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenWhatsApp, onOpenIntake }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Animejs Procedural 3D Blueprint Explosion Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let angle = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      angle += 0.008;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.72;
      const cy = h * 0.48;
      const radius = Math.min(w, h) * 0.28;

      // Blueprint Subtle Grid lines
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.4, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.8, 0, Math.PI * 2);
      ctx.stroke();

      // Animejs 3D Wireframe Sculpture Rings
      const rings = 18;
      const points = 12;

      for (let i = 0; i < rings; i++) {
        const ringAngle = (i / rings) * Math.PI * 2 + angle;
        ctx.beginPath();
        for (let j = 0; j <= points; j++) {
          const ptAngle = (j / points) * Math.PI * 2;
          const r3d = radius + Math.sin(ptAngle * 3 + angle * 2) * 25;
          const x3d = Math.cos(ringAngle) * r3d;
          const y3d = Math.sin(ptAngle) * 35 + Math.sin(ringAngle * 2) * 45;
          const z3d = Math.sin(ringAngle) * r3d + 150;

          const scale = 350 / (350 + z3d);
          const px = cx + x3d * scale;
          const py = cy + y3d * scale;

          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }

        const alpha = 0.15 + (Math.sin(ringAngle) + 1) * 0.25;
        ctx.strokeStyle = i % 2 === 0 ? `rgba(253, 162, 40, ${alpha})` : `rgba(99, 102, 241, ${alpha})`;
        ctx.lineWidth = i % 3 === 0 ? 1.5 : 0.8;
        ctx.stroke();
      }

      // Orbiting Node Indicators
      for (let k = 0; k < 5; k++) {
        const nodeA = angle * 1.4 + (k / 5) * Math.PI * 2;
        const nx = cx + Math.cos(nodeA) * (radius * 1.1);
        const ny = cy + Math.sin(nodeA * 1.5) * (radius * 0.5);

        ctx.fillStyle = '#fda228';
        ctx.shadowColor = '#fda228';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(nx, ny, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col justify-center overflow-hidden anime-grid-bg">
      {/* Animejs Canvas Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Positioning & Headline */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-white/10 text-xs font-mono-code backdrop-blur-md shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-zinc-300 font-medium">Available for Freelance Projects</span>
            <span className="text-zinc-600">|</span>
            <span className="text-amber-400 font-semibold">SaaS · AI · Automation</span>
          </div>

          {/* Main Bazil Hamard + Animejs Fusion Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] font-syne uppercase">
              I BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fda228] via-amber-300 to-indigo-400">SAAS PRODUCTS,</span> <br />
              <span className="text-stroke-1 hover:text-stroke-2 transition-all">AI AGENTS &</span> <br />
              <span className="text-white">AUTOMATED WORKFLOWS.</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed">
              I design and develop premium websites, scalable SaaS platforms, intelligent AI agents and <span className="text-white font-medium">n8n automation systems</span> that help businesses launch faster, automate repetitive work and scale digital products.
            </p>
          </div>

          {/* 4 Core Pillars Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-white/10 flex items-center gap-2 text-xs font-mono-code text-zinc-300">
              <Layers size={14} className="text-amber-400" />
              <span>SaaS Dev</span>
            </div>
            <div className="px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-white/10 flex items-center gap-2 text-xs font-mono-code text-zinc-300">
              <Zap size={14} className="text-indigo-400" />
              <span>Websites</span>
            </div>
            <div className="px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-white/10 flex items-center gap-2 text-xs font-mono-code text-zinc-300">
              <Bot size={14} className="text-emerald-400" />
              <span>AI Agents</span>
            </div>
            <div className="px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-white/10 flex items-center gap-2 text-xs font-mono-code text-zinc-300">
              <Workflow size={14} className="text-sky-400" />
              <span>n8n Workflows</span>
            </div>
          </div>

          {/* 3 Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onOpenIntake}
              className="neumorphic-button px-7 py-4 rounded-2xl bg-[#fda228] text-black font-bold text-sm tracking-wide flex items-center gap-3 group"
            >
              <Sparkles size={16} />
              <span>Start a Project</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#projects"
              className="px-7 py-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 text-white font-semibold text-sm transition-all flex items-center gap-2"
            >
              <span>Explore My Work</span>
              <ArrowDownRight size={16} className="text-zinc-400" />
            </a>

            <button
              onClick={onOpenWhatsApp}
              className="px-6 py-4 rounded-2xl bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/30 text-emerald-300 font-semibold text-sm transition-all flex items-center gap-2.5"
            >
              <MessageSquare size={16} className="fill-emerald-400 text-emerald-400" />
              <span>WhatsApp Me</span>
            </button>
          </div>
        </div>

        {/* Right Column: High Contrast Hero Portrait (ChatGPT Image 07_48_28) */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden neumorphic-card group border border-amber-500/20">
            {/* Duotone Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-amber-500/10 z-10 pointer-events-none"></div>

            {/* High-Resolution Arun Magnifying Glass Duotone Photo */}
            <img 
              src="/assets/arun-hero-duotone.png" 
              alt="Arun Pandian - SaaS & AI Developer" 
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />

            {/* Floating Technical Badge */}
            <div className="absolute bottom-6 left-6 right-6 z-20 p-4 rounded-2xl glass-panel border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono-code text-amber-400 font-bold uppercase tracking-wider">Precision Engineering</span>
                <ShieldCheck size={16} className="text-emerald-400" />
              </div>
              <div className="text-sm font-semibold text-white">Inspecting Every Detail from Architecture to Code</div>
              <div className="text-xs text-zinc-400">Zero template slop · Custom Next.js + AI Stack</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
