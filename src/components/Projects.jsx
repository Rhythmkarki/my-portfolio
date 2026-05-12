import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Fake News Detection System',
      description: 'ML-based system to classify news articles as real or fake using machine learning NLP techniques',
      tech: ['Python', 'Machine Learning', 'NLP'],
      link: '#'
    },
    {
      title: 'AI Resume Screening System',
      description: 'AI-powered tool that analyzes resumes and matches candidates with job descriptions intelligently',
      tech: ['AI', 'Python', 'Analytics'],
      link: '#'
    },
    {
      title: 'Student Performance Prediction',
      description: 'Predicts student academic performance using ML models, ML, checklist and analytics',
      tech: ['Python', 'Data Analytics', 'Machine Learning'],
      link: '#'
    },
    {
      title: 'COVID-19 Data Analysis Dashboard',
      description: 'Interactive dashboard analyzing COVID-19 data and forecasting trends using statistical models',
      tech: ['Data Visualization', 'Python', 'Analytics'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900 bg-opacity-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Projects</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {projects.map((project, idx) => (
            <a key={idx} href={project.link} className="group bg-slate-800 bg-opacity-50 border border-slate-700 rounded-lg overflow-hidden hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <div className="h-48 bg-gradient-to-br from-purple-600 to-blue-600 opacity-30 flex items-center justify-center group-hover:opacity-40 transition-opacity">
                <span className="text-5xl">📊</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, tidx) => (
                    <span key={tidx} className="text-xs px-2 py-1 bg-purple-600 bg-opacity-20 text-purple-300 rounded border border-purple-500 border-opacity-30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="inline-block px-6 py-3 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all font-medium">
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
