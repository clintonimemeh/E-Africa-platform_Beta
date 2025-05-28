import React, { useState } from 'react';
import './App.css';
import {
  Navigation,
  HeroSection,
  ExpertsGrid
} from './Components';
import {
  EnhancedFeaturesSection,
  OpportunitiesSection,
  ChannelsSection,
  WebinarsSection,
  PricingSection,
  StatsSection,
  Footer
} from './AdditionalComponents';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <HeroSection />
            <EnhancedFeaturesSection />
            <ExpertsGrid />
            <StatsSection />
          </>
        );
      case 'experts':
        return (
          <div className="min-h-screen bg-gray-50 pt-8">
            <ExpertsGrid />
          </div>
        );
      case 'opportunities':
        return (
          <div className="min-h-screen bg-gray-50 pt-8">
            <OpportunitiesSection />
          </div>
        );
      case 'channels':
        return (
          <div className="min-h-screen bg-gray-50 pt-8">
            <ChannelsSection />
          </div>
        );
      case 'webinars':
        return (
          <div className="min-h-screen bg-gray-50 pt-8">
            <WebinarsSection />
          </div>
        );
      case 'pricing':
        return (
          <div className="min-h-screen bg-gray-50 pt-8">
            <PricingSection />
          </div>
        );
      default:
        return (
          <>
            <HeroSection />
            <EnhancedFeaturesSection />
            <ExpertsGrid />
            <StatsSection />
          </>
        );
    }
  };

  return (
    <div className="App bg-white min-h-screen">
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