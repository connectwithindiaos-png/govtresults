import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Bell, Home, Briefcase, FileCheck, TicketCheck, KeyRound, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home', section: 'home', icon: Home },
  { label: 'Jobs', href: '#jobs', section: 'jobs', icon: Briefcase },
  { label: 'Results', href: '#results', section: 'jobs', icon: FileCheck },
  { label: 'Admit Card', href: '#admit-card', section: 'jobs', icon: TicketCheck },
  { label: 'Answer Key', href: '#answer-key', section: 'jobs', icon: KeyRound },
];

export default function Navbar({ onNavClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleClick = (e, href, section) => {
    e.preventDefault();
    setMobileOpen(false);
    setActiveLink(href.replace('#', ''));
    const tabMap = { 'jobs': 'latest_jobs', 'results': 'results', 'admit-card': 'admit_cards', 'answer-key': 'answer_keys' };
    const tab = tabMap[href.replace('#', '')];
    if (onNavClick) onNavClick(href, tab);
    const el = document.querySelector(href === '#home' ? '#home' : '#jobs');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]' : 'bg-primary'
    }`} role="banner">
      {/* Tricolor top bar */}
      <div className="h-0.5 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />
      <nav aria-label="Main navigation">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleClick(e, '#home', 'home')}
            className="flex items-center gap-2.5 shrink-0 group"
          >
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shadow-sm shadow-accent/30 group-hover:shadow-md group-hover:shadow-accent/40 transition-shadow">
              <svg viewBox="0 0 100 100" className="w-5 h-5">
                <rect x="20" y="55" width="60" height="30" rx="3" fill="white"/>
                <rect x="28" y="60" width="44" height="20" rx="2" fill="#E85D04"/>
                <rect x="42" y="65" width="16" height="15" rx="2" fill="white"/>
                <polygon points="50,20 22,55 78,55" fill="white"/>
                <circle cx="50" cy="30" r="4" fill="#E85D04"/>
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-bold text-xs leading-tight ${scrolled ? 'text-primary' : 'text-white'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
                सरकारी नौकरी
              </span>
              <span className={`font-semibold text-[10px] -mt-0.5 ${scrolled ? 'text-gray-500' : 'text-white/60'}`}>
                GovtJobs<span className="text-accent">India.online</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href.replace('#', '');
              return (
                <a key={link.href} href={link.href}
                  onClick={(e) => handleClick(e, link.href, link.section)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                    scrolled
                      ? isActive ? 'text-accent bg-accent/5' : 'text-gray-600 hover:text-accent hover:bg-gray-50'
                      : isActive ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/8'
                  }`}
                >
                  <link.icon size={13} />
                  {link.label}
                </a>
              );
            })}
            <div className="w-px h-5 mx-1.5 bg-gray-300/20" />
            <button className={`p-1.5 rounded-md transition-colors ${
              scrolled ? 'text-gray-500 hover:text-accent hover:bg-gray-50' : 'text-white/70 hover:text-white hover:bg-white/8'
            }`}>
              <Bell size={15} />
            </button>
            <a href="#alerts" onClick={(e) => handleClick(e, '#alerts', 'alerts')}
              className="ml-1 bg-accent hover:bg-accent-dark text-white px-4 py-1.5 rounded-md text-xs font-bold transition-all hover:shadow-lg hover:shadow-accent/25 flex items-center gap-1.5"
            >
              <Bell size={13} />
              Get Alerts
            </a>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <button className={`p-1.5 ${scrolled ? 'text-gray-500' : 'text-white/80'}`}><Bell size={16} /></button>
            <button onClick={() => setMobileOpen(true)} className={`p-1.5 rounded-md ${scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/8'}`}>
              <Menu size={20} />
            </button>
          </div>
          </div>
        </div>
        </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm" onClick={() => setMobileOpen(false)}
            />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 shadow-2xl lg:hidden flex flex-col"
            >
              {/* Mobile header */}
              <div className="flex items-center justify-between px-4 py-3.5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-[18px] h-[18px]">
                      <rect x="20" y="55" width="60" height="30" rx="3" fill="white"/>
                      <rect x="28" y="60" width="44" height="20" rx="2" fill="#E85D04"/>
                      <rect x="42" y="65" width="16" height="15" rx="2" fill="white"/>
                      <polygon points="50,20 22,55 78,55" fill="white"/>
                      <circle cx="50" cy="30" r="4" fill="#E85D04"/>
                    </svg>
                  </div>
                  <span className="font-bold text-sm text-primary font-[Poppins]">Menu</span>
                </div>
                <button onClick={() => setMobileOpen(false)} className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-gray-600">
                  <X size={18} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 p-3 space-y-0.5 overflow-y-auto">
                {navLinks.map((link, i) => {
                  const isActive = activeLink === link.href.replace('#', '');
                  return (
                    <motion.a key={link.href} href={link.href}
                      onClick={(e) => handleClick(e, link.href, link.section)}
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive ? 'bg-accent/5 text-accent' : 'text-gray-700 hover:bg-orange-50 hover:text-accent'
                      }`}
                    >
                      <link.icon size={16} className={isActive ? 'text-accent' : 'text-gray-400'} />
                      {link.label}
                    </motion.a>
                  );
                })}
                <div className="pt-3 mt-3 border-t border-gray-100 space-y-2">
                  <a href="#alerts" onClick={(e) => handleClick(e, '#alerts', 'alerts')}
                    className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-4 py-2.5 rounded-lg text-sm font-bold transition-all"
                  >
                    <Bell size={15} />
                    Get Free Alerts
                  </a>
                  <p className="text-center text-[10px] text-gray-400">सरकारी नौकरियों की जानकारी</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
