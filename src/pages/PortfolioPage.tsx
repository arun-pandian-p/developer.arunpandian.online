import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Lenis from 'lenis';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { VerticalProjectShowcase } from '../components/VerticalProjectShowcase';
import { TrustMarquee } from '../components/TrustMarquee';
import { WhatIBuildSection } from '../components/WhatIBuildSection';
import { AIAgentDemo } from '../components/AIAgentDemo';
import { ZappyShowcase } from '../components/ZappyShowcase';
import { CarpediemShowcase } from '../components/CarpediemShowcase';
import { HorizontalCarousel } from '../components/HorizontalCarousel';
import { FreelanceChannelsSection } from '../components/FreelanceChannelsSection';
import { TechStackSection } from '../components/TechStackSection';
import { WorkProcessSection } from '../components/WorkProcessSection';
import { AboutSection } from '../components/AboutSection';
import { Footer } from '../components/Footer';
import { WhatsAppModal } from '../components/WhatsAppModal';
import { ProjectIntakeModal } from '../components/ProjectIntakeModal';
import { WhatsappLogo } from '../components/common/BrandLogos';
import { Sliders } from 'lucide-react';

export const PortfolioPage: React.FC = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<'dark' | 'stone'>('dark');
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [isIntakeOpen, setIsIntakeOpen] = useState(false);

  const lenisRef = useRef<InstanceType<typeof Lenis> | null>(null);

  const handleSelectSubTopic = (subId: string) => {
    if (['studio', 'services', 'projects', 'freelance'].includes(subId)) {
      navigate(`/topic/${subId}`);
    } else {
      navigate(`/subtopic/${subId}`);
    }
  };

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

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

      {/* Navigation */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        onOpenIntake={() => setIsIntakeOpen(true)}
        onOpenAdmin={() => navigate('/login')}
        onSelectSubTopic={handleSelectSubTopic}
      />

      {/* Main Content Assembly */}
      <main>
        {/* Hero: fixed behind everything, removed from flow via absolute */}
        <div className="relative min-h-screen">
          <div className="sticky top-0 min-h-screen z-0">
            <HeroSection
              isReady={true}
              onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
              onOpenIntake={() => setIsIntakeOpen(true)}
            />
          </div>
        </div>

        {/* White / Dark seamless card slides UP over the pinned hero with parallax */}
        <div
          style={{ position: 'relative', zIndex: 10, marginTop: '-20px' }}
          className="bg-[#09090b] text-white w-full overflow-hidden rounded-t-[2.5rem] shadow-[0_-24px_80px_rgba(0,0,0,0.6)]"
        >
          {/* Continuous Vertical Project Showcase */}
          <VerticalProjectShowcase />

          <TrustMarquee />

          <WhatIBuildSection
            onOpenIntake={() => setIsIntakeOpen(true)}
          />

          {/* Horizontal Carousel: AI Demo → Zappy → Carpediem */}
          <HorizontalCarousel labels={['AI Agent Demo', 'Zappy SaaS', 'Carpediem']}>
            {[<AIAgentDemo key="ai" />, <ZappyShowcase key="zappy" />, <CarpediemShowcase key="carpediem" />]}
          </HorizontalCarousel>

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
        onOpenAdmin={() => navigate('/login')}
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

    </div>
  );
};
