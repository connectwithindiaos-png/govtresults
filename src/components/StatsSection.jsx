export default function StatsSection({ data }) {
  if (!data) return null;

  const stats = [
    { label: 'Latest Jobs', count: data.latest_jobs?.length || 0 },
    { label: 'Results', count: data.results?.length || 0 },
    { label: 'Admit Cards', count: data.admit_cards?.length || 0 },
    { label: 'Answer Keys', count: data.answer_keys?.length || 0 },
  ];

  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-gray-600">
          {stats.map((s, i) => (
            <span key={s.label}>
              <strong>{s.count}+</strong> {s.label}{i < stats.length - 1 ? ' |' : ''}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
