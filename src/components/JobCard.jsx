const months = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };

function extractDate(item) {
  if (item.posted_at) return item.posted_at;
  const m = (item.content_html || '').match(/Updated:?\s*(\d{1,2}\s+\w+\s+\d{4})/i);
  return m ? m[1] : '';
}

function getTag(dateStr) {
  if (!dateStr) return null;
  const parts = dateStr.match(/(\d{1,2})\s+(\w+)\s+(\d{4})/);
  if (!parts) return null;
  const d = new Date(+parts[3], months[parts[2]], +parts[1]);
  const diff = (Date.now() - d.getTime()) / 86400000;
  if (diff < 3) return { label: 'New', cls: 'tag-new' };
  if (diff < 8) return { label: 'Hot', cls: 'tag-hot' };
  return null;
}

export default function JobCard({ item, categoryKey, index = 0 }) {
  const dateStr = extractDate(item);
  const tag = getTag(dateStr);
  const isPrivate = categoryKey === 'private_jobs' || categoryKey === 'remote_jobs';
  const location = item.job_location || (isPrivate ? item.state_label : '');
  const company = item.company || '';

  return (
    <tr className="border-b border-border-light">
      <td className="py-2 px-2 text-[11px] text-gray-400 align-top text-center w-8">{index + 1}</td>
      <td className="py-2 px-2">
        <a href={item.original_url || '#'} target="_blank" rel="noopener noreferrer"
          className="text-[13px] font-semibold text-primary leading-snug"
        >
          {item.title}
        </a>
        {tag && <span className={`ml-1.5 text-[11px] ${tag.cls}`}> {tag.label} </span>}
        {(company || location) && (
          <div className="text-[10px] text-gray-400 mt-0.5">
            {company && <span>{company}</span>}
            {company && location && <span className="mx-1">|</span>}
            {location && <span>{location}</span>}
          </div>
        )}
      </td>
      <td className="py-2 px-2 text-[11px] text-gray-500 whitespace-nowrap hidden sm:table-cell">{item.source || '-'}</td>
      <td className="py-2 px-2 text-[11px] text-gray-500 whitespace-nowrap hidden sm:table-cell">{dateStr || '-'}</td>
      <td className="py-2 px-2 text-center">
        <a href={item.original_url || '#'} target="_blank" rel="noopener noreferrer"
          className="text-accent text-[11px] font-semibold"
        >
          Apply
        </a>
      </td>
    </tr>
  );
}
