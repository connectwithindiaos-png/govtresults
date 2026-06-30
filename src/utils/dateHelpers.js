const months = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const datePatterns = [
  /Updated:?\s*(\d{1,2}\s+\w+\s+\d{4})/i,
  /Post[ed]?\s*[Dd]ate:?\s*(\d{1,2}\s+\w+\s+\d{4})/i,
  /Posted?\s*on:?\s*(\d{1,2}\s+\w+\s+\d{4})/i,
  /Published:?\s*(\d{1,2}\s+\w+\s+\d{4})/i,
  /Released:?\s*(\d{1,2}\s+\w+\s+\d{4})/i,
  /Notif[iy]cation\s*[Dd]ate:?\s*(\d{1,2}\s+\w+\s+\d{4})/i,
  /Updated:?\s*(\d{1,2}[-/]\d{1,2}[-/]\d{4})/i,
  /Post[ed]?\s*[Dd]ate:?\s*(\d{1,2}[-/]\d{1,2}[-/]\d{4})/i,
  /Published:?\s*(\d{1,2}[-/]\d{1,2}[-/]\d{4})/i,
  /From\s*(\d{1,2}[-/]\d{1,2}[-/]\d{4})/i,
];

function normalizeDate(str) {
  if (/[-/]/.test(str)) {
    const p = str.split(/[-/]/);
    if (p.length === 3) {
      const d = +p[0], m = +p[1] - 1, y = p[2];
      if (m >= 0 && m < 12 && d >= 1 && d <= 31) {
        return `${d} ${monthArr[m]} ${y}`;
      }
    }
  }
  return str;
}

export function extractDate(item) {
  const html = item.content_html || '';
  if (html) {
    for (const pattern of datePatterns) {
      const m = html.match(pattern);
      if (m) return normalizeDate(m[1]);
    }
  }
  return item.posted_at || '';
}

export function getTag(dateStr) {
  if (!dateStr) return null;
  const parts = dateStr.match(/(\d{1,2})\s+(\w+)\s+(\d{4})/);
  if (!parts) return null;
  const d = new Date(+parts[3], months[parts[2]], +parts[1]);
  const diff = (Date.now() - d.getTime()) / 86400000;
  if (diff < 3) return { label: 'New', cls: 'tag-new' };
  if (diff < 8) return { label: 'Hot', cls: 'tag-hot' };
  return null;
}
