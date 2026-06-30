import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { staticPages } from '../data/exams';

const siteUrl = 'https://govtjobsindia.online';

export default function StaticPage() {
  const location = useLocation();
  const slug = location.pathname.replace('/', '');
  const page = staticPages[slug];

  if (!page) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDesc} />
        <link rel="canonical" href={`${siteUrl}${page.canonical}`} />
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDesc} />
        <meta property="og:url" content={`${siteUrl}${page.canonical}`} />
      </Helmet>

      <Breadcrumbs items={[{ label: page.heading }]} />

      <div className="bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{page.heading}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {page.content.map((section, i) => (
            <div key={i}>
              <h2 className="text-sm font-bold text-gray-900 mb-2">{section.heading}</h2>
              <p className="text-[13px] text-gray-600 leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
