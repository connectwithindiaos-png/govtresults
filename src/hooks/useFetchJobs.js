import { useState, useEffect } from 'react';

const DIRECT_URL = 'https://abhishek-kd-43.github.io/jobs/data.json';
const PROXY_FALLBACK = 'https://corsproxy.io/?' + DIRECT_URL;

function getPrimaryUrl() {
  return import.meta.env.DEV ? DIRECT_URL : '/api/jobs';
}

export function useFetchJobs() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    const urlsToTry = [getPrimaryUrl()];
    if (!import.meta.env.DEV) urlsToTry.push(DIRECT_URL);
    urlsToTry.push(PROXY_FALLBACK);

    for (const url of urlsToTry) {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (json && typeof json === 'object' && Object.keys(json).length) {
          setData(json);
          setLoading(false);
          return;
        }
      } catch {
        // try next URL
      }
    }

    setError('Failed to load job data. Please try again.');
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
}
