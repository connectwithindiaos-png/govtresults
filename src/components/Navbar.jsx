import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const jobsLinks = [
  { label: 'Latest Jobs', href: '/jobs/latest-jobs' },
  { label: 'Results', href: '/jobs/results' },
  { label: 'Admit Card', href: '/jobs/admit-cards' },
  { label: 'Answer Key', href: '/jobs/answer-keys' },
  { label: 'Private Jobs', href: '/jobs/private-jobs' },
  { label: 'Remote Jobs', href: '/jobs/remote-jobs' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Disclaimer', href: '/disclaimer' },
];

const quickLinks = [
  { label: 'SSC CGL 2026', href: '/ssc-cgl-2026' },
  { label: 'RRB Technician', href: '/rrb-technician-2026' },
  { label: 'UPSC Recruitment', href: '/upsc-recruitment-2026' },
  { label: 'Railway Jobs', href: '/jobs/latest-jobs?q=Railway' },
  { label: 'Banking Jobs', href: '/jobs/latest-jobs?q=Bank' },
  { label: 'Police Jobs', href: '/jobs/latest-jobs?q=Police' },
  { label: 'Govt Results', href: '/jobs/results' },
  { label: 'Admit Cards', href: '/jobs/admit-cards' },
];

function Dropdown({ label, items, isActive }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button onClick={() => setOpen(!open)}
        className={`px-2 py-1.5 text-[11px] font-bold flex items-center gap-1 cursor-pointer ${
          isActive ? 'text-accent' : 'text-white/80'
        }`}
      >
        {label}
        <svg className="w-2.5 h-2.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-0.5 w-44 bg-primary border border-white/10 shadow-lg z-40">
          {items.map((item) => (
            <Link key={item.href} to={item.href} onClick={() => setOpen(false)}
              className="block px-3 py-2 text-[12px] font-semibold text-white/70 hover:text-accent hover:bg-white/5 border-l-2 border-transparent hover:border-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const isJobsActive = jobsLinks.some(l => isActive(l.href));

  return (
    <header className="bg-primary" role="banner">
      <div className="flex">
        <div className="h-0.5 w-1/3 bg-[#FF9933]" />
        <div className="h-0.5 w-1/3 bg-white" />
        <div className="h-0.5 w-1/3 bg-[#138808]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-14">
          <Link to="/" className="flex flex-col shrink-0">
            <span className="text-white font-bold text-sm lg:text-base leading-tight">
              सरकारी नौकरी
            </span>
            <span className="text-white/50 text-[8px] lg:text-[9px] leading-tight">
              GovtJobsIndia.online
            </span>
          </Link>

          <div className="hidden lg:flex items-center">
            <Link to="/"
              className={`px-2.5 py-1.5 text-[11px] font-bold ${
                location.pathname === '/' ? 'text-accent' : 'text-white/80'
              }`}
            >
              Home
            </Link>

            <Dropdown label="Jobs" items={jobsLinks} isActive={isJobsActive} />

            <Link to="/jobs/results"
              className={`px-2.5 py-1.5 text-[11px] font-bold ${isActive('/jobs/results') ? 'text-accent' : 'text-white/80'}`}
            >
              Results
            </Link>
            <Link to="/jobs/admit-cards"
              className={`px-2.5 py-1.5 text-[11px] font-bold ${isActive('/jobs/admit-cards') ? 'text-accent' : 'text-white/80'}`}
            >
              Admit Card
            </Link>
            <Link to="/jobs/answer-keys"
              className={`px-2.5 py-1.5 text-[11px] font-bold ${isActive('/jobs/answer-keys') ? 'text-accent' : 'text-white/80'}`}
            >
              Answer Key
            </Link>

            <div className="w-px h-5 bg-white/10 mx-2" />

            <Link to="/about"
              className={`px-2.5 py-1.5 text-[11px] text-white/70 font-semibold ${isActive('/about') ? 'text-accent' : ''}`}
            >
              About
            </Link>
            <Link to="/contact"
              className={`px-2.5 py-1.5 text-[11px] text-white/70 font-semibold ${isActive('/contact') ? 'text-accent' : ''}`}
            >
              Contact
            </Link>

            <Dropdown label="Legal" items={legalLinks} />
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white/80 p-1">
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      <div className="hidden lg:block border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-4 h-7">
            <span className="text-white/40 text-[10px] font-bold uppercase shrink-0">Quick:</span>
            {quickLinks.map((link, i) => (
              <span key={link.label}>
                <Link to={link.href}
                  className="text-white/60 text-[10px] font-semibold"
                >
                  {link.label}
                </Link>
                {i < quickLinks.length - 1 && <span className="text-white/20 ml-4">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-64 bg-primary">
            <div className="px-4 py-3 space-y-0.5">
              <Link to="/" onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 text-[12px] font-bold border-l-2 ${
                  location.pathname === '/' ? 'text-accent border-accent' : 'text-white/70 border-transparent'
                }`}
              >
                Home
              </Link>
              <div className="text-white/30 text-[10px] px-3 pt-2 pb-1 font-semibold uppercase">Jobs</div>
              {jobsLinks.map((link) => (
                <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-1.5 text-[12px] font-semibold border-l-2 ${
                    isActive(link.href) ? 'text-accent border-accent' : 'text-white/60 border-transparent'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-white/10 my-2 pt-2 space-y-0.5">
                <Link to="/about" onClick={() => setMobileOpen(false)}
                  className="block px-3 py-1.5 text-[12px] text-white/60"
                >
                  About Us
                </Link>
                <Link to="/contact" onClick={() => setMobileOpen(false)}
                  className="block px-3 py-1.5 text-[12px] text-white/60"
                >
                  Contact
                </Link>
                <Link to="/privacy" onClick={() => setMobileOpen(false)}
                  className="block px-3 py-1.5 text-[12px] text-white/60"
                >
                  Privacy Policy
                </Link>
                <Link to="/terms" onClick={() => setMobileOpen(false)}
                  className="block px-3 py-1.5 text-[12px] text-white/60"
                >
                  Terms of Service
                </Link>
                <Link to="/disclaimer" onClick={() => setMobileOpen(false)}
                  className="block px-3 py-1.5 text-[12px] text-white/60"
                >
                  Disclaimer
                </Link>
              </div>
              <div className="border-t border-white/10 my-2 pt-2">
                <span className="text-white/30 text-[10px] px-3 font-semibold uppercase">Quick Links</span>
                {quickLinks.map((link) => (
                  <Link key={link.label} to={link.href} onClick={() => setMobileOpen(false)}
                    className="block px-3 py-1.5 text-[11px] text-white/50"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
