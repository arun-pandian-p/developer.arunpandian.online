import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2 } from 'lucide-react';

interface ProjectIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectIntakeModal: React.FC<ProjectIntakeModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'SaaS Development',
    budget: '$1,000 - $3,000',
    timeline: 'Within 2-4 weeks',
    description: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-white/10 shadow-2xl space-y-6">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Sparkles size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-syne">Start a Project Inquiry</h3>
            <p className="text-xs text-zinc-400 font-mono-code">Arun Pandian Freelance Digital Studio</p>
          </div>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4 font-mono-code text-xs">
            <CheckCircle2 size={48} className="text-emerald-400 mx-auto animate-bounce" />
            <div className="text-lg font-bold text-white font-syne">Inquiry Submitted Successfully!</div>
            <p className="text-zinc-400">Thank you {formData.name}. Arun Pandian will review your project requirements and respond within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono-code">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-zinc-400 font-semibold uppercase block mb-1">Your Name *</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full p-3 rounded-xl bg-zinc-950 border border-white/10 text-zinc-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-zinc-400 font-semibold uppercase block mb-1">Work Email *</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full p-3 rounded-xl bg-zinc-950 border border-white/10 text-zinc-200 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-zinc-400 font-semibold uppercase block mb-1">Project Pillar</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full p-3 rounded-xl bg-zinc-950 border border-white/10 text-zinc-200 focus:outline-none focus:border-amber-500"
                >
                  <option value="SaaS Development">SaaS Development</option>
                  <option value="Website Development">Website Development</option>
                  <option value="AI Agents">AI Agents</option>
                  <option value="n8n Automation">n8n Automation</option>
                </select>
              </div>

              <div>
                <label className="text-zinc-400 font-semibold uppercase block mb-1">Budget Allocation</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full p-3 rounded-xl bg-zinc-950 border border-white/10 text-zinc-200 focus:outline-none focus:border-amber-500"
                >
                  <option value="$500 - $1k">$500 - $1,000</option>
                  <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                  <option value="$3,000+ Enterprise">$3,000+ Enterprise</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-zinc-400 font-semibold uppercase block mb-1">Project Scope & Specifications</label>
              <textarea
                required
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe your product goal, target features, API requirements, or workflow logic..."
                className="w-full p-3 rounded-xl bg-zinc-950 border border-white/10 text-zinc-200 focus:outline-none focus:border-amber-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs font-mono-code uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Send size={16} />
              <span>Submit Project Inquiry</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
