import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming & Development',
      icon: '💻',
      skills: ['Python', 'R', 'JavaScript', 'React.js', 'Node.js']
    },
    {
      title: 'Data Science & AI',
      icon: '🤖',
      skills: ['Machine Learning', 'Deep Learning', 'PyTorch', 'TensorFlow', 'Scikit-learn']
    },
    {
      title: 'Tools & Platforms',
      icon: '⚙️',
      skills: ['Data Analytics', 'Excel', 'Power BI', 'SQL', 'Git & GitHub']
    },
    {
      title: 'Soft Skills',
      icon: '🎯',
      skills: ['Communication', 'Problem Solving', 'Team Collaboration', 'Adaptability', 'Time Management']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">My Skills</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-slate-800 bg-opacity-50 border border-slate-700 p-6 rounded-lg hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sidx) => (
                  <span key={sidx} className="px-3 py-1 bg-purple-600 bg-opacity-20 text-purple-300 rounded-full text-sm border border-purple-500 border-opacity-30 hover:border-purple-400 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm continuously learning and expanding my skill set to stay at the forefront of technology and data science innovations.
          </p>
        </div>
      </div>
    </section>
  );
}
