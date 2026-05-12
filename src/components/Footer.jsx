import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-gray-400 mb-2">
          © 2026 Rhythm Karki. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Built with <span className="text-purple-400">React</span> + <span className="text-purple-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
