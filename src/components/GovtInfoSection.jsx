import { ExternalLink, ChevronRight } from 'lucide-react';

const examCategories = [
  {
    title: 'SSC Exams',
    color: 'text-accent',
    border: 'border-accent',
    bg: 'bg-accent/5',
    items: [
      'SSC CGL 2026 - Combined Graduate Level Exam',
      'SSC CHSL 2026 - 10+2 Higher Secondary Level',
      'SSC GD Constable 2026 - General Duty',
      'SSC MTS 2026 - Multi Tasking Staff',
      'SSC CPO 2026 - Central Police Organization',
      'SSC Stenographer 2026 Grade C & D',
      'SSC JE 2026 - Junior Engineer',
      'SSC Selection Posts Phase 2026',
    ],
  },
  {
    title: 'UPSC Exams',
    color: 'text-blue-600',
    border: 'border-blue-600',
    bg: 'bg-blue-50',
    items: [
      'UPSC Civil Services 2026 - IAS, IPS, IFS',
      'UPSC CAPF 2026 - Central Armed Police Forces',
      'UPSC EPFO 2026 - Enforcement Officer',
      'UPSC NDA 2026 - National Defence Academy',
      'UPSC CDS 2026 - Combined Defence Services',
      'UPSC IES 2026 - Indian Engineering Services',
      'UPSC CMS 2026 - Combined Medical Services',
      'UPSC Geo Scientist 2026',
    ],
  },
  {
    title: 'Banking Jobs',
    color: 'text-purple-600',
    border: 'border-purple-600',
    bg: 'bg-purple-50',
    items: [
      'IBPS PO 2026 - Probationary Officer',
      'IBPS Clerk 2026 - Clerical Cadre',
      'IBPS RRB 2026 - Regional Rural Banks',
      'SBI PO 2026 - State Bank of India',
      'SBI Clerk 2026 - Junior Associates',
      'RBI Grade B 2026 - Reserve Bank of India',
      'RBI Assistant 2026 Recruitment',
      'NABARD Grade A 2026',
    ],
  },
  {
    title: 'Railway Jobs',
    color: 'text-emerald-600',
    border: 'border-emerald-600',
    bg: 'bg-emerald-50',
    items: [
      'RRB NTPC 2026 - Non Technical Popular Categories',
      'RRB Group D 2026 - Level 1 Posts',
      'RRB ALP 2026 - Assistant Loco Pilot',
      'RRB JE 2026 - Junior Engineer',
      'RRB SSE 2026 - Senior Section Engineer',
      'RRB Paramedical 2026 Staff',
      'Indian Railway Management Service',
      'Railway Protection Force RPF 2026',
    ],
  },
  {
    title: 'Teaching Jobs',
    color: 'text-rose-600',
    border: 'border-rose-600',
    bg: 'bg-rose-50',
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
    color: 'text-cyan-600',
    border: 'border-cyan-600',
    bg: 'bg-cyan-50',
    items: [
      'Indian Army Soldier 2026 Recruitment',
      'Indian Navy SSR 2026 - Senior Secondary',
      'Indian Air Force Agniveer 2026',
      'AFCAT 2026 - Air Force Common Admission',
      'Indian Coast Guard 2026 Recruitment',
      'Territorial Army 2026 Officers',
      'DRDO 2026 - Defence Research & Development',
      'INET 2026 - Indian Navy Entrance Test',
    ],
  },
  {
    title: 'State Govt Jobs',
    color: 'text-indigo-600',
    border: 'border-indigo-600',
    bg: 'bg-indigo-50',
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
    title: 'Other Exams',
    color: 'text-amber-600',
    border: 'border-amber-600',
    bg: 'bg-amber-50',
    items: [
      'FCI 2026 - Food Corporation of India',
      'ESIC 2026 - Employees State Insurance',
      'NTA UGC NET 2026 - National Testing Agency',
      'AIIMS 2026 Nursing & Paramedical',
      'PGI Chandigarh 2026 Recruitment',
      'BARC 2026 - Bhabha Atomic Research',
      'ISRO 2026 - Indian Space Research',
      'LIC 2026 - Life Insurance Corporation',
    ],
  },
];

export default function GovtInfoSection() {
  return (
    <section aria-label="Government exam categories and recruitment information" className="py-8 lg:py-12 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO text block */}
        <div className="mb-8 max-w-3xl">
          <h2 className="section-heading">Latest Government Jobs in India 2026</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Find the latest <strong>government jobs in India</strong> across all departments — 
            <strong>SSC</strong>, <strong>UPSC</strong>, <strong>banking jobs</strong>, <strong>railway recruitment</strong>, 
            <strong>teaching jobs</strong>, <strong>defence jobs</strong>, and 
            <strong>state government vacancies</strong>. Get daily updates on 
            <strong>Sarkari results</strong>, <strong>admit card downloads</strong>, 
            <strong>answer keys</strong>, and <strong>exam form fill online</strong> processes. 
            GovtJobsIndia.online aggregates <strong>central and state government job notifications</strong> 
            for 10th pass, 12th pass, graduate, and postgraduate aspirants across India.
          </p>
        </div>

        {/* Exam grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {examCategories.map((cat) => (
            <div key={cat.title} className={`card border-l-4 ${cat.border} ${cat.bg} p-4`}>
              <h3 className={`text-sm font-extrabold ${cat.color} font-[Poppins] mb-2`}>{cat.title}</h3>
              <ul className="space-y-1">
                {cat.items.map((item) => (
                  <li key={item} className="text-[11px] text-gray-600 flex items-start gap-1.5">
                    <ChevronRight size={10} className="text-gray-300 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#jobs" className={`inline-flex items-center gap-1 text-[10px] font-semibold ${cat.color} mt-2 hover:underline`}>
                View {cat.title} <ExternalLink size={10} />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom SEO block */}
        <div className="mt-8 max-w-4xl text-[12px] text-gray-500 leading-relaxed space-y-3">
          <p>
            <strong className="text-gray-700">Sarkari Naukri 2026:</strong> Stay updated with the latest 
            <strong> Sarkari result</strong> notifications for <strong>SSC CGL</strong>, <strong>SSC CHSL</strong>, 
            <strong>UPSC Civil Services</strong>, <strong>IBPS PO</strong>, <strong>SBI Clerk</strong>, 
            <strong>RRB NTPC</strong>, <strong>RRB Group D</strong>, and hundreds of other 
            <strong> government job vacancies</strong>. Our platform provides direct links to 
            <strong> online application forms</strong>, <strong>admit card downloads</strong>, 
            <strong>answer key PDFs</strong>, and <strong>final results</strong> for all 
            <strong> central and state government exams</strong>.
          </p>
          <p>
            <strong className="text-gray-700">Exam Form Fill Online 2026:</strong> Apply online for 
            <strong> SSC form fill online</strong>, <strong>UPSC application form</strong>, 
            <strong>bank exam online application</strong>, <strong>railway recruitment form</strong>, and 
            <strong>state PSC exam forms</strong>. Get direct application links, last date reminders, 
            application fee details, eligibility criteria, and exam pattern information 
            for all <strong>government recruitment 2026</strong> notifications.
          </p>
          <p>
            <strong className="text-gray-700">Admit Card & Answer Key 2026:</strong> Download your 
            <strong> SSC admit card 2026</strong>, <strong>UPSC admit card</strong>, 
            <strong>bank exam hall ticket</strong>, <strong>railway admit card</strong>, and 
            <strong>state exam call letters</strong>. Check <strong>answer keys</strong> for 
            <strong>SSC CGL answer key</strong>, <strong>UPSC prelims answer key</strong>, 
            <strong>IBPS PO answer key</strong>, <strong>RRB answer key</strong>, and more. 
            Get <strong>Sarkari result</strong> updates for all completed examinations.
          </p>
        </div>
      </div>
    </section>
  );
}
