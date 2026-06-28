export default async function handler(req, res) {
  try {
    const response = await fetch('https://abhishek-kd-43.github.io/jobs/data.json');
    const data = await response.json();
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
    res.status(200).json(data);
  } catch (error) {
    res.status(502).json({ error: 'Failed to fetch job data' });
  }
}
