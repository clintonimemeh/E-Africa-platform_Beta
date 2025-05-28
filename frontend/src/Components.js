import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Star, 
  MapPin, 
  Clock, 
  Users, 
  TrendingUp, 
  Award,
  Globe,
  BookOpen,
  Target,
  Menu,
  X,
  ChevronRight,
  Calendar,
  Video,
  MessageCircle,
  Briefcase,
  UserCheck,
  Zap
} from 'lucide-react';

// Mock Data
const mentors = [
  {
    id: 1,
    name: "Amara Okafor",
    title: "Senior Product Manager",
    company: "Google",
    image: "https://images.pexels.com/photos/5060979/pexels-photo-5060979.jpeg",
    rating: 4.9,
    sessions: 127,
    experience: "8 years",
    topics: ["Product Strategy", "Career Growth", "Leadership"],
    location: "Lagos, Nigeria",
    available: true,
    price: "$50/session"
  },
  {
    id: 2,
    name: "Kwame Asante",
    title: "Tech Lead",
    company: "Microsoft",
    image: "https://images.pexels.com/photos/8653717/pexels-photo-8653717.jpeg",
    rating: 4.8,
    sessions: 89,
    experience: "6 years",
    topics: ["Engineering", "System Design", "Tech Leadership"],
    location: "Accra, Ghana",
    available: true,
    price: "$45/session"
  },
  {
    id: 3,
    name: "Sarah Chen",
    title: "UX Director",
    company: "Apple",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    rating: 4.9,
    sessions: 156,
    experience: "10 years",
    topics: ["UX Design", "Design Leadership", "User Research"],
    location: "Cape Town, South Africa",
    available: false,
    price: "$60/session"
  },
  {
    id: 4,
    name: "David Ochieng",
    title: "Startup Founder",
    company: "TechStars",
    image: "https://images.unsplash.com/photo-1508243529287-e21914733111",
    rating: 4.7,
    sessions: 94,
    experience: "12 years",
    topics: ["Entrepreneurship", "Fundraising", "Business Strategy"],
    location: "Nairobi, Kenya",
    available: true,
    price: "$55/session"
  },
  {
    id: 5,
    name: "Fatima Al-Rashid",
    title: "Data Science Lead",
    company: "Tesla",
    image: "https://images.pexels.com/photos/6585012/pexels-photo-6585012.jpeg",
    rating: 4.8,
    sessions: 78,
    experience: "7 years",
    topics: ["Data Science", "AI/ML", "Analytics"],
    location: "Cairo, Egypt",
    available: true,
    price: "$48/session"
  },
  {
    id: 6,
    name: "Marcus Johnson",
    title: "VP Engineering",
    company: "Stripe",
    image: "https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg",
    rating: 4.9,
    sessions: 203,
    experience: "15 years",
    topics: ["Engineering Management", "Scaling Teams", "Architecture"],
    location: "Remote",
    available: true,
    price: "$70/session"
  }
];

const jobs = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "Flutterwave",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "$60,000 - $80,000",
    posted: "2 days ago",
    logo: "https://images.pexels.com/photos/7805060/pexels-photo-7805060.jpeg"
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Paystack",
    location: "Remote",
    type: "Full-time",
    salary: "$70,000 - $90,000",
    posted: "1 week ago",
    logo: "https://images.pexels.com/photos/9301477/pexels-photo-9301477.jpeg"
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Andela",
    location: "Kigali, Rwanda",
    type: "Contract",
    salary: "$45/hour",
    posted: "3 days ago",
    logo: "https://images.pexels.com/photos/2325729/pexels-photo-2325729.jpeg"
  }
];

const gigs = [
  {
    id: 1,
    title: "Mobile App Development",
    budget: "$2,000 - $5,000",
    duration: "2 months",
    skills: ["React Native", "API Integration"],
    posted: "1 day ago",
    proposals: 12
  },
  {
    id: 2,
    title: "Brand Identity Design",
    budget: "$800 - $1,500",
    duration: "3 weeks",
    skills: ["Logo Design", "Brand Strategy"],
    posted: "4 days ago",
    proposals: 8
  },
  {
    id: 3,
    title: "Data Analysis Project",
    budget: "$1,200 - $2,000",
    duration: "1 month",
    skills: ["Python", "Data Visualization"],
    posted: "2 days ago",
    proposals: 15
  }
];

const companies = [
  { name: "Google", logo: "https://images.pexels.com/photos/2380263/pexels-photo-2380263.jpeg" },
  { name: "Microsoft", logo: "https://images.unsplash.com/photo-1573164574230-db1d5e960238" },
  { name: "Apple", logo: "https://images.pexels.com/photos/11174191/pexels-photo-11174191.jpeg" },
  { name: "Tesla", logo: "https://images.pexels.com/photos/10107709/pexels-photo-10107709.jpeg" },
  { name: "Stripe", logo: "https://images.pexels.com/photos/27771755/pexels-photo-27771755.jpeg" },
  { name: "Netflix", logo: "https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg" }
];

const testimonials = [
  {
    name: "Josephine Kwaku",
    role: "Software Engineer at Flutterwave",
    image: "https://images.pexels.com/photos/7688173/pexels-photo-7688173.jpeg",
    text: "Through E-Africa, I connected with amazing mentors who helped me transition from self-taught developer to a senior engineer. The platform is game-changing!"
  },
  {
    name: "Ahmed Hassan",
    role: "Product Manager at Paystack",
    image: "https://images.unsplash.com/photo-1573164574511-73c773193279",
    text: "The accountability partnerships feature helped me stay consistent with my learning goals. Found my dream job through the platform's job board!"
  },
  {
    name: "Grace Mwangi",
    role: "UX Designer at Andela",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    text: "E-Africa's gig marketplace connected me with global clients. The mentorship sessions refined my skills and boosted my confidence tremendously."
  }
];

// Navigation Component
export const Navigation = ({ activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Globe },
    { id: 'mentors', label: 'Mentors', icon: Users },
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'gigs', label: 'Gigs', icon: TrendingUp },
    { id: 'partners', label: 'Partners', icon: UserCheck },
    { id: 'learning', label: 'Learning', icon: BookOpen }
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                E-Africa
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                      activeTab === item.id
                        ? 'bg-purple-100 text-purple-700'
                        : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium">
              Log in
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
              Get started today
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-purple-600 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-gray-100"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-2 ${
                      activeTab === item.id
                        ? 'bg-purple-100 text-purple-700'
                        : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </button>
                );
              })}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <button className="w-full text-left px-3 py-2 text-gray-600 hover:text-purple-600 text-base font-medium">
                  Log in
                </button>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-2 rounded-lg text-base font-medium hover:from-purple-700 hover:to-pink-700 transition-all mt-2">
                  Get started today
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

// Hero Section Component
export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="bg-gradient-to-br from-white via-purple-50 to-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Floating mentor images */}
          <div className="relative mb-8">
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-4 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
                {mentors.slice(0, 6).map((mentor, index) => (
                  <motion.div
                    key={mentor.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    {mentor.available && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Reach your goals faster
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              with expert mentors
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Accelerate your professional growth with 1:1 expert guidance from{' '}
            <span className="font-semibold text-purple-600">25,000+</span> mentors across Africa and beyond.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="What do you want to get better at?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 text-lg border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Company Logos Section
export const CompanyLogos = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 mb-8">Proven success with 20,000+ top organizations</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Features Section
export const FeaturesSection = () => {
  const features = [
    {
      icon: Target,
      title: "An open access to the world's best.",
      description: "Connect with industry experts from top companies across Africa and beyond. Get advice from those who've been there, done that."
    },
    {
      icon: Zap,
      title: "Personalized advice to accelerate your success.",
      description: "Receive tailored guidance specific to your goals and industry. Our mentors provide actionable insights for your career."
    },
    {
      icon: TrendingUp,
      title: "Achieve your long term goals, easily.",
      description: "Build with experts for identifying obstacles and work towards achieving long-term goals with structured mentorship."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transforming your potential
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Become the best version of yourself by connecting to the perspective and life experiences of others who've been there, done that.
          </p>
        </div>

        {/* Platform preview */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-900 rounded-2xl p-8 mx-auto max-w-4xl"
          >
            <img
              src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
              alt="E-Africa Platform"
              className="w-full rounded-lg"
            />
          </motion.div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-left"
              >
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Mentor Card Component
export const MentorCard = ({ mentor }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100"
    >
      <div className="flex items-start gap-4">
        <div className="relative">
          <img
            src={mentor.image}
            alt={mentor.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          {mentor.available && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{mentor.name}</h3>
          <p className="text-sm text-gray-600">{mentor.title}</p>
          <p className="text-sm text-purple-600 font-medium">{mentor.company}</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            <Star className="text-yellow-400 fill-current" size={16} />
            <span className="text-sm font-medium ml-1">{mentor.rating}</span>
          </div>
          <span className="text-gray-300">•</span>
          <span className="text-sm text-gray-600">{mentor.sessions} sessions</span>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="text-gray-400" size={14} />
          <span className="text-sm text-gray-600">{mentor.location}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {mentor.topics.map((topic, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-900">{mentor.price}</span>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
            Book Session
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Mentors Grid Component
export const MentorsGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Mentors', icon: Users },
    { id: 'product', name: 'Product', icon: Target },
    { id: 'engineering', name: 'Engineering', icon: Zap },
    { id: 'design', name: 'Design', icon: BookOpen },
    { id: 'leadership', name: 'Leadership', icon: Award },
    { id: 'business', name: 'Business', icon: TrendingUp }
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Discover the world's top mentors</h2>
          
          {/* Search and filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name, company, role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={16} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mentors grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
            Explore all mentors
          </button>
        </div>
      </div>
    </section>
  );
};

// Jobs Section Component
export const JobsSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Global Job Opportunities</h2>
          <p className="text-gray-600">Connect with verified employers across Africa and beyond</p>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              whileHover={{ x: 5 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{job.title}</h3>
                      <p className="text-purple-600 font-medium">{job.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {job.type}
                    </span>
                    <span className="font-medium text-gray-900">{job.salary}</span>
                  </div>
                  
                  <p className="text-sm text-gray-500">Posted {job.posted}</p>
                </div>
                
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
            View all jobs
          </button>
        </div>
      </div>
    </section>
  );
};

// Gigs Section Component
export const GigsSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Freelance Gigs & Projects</h2>
          <p className="text-gray-600">Find exciting projects that match your skills</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gigs.map((gig) => (
            <motion.div
              key={gig.id}
              whileHover={{ y: -3 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-3">{gig.title}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Budget:</span>
                  <span className="font-medium text-green-600">{gig.budget}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{gig.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Proposals:</span>
                  <span className="font-medium">{gig.proposals}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {gig.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Posted {gig.posted}</span>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
                  Submit Proposal
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
            Browse all gigs
          </button>
        </div>
      </div>
    </section>
  );
};

// Accountability Partners Section
export const PartnersSection = () => {
  const partners = [
    {
      name: "Sarah Kimani",
      goal: "Learn React & Node.js",
      progress: 75,
      image: "https://images.pexels.com/photos/32213227/pexels-photo-32213227.jpeg"
    },
    {
      name: "Michael Otieno",
      goal: "Build a SaaS Product",
      progress: 60,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998"
    },
    {
      name: "Aisha Mohammed",
      goal: "Master Data Science",
      progress: 85,
      image: "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be"
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Your Accountability Partner</h2>
          <p className="text-gray-600">Connect with like-minded individuals to achieve your goals together</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{partner.name}</h3>
                  <p className="text-sm text-gray-600">{partner.goal}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600">Progress</span>
                  <span className="text-sm font-medium">{partner.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" 
                    style={{ width: `${partner.progress}%` }}
                  ></div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
                Connect as Partner
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
            Find more partners
          </button>
        </div>
      </div>
    </section>
  );
};

// Learning Paths Section
export const LearningSection = () => {
  const learningPaths = [
    {
      title: "Full-Stack Web Development",
      duration: "6 months",
      level: "Beginner to Advanced",
      modules: 12,
      badge: "Web Dev Master",
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
    },
    {
      title: "Product Management Mastery",
      duration: "4 months", 
      level: "Intermediate",
      modules: 8,
      badge: "PM Expert",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
    },
    {
      title: "Data Science & AI",
      duration: "8 months",
      level: "Advanced",
      modules: 16,
      badge: "Data Wizard",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998"
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Gamified Learning Paths</h2>
          <p className="text-gray-600">Structured courses with badges, achievements, and community support</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningPaths.map((path, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              <img
                src={path.image}
                alt={path.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{path.title}</h3>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">{path.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Level:</span>
                    <span className="font-medium">{path.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Modules:</span>
                    <span className="font-medium">{path.modules}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-yellow-500" size={16} />
                  <span className="text-sm font-medium text-yellow-600">{path.badge}</span>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
                  Start Learning
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
            Explore all courses
          </button>
        </div>
      </div>
    </section>
  );
};

// Statistics Section
export const StatsSection = () => {
  const stats = [
    { value: "89%", label: "Happy Members", description: "Career advanced for" },
    { value: "25K+", label: "Expert Mentors", description: "Empowered by" },
    { value: "54", label: "Countries", description: "Global community from" },
    { value: "500K+", label: "Connections", description: "We have built over" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A platform that delivers results
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
export const TestimonialsSection = () => {
  const categories = ['Product', 'Engineering', 'Design', 'Marketing', 'Data Science', 'Leadership'];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Loved by our community
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              E-Africa
            </h3>
            <p className="text-gray-400 mb-4">
              Empowering Africa's talent through global mentorship, learning, and opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Find Mentors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Become a Mentor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Browse Jobs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Find Gigs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 E-Africa. All rights reserved. Empowering African talent globally.</p>
        </div>
      </div>
    </footer>
  );
};