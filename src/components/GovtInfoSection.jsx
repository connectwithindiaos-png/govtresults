import { Link } from 'react-router-dom';

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

export default function GovtInfoSection() {
  return (
    <section aria-label="Government exam categories and recruitment information" className="py-8 lg:py-12 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO text block */}
        <div className="mb-8 max-w-4xl">
          <h2 className="section-heading">Latest Government Jobs in India 2026 - Sarkari Naukri, Results & Admit Cards</h2>
          <div className="text-sm text-gray-600 leading-relaxed space-y-3">
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
          <p>
            <strong className="text-gray-700">Sarkari Naukri 2026:</strong> Stay updated with the latest
            <strong>Sarkari result</strong> notifications for <strong>SSC CGL 2026</strong>,
            <strong>SSC CHSL 2026</strong>, <strong>UPSC Civil Services 2026</strong>,
            <strong>IBPS PO 2026</strong>, <strong>SBI Clerk 2026</strong>,
            <strong>RRB NTPC 2026</strong>, <strong>RRB Group D 2026</strong>,
            <strong>UPSC NDA 2026</strong>, <strong>CTET 2026</strong>,
            <strong>Indian Army Soldier 2026</strong>, <strong>UP Police Constable 2026</strong>,
            and hundreds of other <strong>government job vacancies</strong>.
          </p>
          <p>
            <strong className="text-gray-700">Exam Form Fill Online 2026:</strong> Apply online for
            <strong>SSC form fill online</strong>, <strong>UPSC application form</strong>,
            <strong>bank exam online application</strong>, <strong>railway recruitment form</strong>,
            <strong>police recruitment form</strong>, <strong>teaching job application</strong>,
            and <strong>state PSC exam forms</strong>.
          </p>
          <p>
            <strong className="text-gray-700">Admit Card & Answer Key 2026:</strong> Download your
            <strong>SSC admit card 2026</strong>, <strong>UPSC admit card</strong>,
            <strong>bank exam hall ticket</strong>, <strong>railway admit card</strong>,
            <strong>police exam call letter</strong>, and <strong>state exam admit card</strong>.
          </p>
          <p>
            <strong className="text-gray-700">Government Jobs by Qualification 2026:</strong> Find
            <strong>10th pass government jobs</strong>, <strong>12th pass government jobs</strong>,
            <strong>graduate government jobs</strong>, <strong>postgraduate government jobs</strong>,
            <strong>diploma government jobs</strong>, <strong>ITI government jobs</strong>,
            and <strong>engineering government jobs</strong>.
          </p>
          <p>
            <strong className="text-gray-700">Popular Government Exams 2026:</strong> Prepare for
            <strong>SSC CGL</strong>, <strong>SSC CHSL</strong>, <strong>SSC GD Constable</strong>,
            <strong>SSC MTS</strong>, <strong>SSC CPO</strong>, <strong>UPSC Civil Services</strong>,
            <strong>IBPS PO</strong>, <strong>IBPS Clerk</strong>, <strong>RRB NTPC</strong>,
            <strong>RRB Group D</strong>, <strong>CTET</strong>, <strong>Indian Army</strong>,
            and hundreds more government recruitment exams.
          </p>
        </div>
      </div>
    </section>
  );
}
