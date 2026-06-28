import { useState, useEffect, useMemo } from 'react';
import JobCard from './JobCard';

const categories = [
  { key: 'latest_jobs', label: 'Latest Jobs' },
  { key: 'results', label: 'Results' },
  { key: 'admit_cards', label: 'Admit Cards' },
  { key: 'answer_keys', label: 'Answer Keys' },
  { key: 'private_jobs', label: 'Private Jobs' },
  { key: 'remote_jobs', label: 'Remote Jobs' },
];

const ITEMS_PER_PAGE = 12;

export default function CategoryTabs({ data, loading, error, onRetry, activeTab: externalTab, onTabChange, searchQuery, onSearchChange }) {
  const [internalTab, setInternalTab] = useState(externalTab || 'latest_jobs');
  const [page, setPage] = useState({});

  const activeTab = internalTab;
  const currentPage = page[activeTab] || 1;

  useEffect(() => {
    if (externalTab && externalTab !== internalTab) {
      setInternalTab(externalTab);
    }
  }, [externalTab]);

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

  const handleLoadMore = () => {
    setPage((prev) => ({ ...prev, [activeTab]: (prev[activeTab] || 1) + 1 }));
  };

  return (
    <section id="jobs" className="py-6 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading" id="job-listing">Latest Job Openings</h2>

        {/* Search */}
        <div className="mb-4">
          <div className="relative max-w-2xl mx-auto">
            <div className="relative flex items-center bg-white border border-gray-200">
              <span className="text-gray-400 text-xs ml-3 font-semibold">Search:</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search for jobs, results, admit cards..."
                className="w-full bg-transparent px-3 py-2.5 text-gray-700 placeholder:text-gray-400 text-sm focus:outline-none"
              />
              {searchQuery && (
                <button onClick={() => onSearchChange('')} className="mr-1.5 px-1.5 text-[11px] text-gray-400">
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Plain tab buttons - no Radix, no icons */}
        <div className="flex flex-wrap gap-1 mb-5">
          {categories.map((cat) => {
            const count = data?.[cat.key]?.length || 0;
            const isActive = activeTab === cat.key;
            return (
              <button key={cat.key} onClick={() => handleTabChange(cat.key)}
                className={`text-xs font-semibold px-3 py-1.5 border whitespace-nowrap ${
                  isActive
                    ? 'bg-accent text-white border-accent'
                    : 'bg-white text-gray-600 border-gray-200'
                }`}
              >
                {cat.label} <span className={`text-[10px] font-bold px-1.5 py-0.5 ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* Content - table layout, no skeleton loaders */}
        {loading ? (
          <div className="text-center py-8">
            <p className="text-sm text-gray-500">Loading...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-sm font-semibold text-gray-700 mb-1">Failed to load data</p>
            <p className="text-xs text-gray-500 mb-3">{error}</p>
            <button onClick={onRetry}
              className="bg-accent hover:bg-accent-dark text-white px-4 py-1.5 text-sm font-semibold"
            >
              Try Again
            </button>
          </div>
        ) : paginatedJobs.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-sm font-semibold text-gray-700 mb-1">No entries found</p>
            <p className="text-xs text-gray-500">Check back later for new updates</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="govt-table">
                <thead>
                  <tr>
                    <th className="w-8">#</th>
                    <th>Job Title</th>
                    <th className="w-24 hidden sm:table-cell">Source</th>
                    <th className="w-32 hidden sm:table-cell">Date</th>
                    <th className="w-16">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedJobs.map((item, i) => (
                    <JobCard key={item.id || item.title + i} item={item} categoryKey={activeTab} index={i} />
                  ))}
                </tbody>
              </table>
            </div>

            {hasMore && (
              <div className="mt-6 text-center">
                <button onClick={handleLoadMore}
                  className="bg-white border border-gray-300 text-gray-700 px-5 py-2 text-sm font-semibold"
                >
                  Load More
                </button>
                <p className="text-[10px] text-gray-400 mt-1.5">
                  Showing {paginatedJobs.length} of {jobs.length}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
