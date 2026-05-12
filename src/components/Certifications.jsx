import React from 'react';

export default function Certifications() {
  const certifications = [
    {
      title: 'GDPR Basics: Life Support',
      issuer: 'General Data Protection Certificate',
      year: '2023'
    },
    {
      title: 'First Aid & Life Support',
      issuer: 'British Red Cross',
      year: '2021'
    },
    {
      title: 'DanSafe AI in Autism Support',
      issuer: 'Australian Professional Services',
      year: '2022'
    },
    {
      title: 'SLE',
      issuer: 'Macquarie Bhodia',
      year: '2019'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Certifications</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div key={idx} className="bg-slate-800 bg-opacity-50 border border-slate-700 p-6 rounded-lg hover:border-purple-500 transition-all group cursor-pointer">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{cert.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
                  <p className="text-purple-400 text-sm font-semibold mt-2">{cert.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
