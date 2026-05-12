import React from 'react';

export default function Education() {
  const education = [
    {
      degree: 'Master of Data Science',
      institution: 'Macquarie University',
      location: 'Sydney, Australia',
      year: '2023 - Present'
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Kathmandu University',
      location: 'Nepal',
      year: '2019 - 2019'
    },
    {
      degree: 'Certificate in Hosting Support',
      institution: 'Nacon Cancer Evasion',
      location: 'Sydney, Australia',
      year: '2021 - 2022'
    },
    {
      degree: 'Higher Education (10)',
      institution: 'Phoenix Higher School',
      location: 'Nepal',
      year: '2016'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-slate-900 bg-opacity-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Education</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-slate-800 bg-opacity-50 border border-slate-700 p-6 rounded-lg hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <p className="text-purple-400 text-sm font-semibold">{edu.year}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-1">{edu.institution}</p>
              <p className="text-gray-500 text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                {edu.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
