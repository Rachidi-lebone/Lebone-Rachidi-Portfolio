import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ValuePropsSection from './components/ValuePropsSection';
import PhilosophySection from './components/PhilosophySection';
import ProjectsSection from './components/ProjectsSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import ProtocolSection from './components/ProtocolSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { portfolioContent, projects, protocolSteps, skills, tools, valueProps } from './data/portfolio';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

function App() {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    document.title = 'Lebone Rachidi | Operations Systems Portfolio';
  }, []);

  return (
    <div className="min-h-screen bg-cream text-charcoal selection:bg-clay/20 selection:text-charcoal">
      <Navbar
        links={portfolioContent.navigation}
        cta={portfolioContent.hero.actions[1]}
      />
      <main className="relative overflow-x-hidden">
        <HeroSection
          content={portfolioContent.hero}
          prefersReducedMotion={prefersReducedMotion}
        />
        <AboutSection
          content={portfolioContent.about}
          prefersReducedMotion={prefersReducedMotion}
        />
        <ValuePropsSection
          content={portfolioContent.valueSection}
          items={valueProps}
          prefersReducedMotion={prefersReducedMotion}
        />
        <PhilosophySection
          content={portfolioContent.philosophy}
          prefersReducedMotion={prefersReducedMotion}
        />
        <ProjectsSection
          featuredProjects={projects.filter((project) => project.featured)}
          allProjects={projects}
          content={portfolioContent.projects}
          prefersReducedMotion={prefersReducedMotion}
        />
        <CapabilitiesSection
          content={portfolioContent.capabilities}
          skills={skills}
          tools={tools}
          prefersReducedMotion={prefersReducedMotion}
        />
        <ProtocolSection
          content={portfolioContent.protocol}
          steps={protocolSteps}
          prefersReducedMotion={prefersReducedMotion}
        />
        <ContactSection
          content={portfolioContent.contact}
          prefersReducedMotion={prefersReducedMotion}
        />
      </main>
      <Footer content={portfolioContent.footer} />
    </div>
  );
}

export default App;
