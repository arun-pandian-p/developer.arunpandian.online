import React, { useState } from 'react';
import { AI_REASONING_STEPS } from '../data/cmsData';
import { Bot, Play, CheckCircle, Terminal, Cpu, Code2 } from 'lucide-react';

export const AIAgentDemo: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(AI_REASONING_STEPS.length - 1);
  const [userPrompt, setUserPrompt] = useState('Build an AI Agent that qualifies leads and syncs with Supabase CRM');

  const runSimulation = () => {
    setIsRunning(true);
    setCurrentStepIndex(0);

    let idx = 0;
    const interval = setInterval(() => {
      idx++;
      if (idx < AI_REASONING_STEPS.length) {
        setCurrentStepIndex(idx);
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 900);
  };

  return (
    <section id="demos" className="py-28 lg:py-36 px-6 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono-code uppercase tracking-[0.2em]">
          <Bot size={13} />
          Interactive Demo
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight font-syne">
          Autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">AI Agent</span> Reasoning Graph
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
          Experience custom LLM agents reasoning, selecting external tools, executing API payloads, and dispatching real-time lead actions.
        </p>
      </div>

      {/* Simulator Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Control Panel & Input */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-2 rounded-[2rem] bg-white/5 ring-1 ring-white/10 shadow-2xl">
            <div className="p-6 rounded-[calc(2rem-0.5rem)] bg-zinc-950 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono-code text-zinc-400 uppercase font-semibold">User Prompt Input</span>
                <span className="text-[9px] font-mono-code px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  Claude 3.7 / OpenAI
                </span>
              </div>

              <textarea
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                rows={3}
                className="w-full p-4 rounded-xl bg-zinc-900 border border-white/10 text-xs font-mono-code text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors"
              />

              <button
                onClick={runSimulation}
                disabled={isRunning}
                className={`w-full py-3.5 rounded-full font-bold text-xs font-mono-code uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg ${
                  isRunning
                    ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-emerald-500/20'
                }`}
              >
                {isRunning ? (
                  <>
                    <Cpu size={15} className="animate-spin text-emerald-400" />
                    <span>Agent Executing...</span>
                  </>
                ) : (
                  <>
                    <Play size={15} className="fill-black" />
                    <span>Run AI Agent Simulation</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Reasoning Terminal */}
        <div className="lg:col-span-7 p-2 rounded-[2.5rem] bg-white/5 ring-1 ring-white/10 shadow-2xl">
          <div className="p-6 sm:p-8 rounded-[calc(2.5rem-0.5rem)] bg-zinc-950 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-900">
              <div className="flex items-center gap-2 text-xs font-mono-code text-zinc-400">
                <Terminal size={15} className="text-emerald-400" />
                <span>Agent Telemetry & Execution Log</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[10px] font-mono-code text-zinc-500">Node Active</span>
              </div>
            </div>

            {/* Reasoning Steps Sequence */}
            <div className="space-y-3.5">
              {AI_REASONING_STEPS.map((step, idx) => {
                const isActive = idx <= currentStepIndex;
                const isCurrent = idx === currentStepIndex;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl transition-all duration-300 border ${
                      isCurrent
                        ? 'bg-emerald-950/40 border-emerald-500/40 shadow-lg scale-[1.01]'
                        : isActive
                        ? 'bg-zinc-900/60 border-white/10 text-zinc-300'
                        : 'bg-zinc-950/40 border-white/5 text-zinc-600 opacity-50'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono-code mb-1.5">
                      <span className={`font-bold flex items-center gap-2 ${isCurrent ? 'text-emerald-400' : 'text-zinc-400'}`}>
                        {isActive ? <CheckCircle size={14} className="text-emerald-400" /> : <Code2 size={14} />}
                        Step 0{step.step}: {step.phase}
                      </span>
                      <span className="text-zinc-500 text-[10px]">{step.timestamp}</span>
                    </div>

                    <p className="text-xs font-mono-code text-zinc-300 leading-relaxed pl-6">
                      {step.detail}
                    </p>

                    {step.codeSnippet && isActive && (
                      <div className="mt-2.5 ml-6 p-2.5 rounded-lg bg-black border border-emerald-500/20 text-[11px] font-mono-code text-emerald-300 overflow-x-auto">
                        <code>{step.codeSnippet}</code>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
