import React, { useState } from 'react';
import { AI_REASONING_STEPS } from '../data/cmsData';
import { Bot, Play, CheckCircle2, Terminal, Sparkles, Cpu, Send, RefreshCw } from 'lucide-react';
import { OpenAILogo, ClaudeLogo, PythonLogo, SupabaseLogo } from './common/BrandLogos';

export const AIAgentDemo: React.FC = () => {
  const [activeStep, setActiveStep] = useState(AI_REASONING_STEPS.length);
  const [isRunning, setIsRunning] = useState(false);
  const [customPrompt, setCustomPrompt] = useState('Need an AI Agent & n8n workflow to capture leads and auto-sync with CRM.');

  const handleRunSimulation = () => {
    setIsRunning(true);
    setActiveStep(0);

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < AI_REASONING_STEPS.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsRunning(false);
          return prev;
        }
      });
    }, 600);
  };

  return (
    <section id="demos" className="py-20 sm:py-28 bg-white border-y border-zinc-200 relative overflow-hidden">
      {/* Background White Grid Texture */}
      <div className="absolute inset-0 bg-white-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 text-xs font-mono-code font-bold uppercase tracking-wider">
              <Bot size={14} className="text-emerald-600" />
              Interactive AI Agent Demo
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space-grotesk tracking-tight text-zinc-900 leading-tight">
              Autonomous AI Reasoning &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600">
                RAG Vector Search
              </span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Test live execution steps of custom LLM AI agents built with OpenAI GPT-4o, Claude 3.7, LangChain RAG, and FastAPI.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-2 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center gap-2 text-xs font-mono-code text-zinc-800">
              <OpenAILogo className="w-4 h-4 text-emerald-600" />
              <span className="font-bold">GPT-4o</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center gap-2 text-xs font-mono-code text-zinc-800">
              <ClaudeLogo className="w-4 h-4 text-amber-600" />
              <span className="font-bold">Claude 3.7</span>
            </div>
          </div>
        </div>

        {/* Demo Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column — Control Panel */}
          <div className="lg:col-span-5 p-2 rounded-3xl bg-zinc-100/90 border border-zinc-200/90 shadow-sm flex flex-col justify-between">
            <div className="p-6 sm:p-8 rounded-[calc(1.5rem-0.25rem)] bg-white border border-zinc-100 space-y-6 h-full flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-zinc-900 uppercase tracking-wider">
                    <Sparkles size={14} className="text-amber-600" />
                    Input User Prompt
                  </div>
                  <span className="text-[10px] font-mono-code text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Live Simulator
                  </span>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono-code text-zinc-500">Test Requirement Input:</label>
                  <div className="relative">
                    <textarea
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}
                      className="w-full p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-mono-code text-zinc-900 focus:outline-none focus:border-emerald-500 transition-colors resize-none h-28 leading-relaxed"
                      placeholder="Enter business requirement for AI agent..."
                    />
                  </div>
                </div>

                {/* Pre-set Prompts */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono-code text-zinc-400 uppercase font-semibold">Suggested Presets:</span>
                  <div className="flex flex-col gap-1.5">
                    <button
                      onClick={() => setCustomPrompt('Need an AI Agent & n8n workflow to capture leads and auto-sync with CRM.')}
                      className="text-left p-2.5 rounded-lg bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/80 text-[11px] font-mono-code text-zinc-700 transition-colors cursor-pointer"
                    >
                      💡 Lead Capture &amp; n8n CRM Pipeline
                    </button>
                    <button
                      onClick={() => setCustomPrompt('Build a WhatsApp AI support bot that answers queries using PDF knowledge base.')}
                      className="text-left p-2.5 rounded-lg bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/80 text-[11px] font-mono-code text-zinc-700 transition-colors cursor-pointer"
                    >
                      💡 WhatsApp Support Bot with RAG
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100">
                <button
                  onClick={handleRunSimulation}
                  disabled={isRunning}
                  className={`w-full py-3.5 rounded-xl font-mono-code text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                    isRunning
                      ? 'bg-zinc-300 text-zinc-600 cursor-not-allowed'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20'
                  }`}
                >
                  {isRunning ? (
                    <>
                      <RefreshCw size={15} className="animate-spin" />
                      <span>Executing AI Reasoning...</span>
                    </>
                  ) : (
                    <>
                      <Play size={15} className="fill-white" />
                      <span>Run AI Agent Simulation</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

          {/* Right Column — Reasoning Terminal Log */}
          <div className="lg:col-span-7 p-2 rounded-3xl bg-zinc-900 text-white border border-zinc-800 shadow-xl min-h-[420px] flex flex-col justify-between">
            <div className="p-6 sm:p-8 rounded-[calc(1.5rem-0.25rem)] bg-[#0c0c0e] h-full flex flex-col justify-between space-y-6">
              
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-xs font-mono-code text-zinc-400 font-semibold ml-2">
                    ai_agent_runtime.py
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono-code text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  LangChain RAG Node Active
                </div>
              </div>

              {/* Steps Log */}
              <div className="space-y-4 font-mono-code text-xs">
                {AI_REASONING_STEPS.map((step, idx) => {
                  const isVisible = idx < activeStep;
                  return (
                    <div
                      key={step.step}
                      className={`p-3.5 rounded-xl transition-all duration-300 ${
                        isVisible
                          ? 'bg-zinc-900/90 border border-zinc-800 opacity-100 translate-y-0'
                          : 'opacity-20 translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] mb-1.5">
                        <span className="text-amber-400 font-bold uppercase tracking-wider">
                          [Step 0{step.step}] {step.phase}
                        </span>
                        <span className="text-zinc-500">{step.timestamp}</span>
                      </div>
                      <p className="text-zinc-300 text-xs leading-relaxed">
                        {step.detail}
                      </p>
                      {step.codeSnippet && isVisible && (
                        <div className="mt-2 p-2 rounded bg-black/60 border border-zinc-800 text-[10px] text-emerald-300 overflow-x-auto scrollbar-none">
                          <code className="whitespace-pre sm:whitespace-normal break-all font-mono-code">{step.codeSnippet}</code>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Status bar */}
              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono-code text-zinc-500">
                <span>FastAPI + Python 3.12 Backend</span>
                <span className="text-emerald-400">Latency: 620ms Target</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
