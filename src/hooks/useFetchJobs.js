import { useState, useEffect, useRef } from 'react';

const DIRECT_URL = 'https://abhishek-kd-43.github.io/jobs/data.json';

function getPrimaryUrl() {
  return import.meta.env.DEV ? '/api/jobs-data' : '/api/jobs';
}

export function useFetchJobs() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => { mountedRef.current = false; };
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    setProgress(5);

    const urlsToTry = [getPrimaryUrl(), DIRECT_URL];

    for (const url of urlsToTry) {
      if (url === DIRECT_URL) setProgress(50);
      else setProgress(10);

      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 30000);

        const res = await fetch(url, { signal: controller.signal });
        clearTimeout(timeout);

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        setProgress(url === DIRECT_URL ? 80 : 60);

        const json = await res.json();
        if (json && typeof json === 'object' && Object.keys(json).length) {
          if (mountedRef.current) {
            setData(json);
            setLoading(false);
            setProgress(100);
            setTimeout(() => { if (mountedRef.current) setProgress(null); }, 500);
          }
          return;
        }
      } catch (err) {
        setProgress(url === DIRECT_URL ? 90 : 40);
      }
    }

    if (mountedRef.current) {
      setError('Failed to load job data. Please try again.');
      setLoading(false);
      setProgress(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, progress, refetch: fetchData };
}
