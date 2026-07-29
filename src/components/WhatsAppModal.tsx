import React, { useState } from 'react';
import { X, Send, Sparkles, Check } from 'lucide-react';
import { WhatsappLogo } from './common/BrandLogos';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  const [projectType, setProjectType] = useState<string>('SaaS Development');
  const [timeline, setTimeline] = useState<string>('As soon as possible');
  const [budget, setBudget] = useState<string>('$1,000 - $3,000');
  const [description, setDescription] = useState<string>('');

  if (!isOpen) return null;

  const handleSendWhatsApp = () => {
    const phone = '918248960558';
    const text = `Hi Arun, I found your digital studio portfolio.\n\n*Project Type:* ${projectType}\n*Timeline:* ${timeline}\n*Budget Range:* ${budget}\n*Project Details:* ${description || 'I would like to discuss building a digital product.'}\n\nLet's connect!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full sm:max-w-lg p-5 sm:p-8 rounded-t-[2rem] sm:rounded-3xl bg-zinc-900 border border-emerald-500/40 shadow-2xl space-y-5 sm:space-y-6 max-h-[90dvh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 touch-target w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center cursor-pointer"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30">
            <WhatsappLogo className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-syne">WhatsApp Qualification Funnel</h3>
            <p className="text-xs text-zinc-400 font-mono-code">Direct line: +91 8248960558</p>
          </div>
        </div>

        <div className="space-y-4 text-xs font-mono-code">
          
          {/* Step 1: Project Type */}
          <div className="space-y-2">
            <label className="text-zinc-400 font-semibold uppercase">1. What do you want to build?</label>
            <div className="grid grid-cols-2 gap-2">
              {['SaaS Development', 'Website Development', 'AI Agents', 'n8n Automation', 'AI + SaaS Combo'].map((type) => (
                <button
                  key={type}
                  onClick={() => setProjectType(type)}
                  className={`p-2.5 rounded-xl text-left border transition-all min-h-[44px] cursor-pointer ${
                    projectType === type
                      ? 'bg-emerald-950/80 border-emerald-400 text-white font-bold'
                      : 'bg-zinc-950 border-white/5 text-zinc-400 hover:border-white/20'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Budget */}
          <div className="space-y-2">
            <label className="text-zinc-400 font-semibold uppercase">2. Estimated Budget Range</label>
            <div className="grid grid-cols-3 gap-2">
              {['$500 - $1k', '$1,000 - $3,000', '$3,000+ Enterprise'].map((b) => (
                <button
                  key={b}
                  onClick={() => setBudget(b)}
                  className={`p-2 rounded-xl text-center border transition-all min-h-[44px] cursor-pointer ${
                    budget === b
                      ? 'bg-emerald-950/80 border-emerald-400 text-white font-bold'
                      : 'bg-zinc-950 border-white/5 text-zinc-400 hover:border-white/20'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Brief Description */}
          <div className="space-y-2">
            <label className="text-zinc-400 font-semibold uppercase">3. Brief Project Context (Optional)</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell me about your product requirements, user goal, or current workflow bottleneck..."
              rows={3}
              className="w-full p-3 rounded-xl bg-zinc-950 border border-white/10 text-xs font-mono-code text-zinc-200 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleSendWhatsApp}
          className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs font-mono-code uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all min-h-[52px] cursor-pointer"
          aria-label="Send WhatsApp message"
        >
          <Send size={16} />
          <span>Launch Direct WhatsApp Chat (+91 8248960558)</span>
        </button>

      </div>
    </div>
  );
};
