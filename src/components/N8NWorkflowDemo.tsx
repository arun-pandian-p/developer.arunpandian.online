import React, { useState } from 'react';
import { N8N_NODES } from '../data/cmsData';
import { Workflow, Play, CheckCircle2, Zap, Bot, Database, MessageSquare, ArrowRight, Activity } from 'lucide-react';

export const N8NWorkflowDemo: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('5');
  const [isRunningFlow, setIsRunningFlow] = useState(false);

  const triggerFlow = () => {
    setIsRunningFlow(true);
    let idx = 0;
    const interval = setInterval(() => {
      if (idx < N8N_NODES.length) {
        setActiveNodeId(N8N_NODES[idx].id);
        idx++;
      } else {
        clearInterval(interval);
        setIsRunningFlow(false);
      }
    }, 700);
  };

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'trigger': return <Zap size={18} className="text-amber-400" />;
      case 'tool': return <Workflow size={18} className="text-sky-400" />;
      case 'ai': return <Bot size={18} className="text-emerald-400" />;
      case 'crm': return <Database size={18} className="text-indigo-400" />;
      case 'action': return <MessageSquare size={18} className="text-emerald-400" />;
      default: return <Workflow size={18} className="text-sky-400" />;
    }
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono-code uppercase tracking-wider">
          <Workflow size={14} />
          Interactive Demo 02
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight font-syne">
          n8n Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Workflow Automation</span> Simulator
        </h2>
        <p className="text-zinc-400 text-base font-light leading-relaxed">
          See how n8n automates complex business operations — receiving lead webhooks, scoring intent with AI, syncing to databases, and sending instant WhatsApp alerts.
        </p>
      </div>

      {/* Visual Canvas Container */}
      <div className="p-8 sm:p-10 rounded-3xl neumorphic-card border border-white/10 space-y-8">
        
        {/* Canvas Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-sky-400 animate-ping"></span>
            <span className="text-sm font-bold text-white font-mono-code">n8n Production Workflow Pipeline</span>
          </div>

          <button
            onClick={triggerFlow}
            disabled={isRunningFlow}
            className={`px-6 py-2.5 rounded-xl font-bold text-xs font-mono-code uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg ${
              isRunningFlow
                ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                : 'bg-sky-500 hover:bg-sky-400 text-black shadow-sky-500/20'
            }`}
          >
            <Play size={14} className="fill-black" />
            <span>{isRunningFlow ? 'Executing n8n Pipeline...' : 'Run Workflow Demo'}</span>
          </button>
        </div>

        {/* Node Pipeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          {N8N_NODES.map((node, index) => {
            const isActive = node.id === activeNodeId;
            return (
              <React.Fragment key={node.id}>
                <button
                  onClick={() => setActiveNodeId(node.id)}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between h-36 ${
                    isActive
                      ? 'bg-sky-950/60 border-sky-400 shadow-xl shadow-sky-500/10 scale-105'
                      : 'bg-zinc-950/60 border-white/5 hover:border-white/20 text-zinc-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-xl bg-zinc-900 border border-white/10">
                      {getNodeIcon(node.type)}
                    </div>
                    <span className="text-[10px] font-mono-code text-zinc-500">Node 0{node.id}</span>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-white font-mono-code truncate">{node.label}</div>
                    <div className="text-[10px] text-zinc-400 capitalize">{node.type} module</div>
                  </div>
                </button>

                {index < N8N_NODES.length - 1 && (
                  <div className="hidden md:flex justify-center text-zinc-600">
                    <ArrowRight size={18} className={isRunningFlow ? 'text-sky-400 animate-pulse' : ''} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Selected Node Detailed Log */}
        {activeNodeId && (
          <div className="p-6 rounded-2xl bg-zinc-950/90 border border-sky-500/30 font-mono-code text-xs space-y-3">
            <div className="flex items-center justify-between text-sky-400 font-bold border-b border-zinc-900 pb-2">
              <span className="flex items-center gap-2">
                <Activity size={14} />
                Selected Node Telemetry — {N8N_NODES.find(n => n.id === activeNodeId)?.label}
              </span>
              <span className="text-[10px] text-emerald-400">Status: 200 OK</span>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              {N8N_NODES.find(n => n.id === activeNodeId)?.description}
            </p>
            <div className="text-[11px] text-zinc-500">
              Payload execution time: 0.04s · Error handling: Auto-retry with backoff
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
