export default function NotificationTicker({ items = [] }) {
  if (!items.length) return null;
  const top10 = items.slice(0, 10);

  return (
    <div aria-live="polite" aria-label="Latest job notifications ticker" className="bg-[#C24100]">
      <div className="flex items-stretch">
        <div className="hidden sm:flex items-center px-3 py-2 bg-[#A33500] shrink-0">
          <span className="text-white text-[10px] font-bold uppercase leading-tight">Breaking</span>
        </div>
        <div className="flex-1 overflow-hidden py-2 px-3">
          <div className="animate-ticker flex whitespace-nowrap">
            <span className="text-white text-[12px] font-medium flex items-center gap-6 shrink-0">
              {top10.map((item, i) => (
                <span key={i} className="inline-flex items-center gap-2">
                  <span className="w-1 h-1 bg-white/60 shrink-0" />
                  <span className="truncate max-w-[260px] inline-block">{item.title}</span>
                </span>
              ))}
            </span>
            <span className="text-white text-[12px] font-medium flex items-center gap-6 shrink-0">
              {top10.map((item, i) => (
                <span key={`dup-${i}`} className="inline-flex items-center gap-2">
                  <span className="w-1 h-1 bg-white/60 shrink-0" />
                  <span className="truncate max-w-[260px] inline-block">{item.title}</span>
                </span>
              ))}
            </span>
          </div>
        </div>
        <div className="hidden sm:flex items-center px-3 bg-[#A33500] shrink-0">
          <span className="text-white text-[11px] font-bold">{items.length}+</span>
        </div>
      </div>
    </div>
  );
}
