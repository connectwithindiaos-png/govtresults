import { Link } from 'react-router-dom';

const categoryContent = {
  'home': {
    heading: 'Latest Government Jobs in India 2026 - Sarkari Naukri, Results & Admit Cards',
    intro: (
      <p>
        Find the latest <strong>government jobs in India</strong> across all departments
        including <strong>SSC CGL</strong>, <strong>UPSC Civil Services</strong>, <strong>IBPS PO</strong>,
        <strong>SBI Clerk</strong>, <strong>RRB NTPC</strong>, <strong>RRB Group D</strong>,
        <strong>banking jobs</strong>, <strong>railway recruitment</strong>, <strong>teaching jobs</strong>,
        <strong>defence jobs</strong>, <strong>police recruitment</strong>, <strong>PSU jobs</strong>,
        and <strong>state government vacancies</strong>. Get daily updates on <strong>Sarkari results</strong>,
        <strong>admit card downloads</strong>, <strong>answer keys</strong>, and
        <strong>exam form fill online</strong> processes. <strong>GovtJobsIndia.online</strong> aggregates
        <strong>central and state government job notifications</strong> for 10th pass, 12th pass,
        graduate, and postgraduate aspirants across India.
      </p>
    ),
    paras: [
      <>
        <strong className="text-gray-700">Sarkari Naukri 2026:</strong> Stay updated with the latest
        <strong>Sarkari result</strong> notifications for <strong>SSC CGL 2026</strong>,
        <strong>SSC CHSL 2026</strong>, <strong>UPSC Civil Services 2026</strong>,
        <strong>IBPS PO 2026</strong>, <strong>SBI Clerk 2026</strong>,
        <strong>RRB NTPC 2026</strong>, <strong>RRB Group D 2026</strong>,
        <strong>UPSC NDA 2026</strong>, <strong>CTET 2026</strong>,
        <strong>Indian Army Soldier 2026</strong>, <strong>UP Police Constable 2026</strong>,
        and hundreds of other <strong>government job vacancies</strong>.
      </>,
      <>
        <strong className="text-gray-700">Exam Form Fill Online 2026:</strong> Apply online for
        <strong>SSC form fill online</strong>, <strong>UPSC application form</strong>,
        <strong>bank exam online application</strong>, <strong>railway recruitment form</strong>,
        <strong>police recruitment form</strong>, <strong>teaching job application</strong>,
        and <strong>state PSC exam forms</strong>.
      </>,
      <>
        <strong className="text-gray-700">Admit Card & Answer Key 2026:</strong> Download your
        <strong>SSC admit card 2026</strong>, <strong>UPSC admit card</strong>,
        <strong>bank exam hall ticket</strong>, <strong>railway admit card</strong>,
        <strong>police exam call letter</strong>, and <strong>state exam admit card</strong>.
      </>,
      <>
        <strong className="text-gray-700">Government Jobs by Qualification 2026:</strong> Find
        <strong>10th pass government jobs</strong>, <strong>12th pass government jobs</strong>,
        <strong>graduate government jobs</strong>, <strong>postgraduate government jobs</strong>,
        <strong>diploma government jobs</strong>, <strong>ITI government jobs</strong>,
        and <strong>engineering government jobs</strong>.
      </>,
      <>
        <strong className="text-gray-700">Popular Government Exams 2026:</strong> Prepare for
        <strong>SSC CGL</strong>, <strong>SSC CHSL</strong>, <strong>SSC GD Constable</strong>,
        <strong>SSC MTS</strong>, <strong>SSC CPO</strong>, <strong>UPSC Civil Services</strong>,
        <strong>IBPS PO</strong>, <strong>IBPS Clerk</strong>, <strong>RRB NTPC</strong>,
        <strong>RRB Group D</strong>, <strong>CTET</strong>, <strong>Indian Army</strong>,
        and hundreds more government recruitment exams.
      </>,
    ],
  },
  'results': {
    heading: 'Sarkari Result 2026 - Latest Government Exam Results in India',
    intro: (
      <p>
        Check the latest <strong>Sarkari result 2026</strong> for all major government exams
        including <strong>SSC result</strong>, <strong>UPSC result</strong>,
        <strong>IBPS result</strong>, <strong>Railway result</strong>,
        <strong>CTET result</strong>, <strong>State PSC result</strong> and more.
        <strong>GovtJobsIndia.online</strong> provides direct links to official result PDFs
        and merit lists published by <strong>SSC</strong>, <strong>UPSC</strong>,
        <strong>IBPS</strong>, <strong>RRB</strong>, <strong>UPPSC</strong>,
        <strong>BPSC</strong> and other recruitment bodies. Find <strong>exam results</strong>,
        <strong>final merit lists</strong>, <strong>cut-off marks</strong> and
        <strong>scorecards</strong> for all central and state government exams.
      </p>
    ),
    paras: [
      <>
        <strong className="text-gray-700">SSC Results 2026:</strong> Check <strong>SSC CGL result</strong>,
        <strong>SSC CHSL result</strong>, <strong>SSC GD Constable result</strong>,
        <strong>SSC MTS result</strong>, <strong>SSC CPO result</strong>,
        <strong>SSC Stenographer result</strong> and <strong>SSC JE result</strong>.
      </>,
      <>
        <strong className="text-gray-700">UPSC Results 2026:</strong> View <strong>UPSC Civil Services result</strong>,
        <strong>UPSC NDA result</strong>, <strong>UPSC CDS result</strong>,
        <strong>UPSC CAPF result</strong> and <strong>UPSC EPFO result</strong>.
      </>,
      <>
        <strong className="text-gray-700">Banking Results 2026:</strong> Download <strong>IBPS PO result</strong>,
        <strong>IBPS Clerk result</strong>, <strong>IBPS RRB result</strong>,
        <strong>SBI PO result</strong>, <strong>SBI Clerk result</strong>,
        <strong>RBI Grade B result</strong> and <strong>RBI Assistant result</strong>.
      </>,
      <>
        <strong className="text-gray-700">Railway Results 2026:</strong> Find <strong>RRB NTPC result</strong>,
        <strong>RRB Group D result</strong>, <strong>RRB ALP result</strong>,
        <strong>RRB JE result</strong> and <strong>RRB Technician result</strong>.
      </>,
      <>
        <strong className="text-gray-700">Other Govt Results 2026:</strong> Check
        <strong>CTET result</strong>, <strong>UPTET result</strong>,
        <strong>UP Police result</strong>, <strong>Delhi Police result</strong>,
        <strong>Indian Army result</strong>, <strong>AFCAT result</strong> and
        <strong>state PSC results</strong>.
      </>,
    ],
  },
  'admit_cards': {
    heading: 'Admit Card 2026 - Download Hall Tickets for SSC, UPSC, Banking, Railway Exams',
    intro: (
      <p>
        Download the latest <strong>admit card 2026</strong> and <strong>hall tickets</strong>
        for all major government exams. <strong>GovtJobsIndia.online</strong> provides direct links
        to download <strong>SSC admit card</strong>, <strong>UPSC admit card</strong>,
        <strong>bank exam hall ticket</strong>, <strong>railway admit card</strong>,
        <strong>police exam call letter</strong> and <strong>state PSC admit card</strong>.
        Stay updated with <strong>admit card release dates</strong> and
        <strong>exam city intimation slips</strong> for all central and state government exams.
      </p>
    ),
    paras: [
      <>
        <strong className="text-gray-700">SSC Admit Cards 2026:</strong> Download <strong>SSC CGL admit card</strong>,
        <strong>SSC CHSL admit card</strong>, <strong>SSC GD Constable admit card</strong>,
        <strong>SSC MTS admit card</strong>, <strong>SSC CPO admit card</strong>,
        <strong>SSC Stenographer admit card</strong> and <strong>SSC JE admit card</strong>.
      </>,
      <>
        <strong className="text-gray-700">UPSC Admit Cards 2026:</strong> Get <strong>UPSC Civil Services admit card</strong>,
        <strong>UPSC NDA admit card</strong>, <strong>UPSC CDS admit card</strong>,
        <strong>UPSC CAPF admit card</strong> and <strong>UPSC EPFO admit card</strong>.
      </>,
      <>
        <strong className="text-gray-700">Banking Hall Tickets 2026:</strong> Download <strong>IBPS PO hall ticket</strong>,
        <strong>IBPS Clerk hall ticket</strong>, <strong>IBPS RRB admit card</strong>,
        <strong>SBI PO admit card</strong>, <strong>SBI Clerk admit card</strong>,
        <strong>RBI Grade B admit card</strong> and <strong>RBI Assistant admit card</strong>.
      </>,
      <>
        <strong className="text-gray-700">Railway Admit Cards 2026:</strong> Find <strong>RRB NTPC admit card</strong>,
        <strong>RRB Group D admit card</strong>, <strong>RRB ALP admit card</strong>,
        <strong>RRB JE admit card</strong> and <strong>RRB Technician admit card</strong>.
      </>,
      <>
        <strong className="text-gray-700">Other Admit Cards 2026:</strong> Check
        <strong>CTET admit card</strong>, <strong>UPTET admit card</strong>,
        <strong>UP Police admit card</strong>, <strong>Delhi Police admit card</strong>,
        <strong>Indian Army admit card</strong> and <strong>AFCAT admit card</strong>.
      </>,
    ],
  },
  'answer_keys': {
    heading: 'Answer Key 2026 - Download SSC, UPSC, Banking, Railway Exam Answer Keys',
    intro: (
      <p>
        Download the latest <strong>answer key 2026</strong> for all government exams.
        <strong>GovtJobsIndia.online</strong> provides direct links to official
        <strong>SSC answer key</strong>, <strong>UPSC answer key</strong>,
        <strong>bank exam answer key</strong>, <strong>railway answer key</strong> and
        <strong>state PSC answer key</strong>. Check <strong>exam solutions</strong>,
        <strong>response sheets</strong> and <strong>challenge objection</strong> windows
        for all major recruitment exams conducted in India.
      </p>
    ),
    paras: [
      <>
        <strong className="text-gray-700">SSC Answer Keys 2026:</strong> Check <strong>SSC CGL answer key</strong>,
        <strong>SSC CHSL answer key</strong>, <strong>SSC GD Constable answer key</strong>,
        <strong>SSC MTS answer key</strong>, <strong>SSC CPO answer key</strong> and
        <strong>SSC JE answer key</strong>.
      </>,
      <>
        <strong className="text-gray-700">UPSC Answer Keys 2026:</strong> View <strong>UPSC Civil Services answer key</strong>,
        <strong>UPSC NDA answer key</strong>, <strong>UPSC CDS answer key</strong> and
        <strong>UPSC CAPF answer key</strong>.
      </>,
      <>
        <strong className="text-gray-700">Banking Answer Keys 2026:</strong> Download <strong>IBPS PO answer key</strong>,
        <strong>IBPS Clerk answer key</strong>, <strong>IBPS RRB answer key</strong>,
        <strong>SBI PO answer key</strong>, <strong>SBI Clerk answer key</strong> and
        <strong>RBI Grade B answer key</strong>.
      </>,
      <>
        <strong className="text-gray-700">Railway Answer Keys 2026:</strong> Find <strong>RRB NTPC answer key</strong>,
        <strong>RRB Group D answer key</strong>, <strong>RRB ALP answer key</strong> and
        <strong>RRB JE answer key</strong>.
      </>,
    ],
  },
  'private_jobs': {
    heading: 'Private Jobs 2026 - Latest Private Sector Job Openings in India',
    intro: (
      <p>
        Find the latest <strong>private jobs 2026</strong> across top companies in India.
        <strong>GovtJobsIndia.online</strong> aggregates <strong>private sector vacancies</strong>
        from leading recruitment portals. Explore <strong>IT jobs</strong>,
        <strong>MBA jobs</strong>, <strong>engineering jobs</strong>,
        <strong>BPO jobs</strong>, <strong>sales jobs</strong>,
        <strong>marketing jobs</strong> and <strong>management positions</strong>
        in MNCs, startups and corporate India.
      </p>
    ),
    paras: [
      <>
        <strong className="text-gray-700">IT & Software Jobs 2026:</strong> Find <strong>software developer jobs</strong>,
        <strong>web developer jobs</strong>, <strong>data scientist jobs</strong>,
        <strong>cloud engineer jobs</strong> and <strong>DevOps engineer positions</strong>
        in top IT companies across India.
      </>,
      <>
        <strong className="text-gray-700">MBA & Management Jobs 2026:</strong> Explore
        <strong>business analyst jobs</strong>, <strong>product manager positions</strong>,
        <strong>consulting jobs</strong>, <strong>finance manager roles</strong> and
        <strong>operations head positions</strong> in leading corporations.
      </>,
      <>
        <strong className="text-gray-700">Sales & Marketing Jobs 2026:</strong> Apply for
        <strong>sales executive jobs</strong>, <strong>business development roles</strong>,
        <strong>digital marketing jobs</strong>, <strong>brand manager positions</strong> and
        <strong>account manager roles</strong>.
      </>,
      <>
        <strong className="text-gray-700">Engineering Jobs 2026:</strong> Find
        <strong>mechanical engineer jobs</strong>, <strong>civil engineer positions</strong>,
        <strong>electrical engineer jobs</strong>, <strong>production engineer roles</strong> and
        <strong>quality engineer positions</strong> in manufacturing and core sectors.
      </>,
    ],
  },
  'remote_jobs': {
    heading: 'Remote Jobs 2026 - Work From Home Jobs in India',
    intro: (
      <p>
        Find the latest <strong>remote jobs 2026</strong> and <strong>work from home jobs</strong>
        across India. <strong>GovtJobsIndia.online</strong> aggregates
        <strong>remote positions</strong> from leading job portals. Explore
        <strong>work from home IT jobs</strong>, <strong>online teaching jobs</strong>,
        <strong>freelance writing jobs</strong>, <strong>virtual assistant roles</strong>,
        <strong>remote customer service jobs</strong> and <strong>telecommute positions</strong>
        in various industries.
      </p>
    ),
    paras: [
      <>
        <strong className="text-gray-700">Remote IT Jobs 2026:</strong> Find <strong>remote software developer jobs</strong>,
        <strong>work from home web developer</strong>, <strong>remote data entry jobs</strong>,
        <strong>online coding jobs</strong> and <strong>remote QA engineer positions</strong>.
      </>,
      <>
        <strong className="text-gray-700">Online Teaching Jobs 2026:</strong> Apply for
        <strong>online tutor jobs</strong>, <strong>remote teaching positions</strong>,
        <strong>virtual teacher roles</strong>, <strong>online faculty jobs</strong> and
        <strong>home tuition jobs</strong>.
      </>,
      <>
        <strong className="text-gray-700">Freelance & Content Jobs 2026:</strong> Explore
        <strong>content writing jobs</strong>, <strong>freelance writing positions</strong>,
        <strong>copywriting jobs</strong>, <strong>translation jobs</strong> and
        <strong>proofreading jobs</strong> you can do from home.
      </>,
      <>
        <strong className="text-gray-700">Remote Support Jobs 2026:</strong> Find
        <strong>remote customer service jobs</strong>, <strong>virtual assistant roles</strong>,
        <strong>online chat support jobs</strong>, <strong>remote data analyst positions</strong> and
        <strong>work from home HR jobs</strong>.
      </>,
    ],
  },
};

const examCategories = [
  {
    title: 'SSC Exams',
    items: [
      'SSC CGL 2026 - 12,256 Vacancies, Apply Now',
      'SSC CHSL 2026 - 10+2 Higher Secondary Level',
      'SSC GD Constable 2026 - General Duty',
      'SSC ASO LDCE 2026 - 341 Vacancies',
      'SSC MTS 2026 - Multi Tasking Staff',
      'SSC CPO 2026 - Central Police Organization',
      'SSC Stenographer 2026 Grade C & D',
      'SSC JE 2026 - Junior Engineer',
    ],
  },
  {
    title: 'UPSC Exams',
    items: [
      'UPSC Recruitment 2026 - 538 Vacancies, Last Date July 3',
      'UPSC Civil Services 2026 - IAS, IPS, IFS',
      'UPSC NDA-II 2026 - National Defence Academy',
      'UPSC CDS-II 2026 - Combined Defence Services',
      'UPSC CAPF 2026 - Central Armed Police Forces',
      'UPSC EPFO 2026 - Enforcement Officer',
      'UPSC CMS 2026 - Combined Medical Services',
      'UPSC Geo Scientist 2026',
    ],
  },
  {
    title: 'Banking Jobs',
    to: '/jobs/latest-jobs?q=Banking',
    items: [
      'IBPS PO 2026 - Probationary Officer',
      'IBPS Clerk 2026 - Clerical Cadre',
      'IBPS RRB 2026 - Regional Rural Banks',
      'SBI Apprentice 2026 - State Bank of India',
      'SBI Clerk 2026 - Junior Associates',
      'RBI Grade B 2026 - Reserve Bank of India',
      'RBI Assistant 2026 Recruitment',
      'NABARD Grade A 2026',
    ],
  },
  {
    title: 'Railway Jobs',
    to: '/jobs/latest-jobs?q=Railway',
    items: [
      'RRB Technician 2026 - 6,557 Vacancies CEN 02/2026',
      'RRB NTPC 2026 - Non Technical Popular Categories',
      'RRB Group D 2026 - Level 1 Posts',
      'RRB ALP 2026 - Assistant Loco Pilot',
      'RRB JE 2026 - Junior Engineer',
      'RRB SSE 2026 - Senior Section Engineer',
      'RRB Paramedical 2026 Staff',
      'Indian Railway Management Service',
    ],
  },
  {
    title: 'Teaching Jobs',
    to: '/jobs/latest-jobs?q=Teaching',
    items: [
      'CTET 2026 - Central Teacher Eligibility Test',
      'UPTET 2026 - Uttar Pradesh Teacher Eligibility',
      'DSSSB 2026 - Delhi Subordinate Services',
      'KVS 2026 - Kendriya Vidyalaya Sangathan',
      'NVS 2026 - Navodaya Vidyalaya Samiti',
      'HTET 2026 - Haryana Teacher Eligibility',
      'UPSC Assistant Professor 2026',
      'NET 2026 - National Eligibility Test',
    ],
  },
  {
    title: 'Defence Jobs',
    to: '/jobs/latest-jobs?q=Defence',
    items: [
      'Indian Army Soldier 2026 Recruitment',
      'AFCAT 2026 - Air Force Common Admission',
      'Indian Navy SSR 2026 - Senior Secondary',
      'Indian Air Force Agniveer 2026',
      'Indian Coast Guard 2026 Recruitment',
      'Territorial Army 2026 Officers',
      'DRDO 2026 - Defence Research & Development',
      'INET 2026 - Indian Navy Entrance Test',
    ],
  },
  {
    title: 'State Govt Jobs',
    to: '/jobs/latest-jobs?q=State+Govt',
    items: [
      'UPPSC 2026 - Uttar Pradesh PSC',
      'BPSC 2026 - Bihar Public Service Commission',
      'MPPSC 2026 - Madhya Pradesh PSC',
      'RPSC 2026 - Rajasthan Public Service Commission',
      'UKPSC 2026 - Uttarakhand PSC',
      'WBPSC 2026 - West Bengal PSC',
      'GPSC 2026 - Gujarat Public Service Commission',
      'Maharashtra MPSC 2026',
    ],
  },
  {
    title: 'Police & Security',
    items: [
      'UP Police Constable 2026 Recruitment',
      'UP Police SI 2026 - Sub Inspector',
      'Delhi Police Constable 2026',
      'Delhi Police SI 2026 - Sub Inspector',
      'CRPF Constable 2026 - Central Reserve Police',
      'BSF Head Constable 2026',
      'CISF Constable 2026 Recruitment',
      'State Police SI & Constable 2026',
    ],
  },
  {
    title: 'PSU Jobs',
    to: '/jobs/latest-jobs?q=PSU',
    items: [
      'ONGC 2026 Recruitment - Oil & Natural Gas Corp',
      'IOCL 2026 - Indian Oil Corporation',
      'NTPC 2026 - National Thermal Power Corp',
      'GAIL 2026 Recruitment - Gas Authority of India',
      'BHEL 2026 - Bharat Heavy Electricals',
      'HPCL 2026 - Hindustan Petroleum Corp',
      'SAIL 2026 - Steel Authority of India',
      'Coal India 2026 Recruitment',
    ],
  },
  {
    title: 'Other Exams',
    items: [
      'FCI 2026 - Food Corporation of India',
      'ESIC 2026 - Employees State Insurance',
      'NTA UGC NET 2026 - National Testing Agency',
      'AIIMS 2026 Nursing & Paramedical',
      'BARC 2026 - Bhabha Atomic Research',
      'ISRO 2026 - Indian Space Research',
      'LIC 2026 - Life Insurance Corporation',
      'India Post GDS 2026 - Gramin Dak Sevak',
    ],
  },
];

export default function GovtInfoSection({ category = 'home' }) {
  const content = categoryContent[category] || categoryContent['home'];

  return (
    <section aria-label="Government exam categories and recruitment information" className="py-8 lg:py-12 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO text block */}
        <div className="mb-8 max-w-4xl">
          <h2 className="section-heading">{content.heading}</h2>
          <div className="text-sm text-gray-600 leading-relaxed space-y-3">
            {content.intro}
          </div>
        </div>

        {/* Exam grid - plain cards, no icons, no colored borders */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {examCategories.map((cat) => (
            <div key={cat.title} className="border border-gray-200 p-3">
              <h3 className="text-xs font-extrabold text-accent mb-1.5">{cat.title}</h3>
              <ul className="space-y-0.5">
                {cat.items.slice(0, 5).map((item) => (
                  <li key={item} className="text-[10px] text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
              <Link to={cat.to} className="text-[9px] font-semibold text-accent mt-1.5 inline-block">
                View full list &rarr;
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom SEO block */}
        <div className="mt-8 max-w-5xl text-[12px] text-gray-500 leading-relaxed space-y-3">
          {content.paras.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
