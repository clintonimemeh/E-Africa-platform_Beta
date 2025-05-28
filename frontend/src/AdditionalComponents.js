import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Video,
  Users2,
  Crown,
  CheckCircle,
  Calendar,
  Briefcase,
  TrendingUp,
  Heart,
  Target,
  Award,
  ArrowRight,
  Play,
  Clock,
  MapPin,
  DollarSign,
  Plus,
  Rocket,
  Building2,
  GraduationCap,
  Lightbulb,
  Coffee,
  Sparkles,
  Globe,
  Gift,
  Zap,
  BookOpen,
  Star,
  Users,
  MessageCircle,
  Lock
} from 'lucide-react';

// Import data from Components.js - this would normally come from API
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

const webinars = [
  {
    id: 1,
    title: "Building Scalable IoT Systems in Africa",
    host: "Kwame Asante",
    hostImage: "https://images.pexels.com/photos/8653717/pexels-photo-8653717.jpeg",
    date: "Dec 28, 2024",
    time: "7:00 PM WAT",
    duration: "90 minutes",
    attendees: 347,
    price: "Free",
    description: "Learn how to design and implement IoT solutions that work reliably in African markets",
    image: "https://images.pexels.com/photos/32258108/pexels-photo-32258108.jpeg",
    topics: ["IoT Architecture", "Edge Computing", "African Markets"],
    type: "Live"
  },
  {
    id: 2,
    title: "From Startup to Scale: African Success Stories",
    host: "David Ochieng",
    hostImage: "https://images.unsplash.com/photo-1508243529287-e21914733111",
    date: "Dec 30, 2024",
    time: "6:00 PM EAT",
    duration: "2 hours",
    attendees: 623,
    price: "$15",
    description: "Real case studies and lessons from African startups that scaled globally",
    image: "https://images.pexels.com/photos/8345975/pexels-photo-8345975.jpeg",
    topics: ["Entrepreneurship", "Scaling", "Fundraising"],
    type: "Premium"
  },
  {
    id: 3,
    title: "AI/ML for African Healthcare Solutions",
    host: "Prof. Fatima Al-Rashid",
    hostImage: "https://images.pexels.com/photos/6585012/pexels-photo-6585012.jpeg",
    date: "Jan 5, 2025",
    time: "8:00 PM EET",
    duration: "2.5 hours",
    attendees: 892,
    price: "$25",
    description: "Applying machine learning to solve healthcare challenges across Africa",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    topics: ["AI/ML", "Healthcare", "Social Impact"],
    type: "Premium"
  }
];

// Enhanced Features Section
export const EnhancedFeaturesSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Altruistic & Paid Services",
      description: "Choose from free humanitarian mentoring to premium professional consulting. Everyone deserves access to guidance.",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
    },
    {
      icon: Video,
      title: "Integrated Everything",
      description: "No need for Zoom, Slack, or separate platforms. Host webinars, manage sessions, and communicate all in one place.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
    },
    {
      icon: Crown,
      title: "Premium Tiers",
      description: "From free access to platinum leadership features. Scale your impact with advanced tools and capabilities.",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
    },
    {
      icon: Users2,
      title: "Smart Matching",
      description: "AI-powered matching for accountability partners, mentors, and experts based on your specific goals and field.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need in
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              One Platform
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining LinkedIn's networking, ADPList's mentoring, Upwork's marketplace, and Fiverr's services into one sophisticated ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                    <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Opportunities Section (Jobs & Gigs)
export const OpportunitiesSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Opportunities', icon: Globe },
    { id: 'job', label: 'Jobs', icon: Briefcase },
    { id: 'gig', label: 'Gigs', icon: TrendingUp },
    { id: 'consultation', label: 'Consulting', icon: Lightbulb }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'job': return 'bg-blue-100 text-blue-700';
      case 'gig': return 'bg-green-100 text-green-700';
      case 'consultation': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Opportunities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From full-time positions to freelance projects and consulting opportunities
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 border border-gray-200'
                }`}
              >
                <Icon size={18} />
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Opportunities grid */}
        <div className="space-y-6">
          {opportunities.map((opportunity) => (
            <motion.div
              key={opportunity.id}
              whileHover={{ y: -3 }}
              className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    {opportunity.logo && (
                      <img
                        src={opportunity.logo}
                        alt={opportunity.company || opportunity.client}
                        className="w-16 h-16 rounded-2xl object-cover shadow-md"
                      />
                    )}
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{opportunity.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(opportunity.type)}`}>
                          {opportunity.type.charAt(0).toUpperCase() + opportunity.type.slice(1)}
                        </span>
                      </div>
                      {opportunity.company && (
                        <p className="text-lg text-indigo-600 font-semibold">{opportunity.company}</p>
                      )}
                      {opportunity.client && (
                        <p className="text-lg text-purple-600 font-semibold">{opportunity.client}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-4 gap-4 mb-6">
                    {opportunity.location && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} />
                        <span className="font-medium">{opportunity.location}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign size={16} />
                      <span className="font-medium">{opportunity.salary || opportunity.budget}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={16} />
                      <span className="font-medium">{opportunity.commitment} {opportunity.duration && `• ${opportunity.duration}`}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users size={16} />
                      <span className="font-medium">
                        {opportunity.applicants ? `${opportunity.applicants} applicants` : `${opportunity.proposals} proposals`}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {opportunity.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-500">Posted {opportunity.posted}</p>
                </div>
                
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all transform hover:scale-105 ml-6">
                  {opportunity.type === 'job' ? 'Apply Now' : 'Submit Proposal'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all transform hover:scale-105">
            Explore All Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

// Channels Section (Accountability Partners)
export const ChannelsSection = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Accountability <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Channels</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join field-specific communities or create your own channel to find accountability partners
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center gap-3"
          >
            <Plus size={20} />
            Create New Channel
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {channels.map((channel) => (
            <motion.div
              key={channel.id}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative h-48">
                <img
                  src={channel.image}
                  alt={channel.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    channel.type === 'Premium' 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {channel.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.name}</h3>
                <p className="text-sm text-indigo-600 font-semibold mb-3">{channel.field}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Users2 size={14} />
                      {channel.members} members
                    </span>
                    <span className="flex items-center gap-1">
                      <Target size={14} />
                      {channel.level}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {channel.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm">
                    <p className="text-gray-500">Host: <span className="font-semibold text-gray-900">{channel.host}</span></p>
                    <p className="text-gray-500">Next: <span className="font-semibold text-indigo-600">{channel.nextMeeting}</span></p>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                  Join Channel
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all transform hover:scale-105">
            Browse All Channels
          </button>
        </div>
      </div>
    </section>
  );
};

// Webinars Section
export const WebinarsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Webinars</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry experts in live, interactive sessions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webinars.map((webinar) => (
            <motion.div
              key={webinar.id}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative">
                <img
                  src={webinar.image}
                  alt={webinar.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="text-white ml-1" size={24} />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    webinar.type === 'Premium' 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                      : 'bg-green-500 text-white'
                  }`}>
                    {webinar.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {webinar.duration}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{webinar.title}</h3>
                
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={webinar.hostImage}
                    alt={webinar.host}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{webinar.host}</p>
                    <p className="text-sm text-gray-500">Host</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={14} />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={14} />
                    <span>{webinar.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users size={14} />
                    <span>{webinar.attendees} attending</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <DollarSign size={14} />
                    <span className="font-semibold">{webinar.price}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {webinar.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {webinar.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                  {webinar.price === 'Free' ? 'Join Free' : `Register - ${webinar.price}`}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all transform hover:scale-105">
            View All Webinars
          </button>
        </div>
      </div>
    </section>
  );
};

// Pricing Section
export const PricingSection = () => {
  const getColorClasses = (color, popular) => {
    if (popular) {
      return {
        card: "border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 shadow-xl scale-105",
        header: "bg-gradient-to-r from-purple-600 to-pink-600 text-white",
        price: "text-purple-600",
        button: "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
      };
    }
    switch (color) {
      case 'gray':
        return {
          card: "border-gray-200 bg-white",
          header: "bg-gray-100 text-gray-800",
          price: "text-gray-900",
          button: "bg-gray-600 text-white hover:bg-gray-700"
        };
      case 'gold':
        return {
          card: "border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50",
          header: "bg-gradient-to-r from-yellow-500 to-orange-500 text-white",
          price: "text-yellow-600",
          button: "bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:shadow-lg"
        };
      default:
        return {
          card: "border-gray-200 bg-white",
          header: "bg-gray-100 text-gray-800",
          price: "text-gray-900",
          button: "bg-indigo-600 text-white hover:bg-indigo-700"
        };
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Growth Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From free access to premium leadership features. Start free and upgrade as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const colorClasses = getColorClasses(plan.color, plan.popular);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative border-2 rounded-3xl overflow-hidden ${colorClasses.card}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      ⭐ Most Popular
                    </span>
                  </div>
                )}

                <div className={`p-6 text-center ${colorClasses.header}`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm opacity-90">{plan.description}</p>
                </div>

                <div className="p-8">
                  <div className="text-center mb-8">
                    <span className={`text-5xl font-black ${colorClasses.price}`}>{plan.price}</span>
                    <span className="text-lg text-gray-600 ml-1">{plan.period}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, limitIndex) => (
                      <li key={limitIndex} className="flex items-start gap-3">
                        <Lock className="text-gray-400 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-gray-500">{limitation}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 rounded-2xl font-semibold transition-all ${colorClasses.button}`}>
                    {plan.price === 'Free' ? 'Get Started Free' : 'Start Free Trial'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            💎 All paid plans include a <span className="font-semibold">14-day free trial</span> with no credit card required
          </p>
          <p className="text-sm text-gray-500">
            Need a custom enterprise solution? <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

// Statistics Section
export const StatsSection = () => {
  const stats = [
    { value: "92%", label: "Success Rate", description: "Members achieve their goals", icon: Target },
    { value: "50K+", label: "Global Experts", description: "Across 80+ countries", icon: Globe },
    { value: "2M+", label: "Connections Made", description: "Life-changing relationships", icon: Heart },
    { value: "24/7", label: "Always Available", description: "Support when you need it", icon: Clock }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Professionals
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
              Worldwide
            </span>
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Join thousands of professionals who have accelerated their growth with E-Africa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all group-hover:scale-105">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-all">
                    <Icon size={32} className="text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                    {stat.value}
                  </div>
                  <div className="text-xl font-bold mb-2">{stat.label}</div>
                  <div className="text-indigo-200">{stat.description}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Find Experts", href: "#" },
        { name: "Become an Expert", href: "#" },
        { name: "Join Channels", href: "#" },
        { name: "Browse Opportunities", href: "#" },
        { name: "Host Webinars", href: "#" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Mentoring", href: "#" },
        { name: "Coaching", href: "#" },
        { name: "Consulting", href: "#" },
        { name: "Teaching", href: "#" },
        { name: "Accountability Partners", href: "#" }
      ]
    },
    {
      title: "Community",
      links: [
        { name: "Success Stories", href: "#" },
        { name: "Events & Webinars", href: "#" },
        { name: "Blog & Resources", href: "#" },
        { name: "Newsletter", href: "#" },
        { name: "African Innovation Hub", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Support", href: "#" },
        { name: "API Documentation", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Rocket className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  E-Africa
                </h3>
                <p className="text-xs text-gray-400">Professional Platform</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering African talent through global mentorship, learning, and professional opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Users size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>
          
          {/* Links sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold text-lg mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2024 E-Africa. All rights reserved. Made with ❤️ for global professional growth.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>🌍 Supporting 80+ countries</span>
              <span>🚀 Trusted by 50K+ professionals</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};