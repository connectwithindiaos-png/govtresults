import { extractDate, getTag } from '../utils/dateHelpers';

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
        {item.original_url ? (
          <a href={item.original_url} target="_blank" rel="noopener noreferrer"
            className="text-[13px] font-semibold text-primary leading-snug"
          >
            {item.title}
          </a>
        ) : (
          <span className="text-[13px] font-semibold text-gray-800 leading-snug">{item.title}</span>
        )}
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
        {item.original_url ? (
          <a href={item.original_url} target="_blank" rel="noopener noreferrer"
            className="text-accent text-[11px] font-semibold"
          >
            Apply
          </a>
        ) : (
          <span className="text-[11px] text-gray-400">-</span>
        )}
      </td>
    </tr>
  );
}
