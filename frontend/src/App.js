import React, { useState } from 'react';
import './App.css';
import {
  Navigation,
  HeroSection,
  CompanyLogos,
  FeaturesSection,
  MentorsGrid,
  JobsSection,
  GigsSection,
  PartnersSection,
  LearningSection,
  StatsSection,
  TestimonialsSection,
  Footer
} from './Components';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <HeroSection />
            <CompanyLogos />
            <FeaturesSection />
            <MentorsGrid />
            <StatsSection />
            <TestimonialsSection />
          </>
        );
      case 'mentors':
        return (
          <div className="min-h-screen bg-gray-50 pt-8">
            <MentorsGrid />
          </div>
        );
      case 'jobs':
        return (
          <div className="min-h-screen bg-gray-50 pt-8">
            <JobsSection />
          </div>
        );
      case 'gigs':
        return (
          <div className="min-h-screen bg-gray-50 pt-8">
            <GigsSection />
          </div>
        );
      case 'partners':
        return (
          <div className="min-h-screen bg-gray-50 pt-8">
            <PartnersSection />
          </div>
        );
      case 'learning':
        return (
          <div className="min-h-screen bg-gray-50 pt-8">
            <LearningSection />
          </div>
        );
      default:
        return (
          <>
            <HeroSection />
            <CompanyLogos />
            <FeaturesSection />
            <MentorsGrid />
            <StatsSection />
            <TestimonialsSection />
          </>
        );
    }
  };

  return (
    <div className="App bg-white">
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main>
        {renderContent()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;