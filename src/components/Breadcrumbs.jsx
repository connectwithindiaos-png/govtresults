import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  if (!items?.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-0">
      <ol className="flex items-center gap-1.5 text-xs text-gray-500" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <a href="/" itemProp="item" className="hover:text-accent transition-colors flex items-center gap-1">
            <Home size={12} />
            <span itemProp="name">Home</span>
          </a>
          <meta itemProp="position" content="1" />
        </li>
        {items.map((item, i) => (
          <li key={i} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <ChevronRight size={10} className="text-gray-300" />
            {item.href ? (
              <a href={item.href} itemProp="item" className="hover:text-accent transition-colors ml-1">
                <span itemProp="name">{item.label}</span>
              </a>
            ) : (
              <span itemProp="name" className="text-gray-800 font-semibold ml-1">{item.label}</span>
            )}
            <meta itemProp="position" content={String(i + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
