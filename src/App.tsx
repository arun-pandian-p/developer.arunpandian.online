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
        onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
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
      </main>

      {/* Footer */}
      <Footer
        onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
        onOpenIntake={() => setIsIntakeOpen(true)}
      />

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
