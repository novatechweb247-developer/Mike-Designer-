/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MessageSquare, 
  Instagram, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Palette, 
  ShieldCheck,
  ExternalLink,
  Send,
  Hammer,
  Layers,
  Clock,
  HelpCircle,
  Wrench,
  Award,
  FileText
} from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Bespoke Signage & Branding',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Simulate premium loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [currentPage]);

  const portfolioItems = [
    {
      id: 1,
      title: "Storefront Signage & Branding",
      category: "Signage & Identity",
      image: "/src/assets/images/portfolio_project_1_1792610398238.jpg",
      description: "Premium bespoke architectural signage and gold-lettered storefront branding crafted for commercial display in Plateau State.",
      specs: ["Material: Treated Hardwood & Brushed Brass", "Finish: Weatherproof UV Coating", "Client: Luxury Retailer"]
    },
    {
      id: 2,
      title: "Architectural Wood & Metal Craft",
      category: "Bespoke Furniture",
      image: "/src/assets/images/portfolio_project_2_1792610398709.jpg",
      description: "Custom walnut media console and shelving featuring exquisite joinery and sleek metal framing.",
      specs: ["Material: Solid African Walnut & Steel", "Finish: Natural Matte Oil", "Application: Executive Interior"]
    },
    {
      id: 3,
      title: "Retail Identity & Display",
      category: "Production & Fabrication",
      image: "/src/assets/images/portfolio_project_3_1792610398422.jpg",
      description: "Large-scale illuminated facade signage and commercial interior brand integration.",
      specs: ["Material: Acrylic, LED Modules & Aluminum", "Finish: High Polish", "Scale: Commercial Flagship"]
    },
    {
      id: 4,
      title: "Laser-Engraved Corporate Plaques",
      category: "Crafted Awards",
      image: "/src/assets/images/portfolio_project_4_1792610398179.jpg",
      description: "Precision laser-engraved wooden recognition plaques and executive presentation sets.",
      specs: ["Material: Mahogany & Engraved Brass", "Finish: Velvet Presentation Case", "Purpose: Corporate Recognition"]
    }
  ];

  const services = [
    {
      id: "service-one",
      title: "Service One: Bespoke Signage & Branding",
      tag: "Editable Content",
      image: "/src/assets/images/service_creative_design_1792610398423.jpg",
      desc: "Custom 3D lettering, illuminated business signs, storefront branding, and directional displays built with precision and durability.",
      features: ["Outdoor & Indoor Signs", "Illuminated Lettering", "Storefront Wraps", "Architectural Wayfinding"],
      details: "Our signage solutions are engineered to withstand weathering while maintaining a striking visual presence. We design and fabricate custom 3D acrylic lettering, LED backlit signs, and entrance fascias tailored to your brand identity."
    },
    {
      id: "service-two",
      title: "Service Two: Custom Wood & Metal Fabrication",
      tag: "Editable Content",
      image: "/src/assets/images/service_production_fabrication_1792610397610.jpg",
      desc: "Expert metal welding and woodwork creating custom furniture, display racks, architectural fittings, and structural pieces.",
      features: ["Bespoke Furniture", "Metal Framing & Welds", "Retail Display Stands", "Structural Woodwork"],
      details: "Operating from our Jos North production yard, our skilled artisans combine traditional joinery with modern metal welding techniques to build durable, elegant furniture and architectural fixtures."
    },
    {
      id: "service-three",
      title: "Service Three: Professional Graphic Design & Print",
      tag: "Editable Content",
      image: "/src/assets/images/service_creative_design_1792610398423.jpg",
      desc: "Complete visual identity creation, brand collateral, high-impact marketing materials, and large-format printing.",
      features: ["Logo & Brand Identity", "Marketing Collateral", "Large Format Print", "Packaging Design"],
      details: "We craft compelling visual identities that communicate professionalism and trust. From logo creation to comprehensive brand guidelines and high-resolution marketing prints, we elevate your market presence."
    },
    {
      id: "service-four",
      title: "Service Four: Event Styling & Creative Production",
      tag: "Editable Content",
      image: "/src/assets/images/about_workshop_team_1792610399071.jpg",
      desc: "Stage backdrops, custom photo booths, exhibition stands, and immersive environment styling for events and corporate launches.",
      features: ["Exhibition Stands", "Stage Backdrops", "Custom Event Props", "Experiential Displays"],
      details: "Transform venues into immersive brand experiences. We design, fabricate, and install custom exhibition booths, conference backdrops, and event props that captivate audiences."
    }
  ];

  const faqs = [
    {
      q: "Where is Mike Designer Hub located?",
      a: "Our official production yard is located in Jos North, Plateau State, Nigeria. You are welcome to contact us to discuss your project requirements."
    },
    {
      q: "How can I request a project quote?",
      a: "You can easily request a quote by filling out our project enquiry form on the Contact page, which instantly formats and opens a direct WhatsApp chat with our team, or by calling us directly at 07031671850."
    },
    {
      q: "What types of businesses do you work with?",
      a: "We work with retail stores, corporate offices, event planners, hospitality venues, and individuals looking for custom furniture, signage, and professional design services."
    },
    {
      q: "Do you deliver and install fabricated items?",
      a: "Yes, for our physical production and fabrication projects in Plateau State and surrounding areas, we offer professional installation and mounting services."
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormError('Please provide your full name and phone number.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
    
    const waText = encodeURIComponent(
      `Hello Mike Designer Hub,%0A%0AMy Name: ${formData.name}%0APhone: ${formData.phone}%0AService Enquiry: ${formData.service}%0AMessage: ${formData.message}`
    );
    window.open(`https://wa.me/2347031671850?text=${waText}`, '_blank');
  };

  const whatsappDirectUrl = "https://wa.me/2347031671850?text=Hello%20Mike%20Designer%20Hub,%20I%20would%20like%20to%20enquire%20about%20your%20design%20and%20production%20services.";

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 font-sans selection:bg-amber-500 selection:text-black antialiased overflow-x-hidden">
      
      {/* Custom Premium Loading Page */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-neutral-950 flex flex-col items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center space-y-6 text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-black text-4xl shadow-2xl shadow-amber-500/30 animate-pulse">
                M
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tight text-white">Mike Designer Hub</h1>
                <p className="text-xs uppercase tracking-[0.25em] text-amber-500 font-semibold">Jos North · Plateau State</p>
              </div>
              <div className="w-48 h-1 bg-neutral-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-600"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          
          {/* Wordmark */}
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2.5 group text-left cursor-pointer whitespace-nowrap shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-black text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              M
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white block leading-none">Mike Designer Hub</span>
              <span className="text-[10px] uppercase tracking-widest text-amber-500 font-semibold">Jos North</span>
            </div>
          </button>

          {/* 5 Pages Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {(['home', 'about', 'services', 'portfolio', 'contact'] as Page[]).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`capitalize transition-colors px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 cursor-pointer ${
                  currentPage === page 
                    ? 'text-amber-400 bg-neutral-900 border border-neutral-800 shadow-sm' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}
          </nav>

          {/* Primary Action */}
          <div className="flex items-center gap-4 shrink-0">
            <a 
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-amber-500 rounded-full hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20 active:scale-95 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              Chat on WhatsApp
            </a>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-20 left-0 w-full bg-neutral-900 border-b border-neutral-800 px-6 py-6 space-y-3 shadow-2xl"
          >
            {(['home', 'about', 'services', 'portfolio', 'contact'] as Page[]).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-full text-left capitalize px-4 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer ${
                  currentPage === page ? 'bg-neutral-800 text-amber-400' : 'text-neutral-300 hover:bg-neutral-800/50'
                }`}
              >
                {page}
              </button>
            ))}
            <div className="pt-4 border-t border-neutral-800">
              <a 
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold uppercase tracking-wider text-black bg-amber-400 rounded-xl"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* Main Multi-Page Container with Pop-Up / Pop-Out and Scroll Animations */}
      <main>
        <AnimatePresence mode="wait">
          
          {/* ================= PAGE 1: HOME ================= */}
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Hero Section */}
              <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-24">
                <div className="absolute inset-0 z-0">
                  <img 
                    src="/src/assets/images/hero_workshop_banner_1792610397758.jpg" 
                    alt="Mike Designer Hub Production Yard in Jos North" 
                    className="w-full h-full object-cover object-center scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/50" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide uppercase"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Jos North Production Yard · Plateau State, Nigeria
                  </motion.div>

                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]"
                  >
                    Creative Vision. <br className="hidden sm:block" />
                    <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                      Exceptional Craftsmanship.
                    </span>
                  </motion.h1>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-300 leading-relaxed font-light"
                  >
                    Discover the work of Mike Designer Hub — bringing creative ideas to life through quality design, custom fabrication, and professional production in Jos, Plateau State.
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                  >
                    <button 
                      onClick={() => setCurrentPage('portfolio')}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-xl hover:scale-105 cursor-pointer"
                    >
                      Explore Our Work
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <a 
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-black font-semibold text-sm hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20 hover:scale-105"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      Chat on WhatsApp
                    </a>
                  </motion.div>

                  {/* Trust strip with scroll pop-up */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-16 max-w-3xl mx-auto border-t border-neutral-800/80 text-left sm:text-center"
                  >
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-white">Jos North</p>
                      <p className="text-xs text-neutral-400">Production Yard Base</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-white">Direct</p>
                      <p className="text-xs text-neutral-400">WhatsApp Consultation</p>
                    </div>
                    <div className="space-y-1 col-span-2 sm:col-span-1">
                      <p className="text-2xl font-bold text-white">Custom</p>
                      <p className="text-xs text-neutral-400">Design & Fabrication</p>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Comprehensive Welcome Context Section */}
              <section className="py-24 bg-neutral-900 border-t border-neutral-800">
                <div className="max-w-7xl mx-auto px-6 space-y-16">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center space-y-4"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Welcome to Mike Designer Hub</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      Where Creative Ideas Transform into Physical Reality
                    </h2>
                    <p className="text-neutral-300 text-base leading-relaxed font-light">
                      Based in the heart of Jos North, Plateau State, Mike Designer Hub stands as a pillar of professional craftsmanship. We serve businesses, corporate institutions, and individual clients who demand exceptional quality in design, branding, and physical fabrication.
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { 
                        title: "Bespoke Signage & Branding", 
                        desc: "High-impact storefront displays, 3D lettering, and illuminated signs that command attention and elevate your brand presence.", 
                        icon: Palette, 
                        page: 'services' 
                      },
                      { 
                        title: "Custom Wood & Metal Work", 
                        desc: "Rigorous welding, precise joinery, and custom furniture built to withstand rigorous commercial and residential use.", 
                        icon: Hammer, 
                        page: 'services' 
                      },
                      { 
                        title: "Curated Project Portfolio", 
                        desc: "Browse our gallery of completed commissions showcasing our meticulous attention to detail and finishing.", 
                        icon: Layers, 
                        page: 'portfolio' 
                      },
                    ].map((card, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        onClick={() => setCurrentPage(card.page as Page)}
                        className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-amber-500/40 transition-all cursor-pointer group space-y-4 shadow-lg flex flex-col justify-between"
                      >
                        <div className="space-y-4">
                          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                            <card.icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">{card.title}</h3>
                          <p className="text-sm text-neutral-400 font-light leading-relaxed">{card.desc}</p>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-semibold text-amber-400 pt-4">
                          <span>Explore section</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Production Standards Section */}
              <section className="py-24 bg-neutral-950 border-t border-neutral-800">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-6 space-y-6"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Our Standards</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      Uncompromising Quality from Jos North to the World
                    </h2>
                    <p className="text-neutral-300 leading-relaxed font-light">
                      Every project undertaken at Mike Designer Hub goes through a rigorous workflow. From initial concept sketching and material selection to precision fabrication and final quality testing, we ensure nothing leaves our yard unless it meets our exacting benchmarks.
                    </p>
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-3 text-sm text-neutral-300">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                        <span>Sourced with premium durable timbers and treated metals.</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-neutral-300">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                        <span>Direct consultations via phone and WhatsApp for transparent updates.</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-neutral-300">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                        <span>Reliable delivery and installation across Plateau State.</span>
                      </div>
                    </div>
                    <div className="pt-4">
                      <button 
                        onClick={() => setCurrentPage('contact')}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-black font-semibold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors cursor-pointer"
                      >
                        Start Your Project Today
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-6"
                  >
                    <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
                      <img 
                        src="/src/assets/images/service_production_fabrication_1792610397610.jpg" 
                        alt="Precision Fabrication at Mike Designer Hub" 
                        className="w-full h-[400px] object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 p-6 bg-neutral-950/90 backdrop-blur-md rounded-xl border border-neutral-800">
                        <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Production Excellence</p>
                        <p className="text-sm font-bold text-white mt-1">State-of-the-art woodwork & metal fabrication yard.</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>
            </motion.div>
          )}

          {/* ================= PAGE 2: ABOUT ================= */}
          {currentPage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="py-24 bg-neutral-950 space-y-24"
            >
              <div className="max-w-7xl mx-auto px-6 space-y-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="max-w-3xl mx-auto text-center space-y-4"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">About Our Business</span>
                  <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Creativity Meets Craftsmanship.</h1>
                  <p className="text-neutral-400 text-lg">
                    Get to know the story, mission, and professional ethos behind Mike Designer Hub in Jos North.
                  </p>
                </motion.div>

                {/* Main About Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-6 relative"
                  >
                    <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
                      <img 
                        src="/src/assets/images/about_workshop_team_1792610399071.jpg" 
                        alt="Mike Designer Hub Workshop" 
                        className="w-full h-[450px] object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-6 left-6 right-6 p-6 bg-neutral-950/90 backdrop-blur-md rounded-xl border border-neutral-800">
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                          <div>
                            <p className="text-sm font-semibold text-white">Jos North Production Yard</p>
                            <p className="text-xs text-neutral-400">Plateau State, Nigeria</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-6 space-y-6"
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Dedicated to Quality & Detail</h2>
                    <p className="text-neutral-300 leading-relaxed font-light">
                      Mike Designer Hub is a dedicated creative design and production business based in Jos North, Plateau State. We combine practical craftsmanship with modern visual aesthetics to deliver exceptional results for our clients.
                    </p>
                    <p className="text-neutral-300 leading-relaxed font-light">
                      Whether you are looking for custom signage, bespoke furniture, branding identity, or professional production services, our focus remains firmly on meticulous attention to detail, quality materials, and bringing your distinct ideas to life.
                    </p>
                    <p className="text-neutral-300 leading-relaxed font-light">
                      Our workshop is equipped with reliable tools and operated by experienced artisans who understand the nuances of modern commercial display and durable structural fabrication.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                      <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-white">Detailed Attention</p>
                          <p className="text-xs text-neutral-400 mt-1">Careful execution on every project.</p>
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-white">Jos North Based</p>
                          <p className="text-xs text-neutral-400 mt-1">Plateau State production yard.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Core Values / Context Grid */}
              <section className="max-w-7xl mx-auto px-6 space-y-12">
                <div className="text-center space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Our Core Principles</span>
                  <h2 className="text-3xl font-bold text-white">What Drives Mike Designer Hub</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: "Uncompromising Precision", desc: "Every cut, measurement, and weld is executed with strict adherence to architectural blueprints and design specifications." },
                    { title: "Client-Centric Collaboration", desc: "We listen closely to your vision, offering professional guidance and regular updates from our Jos North workshop." },
                    { title: "Reliable Execution", desc: "We respect timelines and deliver robust, high-grade physical installations that stand the test of time." }
                  ].map((val, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4 shadow-lg"
                    >
                      <div className="text-amber-400 font-mono text-lg font-bold">0{idx + 1}.</div>
                      <h3 className="text-xl font-bold text-white">{val.title}</h3>
                      <p className="text-sm text-neutral-400 leading-relaxed font-light">{val.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* FAQs Section */}
              <section className="max-w-5xl mx-auto px-6 space-y-12">
                <div className="text-center space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Common Inquiries</span>
                  <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2"
                    >
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                        {faq.q}
                      </h3>
                      <p className="text-sm text-neutral-400 pl-6 leading-relaxed font-light">{faq.a}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {/* ================= PAGE 3: SERVICES ================= */}
          {currentPage === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="py-24 bg-neutral-950 space-y-24"
            >
              <div className="max-w-7xl mx-auto px-6 space-y-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="max-w-3xl mx-auto text-center space-y-4"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Our Offerings</span>
                  <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Professional Services</h1>
                  <p className="text-neutral-400 text-base sm:text-lg">
                    Comprehensive design and production capabilities delivered from our Jos North workshop. Each service is fully customizable.
                  </p>
                </motion.div>

                <div className="space-y-12">
                  {services.map((service, index) => (
                    <motion.div 
                      key={service.id}
                      initial={{ opacity: 0, y: 40, scale: 0.96 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 grid grid-cols-1 lg:grid-cols-12 shadow-xl"
                    >
                      <div className="lg:col-span-5 relative min-h-[300px]">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent lg:hidden" />
                        <span className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full text-xs font-medium text-amber-400 border border-amber-500/30">
                          {service.tag}
                        </span>
                      </div>

                      <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                        <div className="space-y-4">
                          <div className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">Service Category 0{index + 1}</div>
                          <h3 className="text-2xl font-bold text-white">
                            {service.title}
                          </h3>
                          <p className="text-base text-neutral-300 leading-relaxed font-light">
                            {service.desc}
                          </p>
                          <p className="text-sm text-neutral-400 leading-relaxed font-light">
                            {service.details}
                          </p>
                        </div>

                        <div className="space-y-6 pt-6 border-t border-neutral-800">
                          <div>
                            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Key Capabilities:</p>
                            <div className="flex flex-wrap gap-2">
                              {service.features.map((feat, fIdx) => (
                                <span key={fIdx} className="text-xs bg-neutral-950 text-neutral-300 px-3 py-1.5 rounded-lg border border-neutral-800">
                                  {feat}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <a 
                              href={whatsappDirectUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-black font-semibold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors"
                            >
                              <MessageSquare className="w-4 h-4 fill-current" />
                              Enquire via WhatsApp
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Working Process Section */}
              <section className="max-w-7xl mx-auto px-6 space-y-12 border-t border-neutral-900 pt-24">
                <div className="text-center space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Step-by-Step Methodology</span>
                  <h2 className="text-3xl font-bold text-white">Our Production Process</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { step: "01", title: "Consultation & Brief", desc: "We discuss your project goals, dimensions, and design preferences via WhatsApp, phone, or at our Jos yard." },
                    { step: "02", title: "Design & Planning", desc: "We draft professional layouts, select durable materials, and confirm exact specifications before starting work." },
                    { step: "03", title: "Precision Fabrication", desc: "Our artisans execute woodwork, metal welding, and branding creation with rigorous attention to detail." },
                    { step: "04", title: "Delivery & Installation", desc: "We conduct thorough quality checks and provide secure delivery and professional mounting for your project." }
                  ].map((proc, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4"
                    >
                      <div className="text-3xl font-extrabold text-amber-400 font-mono">{proc.step}</div>
                      <h3 className="text-lg font-bold text-white">{proc.title}</h3>
                      <p className="text-sm text-neutral-400 leading-relaxed font-light">{proc.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {/* ================= PAGE 4: PORTFOLIO ================= */}
          {currentPage === 'portfolio' && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="py-24 bg-neutral-950 space-y-16"
            >
              <div className="max-w-7xl mx-auto px-6 space-y-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="max-w-3xl mx-auto text-center space-y-4"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Showcase</span>
                  <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Featured Works & Craft</h1>
                  <p className="text-neutral-400 text-base sm:text-lg">
                    Explore our portfolio of recent design and production commissions. Click any project card to view high-resolution imagery and specifications.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {portfolioItems.map((item, idx) => (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, y: 40, scale: 0.96 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      onClick={() => setLightboxIndex(idx)}
                      className="group relative bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 cursor-pointer hover:border-amber-500/50 transition-all shadow-xl flex flex-col"
                    >
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-90" />
                        
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-3">
                          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                            {item.category}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-neutral-300 font-light leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-neutral-800 flex flex-wrap gap-2">
                          {item.specs.map((spec, sIdx) => (
                            <span key={sIdx} className="text-xs bg-neutral-950 text-neutral-400 px-3 py-1 rounded-md border border-neutral-800/80">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ================= PAGE 5: CONTACT ================= */}
          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="py-24 bg-neutral-950 space-y-16"
            >
              <div className="max-w-7xl mx-auto px-6 space-y-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="max-w-3xl mx-auto text-center space-y-4"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Get In Touch</span>
                  <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Let&apos;s Bring Your Ideas to Life.</h1>
                  <p className="text-neutral-400 text-base sm:text-lg">
                    Contact us directly or submit your project enquiry below. We respond promptly via WhatsApp and phone calls.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  
                  {/* Contact Info Cards */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-5 space-y-6"
                  >
                    <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-6">
                      <h3 className="text-xl font-bold text-white">Contact Information</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                            <Phone className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Official Phone Number</p>
                            <a href="tel:+2347031671850" className="text-base font-bold text-white hover:text-amber-400 transition-colors">
                              07031671850
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                            <MessageSquare className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">WhatsApp Contact</p>
                            <a href={whatsappDirectUrl} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-white hover:text-amber-400 transition-colors">
                              +234 703 167 1850
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                            <Instagram className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Instagram Handle</p>
                            <a href="https://www.instagram.com/mikedesigner_hub/" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-white hover:text-amber-400 transition-colors">
                              @mikedesigner_hub
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Workshop Location</p>
                            <p className="text-sm text-neutral-200 font-medium">
                              Jos North Production Yard, Plateau State, Nigeria
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row gap-3">
                        <a 
                          href="tel:+2347031671850"
                          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-800 text-white font-semibold text-xs uppercase tracking-wider hover:bg-neutral-700 transition-colors"
                        >
                          <Phone className="w-4 h-4 text-amber-400" />
                          Call Now
                        </a>
                        <a 
                          href="https://www.instagram.com/mikedesigner_hub/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-800 text-white font-semibold text-xs uppercase tracking-wider hover:bg-neutral-700 transition-colors"
                        >
                          <Instagram className="w-4 h-4 text-amber-400" />
                          Instagram
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Contact Form */}
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-7"
                  >
                    <div className="p-8 sm:p-10 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-white">Send a Project Enquiry</h3>
                        <p className="text-sm text-neutral-400 mt-1">
                          Fill out the form below. We will instantly prepare your enquiry and open WhatsApp to send it directly to our team.
                        </p>
                      </div>

                      {formError && (
                        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                          {formError}
                        </div>
                      )}

                      {formSubmitted && (
                        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs space-y-2">
                          <p className="font-semibold">Enquiry prepared successfully!</p>
                          <p>WhatsApp has been opened with your message. If it did not open automatically, click below:</p>
                          <a 
                            href={whatsappDirectUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-bold underline pt-1"
                          >
                            Open WhatsApp Manually <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}

                      <form onSubmit={handleFormSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">Full Name *</label>
                            <input 
                              type="text" 
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              placeholder="e.g. John Doe"
                              className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-500 transition-colors text-sm"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">Phone Number *</label>
                            <input 
                              type="tel" 
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              placeholder="e.g. 08012345678"
                              className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-500 transition-colors text-sm"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">Service / Project Enquiry</label>
                          <select 
                            value={formData.service}
                            onChange={(e) => setFormData({...formData, service: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm"
                          >
                            <option value="Bespoke Signage & Branding">Service One: Bespoke Signage & Branding</option>
                            <option value="Custom Wood & Metal Fabrication">Service Two: Custom Wood & Metal Fabrication</option>
                            <option value="Professional Graphic Design & Print">Service Three: Professional Graphic Design & Print</option>
                            <option value="Event Styling & Creative Production">Service Four: Event Styling & Creative Production</option>
                            <option value="General Consultation">General Project Enquiry</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">Message / Project Details</label>
                          <textarea 
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            placeholder="Describe your project requirements, dimensions, or questions..."
                            className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-500 transition-colors text-sm resize-none"
                          ></textarea>
                        </div>

                        <button 
                          type="submit"
                          className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold text-xs uppercase tracking-wider hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Send className="w-4 h-4" />
                          Send Enquiry via WhatsApp
                        </button>
                      </form>
                    </div>
                  </motion.div>

                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8">
          <button 
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition-colors z-50 cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 flex flex-col lg:flex-row">
            <div className="lg:w-2/3 bg-black flex items-center justify-center relative min-h-[300px] sm:min-h-[450px]">
              <img 
                src={portfolioItems[lightboxIndex].image} 
                alt={portfolioItems[lightboxIndex].title}
                className="max-h-[75vh] w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/3 p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  {portfolioItems[lightboxIndex].category}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {portfolioItems[lightboxIndex].title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-light">
                  {portfolioItems[lightboxIndex].description}
                </p>
                <div className="pt-2 space-y-1">
                  {portfolioItems[lightboxIndex].specs.map((spec, sIdx) => (
                    <p key={sIdx} className="text-xs text-neutral-400 font-mono">· {spec}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-neutral-800">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span>Project {lightboxIndex + 1} of {portfolioItems.length}</span>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setLightboxIndex((lightboxIndex - 1 + portfolioItems.length) % portfolioItems.length)}
                      className="px-3 py-1.5 rounded bg-neutral-800 text-white hover:bg-neutral-700 transition-colors cursor-pointer"
                    >
                      Prev
                    </button>
                    <button 
                      onClick={() => setLightboxIndex((lightboxIndex + 1) % portfolioItems.length)}
                      className="px-3 py-1.5 rounded bg-neutral-800 text-white hover:bg-neutral-700 transition-colors cursor-pointer"
                    >
                      Next
                    </button>
                  </div>
                </div>

                <a 
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 text-black font-semibold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  Enquire via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-black text-xl shadow-lg shadow-amber-500/20">
                M
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white block">Mike Designer Hub</span>
                <span className="text-xs text-neutral-400">Jos North Production Yard, Plateau State</span>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-8 text-sm text-neutral-400">
              {(['home', 'about', 'services', 'portfolio', 'contact'] as Page[]).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className="capitalize hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Social / Direct */}
            <div className="flex items-center gap-4">
              <a 
                href={whatsappDirectUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-800 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/mikedesigner_hub/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-800 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="tel:+2347031671850" 
                className="w-10 h-10 rounded-xl bg-neutral-800 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

          </div>

          <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
            <p>© {new Date().getFullYear()} Mike Designer Hub. All rights reserved. Jos North, Plateau State, Nigeria.</p>
            <div className="flex items-center gap-6">
              <span>Craftsmanship & Design</span>
              <span>·</span>
              <span>Professional Production</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
