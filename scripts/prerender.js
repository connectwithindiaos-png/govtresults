import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve } from 'path';

const dist = resolve(process.cwd(), 'dist');

const pages = [
  {
    path: 'index.html',
    url: '/',
    title: 'GovtJobsIndia.online - India\'s #1 Government Job Portal | Sarkari Naukri, Results, Admit Cards',
    desc: 'Get Latest Government Jobs 2026, Sarkari Results, Admit Cards & Answer Keys at One Place. SSC CGL, UPSC, IBPS PO, RRB NTPC, Railway, Banking, Defence & State Govt Vacancies. Trusted by 4.8 Crore+ aspirants.',
    canonical: 'https://govtjobsindia.online/',
    ogTitle: 'GovtJobsIndia.online - India\'s #1 Government Job Portal | Sarkari Naukri, Results, Admit Cards',
    ogDesc: 'Get Latest Government Jobs 2026, Sarkari Results, Admit Cards & Answer Keys at One Place. SSC CGL, UPSC, IBPS PO, RRB NTPC, Railway, Banking, Defence & State Govt Vacancies.',
    twTitle: 'GovtJobsIndia.online - India\'s #1 Government Job Portal',
  },
  {
    path: 'jobs/latest-jobs/index.html',
    url: '/jobs/latest-jobs',
    title: 'Latest Government Jobs 2026 - Sarkari Naukri, Apply Online | GovtJobsIndia.online',
    desc: 'Find latest government jobs 2026 across SSC CGL, UPSC, Banking, Railway, Defence, Teaching & State PSC exams. Apply online for Sarkari naukri notifications updated daily.',
    canonical: 'https://govtjobsindia.online/jobs/latest-jobs',
    ogTitle: 'Latest Government Jobs 2026 - Sarkari Naukri Notifications',
    ogDesc: 'Find latest government jobs 2026 across SSC CGL, UPSC, Banking, Railway, Defence, Teaching & State PSC exams.',
    twTitle: 'Latest Government Jobs 2026 - Sarkari Naukri',
  },
  {
    path: 'jobs/results/index.html',
    url: '/jobs/results',
    title: 'Sarkari Result 2026 - Latest Government Exam Results | GovtJobsIndia.online',
    desc: 'Check Sarkari result 2026 for SSC CGL, UPSC, IBPS PO, RRB NTPC, CTET & more. Download exam results, merit lists, cut-off marks and scorecards for all government exams.',
    canonical: 'https://govtjobsindia.online/jobs/results',
    ogTitle: 'Sarkari Result 2026 - Latest Government Exam Results',
    ogDesc: 'Check Sarkari result 2026 for SSC CGL, UPSC, IBPS PO, RRB NTPC, CTET & more.',
    twTitle: 'Sarkari Result 2026 - Latest Government Exam Results',
  },
  {
    path: 'jobs/admit-cards/index.html',
    url: '/jobs/admit-cards',
    title: 'Admit Card 2026 - Hall Ticket Download for SSC, UPSC, Banking, Railway',
    desc: 'Download admit card 2026 for SSC CGL, UPSC Civil Services, IBPS PO, RRB NTPC, CTET & more. Get hall tickets, exam city intimation slips for all government exams.',
    canonical: 'https://govtjobsindia.online/jobs/admit-cards',
    ogTitle: 'Admit Card 2026 - Download Hall Tickets for Government Exams',
    ogDesc: 'Download admit card 2026 for SSC CGL, UPSC Civil Services, IBPS PO, RRB NTPC, CTET & more.',
    twTitle: 'Admit Card 2026 - Hall Ticket Download',
  },
  {
    path: 'jobs/answer-keys/index.html',
    url: '/jobs/answer-keys',
    title: 'Answer Key 2026 - SSC, UPSC, Banking, Railway Exam Answer Keys',
    desc: 'Download answer key 2026 for SSC CGL, UPSC, IBPS PO, RRB NTPC & more. Check exam solutions, response sheets and challenge objection windows for government exams.',
    canonical: 'https://govtjobsindia.online/jobs/answer-keys',
    ogTitle: 'Answer Key 2026 - Government Exam Answer Keys Download',
    ogDesc: 'Download answer key 2026 for SSC CGL, UPSC, IBPS PO, RRB NTPC & more.',
    twTitle: 'Answer Key 2026 - Exam Answer Keys',
  },
  {
    path: 'jobs/private-jobs/index.html',
    url: '/jobs/private-jobs',
    title: 'Private Jobs 2026 - Latest Private Sector Job Openings in India',
    desc: 'Find latest private jobs 2026 in IT, MBA, engineering, sales, marketing & more. Apply for private sector vacancies in top MNCs and Indian corporations.',
    canonical: 'https://govtjobsindia.online/jobs/private-jobs',
    ogTitle: 'Private Jobs 2026 - Private Sector Job Openings',
    ogDesc: 'Find latest private jobs 2026 in IT, MBA, engineering, sales, marketing & more.',
    twTitle: 'Private Jobs 2026 - Private Sector Jobs',
  },
  {
    path: 'jobs/remote-jobs/index.html',
    url: '/jobs/remote-jobs',
    title: 'Remote Jobs 2026 - Work From Home Jobs in India',
    desc: 'Find remote jobs 2026 and work from home jobs across India. Explore remote IT jobs, online teaching, freelance writing, virtual assistant roles & more.',
    canonical: 'https://govtjobsindia.online/jobs/remote-jobs',
    ogTitle: 'Remote Jobs 2026 - Work From Home Jobs in India',
    ogDesc: 'Find remote jobs 2026 and work from home jobs across India.',
    twTitle: 'Remote Jobs 2026 - Work From Home Jobs',
  },
  {
    path: 'ssc-cgl-2026/index.html',
    url: '/ssc-cgl-2026',
    title: 'SSC CGL 2026 - Apply Online for 12,256 Vacancies | Staff Selection Commission',
    desc: 'SSC CGL 2026 notification out! 12,256 vacancies for Group B & C posts. Check eligibility, exam pattern, syllabus, last date. Apply online at ssc.nic.in.',
    canonical: 'https://govtjobsindia.online/ssc-cgl-2026',
    ogTitle: 'SSC CGL 2026 - 12,256 Vacancies, Apply Online',
    ogDesc: 'SSC CGL 2026 notification out! 12,256 vacancies for Group B & C posts.',
    twTitle: 'SSC CGL 2026 - 12,256 Vacancies',
  },
  {
    path: 'rrb-technician-2026/index.html',
    url: '/rrb-technician-2026',
    title: 'RRB Technician 2026 - 6,557 Vacancies CEN 02/2026 | Railway Recruitment Board',
    desc: 'RRB Technician 2026 notification (CEN 02/2026) released! 6,557 vacancies for Technician Grade I Signal & Grade III. Apply online from June 30, 2026 at rrb.apply.gov.in.',
    canonical: 'https://govtjobsindia.online/rrb-technician-2026',
    ogTitle: 'RRB Technician 2026 - 6,557 Vacancies, Apply Now',
    ogDesc: 'RRB Technician 2026 notification (CEN 02/2026) released! 6,557 vacancies.',
    twTitle: 'RRB Technician 2026 - 6,557 Vacancies',
  },
  {
    path: 'upsc-recruitment-2026/index.html',
    url: '/upsc-recruitment-2026',
    title: 'UPSC Recruitment 2026 - 538 Vacancies in 98 Posts | Apply Online at upsc.gov.in',
    desc: 'UPSC Advertisement No. 06/2026 released! 538 vacancies for Specialist Grade III, Assistant Professor, Scientist, Medical Officer & more. Last date July 3, 2026.',
    canonical: 'https://govtjobsindia.online/upsc-recruitment-2026',
    ogTitle: 'UPSC Recruitment 2026 - 538 Vacancies, Apply by July 3',
    ogDesc: 'UPSC Advertisement No. 06/2026 released! 538 vacancies for 98 posts.',
    twTitle: 'UPSC Recruitment 2026 - 538 Vacancies',
  },
  {
    path: 'about/index.html',
    url: '/about',
    title: 'About Us - GovtJobsIndia.online | India\'s Government Job Portal',
    desc: 'Learn about GovtJobsIndia.online - India\'s most trusted government job aggregation platform. We provide latest Sarkari naukri notifications, results, admit cards, and answer keys.',
    canonical: 'https://govtjobsindia.online/about',
    ogTitle: 'About Us - GovtJobsIndia.online',
    ogDesc: 'Learn about GovtJobsIndia.online - India\'s government job aggregation platform.',
    twTitle: 'About Us - GovtJobsIndia.online',
  },
  {
    path: 'contact/index.html',
    url: '/contact',
    title: 'Contact Us - GovtJobsIndia.online | Government Job Portal',
    desc: 'Get in touch with GovtJobsIndia.online team. For queries, suggestions, or feedback about government job listings, Sarkari results, and exam notifications.',
    canonical: 'https://govtjobsindia.online/contact',
    ogTitle: 'Contact Us - GovtJobsIndia.online',
    ogDesc: 'Get in touch with GovtJobsIndia.online team for queries and feedback.',
    twTitle: 'Contact Us - GovtJobsIndia.online',
  },
  {
    path: 'privacy/index.html',
    url: '/privacy',
    title: 'Privacy Policy - GovtJobsIndia.online',
    desc: 'Privacy Policy of GovtJobsIndia.online. Learn how we collect, use, and protect your personal information when you visit our government job portal.',
    canonical: 'https://govtjobsindia.online/privacy',
    ogTitle: 'Privacy Policy - GovtJobsIndia.online',
    ogDesc: 'Privacy Policy of GovtJobsIndia.online.',
    twTitle: 'Privacy Policy - GovtJobsIndia.online',
  },
  {
    path: 'terms/index.html',
    url: '/terms',
    title: 'Terms of Service - GovtJobsIndia.online',
    desc: 'Terms and conditions for using GovtJobsIndia.online. Understand the rules and guidelines for accessing our government job portal.',
    canonical: 'https://govtjobsindia.online/terms',
    ogTitle: 'Terms of Service - GovtJobsIndia.online',
    ogDesc: 'Terms and conditions for using GovtJobsIndia.online.',
    twTitle: 'Terms of Service - GovtJobsIndia.online',
  },
  {
    path: 'disclaimer/index.html',
    url: '/disclaimer',
    title: 'Disclaimer - GovtJobsIndia.online',
    desc: 'Disclaimer for GovtJobsIndia.online. Important information about the unofficial nature of our government job aggregation platform.',
    canonical: 'https://govtjobsindia.online/disclaimer',
    ogTitle: 'Disclaimer - GovtJobsIndia.online',
    ogDesc: 'Disclaimer for GovtJobsIndia.online.',
    twTitle: 'Disclaimer - GovtJobsIndia.online',
  },
];

const indexHtml = readFileSync(resolve(dist, 'index.html'), 'utf-8');

for (const page of pages) {
  const dir = resolve(dist, page.path.split('/').slice(0, -1).join('/'));
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

  let html = indexHtml;

  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${page.title}</title>`
  );
  html = html.replace(
    /<meta name="title" content="[^"]*"/,
    `<meta name="title" content="${page.title}"`
  );
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${page.desc}"`
  );
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${page.canonical}"`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${page.url === '/' ? 'https://govtjobsindia.online/' : `https://govtjobsindia.online${page.url}`}"`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${page.ogTitle}"`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${page.ogDesc}"`
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${page.twTitle}"`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${page.desc}"`
  );

  writeFileSync(resolve(dist, page.path), html, 'utf-8');
  console.log(`Pre-rendered: ${page.path} (${page.title})`);
}

console.log(`\nDone! Pre-rendered ${pages.length} pages.`);
