import { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import { useFetchJobs } from './hooks/useFetchJobs';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';

function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-3">404 - Page Not Found</h1>
      <p className="text-sm text-gray-600 mb-4">The page you are looking for does not exist.</p>
      <Link to="/" className="bg-gray-800 text-white px-4 py-2 text-sm font-bold">Go to Home</Link>
    </div>
  );
}

function AppContent() {
  const { data, loading, error, progress, refetch } = useFetchJobs();
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const p = new URLSearchParams(location.search);
    const q = p.get('q');
    if (q && q !== searchQuery) setSearchQuery(q);
  }, []);

  const handleTabChange = (tab) => {
    navigate({ search: `?tab=${tab}` }, { replace: true });
    setTimeout(() => {
      document.querySelector('#jobs')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const filteredData = useMemo(() => {
    if (!searchQuery.trim() || !data) return data;
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
    return Object.keys(r).length ? r : data;
  }, [searchQuery, data]);

  return (
    <>
      <ProgressBar progress={progress} />
      <Navbar />
      <main id="main-content" role="main">
        <Routes>
          <Route path="/" element={
            <HomePage
              data={filteredData}
              rawData={data}
              loading={loading}
              error={error}
              onRetry={refetch}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onTabChange={handleTabChange}
            />
          } />
          <Route path="/jobs/:category" element={
            <JobsPage
              data={filteredData}
              loading={loading}
              error={error}
              onRetry={refetch}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
