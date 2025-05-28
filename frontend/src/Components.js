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
  Zap,
  Crown,
  Shield,
  Mic,
  Play,
  DollarSign,
  Heart,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Headphones,
  Users2,
  Building2,
  GraduationCap,
  Lightbulb,
  Coffee,
  Rocket,
  Lock,
  Unlock,
  Plus,
  Settings,
  Filter,
  Bell,
  Gift
} from 'lucide-react';

// Enhanced Mock Data with Multi-Service Offerings
const experts = [
  {
    id: 1,
    name: "Dr. Amara Okafor",
    title: "Senior Product Manager & Leadership Coach",
    company: "Google",
    image: "https://images.pexels.com/photos/5060979/pexels-photo-5060979.jpeg",
    rating: 4.9,
    sessions: 347,
    experience: "12 years",
    services: ["Mentoring", "Coaching", "Consulting"],
    topics: ["Product Strategy", "Leadership", "Team Building", "Career Growth"],
    location: "Lagos, Nigeria",
    available: true,
    pricing: {
      mentoring: "Free - $75/session",
      coaching: "$100/session",
      consulting: "$200/hour"
    },
    verified: true,
    altruist: true,
    responseTime: "< 2 hours",
    languages: ["English", "Yoruba", "French"],
    timezone: "WAT (UTC+1)"
  },
  {
    id: 2,
    name: "Kwame Asante",
    title: "Tech Lead & IoT Consultant",
    company: "Microsoft",
    image: "https://images.pexels.com/photos/8653717/pexels-photo-8653717.jpeg",
    rating: 4.8,
    sessions: 189,
    experience: "8 years",
    services: ["Mentoring", "Consulting", "Teaching"],
    topics: ["IoT Systems", "Engineering Leadership", "System Architecture"],
    location: "Accra, Ghana",
    available: true,
    pricing: {
      mentoring: "$45/session",
      consulting: "$150/hour",
      teaching: "$60/session"
    },
    verified: true,
    altruist: false,
    responseTime: "< 4 hours",
    languages: ["English", "Twi"],
    timezone: "GMT"
  },
  {
    id: 3,
    name: "Sarah Chen",
    title: "UX Director & Design Consultant",
    company: "Apple",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    rating: 4.9,
    sessions: 456,
    experience: "15 years",
    services: ["Mentoring", "Coaching", "Consulting"],
    topics: ["UX Design", "Design Strategy", "User Research", "Design Leadership"],
    location: "Cape Town, South Africa",
    available: false,
    pricing: {
      mentoring: "$80/session",
      coaching: "$120/session",
      consulting: "$250/hour"
    },
    verified: true,
    altruist: true,
    responseTime: "< 6 hours",
    languages: ["English", "Mandarin"],
    timezone: "SAST (UTC+2)"
  },
  {
    id: 4,
    name: "David Ochieng",
    title: "Startup Founder & Business Coach",
    company: "TechStars",
    image: "https://images.unsplash.com/photo-1508243529287-e21914733111",
    rating: 4.7,
    sessions: 294,
    experience: "18 years",
    services: ["Coaching", "Consulting", "Teaching"],
    topics: ["Entrepreneurship", "Fundraising", "Business Strategy", "Venture Capital"],
    location: "Nairobi, Kenya",
    available: true,
    pricing: {
      coaching: "$150/session",
      consulting: "$300/hour",
      teaching: "$90/session"
    },
    verified: true,
    altruist: true,
    responseTime: "< 1 hour",
    languages: ["English", "Swahili"],
    timezone: "EAT (UTC+3)"
  },
  {
    id: 5,
    name: "Prof. Fatima Al-Rashid",
    title: "AI Research Lead & Data Science Mentor",
    company: "Tesla",
    image: "https://images.pexels.com/photos/6585012/pexels-photo-6585012.jpeg",
    rating: 4.9,
    sessions: 178,
    experience: "20 years",
    services: ["Mentoring", "Teaching", "Consulting"],
    topics: ["AI/ML", "Data Science", "Research Methodology", "Academic Guidance"],
    location: "Cairo, Egypt",
    available: true,
    pricing: {
      mentoring: "Free - $60/session",
      teaching: "$80/session",
      consulting: "$220/hour"
    },
    verified: true,
    altruist: true,
    responseTime: "< 3 hours",
    languages: ["English", "Arabic", "French"],
    timezone: "EET (UTC+2)"
  },
  {
    id: 6,
    name: "Marcus Johnson",
    title: "VP Engineering & Executive Coach",
    company: "Stripe",
    image: "https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg",
    rating: 4.9,
    sessions: 523,
    experience: "22 years",
    services: ["Coaching", "Consulting"],
    topics: ["Executive Leadership", "Engineering Management", "Scaling Teams", "Architecture"],
    location: "Remote",
    available: true,
    pricing: {
      coaching: "$200/session",
      consulting: "$400/hour"
    },
    verified: true,
    altruist: false,
    responseTime: "< 30 mins",
    languages: ["English"],
    timezone: "PST (UTC-8)"
  }
];

// Premium Plans
const plans = [
  {
    name: "Free Explorer",
    price: "Free",
    period: "",
    description: "Start your journey with basic access",
    features: [
      "Browse unlimited experts",
      "Join 3 accountability channels",
      "Basic profile creation",
      "Community forum access",
      "1 free session per month (with altruist mentors)"
    ],
    limitations: [
      "No webinar hosting",
      "Limited messaging",
      "Basic search filters"
    ],
    color: "gray",
    popular: false
  },
  {
    name: "Pro Achiever",
    price: "$29",
    period: "/month",
    description: "Accelerate your growth with premium features",
    features: [
      "Everything in Free",
      "Unlimited accountability channels",
      "Host webinars (up to 50 participants)",
      "Advanced search & filters",
      "Priority booking",
      "Unlimited messaging",
      "Analytics dashboard",
      "Custom profile branding",
      "5 sessions per month at 20% discount"
    ],
    limitations: [],
    color: "purple",
    popular: true
  },
  {
    name: "Platinum Leader",
    price: "$79",
    period: "/month",
    description: "For professionals who want to lead and scale",
    features: [
      "Everything in Pro",
      "Host large webinars (up to 500 participants)",
      "Post unlimited jobs & gigs",
      "Create premium courses",
      "White-label channel hosting",
      "Advanced analytics & insights",
      "Priority customer support",
      "API access for integrations",
      "Unlimited sessions at 30% discount",
      "Personal success manager"
    ],
    limitations: [],
    color: "gold",
    popular: false
  }
];

// Accountability Channels
const channels = [
  {
    id: 1,
    name: "AI/ML Mastery Circle",
    field: "Artificial Intelligence",
    members: 234,
    level: "Intermediate-Advanced",
    description: "Weekly challenges, project collaborations, and peer reviews for AI enthusiasts",
    image: "https://images.pexels.com/photos/32216281/pexels-photo-32216281.png",
    host: "Prof. Fatima Al-Rashid",
    nextMeeting: "Tomorrow, 7:00 PM WAT",
    type: "Premium"
  },
  {
    id: 2,
    name: "Startup Founders Alliance",
    field: "Entrepreneurship", 
    members: 156,
    level: "All Levels",
    description: "Share your startup journey, get feedback, and find co-founders in this supportive community",
    image: "https://images.unsplash.com/photo-1724906019900-601545c07107",
    host: "David Ochieng",
    nextMeeting: "Friday, 6:00 PM EAT",
    type: "Free"
  },
  {
    id: 3,
    name: "UX Design Collective",
    field: "Product Design",
    members: 189,
    level: "Beginner-Intermediate",
    description: "Daily design challenges, portfolio reviews, and industry insights",
    image: "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg",
    host: "Sarah Chen",
    nextMeeting: "Wednesday, 8:00 PM SAST",
    type: "Premium"
  }
];

// Jobs & Gigs with enhanced details
const opportunities = [
  {
    id: 1,
    type: "job",
    title: "Senior Full-Stack Engineer",
    company: "Flutterwave",
    location: "Lagos, Nigeria (Hybrid)",
    salary: "$80,000 - $120,000",
    posted: "2 days ago",
    applicants: 47,
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    level: "Senior",
    commitment: "Full-time",
    logo: "https://images.pexels.com/photos/7805060/pexels-photo-7805060.jpeg"
  },
  {
    id: 2,
    type: "gig",
    title: "Build Mobile Banking App UI/UX",
    budget: "$5,000 - $8,000",
    duration: "6 weeks",
    posted: "1 day ago",
    proposals: 23,
    skills: ["Figma", "Mobile Design", "Fintech UX"],
    level: "Expert",
    commitment: "Contract",
    client: "Verified Fintech Startup"
  },
  {
    id: 3,
    type: "consultation",
    title: "IoT Architecture Review & Strategy",
    budget: "$2,500 - $4,000",
    duration: "2 weeks",
    posted: "3 days ago",
    proposals: 8,
    skills: ["IoT Systems", "Cloud Architecture", "Edge Computing"],
    level: "Expert",
    commitment: "Consulting",
    client: "Enterprise Manufacturing Company"
  }
];

// Navigation Component with Enhanced UI
export const Navigation = ({ activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = [
    { id: 'home', label: 'Discover', icon: Sparkles },
    { id: 'experts', label: 'Experts', icon: Users },
    { id: 'opportunities', label: 'Opportunities', icon: Briefcase },
    { id: 'channels', label: 'Channels', icon: Users2 },
    { id: 'webinars', label: 'Webinars', icon: Video },
    { id: 'pricing', label: 'Plans', icon: Crown }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <Rocket className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  E-Africa
                </h1>
                <p className="text-xs text-gray-500 font-medium">Professional Platform</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-2 hover:scale-105 ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                    }`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Enhanced Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center gap-2 text-gray-500">
              <Bell size={20} />
            </div>
            <button className="text-gray-600 hover:text-indigo-600 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition-all">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:shadow-lg transition-all transform hover:scale-105">
              Join E-Africa
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-indigo-600 p-2 rounded-lg hover:bg-gray-50 transition-all"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden border-t border-gray-100 bg-white"
          >
            <div className="px-2 pt-4 pb-3 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all flex items-center gap-3 ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                        : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                    }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </button>
                );
              })}
              <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
                <button className="w-full text-left px-4 py-3 text-gray-600 hover:text-indigo-600 text-base font-medium rounded-lg hover:bg-gray-50 transition-all">
                  Sign In
                </button>
                <button className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-4 py-3 rounded-xl text-base font-semibold transition-all">
                  Join E-Africa
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

// Enhanced Hero Section
export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('all');

  const searchTypes = [
    { id: 'all', label: 'All Services', icon: Globe },
    { id: 'mentoring', label: 'Mentoring', icon: Heart },
    { id: 'coaching', label: 'Coaching', icon: Target },
    { id: 'consulting', label: 'Consulting', icon: Lightbulb },
    { id: 'teaching', label: 'Teaching', icon: GraduationCap }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Floating expert images with enhanced design */}
          <div className="relative mb-12">
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-5 md:grid-cols-7 gap-4 max-w-5xl mx-auto">
                {experts.slice(0, 7).map((expert, index) => (
                  <motion.div
                    key={expert.id}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                    className="relative group"
                  >
                    <div className="relative">
                      <img
                        src={expert.image}
                        alt={expert.name}
                        className="w-16 h-16 md:w-24 md:h-24 rounded-2xl object-cover border-4 border-white shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110"
                      />
                      {expert.verified && (
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full border-2 border-white flex items-center justify-center">
                          <CheckCircle className="text-white" size={16} />
                        </div>
                      )}
                      {expert.available && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                      {expert.altruist && (
                        <div className="absolute -top-1 -left-1 w-6 h-6 bg-yellow-500 rounded-full border-2 border-white flex items-center justify-center">
                          <Heart className="text-white" size={12} />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Your Success,
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Amplified
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto font-medium">
              Connect with <span className="font-bold text-indigo-600">world-class experts</span> for mentoring, coaching, consulting & learning. 
              <br className="hidden md:block" />
              From <span className="font-bold text-purple-600">free altruistic guidance</span> to <span className="font-bold text-pink-600">premium professional services</span>.
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              🌍 Join <span className="font-semibold">50,000+ African & Global Experts</span> transforming careers worldwide
            </p>
          </motion.div>

          {/* Enhanced Search Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            {/* Search Type Selector */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {searchTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSearchType(type.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      searchType === type.id
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                        : 'bg-white/80 text-gray-600 hover:bg-white hover:text-indigo-600 border border-gray-200'
                    }`}
                  >
                    <Icon size={16} />
                    {type.label}
                  </button>
                );
              })}
            </div>

            {/* Enhanced Search Bar */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-2xl border border-gray-100">
                <div className="flex items-center">
                  <Search className="text-gray-400 ml-4" size={24} />
                  <input
                    type="text"
                    placeholder="What do you want to achieve? (e.g., 'Learn IoT', 'Career guidance', 'Business strategy')"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-4 text-lg border-none focus:outline-none placeholder-gray-400"
                  />
                  <button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105 mr-2">
                    Find Experts
                  </button>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              💡 Try: "Free career coaching", "IoT consulting", "Math tutoring", "Startup mentoring"
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 text-center"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="text-3xl font-bold text-indigo-600">50K+</div>
              <div className="text-sm text-gray-600 font-medium">Global Experts</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="text-3xl font-bold text-purple-600">92%</div>
              <div className="text-sm text-gray-600 font-medium">Success Rate</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="text-3xl font-bold text-pink-600">24/7</div>
              <div className="text-sm text-gray-600 font-medium">Available</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="text-3xl font-bold text-green-600">Free</div>
              <div className="text-sm text-gray-600 font-medium">Options Available</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Expert Card Component
export const ExpertCard = ({ expert }) => {
  const getServiceColor = (service) => {
    switch (service) {
      case 'Mentoring': return 'bg-green-100 text-green-700';
      case 'Coaching': return 'bg-blue-100 text-blue-700';
      case 'Consulting': return 'bg-purple-100 text-purple-700';
      case 'Teaching': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 relative overflow-hidden group"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-purple-50/0 group-hover:from-indigo-50/50 group-hover:to-purple-50/50 transition-all duration-500 rounded-3xl"></div>
      
      <div className="relative">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative">
            <img
              src={expert.image}
              alt={expert.name}
              className="w-20 h-20 rounded-2xl object-cover ring-4 ring-white shadow-lg"
            />
            {expert.verified && (
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full border-2 border-white flex items-center justify-center">
                <CheckCircle className="text-white" size={16} />
              </div>
            )}
            {expert.available && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs font-bold">●</span>
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{expert.name}</h3>
                <p className="text-sm text-gray-600 font-medium">{expert.title}</p>
                <p className="text-sm text-indigo-600 font-semibold">{expert.company}</p>
              </div>
              {expert.altruist && (
                <div className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Heart size={12} />
                  Altruist
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Services offered */}
        <div className="flex flex-wrap gap-2 mb-4">
          {expert.services.map((service, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-xs font-semibold ${getServiceColor(service)}`}
            >
              {service}
            </span>
          ))}
        </div>

        {/* Rating and stats */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center">
            <Star className="text-yellow-400 fill-current" size={16} />
            <span className="text-sm font-bold ml-1">{expert.rating}</span>
          </div>
          <span className="text-gray-300">•</span>
          <span className="text-sm text-gray-600 font-medium">{expert.sessions} sessions</span>
          <span className="text-gray-300">•</span>
          <span className="text-sm text-gray-600">{expert.experience}</span>
        </div>

        {/* Location and response time */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <MapPin size={14} />
            {expert.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {expert.responseTime}
          </span>
        </div>

        {/* Topics */}
        <div className="flex flex-wrap gap-1 mb-4">
          {expert.topics.slice(0, 3).map((topic, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium"
            >
              {topic}
            </span>
          ))}
          {expert.topics.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
              +{expert.topics.length - 3} more
            </span>
          )}
        </div>

        {/* Pricing and actions */}
        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500">Starting from</div>
              <div className="font-bold text-gray-900">
                {expert.pricing.mentoring?.includes('Free') ? 'Free' : Object.values(expert.pricing)[0]}
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-200 transition-all">
                View Profile
              </button>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced Experts Grid
export const ExpertsGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');

  const services = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'mentoring', name: 'Mentoring', icon: Heart },
    { id: 'coaching', name: 'Coaching', icon: Target },
    { id: 'consulting', name: 'Consulting', icon: Lightbulb },
    { id: 'teaching', name: 'Teaching', icon: GraduationCap }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', icon: Users },
    { id: 'product', name: 'Product', icon: Target },
    { id: 'engineering', name: 'Engineering', icon: Zap },
    { id: 'design', name: 'Design', icon: BookOpen },
    { id: 'business', name: 'Business', icon: TrendingUp },
    { id: 'ai', name: 'AI/Data', icon: Sparkles },
    { id: 'leadership', name: 'Leadership', icon: Award }
  ];

  const priceFilters = [
    { id: 'all', name: 'All Prices' },
    { id: 'free', name: 'Free Options' },
    { id: 'budget', name: 'Under $50' },
    { id: 'premium', name: '$50 - $150' },
    { id: 'enterprise', name: '$150+' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Perfect Expert</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From free altruistic mentoring to premium consulting - find exactly what you need
          </p>
        </div>

        {/* Enhanced Search and Filters */}
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-8 border border-gray-100">
          {/* Search bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name, company, expertise, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
            />
          </div>

          {/* Filter tabs */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Service type filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Service Type</label>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                        selectedService === service.id
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Icon size={14} />
                      {service.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 4).map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Icon size={14} />
                      {category.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Price Range</label>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                {priceFilters.map((filter) => (
                  <option key={filter.id} value={filter.id}>
                    {filter.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Experts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all transform hover:scale-105">
            Load More Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default {
  Navigation,
  HeroSection,
  ExpertsGrid,
  ExpertCard
};