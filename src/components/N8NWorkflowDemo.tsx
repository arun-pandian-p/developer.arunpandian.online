import React, { useState } from 'react';
import { N8N_NODES } from '../data/cmsData';
import { Workflow, Zap, Bot, Database, ArrowRight, Play, CheckCircle2, RefreshCw } from 'lucide-react';
import { N8nLogo, OpenAILogo, SupabaseLogo, WhatsappLogo } from './common/BrandLogos';

export const N8NWorkflowDemo: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string | null>('1');
  const [isSimulating, setIsSimulating] = useState(false);
  const [workflowLog, setWorkflowLog] = useState<string>('Workflow engine ready. Click "Execute Workflow Pipeline" to run lead intake automation.');

  const getNodeBrandIcon = (id: string) => {
    switch (id) {
      case '1': return <Zap size={20} className="text-amber-500" />;
      case '2': return <N8nLogo className="w-5 h-5 text-rose-500" />;
      case '3': return <OpenAILogo className="w-5 h-5 text-emerald-600" />;
      case '4': return <SupabaseLogo className="w-5 h-5 text-[#3ECF8E]" />;
      case '5': return <WhatsappLogo className="w-5 h-5" />;
      default: return <Workflow size={20} className="text-indigo-500" />;
    }
  };

  const runWorkflowPipeline = () => {
    setIsSimulating(true);
    setWorkflowLog('⚡ Webhook Triggered -> Receiving payload from Developer Arun Pandian Intake Form...');
    setActiveNodeId('1');

    setTimeout(() => {
      setActiveNodeId('2');
      setWorkflowLog('🔄 n8n Engine -> Validating payload, parsing JSON & checking rate limits...');
    }, 800);

    setTimeout(() => {
      setActiveNodeId('3');
      setWorkflowLog('🤖 AI Agent -> OpenAI GPT-4o evaluating project budget, timeline & intent...');
    }, 1600);

    setTimeout(() => {
      setActiveNodeId('4');
      setWorkflowLog('💾 PostgreSQL Sync -> Inserting qualified lead into Supabase database...');
    }, 2400);

    setTimeout(() => {
      setActiveNodeId('5');
      setWorkflowLog('📱 WhatsApp Alert -> Dispatched instant alert notification to +91 8248960558!');
      setIsSimulating(false);
    }, 3200);
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-y border-zinc-200 relative overflow-hidden">
      {/* Background White Grid Texture */}
      <div className="absolute inset-0 bg-white-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-800 text-xs font-mono-code font-bold uppercase tracking-wider">
              <N8nLogo className="w-4 h-4 text-rose-500" />
              Workflow Automation Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space-grotesk tracking-tight text-zinc-900 leading-tight">
              Self-Hosted n8n &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-indigo-600">
                Business Process Systems
              </span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Automate multi-app pipelines connecting webhooks, LLMs, CRMs, PostgreSQL, and WhatsApp APIs to eliminate manual work.
            </p>
          </div>

          <button
            onClick={runWorkflowPipeline}
            disabled={isSimulating}
            className={`px-6 py-3.5 rounded-xl font-mono-code text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md cursor-pointer shrink-0 ${
              isSimulating
                ? 'bg-zinc-300 text-zinc-600 cursor-not-allowed'
                : 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-600/20'
            }`}
          >
            {isSimulating ? (
              <>
                <RefreshCw size={15} className="animate-spin" />
                <span>Running Node Pipeline...</span>
              </>
            ) : (
              <>
                <Play size={15} className="fill-white" />
                <span>Execute Workflow Pipeline</span>
              </>
            )}
          </button>
        </div>

        {/* Interactive Node Flow Display */}
        <div className="p-2 rounded-3xl bg-zinc-100/90 border border-zinc-200/90 shadow-sm space-y-4">
          <div className="p-6 sm:p-10 rounded-[calc(1.5rem-0.25rem)] bg-white border border-zinc-100 space-y-8">
            
            {/* Visual Node Flow Track */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
              {N8N_NODES.map((node, index) => {
                const isActive = activeNodeId === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveNodeId(node.id)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 space-y-3 cursor-pointer relative ${
                      isActive
                        ? 'bg-white border-rose-500/80 shadow-md shadow-rose-500/10 -translate-y-1'
                        : 'bg-zinc-50 border-zinc-200/80 hover:bg-zinc-100 hover:border-zinc-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className={`p-2.5 rounded-xl ${isActive ? 'bg-rose-50 border border-rose-200' : 'bg-white border border-zinc-200'}`}>
                        {getNodeBrandIcon(node.id)}
                      </div>
                      <span className="text-[10px] font-mono-code font-bold text-zinc-400">
                        0{index + 1}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-space-grotesk font-bold text-zinc-900 text-sm">
                        {node.label}
                      </h3>
                      <p className="text-[11px] text-zinc-500 line-clamp-2 mt-1 leading-snug">
                        {node.description}
                      </p>
                    </div>

                    {isActive && (
                      <div className="pt-2 border-t border-rose-100 flex items-center justify-between text-[10px] font-mono-code text-rose-600 font-semibold">
                        <span>Node Status</span>
                        <span className="flex items-center gap-1">
                          <CheckCircle2 size={12} className="text-emerald-500" /> Active
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Live Console Output Log */}
            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900 text-white font-mono-code text-xs space-y-2 border border-zinc-800">
              <div className="flex items-center justify-between text-[10px] text-zinc-400 pb-2 border-b border-zinc-800">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                  n8n Event Stream Output
                </span>
                <span>Self-Hosted Docker Engine</span>
              </div>
              <p className="text-rose-300 leading-relaxed">
                {workflowLog}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
