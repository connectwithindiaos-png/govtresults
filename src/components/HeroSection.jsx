import { Briefcase, Bell, ChevronRight, MapPin, Building, Calendar, FileText, ScrollText, ClipboardList, BookOpen, Globe, Newspaper, Award, Star } from 'lucide-react';
import NotificationTicker from './NotificationTicker';

function GovtEmblem() {
  return (
    <svg viewBox="0 0 100 100" className="w-10 h-10 lg:w-12 lg:h-12 drop-shadow-lg" aria-label="GovtJobsIndia.online">
      <rect width="100" height="100" rx="14" fill="#E85D04"/>
      <rect x="20" y="55" width="60" height="30" rx="3" fill="white"/>
      <rect x="28" y="60" width="44" height="20" rx="2" fill="#E85D04"/>
      <rect x="42" y="65" width="16" height="15" rx="2" fill="white"/>
      <polygon points="50,20 22,55 78,55" fill="white"/>
      <circle cx="50" cy="30" r="4" fill="#E85D04"/>
    </svg>
  );
}

function extractDate(item) {
  if (item.posted_at) return item.posted_at;
  const m = (item.content_html || '').match(/Updated:?\s*(\d{1,2}\s+\w+\s+\d{4})/i);
  return m ? m[1] : '';
}

const rightIcons = [Briefcase, FileText, ScrollText, ClipboardList, BookOpen, Globe, Newspaper, Award, Star];
const rightColors = ['text-accent bg-accent/10','text-blue-600 bg-blue-100','text-purple-600 bg-purple-100','text-emerald-600 bg-emerald-100','text-rose-600 bg-rose-100','text-cyan-600 bg-cyan-100'];
function pick2(title) {
  let h = 0; for (let i = 0; i < title.length; i++) h = ((h << 5) - h) + title.charCodeAt(i);
  return Math.abs(h);
}

function RightCard({ title, items, categoryKey, icon: Icon, accentColor, onNavClick }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
      {/* Card header */}
      <div className={`flex items-center gap-2 px-4 py-2.5 border-b border-gray-100`}
        style={{ background: `linear-gradient(135deg, ${accentColor}15, ${accentColor}08)` }}
      >
        <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ backgroundColor: accentColor }}>
          <Icon size={14} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-extrabold text-gray-800 font-[Poppins] leading-tight">{title}</h3>
          <span className="text-[10px] text-gray-400">{items.length} openings</span>
        </div>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full`}
          style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
        >Live</span>
      </div>

      {/* Items */}
      <div className="divide-y divide-gray-50">
        {items.slice(0, 4).map((item, i) => {
          const dateStr = extractDate(item);
          const isPrivate = categoryKey === 'private_jobs';
          const location = item.job_location || item.state_label || '';
          const company = item.company || '';
          const RI = rightIcons[pick2(item.title) % rightIcons.length];
          const RC = rightColors[pick2(item.title) % rightColors.length];
          return (
            <div key={item.id || i} className="px-4 py-2.5 hover:bg-gray-50/50 transition-colors">
              <div className="flex items-start gap-2">
                <span className={`w-6 h-6 rounded flex items-center justify-center shrink-0 mt-0.5 ${RC}`}><RI size={13} /></span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start gap-1.5">
                    <h4 className="text-[12px] font-bold text-gray-800 leading-snug line-clamp-1 flex-1">{item.title}</h4>
                    {i < 2 && (
                      <span className="badge bg-red-50 text-red-600 border border-red-200 shrink-0" style={{ animation: 'blink-red 1s ease-in-out infinite' }}>
                        NEW
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                    {company && <span className="text-[10px] text-gray-400 flex items-center gap-0.5"><Building size={9} />{company}</span>}
                    {location && <span className="text-[10px] text-gray-400 flex items-center gap-0.5"><MapPin size={9} />{location}</span>}
                    {dateStr && <span className="text-[10px] text-gray-400 flex items-center gap-0.5"><Calendar size={9} />{dateStr}</span>}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All */}
      <a href="#jobs" onClick={(e) => { e.preventDefault(); if (onNavClick) onNavClick('#jobs', categoryKey); const el = document.querySelector('#jobs'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
        className="flex items-center justify-center gap-1 px-4 py-2.5 text-xs font-semibold border-t border-gray-100 transition-colors"
        style={{ color: accentColor }}
      >
        View All {title} <ChevronRight size={12} />
      </a>
    </div>
  );
}

export default function HeroSection({ data, onNavClick }) {
  const govtJobs = data?.latest_jobs || [];
  const privateJobs = data?.private_jobs || [];

  const stats = [
    { label: 'Latest Jobs', count: data?.latest_jobs?.length || 0, color: 'text-accent' },
    { label: 'Results', count: data?.results?.length || 0, color: 'text-blue-400' },
    { label: 'Admit Cards', count: data?.admit_cards?.length || 0, color: 'text-purple-400' },
    { label: 'Answer Keys', count: data?.answer_keys?.length || 0, color: 'text-emerald-400' },
  ];

  return (
    <section id="home" aria-label="Hero section with latest government job listings" className="bg-gradient-to-b from-[#0F0F1F] via-[#151530] to-[#1A1A2E]">
      <div className="h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 lg:pt-16 lg:pb-10">
        {/* Branding row */}
        <div className="flex flex-col items-center text-center mb-5">
          <div className="text-white/90 mb-2"><GovtEmblem /></div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white/90 font-[Poppins] leading-tight">सरकारी नौकरी - India's #1 Government Job Portal</h1>
          <p className="text-sm lg:text-base text-white font-[Poppins] font-semibold -mt-0.5">GovtJobs<span className="text-accent">India.online</span></p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-white/50 text-[11px]">India's #1 Government Job Portal</span>
            <span className="text-white/20">|</span>
            <span className="text-[#FF9933] text-[11px] font-semibold">सरकारी नौकरी</span>
          </div>
        </div>

        {/* Trust bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-5 text-[11px]">
          <span className="flex items-center gap-1 text-white/60">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Trusted by 4.8 Cr+ Aspirants
          </span>
          <span className="text-white/20">|</span>
          <span className="text-green-400 font-semibold">Live Data</span>
          <span className="text-white/20">|</span>
          <span className="text-white/50">Updated: 27 Jun 2026</span>
        </div>

        {/* Main 2-column layout */}
        <div className="grid lg:grid-cols-5 gap-5 lg:gap-6 items-start">
          {/* LEFT - CTA, Stats, Search */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a href="#jobs" onClick={(e) => { e.preventDefault(); if (onNavClick) onNavClick('#jobs', 'latest_jobs'); document.querySelector('#jobs')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-1.5 bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors"
              >
                <Briefcase size={16} />
                Browse All Jobs
              </a>
              <a href="#alerts" onClick={(e) => { e.preventDefault(); document.querySelector('#alerts')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-1.5 border border-white/25 hover:border-white/50 text-white/80 hover:text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
              >
                <Bell size={16} />
                Get Free Alerts
              </a>
              <span className="text-white/40 text-[11px] flex items-center gap-1"><Bell size={12} /> 1.2 Lakh new posts</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-2">
              {stats.map((s, i) => (
                <div key={i} className="bg-white/5 rounded-lg border border-white/10 text-center py-2.5 px-1">
                  <div className={`text-base lg:text-lg font-extrabold ${s.color} font-[Poppins]`}>
                    {s.count}<span className="text-accent">+</span>
                  </div>
                  <div className="text-[10px] text-white/50 leading-tight">{s.label}</div>
                  <span className="sr-only">{s.count} {s.label} available</span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT - 2 Cards */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <RightCard
              title="Latest Govt Jobs"
              items={govtJobs}
              categoryKey="latest_jobs"
              icon={Briefcase}
              accentColor="#E85D04"
              onNavClick={onNavClick}
            />
            <RightCard
              title="Latest Private Jobs"
              items={privateJobs}
              categoryKey="private_jobs"
              icon={Building}
              accentColor="#E11D48"
              onNavClick={onNavClick}
            />
          </div>
        </div>

        {/* Ticker at bottom */}
        <div className="mt-5 max-w-full">
          <NotificationTicker items={govtJobs} />
        </div>
      </div>
    </section>
  );
}
