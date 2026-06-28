import { useState, useMemo, useCallback } from 'react';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import CategoryTabs from './components/CategoryTabs';
import Breadcrumbs from './components/Breadcrumbs';
import { CTASectionMid } from './components/CTASection';
import GovtInfoSection from './components/GovtInfoSection';
import Footer from './components/Footer';
import { useFetchJobs } from './hooks/useFetchJobs';

function App() {
  const { data, loading, error, refetch } = useFetchJobs();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('latest_jobs');

  const searchResults = useMemo(() => {
    if (!searchQuery.trim() || !data) return null;
    const q = searchQuery.toLowerCase().trim();
    const r = {};
    Object.entries(data).forEach(([key, items]) => {
      if (Array.isArray(items)) {
        const f = items.filter(item =>
          item.title?.toLowerCase().includes(q) ||
          item.source?.toLowerCase().includes(q) ||
          item.state_label?.toLowerCase().includes(q)
        );
        if (f.length) r[key] = f;
      }
    });
    return Object.keys(r).length ? r : {};
  }, [searchQuery, data]);

  const handleNavClick = useCallback((href, tab) => {
    if (tab) setActiveTab(tab);
  }, []);

  const totalCount = useMemo(() => {
    if (!data) return 0;
    return Object.values(data).reduce((sum, arr) => sum + (Array.isArray(arr) ? arr.length : 0), 0);
  }, [data]);

  const allJobs = useMemo(() => {
    if (!data) return [];
    const flat = [];
    Object.values(data).forEach(arr => { if (Array.isArray(arr)) flat.push(...arr); });
    return flat;
  }, [data]);

  const tabLabels = {
    latest_jobs: 'Latest Jobs',
    results: 'Results',
    admit_cards: 'Admit Cards',
    answer_keys: 'Answer Keys',
    private_jobs: 'Private Jobs',
    remote_jobs: 'Remote Jobs',
  };

  const breadcrumbItems = [{ label: tabLabels[activeTab] || 'Home' }];

  return (
    <>
      <SEO
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: tabLabels[activeTab], path: `/#${activeTab}` }]}
        jobs={allJobs}
        totalJobs={totalCount}
      />

      <div className="min-h-screen bg-surface">
        <Navbar onNavClick={handleNavClick} />
        <main id="main-content" role="main">
          <Breadcrumbs items={breadcrumbItems} />
          <HeroSection data={data} onNavClick={handleNavClick} />
          <StatsSection data={data} />
          <CTASectionMid />
          <CategoryTabs
            data={searchResults || data}
            loading={loading}
            error={error}
            onRetry={refetch}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          <GovtInfoSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
