import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustMarquee } from './components/TrustMarquee';
import { WhatIBuildSection } from './components/WhatIBuildSection';
import { AIAgentDemo } from './components/AIAgentDemo';
import { N8NWorkflowDemo } from './components/N8NWorkflowDemo';
import { ZappyShowcase } from './components/ZappyShowcase';
import { CarpediemShowcase } from './components/CarpediemShowcase';
import { FreelanceChannelsSection } from './components/FreelanceChannelsSection';
import { TechStackSection } from './components/TechStackSection';
import { WorkProcessSection } from './components/WorkProcessSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { WhatsAppModal } from './components/WhatsAppModal';
import { ProjectIntakeModal } from './components/ProjectIntakeModal';
import { AdminCMSModal } from './components/AdminCMSModal';
import { WhatsappLogo } from './components/common/BrandLogos';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'stone'>('dark');
  const [isLoading, setIsLoading] = useState(true);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [isIntakeOpen, setIsIntakeOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      theme === 'dark' ? 'bg-[#09090b] text-[#f4f4f5]' : 'bg-[#E6E1DA] text-[#18181b]'
    }`}>
      
      {/* Cinematic Studio Preloader */}
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}

      {/* Navigation */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        onOpenIntake={() => setIsIntakeOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Content Assembly */}
      <main>
        <HeroSection
          isReady={!isLoading}
          onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
          onOpenIntake={() => setIsIntakeOpen(true)}
        />

        {/* Pure White Theme Container (#ffffff) */}
        <div className="bg-white text-zinc-900 w-full overflow-hidden">
          <TrustMarquee />

          <WhatIBuildSection
            onOpenIntake={() => setIsIntakeOpen(true)}
          />

          <AIAgentDemo />

          <N8NWorkflowDemo />

          <ZappyShowcase />

          <CarpediemShowcase />

          <FreelanceChannelsSection />

          <TechStackSection />

          <WorkProcessSection />

          <AboutSection
            onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
            onOpenIntake={() => setIsIntakeOpen(true)}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer
        onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
        onOpenIntake={() => setIsIntakeOpen(true)}
      />

      {/* Fixed Bottom-Right Floating WhatsApp Chat Button */}
      <a
        href="https://wa.me/918248960558?text=Hi%20Arun,%20I'd%20like%20to%20discuss%20a%20project"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
        aria-label="Chat on WhatsApp (+91 8248960558)"
        title="Direct WhatsApp Chat with Developer Arun Pandian"
      >
        <WhatsappLogo className="w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform group-hover:rotate-6" color="#FFFFFF" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-zinc-950 animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-zinc-950"></span>
      </a>

      {/* Interactive Modals */}
      <WhatsAppModal
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
      />

      <ProjectIntakeModal
        isOpen={isIntakeOpen}
        onClose={() => setIsIntakeOpen(false)}
      />

      <AdminCMSModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

    </div>
  );
};
