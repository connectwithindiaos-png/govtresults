import { useState, useMemo, useEffect } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Inbox, Briefcase, FileCheck, TicketCheck, KeyRound, Building, Globe, ChevronDown } from 'lucide-react';
import JobCard from './JobCard';
import SearchBar from './SearchBar';

const categories = [
  { key: 'latest_jobs', label: 'Latest Jobs', icon: Briefcase },
  { key: 'results', label: 'Results', icon: FileCheck },
  { key: 'admit_cards', label: 'Admit Cards', icon: TicketCheck },
  { key: 'answer_keys', label: 'Answer Keys', icon: KeyRound },
  { key: 'private_jobs', label: 'Private Jobs', icon: Building },
  { key: 'remote_jobs', label: 'Remote Jobs', icon: Globe },
];

const ITEMS_PER_PAGE = 12;

function SkeletonCard() {
  return (
    <div className="card p-4">
      <div className="skeleton-pulse h-1 w-full rounded mb-3" />
      <div className="skeleton-pulse h-4 w-24 rounded mb-2" />
      <div className="skeleton-pulse h-4 w-full rounded mb-1" />
      <div className="skeleton-pulse h-4 w-3/4 rounded mb-3" />
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[1,2,3].map(i => <div key={i} className="skeleton-pulse h-12 rounded" />)}
      </div>
      <div className="skeleton-pulse h-3 w-32 rounded" />
    </div>
  );
}

export default function CategoryTabs({ data, loading, error, onRetry, activeTab: externalTab, onTabChange, searchQuery, onSearchChange }) {
  const [internalTab, setInternalTab] = useState('latest_jobs');
  const [page, setPage] = useState({});

  const activeTab = externalTab || internalTab;
  const currentPage = page[activeTab] || 1;

  const jobs = useMemo(() => {
    if (!data) return [];
    return data[activeTab] || [];
  }, [data, activeTab]);

  const paginatedJobs = useMemo(() => {
    return jobs.slice(0, currentPage * ITEMS_PER_PAGE);
  }, [jobs, currentPage]);

  const hasMore = paginatedJobs.length < jobs.length;

  const handleTabChange = (value) => {
    setInternalTab(value);
    if (onTabChange) onTabChange(value);
    setPage((prev) => ({ ...prev, [value]: prev[value] || 1 }));
  };

  // Sync external tab changes
  useEffect(() => {
    if (externalTab && externalTab !== internalTab) {
      setInternalTab(externalTab);
    }
  }, [externalTab]);

  const handleLoadMore = () => {
    setPage((prev) => ({ ...prev, [activeTab]: (prev[activeTab] || 1) + 1 }));
  };

  return (
    <section id="jobs" className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-4">
          <div className="section-sub">Browse Opportunities</div>
          <h2 className="section-heading" id="job-listing">Latest Job Openings</h2>
        </div>

        {/* Search */}
        <div className="mb-5">
          <SearchBar value={searchQuery} onChange={onSearchChange} />
        </div>

        <Tabs.Root value={activeTab} onValueChange={handleTabChange}>
          {/* Tab List */}
          <Tabs.List className="flex overflow-x-auto gap-1.5 mb-6 pb-1 scrollbar-hide">
            {categories.map((cat) => {
              const count = data?.[cat.key]?.length || 0;
              const isActive = activeTab === cat.key;
              return (
                <Tabs.Trigger key={cat.key} value={cat.key}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded text-xs font-semibold whitespace-nowrap border transition-colors shrink-0 ${
                    isActive
                      ? 'bg-accent text-white border-accent'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-800'
                  }`}
                >
                  <cat.icon size={14} />
                  {cat.label}
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>{count}</span>
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>

          {/* Tab Content */}
          {categories.map((cat) => (
            <Tabs.Content key={cat.key} value={cat.key}>
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
                </div>
              ) : error ? (
                <div className="text-center py-16">
                  <AlertTriangle size={40} className="mx-auto mb-3 text-amber-500" />
                  <h3 className="text-base font-bold text-gray-700 mb-1">Failed to load data</h3>
                  <p className="text-xs text-gray-500 mb-4">{error}</p>
                  <button onClick={onRetry}
                    className="bg-accent hover:bg-accent-dark text-white px-5 py-2 rounded text-sm font-semibold transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              ) : paginatedJobs.length === 0 ? (
                <div className="text-center py-16">
                  <Inbox size={40} className="mx-auto mb-3 text-gray-300" />
                  <h3 className="text-base font-bold text-gray-700 mb-1">No entries found</h3>
                  <p className="text-xs text-gray-500">Check back later for new updates</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <AnimatePresence mode="popLayout">
                      {paginatedJobs.map((item, i) => (
                        <motion.div key={item.id || item.title + i}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.03 }}
                        >
                          <JobCard item={item} categoryKey={activeTab} index={i} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {hasMore && (
                    <div className="mt-8 text-center">
                      <button onClick={handleLoadMore}
                        className="inline-flex items-center gap-1.5 bg-white border border-gray-300 hover:border-accent text-gray-700 hover:text-accent px-6 py-2.5 rounded text-sm font-semibold transition-colors"
                      >
                        Load More <ChevronDown size={14} />
                      </button>
                      <p className="text-[10px] text-gray-400 mt-2">
                        Showing {paginatedJobs.length} of {jobs.length} {cat.label.toLowerCase()}
                      </p>
                    </div>
                  )}
                </>
              )}
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  );
}
