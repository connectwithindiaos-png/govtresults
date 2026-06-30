import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Latest Jobs', to: '/jobs/latest-jobs' },
  { label: 'Results', to: '/jobs/results' },
  { label: 'Admit Cards', to: '/jobs/admit-cards' },
  { label: 'Answer Keys', to: '/jobs/answer-keys' },
  { label: 'Private Jobs', to: '/jobs/private-jobs' },
  { label: 'Remote Jobs', to: '/jobs/remote-jobs' },
];

const resources = [
  { label: 'SSC CGL 2026', href: '/ssc-cgl-2026' },
  { label: 'RRB Technician 2026', href: '/rrb-technician-2026' },
  { label: 'UPSC Recruitment 2026', href: '/upsc-recruitment-2026' },
  { label: 'Download Admit Card', href: '/jobs/admit-cards' },
  { label: 'Check Result', href: '/jobs/results' },
  { label: 'Answer Key Download', href: '/jobs/answer-keys' },
];

const usefulLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Sitemap', href: '/sitemap.xml' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white" role="contentinfo">
      <div className="flex">
        <div className="h-0.5 w-1/3 bg-[#FF9933]" />
        <div className="h-0.5 w-1/3 bg-white" />
        <div className="h-0.5 w-1/3 bg-[#138808]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
        <div className="mb-5 lg:mb-8">
          <div className="mb-2">
            <span className="font-bold text-xs text-white">
              सरकारी नौकरी
            </span>
            <span className="text-white/60 text-[10px] ml-1">
              GovtJobs<span className="text-accent">India.online</span>
            </span>
          </div>
          <p className="text-white/50 text-[10px] lg:text-xs max-w-xl">
            Government job notifications, results, admit cards & answer keys across all departments.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          <div>
            <h4 className="font-bold text-[9px] uppercase text-white/70 mb-2 pb-1.5 border-b border-white/10">
              Quick Links
            </h4>
            <nav aria-label="Quick links">
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}
                    className="text-white/45 text-[10px] lg:text-[11px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            </nav>
          </div>

          <div>
            <h4 className="font-bold text-[9px] uppercase text-white/70 mb-2 pb-1.5 border-b border-white/10">
              Resources
            </h4>
            <nav aria-label="Resources">
            <ul className="space-y-1">
              {resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                    className="text-white/45 text-[10px] lg:text-[11px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            </nav>
          </div>

          <div>
            <h4 className="font-bold text-[9px] uppercase text-white/70 mb-2 pb-1.5 border-b border-white/10">
              Useful Links
            </h4>
            <nav aria-label="Useful links">
            <ul className="space-y-1">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                    className="text-white/45 text-[10px] lg:text-[11px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
            <p className="text-white/30 text-[9px] lg:text-[10px] text-center lg:text-left">
              &copy; {new Date().getFullYear()} GovtJobsIndia.online
            </p>
            <p className="text-white/20 text-[8px] lg:text-[9px] text-center lg:text-left max-w-2xl">
              <span className="text-amber-400/60 font-semibold">Disclaimer:</span> Unofficial aggregator. Verify from official sources.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
