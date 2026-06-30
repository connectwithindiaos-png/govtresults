import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { exams } from '../data/exams';

const siteUrl = 'https://govtjobsindia.online';

export default function ExamPage() {
  const location = useLocation();
  const examSlug = location.pathname.replace('/', '');
  const exam = exams[examSlug];

  if (!exam) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">404 - Exam Not Found</h1>
        <p className="text-sm text-gray-600 mb-4">The exam page you are looking for does not exist.</p>
        <Link to="/" className="bg-gray-800 text-white px-4 py-2 text-sm font-bold">Go to Home</Link>
      </div>
    );
  }

  const { title, heading, metaTitle, metaDesc, canonical, keywords, content, totalVacancies, lastDate, organization, website, applyLink, category, importantDates, faq } = exam;

  const breadcrumbItems = [{ label: title }];

  const faqJson = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (faq || []).map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={keywords.join(', ')} />
        <link rel="canonical" href={`${siteUrl}${canonical}`} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={`${siteUrl}${canonical}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${siteUrl}/og-image.svg`} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:image" content={`${siteUrl}/og-image.svg`} />
        <script type="application/ld+json">{JSON.stringify(faqJson)}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
            { '@type': 'ListItem', position: 2, name: title, item: `${siteUrl}${canonical}` },
          ],
        })}</script>
      </Helmet>

      <Breadcrumbs items={breadcrumbItems} />

      <div className="bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-1.5 mb-3">
            <span className="bg-red-100 text-red-800 text-[10px] font-bold px-2 py-0.5">{category}</span>
            <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5">{totalVacancies} Vacancies</span>
            {lastDate && <span className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5">Last Date: {lastDate}</span>}
          </div>

          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{heading}</h1>

          <div className="text-[13px] text-gray-600 leading-relaxed mb-4">
            <p>{content.overview}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {applyLink && applyLink !== '#' && (
              <a href={applyLink} target="_blank" rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 text-[13px] font-bold"
              >
                Apply Online
              </a>
            )}
            <Link to={`/jobs/latest-jobs?q=${encodeURIComponent(title)}`}
              className="border border-gray-300 text-gray-700 px-4 py-2 text-[13px] font-semibold"
            >
              View Related Jobs
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {content.eligibility && (
              <div className="border border-gray-200 p-4">
                <h2 className="text-sm font-bold text-gray-900 mb-3">Eligibility Criteria</h2>
                <ul className="space-y-1.5">
                  {content.eligibility.nationality && <li className="text-[13px] text-gray-600 flex gap-2"><span className="text-gray-400 font-bold shrink-0">•</span> {content.eligibility.nationality}</li>}
                  {content.eligibility.age && <li className="text-[13px] text-gray-600 flex gap-2"><span className="text-gray-400 font-bold shrink-0">•</span> Age: {content.eligibility.age}</li>}
                  {content.eligibility.education && <li className="text-[13px] text-gray-600 flex gap-2"><span className="text-gray-400 font-bold shrink-0">•</span> Education: {content.eligibility.education}</li>}
                </ul>
              </div>
            )}

            {content.posts && (
              <div className="border border-gray-200 p-4">
                <h2 className="text-sm font-bold text-gray-900 mb-3">Available Posts</h2>
                <ul className="space-y-1">
                  {content.posts.map((post, i) => (
                    <li key={i} className="text-[13px] text-gray-600 flex gap-2">
                      <span className="text-gray-400 shrink-0">•</span> {post}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {content.selectionProcess && (
              <div className="border border-gray-200 p-4">
                <h2 className="text-sm font-bold text-gray-900 mb-3">Selection Process</h2>
                <ol className="space-y-1">
                  {content.selectionProcess.map((step, i) => (
                    <li key={i} className="text-[13px] text-gray-600 flex gap-2">
                      <span className="text-gray-400 font-bold shrink-0">{i + 1}.</span> {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {content.examPattern && (
              <div className="border border-gray-200 p-4">
                <h2 className="text-sm font-bold text-gray-900 mb-3">Exam Pattern</h2>
                <ul className="space-y-1.5">
                  {content.examPattern.tier1 && <li className="text-[13px] text-gray-600"><span className="font-semibold text-gray-800">Tier-I:</span> {content.examPattern.tier1}</li>}
                  {content.examPattern.tier2 && <li className="text-[13px] text-gray-600"><span className="font-semibold text-gray-800">Tier-II:</span> {content.examPattern.tier2}</li>}
                  {content.examPattern.tier3 && <li className="text-[13px] text-gray-600"><span className="font-semibold text-gray-800">Tier-III:</span> {content.examPattern.tier3}</li>}
                  {content.examPattern.tier4 && <li className="text-[13px] text-gray-600"><span className="font-semibold text-gray-800">Tier-IV:</span> {content.examPattern.tier4}</li>}
                </ul>
              </div>
            )}

            {faq && faq.length > 0 && (
              <div className="border border-gray-200 p-4">
                <h2 className="text-sm font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {faq.map((item, i) => (
                    <div key={i}>
                      <h3 className="text-[13px] font-bold text-gray-800 mb-1">{item.q}</h3>
                      <p className="text-[12px] text-gray-600">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="border border-gray-200 p-4">
              <h2 className="text-xs font-bold text-gray-900 mb-3 uppercase">Exam Details</h2>
              <dl className="space-y-2">
                <div><dt className="text-[10px] text-gray-400 uppercase">Organization</dt><dd className="text-[12px] text-gray-800 font-semibold">{organization}</dd></div>
                <div><dt className="text-[10px] text-gray-400 uppercase">Total Vacancies</dt><dd className="text-[12px] text-gray-800 font-semibold">{totalVacancies}</dd></div>
                <div><dt className="text-[10px] text-gray-400 uppercase">Category</dt><dd className="text-[12px] text-gray-800">{category}</dd></div>
                <div><dt className="text-[10px] text-gray-400 uppercase">Official Website</dt><dd className="text-[12px]"><a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="text-[#00C]">{website}</a></dd></div>
                {lastDate && <div><dt className="text-[10px] text-gray-400 uppercase">Last Date</dt><dd className="text-[12px] text-red-700 font-bold">{lastDate}</dd></div>}
              </dl>
            </div>

            {importantDates && importantDates.length > 0 && (
              <div className="border border-gray-200 p-4">
                <h2 className="text-xs font-bold text-gray-900 mb-3 uppercase">Important Dates</h2>
                <table className="w-full text-[11px]">
                  <tbody>
                    {importantDates.map((d, i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-b-0">
                        <td className="py-1.5 text-gray-600">{d.event}</td>
                        <td className="py-1.5 text-gray-800 font-semibold text-right">{d.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {content.vacancyDetails && (
              <div className="border border-gray-200 p-4">
                <h2 className="text-xs font-bold text-gray-900 mb-3 uppercase">Vacancy Details</h2>
                <div className="overflow-x-auto">
                  <table className="text-[10px] w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-1 text-left">Post</th>
                        <th className="p-1 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {content.vacancyDetails.map((v, i) => (
                        <tr key={i} className="border-b border-gray-100">
                          <td className="p-1 text-gray-700">{v.post}</td>
                          <td className="p-1 text-right font-bold">{v.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {content.payScale && (
              <div className="border border-gray-200 p-4">
                <h2 className="text-xs font-bold text-gray-900 mb-3 uppercase">Pay Scale</h2>
                <div className="space-y-1.5">
                  {content.payScale.map((p, i) => (
                    <div key={i} className="flex justify-between text-[12px]">
                      <span className="text-gray-600">{p.post}</span>
                      <span className="text-gray-800 font-semibold">{p.salary}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
