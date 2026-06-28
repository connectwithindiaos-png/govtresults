import { useEffect, useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import CategoryTabs from '../components/CategoryTabs';
import GovtInfoSection from '../components/GovtInfoSection';

const slugToKey = {
  'latest-jobs': 'latest_jobs',
  'results': 'results',
  'admit-cards': 'admit_cards',
  'answer-keys': 'answer_keys',
  'private-jobs': 'private_jobs',
  'remote-jobs': 'remote_jobs',
};

const tabLabels = {
  latest_jobs: 'Latest Jobs',
  results: 'Results',
  admit_cards: 'Admit Cards',
  answer_keys: 'Answer Keys',
  private_jobs: 'Private Jobs',
  remote_jobs: 'Remote Jobs',
};

export default function JobsPage({ data, loading, error, onRetry, searchQuery, onSearchChange }) {
  const { category } = useParams();
  const location = useLocation();
  const resolvedTab = slugToKey[category] || 'latest_jobs';
  const label = tabLabels[resolvedTab] || 'Jobs';

  useEffect(() => {
    const p = new URLSearchParams(location.search);
    const q = p.get('q');
    if (q) onSearchChange(q);
  }, [location.search]);

  const allJobs = useMemo(() => {
    if (!data) return [];
    const flat = [];
    Object.values(data).forEach(arr => { if (Array.isArray(arr)) flat.push(...arr); });
    return flat;
  }, [data]);

  const totalCount = useMemo(() => {
    if (!data) return 0;
    return Object.values(data).reduce((sum, arr) => sum + (Array.isArray(arr) ? arr.length : 0), 0);
  }, [data]);

  return (
    <>
      <SEO
        title={`${label} 2026 - Sarkari Naukri, Govt Jobs`}
        description={`Find latest ${label.toLowerCase()} 2026 - government job notifications, Sarkari results, admit cards, and answer keys. Updated daily for SSC CGL, UPSC, Banking, Railway & more.`}
        canonical={`/jobs/${category}`}
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: label, path: `/jobs/${category}` }]}
        jobs={allJobs}
        totalJobs={totalCount}
        activeTab={resolvedTab}
      />
      <Breadcrumbs items={[{ label }]} />
      <CategoryTabs
        data={data}
        loading={loading}
        error={error}
        onRetry={onRetry}
        activeTab={resolvedTab}
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
      />
      <GovtInfoSection />
    </>
  );
}
