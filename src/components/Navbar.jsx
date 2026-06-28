import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Latest Jobs', href: '/jobs/latest-jobs' },
  { label: 'Results', href: '/jobs/results' },
  { label: 'Admit Card', href: '/jobs/admit-cards' },
  { label: 'Answer Key', href: '/jobs/answer-keys' },
  { label: 'Private Jobs', href: '/jobs/private-jobs' },
  { label: 'Remote Jobs', href: '/jobs/remote-jobs' },
];

const quickLinks = [
  { label: 'SSC', href: '/jobs/latest-jobs?q=SSC' },
  { label: 'UPSC', href: '/jobs/latest-jobs?q=UPSC' },
  { label: 'Railway', href: '/jobs/latest-jobs?q=Railway' },
  { label: 'Banking', href: '/jobs/latest-jobs?q=Bank' },
  { label: 'Police', href: '/jobs/latest-jobs?q=Police' },
  { label: 'Syllabus', href: '#' },
  { label: 'Previous Papers', href: '#' },
  { label: 'Exam Calendar', href: '#' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-primary" role="banner">
      <div className="flex">
        <div className="h-0.5 w-1/3 bg-[#FF9933]" />
        <div className="h-0.5 w-1/3 bg-white" />
        <div className="h-0.5 w-1/3 bg-[#138808]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          <Link to="/" className="flex flex-col">
            <span className="text-white font-bold text-sm lg:text-base leading-tight">
              सरकारी नौकरी
            </span>
            <span className="text-white/50 text-[8px] lg:text-[9px] leading-tight">
              GovtJobsIndia.online
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link key={link.href} to={link.href}
                  className={`px-2 py-1.5 text-[11px] font-bold ${
                    active ? 'text-accent' : 'text-white/80'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
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
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2 text-[12px] font-bold border-l-2 ${
                      active ? 'text-accent border-accent' : 'text-white/70 border-transparent'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
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
