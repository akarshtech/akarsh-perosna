import { useScrollReveal } from '@/hooks/useScrollReveal';
import { AtmosphereProvider } from '@/context/AtmosphereContext';
import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SelectedWork from '@/components/SelectedWork';
import ProjectShowcase from '@/components/ProjectShowcase';
import WhyAWebsite from '@/components/WhyAWebsite';
import HowIBuild from '@/components/HowIBuild';
import Workshop from '@/components/Workshop';
import HowIThink from '@/components/HowIThink';
import BuildLog from '@/components/BuildLog';
import About from '@/components/About';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AdminDashboard from '@/components/AdminDashboard';
import PremiumInteractions from '@/components/PremiumInteractions';
import OpeningSequence from '@/components/OpeningSequence';

function App() {
  useScrollReveal();

  if (window.location.pathname === '/admin') {
    return <AdminDashboard />;
  }

  return (
    <AtmosphereProvider>
      <div className="visual-mode-page min-h-screen">
        <PremiumInteractions />
        <OpeningSequence />
        <Navbar />
        <main>
          <Hero />
          <SelectedWork />
          <ProjectShowcase projects={projects} />
          <WhyAWebsite />
          <HowIBuild />
          <Workshop />
          <HowIThink />
          <BuildLog />
          <About />
          <Services />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </AtmosphereProvider>
  );
}

export default App;
