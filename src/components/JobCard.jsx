import { ExternalLink, Calendar, Users, Clock, Tag, MapPin, Building, ChevronRight, Briefcase, FileText, ScrollText, ClipboardList, BookOpen, Globe, Newspaper, Bell, Award, Star } from 'lucide-react';

const catStyles = {
  latest_jobs: { label: 'Govt Job', bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  results: { label: 'Result', bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  admit_cards: { label: 'Admit Card', bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  answer_keys: { label: 'Answer Key', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  private_jobs: { label: 'Private', bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
  remote_jobs: { label: 'Remote', bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200' },
};

function extractDate(item) {
  if (item.posted_at) return item.posted_at;
  const m = (item.content_html || '').match(/Updated:?\s*(\d{1,2}\s+\w+\s+\d{4})/i);
  return m ? m[1] : '';
}

function extractFromHighlights(html, label) {
  const hl = html.indexOf('Key Highlights');
  const section = hl !== -1 ? html.slice(hl, hl + 2000) : html;
  const matches = section.match(/>([^<]+)</g);
  if (!matches) return '—';
  const clean = matches.map(t => t.slice(1, -1).trim()).filter(Boolean);
  const idx = clean.indexOf(label);
  return (idx !== -1 && idx + 1 < clean.length) ? clean[idx + 1] : '—';
}

function extractInfo(item) {
  const html = item.content_html || '';
  return {
    vacancies: extractFromHighlights(html, 'Vacancies'),
    lastDate: extractFromHighlights(html, 'Last Date'),
    category: extractFromHighlights(html, 'Category'),
  };
}

const jobIcons = [Briefcase, FileText, ScrollText, ClipboardList, BookOpen, Globe, Newspaper, Bell, Award, Star];
const iconColors = ['text-accent bg-accent/10','text-blue-600 bg-blue-100','text-purple-600 bg-purple-100','text-emerald-600 bg-emerald-100','text-rose-600 bg-rose-100','text-cyan-600 bg-cyan-100'];
function pick(title) {
  let h = 0; for (let i = 0; i < title.length; i++) h = ((h << 5) - h) + title.charCodeAt(i);
  return Math.abs(h);
}

export default function JobCard({ item, categoryKey, index = 0 }) {
  const info = extractInfo(item);
  const dateStr = extractDate(item);
  const s = catStyles[categoryKey] || catStyles.latest_jobs;
  const Icon = jobIcons[pick(item.title) % jobIcons.length];
  const color = iconColors[pick(item.title) % iconColors.length];
  const isPrivate = categoryKey === 'private_jobs' || categoryKey === 'remote_jobs';
  const location = item.job_location || (isPrivate ? item.state_label : '');
  const company = item.company || '';

  return (
    <div className="card card-hover">
      <div className={`h-0.5 bg-gradient-to-r ${categoryKey === 'latest_jobs' ? 'from-accent to-accent-light' : categoryKey === 'results' ? 'from-blue-500 to-blue-400' : categoryKey === 'admit_cards' ? 'from-purple-500 to-purple-400' : categoryKey === 'answer_keys' ? 'from-amber-500 to-amber-400' : categoryKey === 'private_jobs' ? 'from-rose-500 to-rose-400' : 'from-cyan-500 to-cyan-400'}`} />

      <div className="p-4">
        {/* Top row */}
        <div className="flex items-start justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className={`badge ${s.bg} ${s.text} ${s.border} border`}>
              {s.label}
            </span>
            {index < 3 && (
              <span className="badge bg-red-50 text-red-600 border border-red-200" style={{ animation: 'blink-red 1s ease-in-out infinite' }}>
                NEW
              </span>
            )}
          </div>
          {dateStr && (
            <span className="text-[10px] text-gray-400 flex items-center gap-1 shrink-0">
              <Calendar size={10} /> {dateStr}
            </span>
          )}
        </div>

        {/* Title */}
        <div className="flex items-start gap-2.5 mb-3">
          <span className={`w-9 h-9 rounded flex items-center justify-center shrink-0 mt-0.5 ${color}`}><Icon size={18} /></span>
          <div className="min-w-0">
            <h3 className="text-sm font-bold text-gray-800 leading-snug line-clamp-2 hover:text-accent transition-colors">
              {item.title}
            </h3>
            {(company || location) && (
              <div className="flex items-center gap-2 mt-0.5">
                {company && <span className="text-[10px] text-gray-400 flex items-center gap-0.5"><Building size={10} />{company}</span>}
                {location && <span className="text-[10px] text-gray-400 flex items-center gap-0.5"><MapPin size={10} />{location}</span>}
              </div>
            )}
          </div>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-100">
            <div className="text-[8px] uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-0.5 mb-0.5"><Users size={10} className="text-accent/60" /> Vacancies</div>
            <div className="text-xs font-bold text-gray-800">{info.vacancies}</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-100">
            <div className="text-[8px] uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-0.5 mb-0.5"><Clock size={10} className="text-accent/60" /> Last Date</div>
            <div className="text-xs font-bold text-gray-800">{info.lastDate}</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-100">
            <div className="text-[8px] uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-0.5 mb-0.5"><Tag size={10} className="text-accent/60" /> Category</div>
            <div className="text-xs font-bold text-gray-800 truncate">{info.category}</div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between pt-0.5">
          <div className="flex items-center gap-2">
            {item.source && <span className="text-[9px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded truncate max-w-[110px]">{item.source}</span>}
            {item.state_label && !isPrivate && <span className="text-[9px] text-gray-400 hidden sm:inline">{item.state_label}</span>}
          </div>
          <a href={item.original_url || '#'} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:text-accent-dark text-xs font-semibold transition-colors"
            onClick={(e) => e.stopPropagation()}>
            View Details <ChevronRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
