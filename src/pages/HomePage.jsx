import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import CategoryTabs from '../components/CategoryTabs';
import Breadcrumbs from '../components/Breadcrumbs';
import GovtInfoSection from '../components/GovtInfoSection';

const tabLabels = {
  latest_jobs: 'Latest Jobs',
  results: 'Results',
  admit_cards: 'Admit Cards',
  answer_keys: 'Answer Keys',
  private_jobs: 'Private Jobs',
  remote_jobs: 'Remote Jobs',
};

export default function HomePage({ data, rawData, loading, error, onRetry, activeTab: externalTab, onTabChange, searchQuery, onSearchChange }) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const tabFromUrl = params.get('tab');

  useEffect(() => {
    const p = new URLSearchParams(location.search);
    const q = p.get('q');
    if (q) onSearchChange(q);
  }, [location.search]);

  const [internalTab, setInternalTab] = useState('latest_jobs');
  const activeTab = externalTab || tabFromUrl || internalTab;

  const handleTabChange = (tab) => {
    setInternalTab(tab);
    if (onTabChange) onTabChange(tab);
  };

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

  const breadcrumbItems = activeTab && activeTab !== 'latest_jobs'
    ? [{ label: tabLabels[activeTab] || activeTab }]
    : [];

  return (
    <>
      <SEO
        breadcrumbs={[{ name: 'Home', path: '/' }, ...(breadcrumbItems.length ? [{ name: breadcrumbItems[0].label, path: `/?tab=${activeTab}` }] : [])]}
        jobs={allJobs}
        totalJobs={totalCount}
        activeTab={activeTab}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <HeroSection data={rawData || data} searchQuery={searchQuery} onSearchChange={onSearchChange} />
      <StatsSection data={rawData || data} />
      <CategoryTabs
        data={data}
        loading={loading}
        error={error}
        onRetry={onRetry}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
      />
      <GovtInfoSection />
    </>
  );
}
