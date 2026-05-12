import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-900 bg-opacity-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">About Me</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800 bg-opacity-50 border border-slate-700 p-6 rounded-lg hover:border-purple-500 transition-colors">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-lg font-bold text-white mb-3">Education</h3>
            <p className="text-gray-400">Master of Data Science from Macquarie University, Sydney</p>
          </div>

          <div className="bg-slate-800 bg-opacity-50 border border-slate-700 p-6 rounded-lg hover:border-purple-500 transition-colors">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-lg font-bold text-white mb-3">Expertise</h3>
            <p className="text-gray-400">Data Science, Machine Learning, AI, Python, SQL, and modern web technologies</p>
          </div>

          <div className="bg-slate-800 bg-opacity-50 border border-slate-700 p-6 rounded-lg hover:border-purple-500 transition-colors">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-lg font-bold text-white mb-3">Passion</h3>
            <p className="text-gray-400">Building intelligent systems that solve real-world problems through data-driven insights</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6">
            I'm a Data Science student with expertise in machine learning and computer engineering. I have hands-on experience across healthcare, workforce support, and disability services. 
            I excel at leveraging data and technology to solve complex challenges with analytics, machine learning models, and modern web applications.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring data scientists.
          </p>
        </div>
      </div>
    </section>
  );
}
