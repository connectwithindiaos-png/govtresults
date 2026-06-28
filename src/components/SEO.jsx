import { Helmet } from 'react-helmet-async';

const siteUrl = 'https://govtjobsindia.online';
const siteName = 'GovtJobsIndia.online';
const defaultDescription = 'Get Latest Government Jobs 2026, Sarkari Results, Admit Cards & Answer Keys at One Place. SSC CGL, UPSC, IBPS PO, RRB NTPC, Railway, Banking, Defence & State Govt Vacancies. Trusted by 4.8 Crore+ aspirants.';
const defaultTitle = 'GovtJobsIndia.online - India\'s #1 Government Job Portal | Sarkari Naukri, Results, Admit Cards';

export default function SEO({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  breadcrumbs,
  jobs,
  totalJobs,
}) {
  const pageTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const desc = description || defaultDescription;
  const url = canonical || siteUrl;
  const image = ogImage || `${siteUrl}/og-image.png`;

  const breadcrumbJson = breadcrumbs?.length ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      item: `${siteUrl}${b.path}`,
    })),
  } : null;

  const websiteJson = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    about: 'Government jobs in India, Sarkari naukri, SSC, UPSC, banking jobs, railway recruitment, admit cards, answer keys, Sarkari results',
    keywords: 'government jobs, sarkari naukri, ssc cgl, upsc, ibps po, rrb ntpc, railway jobs, banking jobs, defence jobs, teaching jobs, state government jobs, admit card, answer key, sarkari result, india gov jobs',
    inLanguage: 'hi-IN',
    audience: { '@type': 'Audience', audienceType: 'Government job aspirants in India' },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationJson = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    description: defaultDescription,
    foundingDate: '2024',
    areaServed: 'India',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      url: siteUrl,
    },
    sameAs: [
      'https://twitter.com/govtjobsindia',
      'https://t.me/govtjobsindia',
    ],
  };

  const jobPostingJson = jobs?.length ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: jobs.slice(0, 10).map((job, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'JobPosting',
        title: job.title,
        description: job.content_html?.substring(0, 500) || job.title,
        datePosted: job.posted_at || '',
        hiringOrganization: {
          '@type': 'Organization',
          name: job.source || job.company || 'Government of India',
        },
        jobLocation: job.job_location || job.state_label ? {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: job.job_location || job.state_label || 'India',
            addressCountry: 'IN',
          },
        } : undefined,
        employmentType: 'FULL_TIME',
        validThrough: job.last_date || '',
        url: job.link || siteUrl,
      },
    })),
  } : null;

  const faqJson = totalJobs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is GovtJobsIndia.online?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GovtJobsIndia.online is India\'s #1 platform for government job notifications, Sarkari results, admit cards, and answer keys. We aggregate job openings from central and state government departments including SSC, UPSC, banking, railway, defence, teaching, and state PSC exams.',
        },
      },
      {
        '@type': 'Question',
        name: `How many jobs are listed on GovtJobsIndia.online?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `We currently have ${totalJobs}+ active job listings across all categories including latest jobs, results, admit cards, answer keys, private jobs, and remote jobs from various government departments.`,
        },
      },
      {
        '@type': 'Question',
        name: 'How can I apply for SSC CGL 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To apply for SSC CGL 2026, visit the official SSC website at ssc.nic.in when the notification is released. You can also find direct application links, eligibility criteria, exam pattern, and last date reminders on GovtJobsIndia.online.',
        },
      },
      {
        '@type': 'Question',
        name: 'How to download UPSC admit card 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'UPSC admit cards are released on the official UPSC website at upsc.gov.in. We provide direct download links for UPSC Civil Services, NDA, CDS, CAPF, and other UPSC exam hall tickets on our admit cards page.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where can I check Sarkari result 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can check all Sarkari results 2026 on GovtJobsIndia.online. We provide direct result links for SSC, UPSC, railway, banking, state PSC, and all other government exam results as soon as they are announced.',
        },
      },
      {
        '@type': 'Question',
        name: 'How to fill SSC exam form online?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SSC exam forms can be filled online at ssc.nic.in. We provide step-by-step guidance, direct application links, fee details, and last date reminders for SSC CGL, CHSL, GD Constable, MTS, CPO, JE, and all SSC recruitment exams.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is GovtJobsIndia.online free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, GovtJobsIndia.online is completely free. You can browse all job listings, check results, download admit cards and answer keys without any charges. We also provide free instant alerts on WhatsApp and Telegram.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often are jobs updated on GovtJobsIndia.online?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our job listings are updated daily with the latest government vacancies, results, and admit card releases from various central and state government departments across India.',
        },
      },
    ],
  } : null;

  const schemas = [websiteJson, organizationJson, breadcrumbJson, jobPostingJson, faqJson].filter(Boolean);

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={desc} />
      <meta name="title" content={pageTitle} />
      <meta name="keywords" content="government jobs 2026, sarkari naukri, ssc cgl, upsc civil services, ibps po, rrb ntpc, sbi clerk, railway jobs, banking jobs, defence jobs, teaching jobs, state government jobs, admit card 2026, answer key 2026, sarkari result, latest govt jobs, exam form fill online, ssc form, upsc application, india government jobs, central government jobs, police recruitment, army jobs, navy recruitment, air force jobs, 10th pass government jobs, 12th pass government jobs, graduate government jobs" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta name="revisit-after" content="1 day" />
      <meta name="language" content="Hindi, English" />
      <meta name="author" content={siteName} />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="hi_IN" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
