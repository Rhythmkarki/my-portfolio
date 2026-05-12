import React from 'react';

export default function Experience() {
  const experiences = [
    {
      date: 'Oct 2022 - Present',
      title: 'AssistantBo Hosting (AIN) – Aged-care Baptist Homes',
      responsibilities: [
        'Provided high-quality nursing care and odd jobs, compassionately to residents',
        'Maintained patient daily care for facilitating, updating and documenting care accounts',
        'Collaborated with healthcare team to ensure best patient planned assisted care'
      ]
    },
    {
      date: 'Jun 2022 - Jun 2022',
      title: 'Assistant in Hosting (AIN) – The Nest Care Service',
      responsibilities: [
        'Delivered daily care for facilitating, updating and documenting care accounts',
        'Maintained efficient work schedule using teamwork caring and documenting care encounters',
        'Supported healthcare team to ensure best patient standard hospital care'
      ]
    },
    {
      date: 'Apr 2022 - Present',
      title: 'Disability Support Worker – Wavew Staffing Solution',
      responsibilities: [
        'Migrated unseen daily care duties and prevented care'
      ]
    },
    {
      date: 'Apr 2022 - Present',
      title: 'Camp Glengloss - Assistance',
      responsibilities: [
        'Engaged support in collaborative and reliable camp tasks',
        'Showed their caring advanced looking and they were booked cycle by parents',
        'Suggested students growth and advancement new development area'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Experience</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-12"></div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-purple-600 pl-6 pb-8 relative">
              <div className="absolute -left-3.5 top-0 w-6 h-6 bg-purple-600 rounded-full border-4 border-slate-900"></div>
              <p className="text-purple-400 font-semibold text-sm mb-2">{exp.date}</p>
              <h3 className="text-xl font-bold text-white mb-3">{exp.title}</h3>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, ridx) => (
                  <li key={ridx} className="text-gray-400 flex items-start gap-3">
                    <span className="text-purple-400 mt-1.5">▪</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
