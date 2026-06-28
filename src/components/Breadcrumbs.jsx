import { Link } from 'react-router-dom';

export default function Breadcrumbs({ items }) {
  if (!items?.length) {
    return (
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-0">
        <ol className="flex items-center gap-1 text-[11px] text-gray-500">
          <li>
            <Link to="/" className="text-gray-500">Home</Link>
          </li>
        </ol>
      </nav>
    );
  }

  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-0">
      <ol className="flex items-center gap-1 text-[11px] text-gray-500">
        <li>
          <Link to="/" className="text-gray-500">Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span className="text-gray-300">&gt;</span>
            <span className="text-gray-800 font-semibold">{item.label}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
}
