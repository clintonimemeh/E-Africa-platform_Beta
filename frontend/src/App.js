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

// Enhanced Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Amara Okafor",
      role: "Product Manager at Google",
      image: "https://images.pexels.com/photos/5060979/pexels-photo-5060979.jpeg",
      text: "E-Africa transformed my mentoring approach. The integrated platform allowed me to host webinars, manage 1:1 sessions, and track my mentees' progress - all in one place. I've helped over 100 professionals advance their careers.",
      type: "Expert",
      badge: "Top Mentor"
    },
    {
      name: "Kweku Mensah",
      role: "Software Engineer at Microsoft",
      image: "https://images.pexels.com/photos/8653717/pexels-photo-8653717.jpeg",
      text: "Found my dream job through E-Africa's opportunity board and got expert guidance from industry leaders. The accountability partners feature kept me motivated throughout my job search journey.",
      type: "Member",
      badge: "Success Story"
    },
    {
      name: "Dr. Sarah Chen",
      role: "Research Director at Apple",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
      text: "As a consultant, E-Africa's premium features let me run my entire practice - from client discovery to project delivery. The platform's sophistication matches my professional standards.",
      type: "Expert",
      badge: "Platinum Leader"
    },
    {
      name: "David Ochieng",
      role: "Startup Founder",
      image: "https://images.unsplash.com/photo-1508243529287-e21914733111",
      text: "Raised $2M for my startup after getting strategic advice from E-Africa mentors. The business coaching and accountability partnerships were game-changers for my entrepreneurial journey.",
      type: "Member",
      badge: "Funded Founder"
    },
    {
      name: "Fatima Al-Rashid",
      role: "AI Research Lead at Tesla",
      image: "https://images.pexels.com/photos/6585012/pexels-photo-6585012.jpeg",
      text: "E-Africa's webinar hosting capabilities rival Zoom but with better audience engagement tools. I've educated thousands on AI/ML through their platform while building meaningful connections.",
      type: "Expert", 
      badge: "Thought Leader"
    },
    {
      name: "Grace Mwangi",
      role: "UX Designer at Andela",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      text: "Went from junior to senior designer in 18 months with help from E-Africa mentors. The personalized learning paths and peer accountability made all the difference in my career growth.",
      type: "Member",
      badge: "Fast Tracker"
    }
  ];

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Top Mentor': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'Platinum Leader': return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      case 'Thought Leader': return 'bg-gradient-to-r from-indigo-500 to-blue-500';
      case 'Success Story': return 'bg-gradient-to-r from-green-500 to-emerald-500';
      case 'Funded Founder': return 'bg-gradient-to-r from-red-500 to-pink-500';
      case 'Fast Tracker': return 'bg-gradient-to-r from-cyan-500 to-blue-500';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Loved by
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Professionals Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how E-Africa is transforming careers and creating opportunities across the globe
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group hover:-translate-y-2"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-purple-50/0 group-hover:from-indigo-50/30 group-hover:to-purple-50/30 transition-all duration-500"></div>
              
              <div className="relative">
                {/* Badge */}
                <div className="absolute -top-4 -right-4">
                  <span className={`${getBadgeColor(testimonial.badge)} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                    {testimonial.badge}
                  </span>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white shadow-lg"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-indigo-600 font-semibold">{testimonial.role}</p>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${
                      testimonial.type === 'Expert' 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {testimonial.type}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative">
                  <div className="text-4xl text-indigo-200 absolute -top-2 -left-2">"</div>
                  <p className="text-gray-700 leading-relaxed italic pl-6">
                    {testimonial.text}
                  </p>
                  <div className="text-4xl text-indigo-200 absolute -bottom-4 -right-2 rotate-180">"</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Join <span className="font-bold text-indigo-600">50,000+ professionals</span> who have transformed their careers with E-Africa
          </p>
          <button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all transform hover:scale-105">
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

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
            <TestimonialsSection />
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
            <TestimonialsSection />
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