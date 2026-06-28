import { Bell, Sparkles } from 'lucide-react';

export default function NotificationTicker({ items = [] }) {
  if (!items.length) return null;
  const top10 = items.slice(0, 10);

  return (
    <div aria-live="polite" aria-label="Latest job notifications ticker" className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 shadow-xl shadow-amber-500/20">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_20px,rgba(255,255,255,0.05)_20px,rgba(255,255,255,0.05)_21px)]" />
      <div className="relative flex items-stretch">
        <div className="hidden sm:flex items-center gap-2.5 px-5 py-3.5 bg-amber-600/40 shrink-0 border-r border-white/10">
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
            <Sparkles size={14} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[10px] font-bold uppercase tracking-widest leading-tight">Breaking</span>
            <span className="text-white text-[10px] font-bold uppercase tracking-widest leading-tight">Updates</span>
          </div>
        </div>
        <div className="flex-1 overflow-hidden relative py-3 px-4">
          <div className="animate-ticker flex whitespace-nowrap">
            <span className="text-white text-sm font-medium flex items-center gap-6 shrink-0">
              {top10.map((item, i) => (
                <span key={i} className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                  <span className="truncate max-w-[300px] inline-block">{item.title}</span>
                </span>
              ))}
            </span>
            <span className="text-white text-sm font-medium flex items-center gap-6 shrink-0">
              {top10.map((item, i) => (
                <span key={`dup-${i}`} className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                  <span className="truncate max-w-[300px] inline-block">{item.title}</span>
                </span>
              ))}
            </span>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1 px-4 bg-amber-600/30 shrink-0 border-l border-white/10">
          <Bell size={14} className="text-white" />
          <span className="text-white text-xs font-bold">{items.length}+</span>
        </div>
      </div>
    </div>
  );
}
