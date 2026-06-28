import { Link } from 'react-router-dom';
import NotificationTicker from './NotificationTicker';
import { extractDate, getTag } from '../utils/dateHelpers';

export default function HeroSection({ data, searchQuery, onSearchChange }) {
  const govtJobs = data?.latest_jobs || [];
  const results = data?.results || [];
  const admitCards = data?.admit_cards || [];
  const answerKeys = data?.answer_keys || [];
  const featured = govtJobs.slice(0, 5);

  return (
    <section id="home">
      <div className="bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-3">

          <div className="mb-2.5">
            <h1 className="text-base sm:text-lg font-bold text-gray-900">
              सरकारी नौकरी &mdash; GovtJobsIndia.online
            </h1>
          </div>

          <div className="text-[12px] text-gray-600 mb-2.5">
            <b className="text-gray-900">{govtJobs.length}+</b> Latest Jobs &nbsp;
            <b className="text-gray-900">{results.length}+</b> Results &nbsp;
            <b className="text-gray-900">{admitCards.length}+</b> Admit Cards &nbsp;
            <b className="text-gray-900">{answerKeys.length}+</b> Answer Keys
          </div>

          <div className="text-[12px] mb-2.5">
            <Link to="/jobs/latest-jobs" className="text-[#00C] mr-2.5">Latest Jobs ({govtJobs.length})</Link>
            <Link to="/jobs/results" className="text-[#00C] mr-2.5">Results ({results.length})</Link>
            <Link to="/jobs/admit-cards" className="text-[#00C] mr-2.5">Admit Cards ({admitCards.length})</Link>
            <Link to="/jobs/answer-keys" className="text-[#00C] mr-2.5">Answer Keys ({answerKeys.length})</Link>
            <Link to="/jobs/private-jobs" className="text-[#00C] mr-2.5">Private Jobs ({data?.private_jobs?.length || 0})</Link>
            <Link to="/jobs/remote-jobs" className="text-[#00C]">Remote Jobs ({data?.remote_jobs?.length || 0})</Link>
          </div>

          <div className="mb-2.5">
            <div className="flex max-w-lg">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search for jobs, results, admit cards..."
                className="flex-1 border border-gray-400 px-2 py-1.5 text-[13px] text-gray-900 bg-white"
              />
              <button
                onClick={() => {
                  document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gray-800 text-white px-4 py-1.5 text-[13px] font-bold shrink-0"
              >
                Search
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-0 lg:gap-3">
            <div className="flex-1 border border-gray-400 mb-3 lg:mb-0">
              <div className="bg-gray-800 text-white px-2.5 py-1.5 text-[12px] font-bold flex items-center justify-between">
                <span>Latest Government Jobs</span>
                <Link to="/jobs/latest-jobs" className="text-[#8CF] text-[11px] font-semibold">View All &rarr;</Link>
              </div>
              <div>
                {featured.map((item, i) => {
                  const dateStr = extractDate(item);
                  const tag = getTag(dateStr);
                  const loc = item.job_location || item.state_label || '';
                  return (
                    <div key={item.id || i} className="px-2.5 py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="flex items-start gap-1.5">
                        <span className="text-[10px] text-gray-400 font-mono w-4 shrink-0">{i + 1}.</span>
                        <div className="min-w-0 flex-1">
                          {item.original_url ? <a href={item.original_url} target="_blank" rel="noopener noreferrer"
                            className="text-[13px] font-bold text-[#00C]"
                          >
                          {item.title}
                        </a> : <span className="text-[13px] font-bold text-gray-700">{item.title}</span>}
                          {tag && <span className={`ml-1 text-[11px] ${tag.cls}`}> {tag.label} </span>}
                          <div className="text-[10px] text-gray-500">
                            {[item.source, loc, dateStr].filter(Boolean).join(' | ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex-1 border border-gray-400">
              <div className="bg-gray-800 text-white px-2.5 py-1.5 text-[12px] font-bold">
                Popular Exams 2026
              </div>
              <div className="p-2.5">
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {[
                    'SSC CGL 2026', 'SSC CHSL 2026', 'UPSC Civil Services',
                    'UPSC NDA 2026', 'IBPS PO 2026', 'SBI Clerk 2026',
                    'RRB NTPC 2026', 'RRB Group D 2026', 'CTET 2026',
                    'Indian Army Soldier', 'UP Police Constable', 'BPSC 2026',
                  ].map((exam) => (
                    <Link key={exam} to={`/jobs/latest-jobs?q=${encodeURIComponent(exam)}`}
                      className="text-[#00C] text-[11px]"
                    >
                      {exam}
                    </Link>
                  ))}
                </div>
                <div className="text-center mt-2 pt-1.5 border-t border-gray-200">
                  <Link to="/jobs/latest-jobs" className="text-[#00C] text-[11px] font-bold">View All Exams &rarr;</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <NotificationTicker items={govtJobs} />
    </section>
  );
}
