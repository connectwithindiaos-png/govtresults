import { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import { useFetchJobs } from './hooks/useFetchJobs';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';

function ScrollToTab() {
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab) {
      setTimeout(() => {
        document.querySelector('#jobs')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [location.search]);
  return null;
}

function AppContent() {
  const { data, loading, error, progress, refetch } = useFetchJobs();
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

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
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTab />
      <AppContent />
    </BrowserRouter>
  );
}
