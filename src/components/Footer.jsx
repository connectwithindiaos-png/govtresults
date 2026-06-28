import { ShieldAlert, ExternalLink, ChevronRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Latest Jobs', href: '#jobs' },
  { label: 'Results', href: '#results' },
  { label: 'Admit Cards', href: '#admit-card' },
  { label: 'Answer Keys', href: '#answer-key' },
  { label: 'Private Jobs', href: '#private-jobs' },
  { label: 'Remote Jobs', href: '#remote-jobs' },
];

const resources = [
  { label: 'Apply Online', href: '#' },
  { label: 'Download Admit Card', href: '#' },
  { label: 'Check Result', href: '#' },
  { label: 'Syllabus & Pattern', href: '#' },
  { label: 'Previous Papers', href: '#' },
  { label: 'Answer Key Download', href: '#' },
];

const usefulLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Disclaimer', href: '#' },
  { label: 'Sitemap', href: '#' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white" role="contentinfo">
      {/* Tricolor bar */}
      <div className="h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-14">
        {/* Brand - full width on mobile */}
        <div className="mb-5 lg:mb-10">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-accent flex items-center justify-center shadow-sm">
              <svg viewBox="0 0 100 100" className="w-5 h-5 lg:w-6 lg:h-6">
                <rect x="20" y="55" width="60" height="30" rx="3" fill="white"/>
                <rect x="28" y="60" width="44" height="20" rx="2" fill="#E85D04"/>
                <rect x="42" y="65" width="16" height="15" rx="2" fill="white"/>
                <polygon points="50,20 22,55 78,55" fill="white"/>
                <circle cx="50" cy="30" r="4" fill="#E85D04"/>
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-xs lg:text-sm text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                सरकारी नौकरी
              </span>
              <span className="text-[10px] lg:text-[11px] text-white/60 -mt-0.5">
                GovtJobs<span className="text-accent">India.online</span>
              </span>
            </div>
          </div>
          <p className="text-white/50 text-[11px] lg:text-xs leading-relaxed max-w-xl">
            India's #1 platform for government job notifications, results, admit cards & answer keys.
          </p>
          <div className="flex items-center gap-1 mt-2">
            <span className="flex items-center gap-1 text-white/40 text-[10px]"><ShieldAlert size={11} className="text-accent/60" /> Verified Daily</span>
          </div>
        </div>

        {/* Links - 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[10px] lg:text-xs uppercase tracking-wider text-white/70 mb-2 lg:mb-3.5 pb-1.5 lg:pb-2 border-b border-white/10">
              Quick Links
            </h4>
            <nav aria-label="Quick links">
            <ul className="space-y-1 lg:space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => handleClick(e, link.href)}
                    className="text-white/45 hover:text-accent text-[11px] lg:text-xs transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight size={8} className="text-white/20 group-hover:text-accent transition-colors shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-[10px] lg:text-xs uppercase tracking-wider text-white/70 mb-2 lg:mb-3.5 pb-1.5 lg:pb-2 border-b border-white/10">
              Resources
            </h4>
            <nav aria-label="Resources">
            <ul className="space-y-1 lg:space-y-1.5">
              {resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                    className="text-white/45 hover:text-accent text-[11px] lg:text-xs transition-colors flex items-center gap-1 group"
                  >
                    <ExternalLink size={8} className="text-white/20 group-hover:text-accent transition-colors shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            </nav>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-bold text-[10px] lg:text-xs uppercase tracking-wider text-white/70 mb-2 lg:mb-3.5 pb-1.5 lg:pb-2 border-b border-white/10">
              Useful Links
            </h4>
            <nav aria-label="Useful links">
            <ul className="space-y-1 lg:space-y-1.5">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                    className="text-white/45 hover:text-accent text-[11px] lg:text-xs transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight size={8} className="text-white/20 group-hover:text-accent transition-colors shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            </nav>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-3">
            <p className="text-white/30 text-[10px] lg:text-[11px] text-center lg:text-left">
              © {new Date().getFullYear()} GovtJobsIndia.online
            </p>
            <p className="text-white/20 text-[9px] lg:text-[10px] text-center lg:text-left max-w-2xl leading-relaxed">
              <span className="text-amber-400/60 font-semibold">Disclaimer:</span> Unofficial aggregator. Verify from official sources.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
