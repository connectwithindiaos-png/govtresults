import { useRef, useEffect, useState } from 'react';

function Counter({ end, label, color }) {
  const ref = useRef(null);
  const [displayed, setDisplayed] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let n = 0;
    const dur = 1800;
    const step = 16;
    const inc = end / (dur / step);
    const t = setInterval(() => {
      n += inc;
      if (n >= end) { setDisplayed(end); clearInterval(t); }
      else setDisplayed(Math.floor(n));
    }, step);
    return () => clearInterval(t);
  }, [started, end]);

  return (
    <div ref={ref} className="card text-center p-4 lg:p-5 card-hover">
      <div className={`text-2xl lg:text-3xl font-extrabold ${color} font-[Poppins]`}>
        {displayed}+
      </div>
      <div className="text-xs lg:text-sm text-gray-500 mt-0.5 font-medium">{label}</div>
    </div>
  );
}

export default function StatsSection({ data }) {
  return (
    <section aria-label="Live job statistics counters" className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 lg:py-6">
        <h2 className="section-sub text-center mb-3">Live Counters</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          <Counter end={data?.latest_jobs?.length || 0} label="Latest Jobs" color="text-accent" />
          <Counter end={data?.results?.length || 0} label="Results" color="text-blue-600" />
          <Counter end={data?.admit_cards?.length || 0} label="Admit Cards" color="text-purple-600" />
          <Counter end={data?.answer_keys?.length || 0} label="Answer Keys" color="text-emerald-600" />
        </div>
      </div>
    </section>
  );
}
