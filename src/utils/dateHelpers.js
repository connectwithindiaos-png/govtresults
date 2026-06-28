const months = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };

export function extractDate(item) {
  if (item.posted_at) return item.posted_at;
  const m = (item.content_html || '').match(/Updated:?\s*(\d{1,2}\s+\w+\s+\d{4})/i);
  return m ? m[1] : '';
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
