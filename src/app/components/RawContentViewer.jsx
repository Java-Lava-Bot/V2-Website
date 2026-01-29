'use client';

import { useState } from 'react';

export default function RawContentViewer({ markdown, html }) {
  const [activeTab, setActiveTab] = useState('html');

  return (
    <div className='mt-8 p-4 bg-gray-800 border border-gray-700 rounded'>
      <div className='flex mb-4 border-b border-gray-700'>
        <button
          onClick={() => setActiveTab('markdown')}
          className={`px-4 py-2 mr-2 ${activeTab === 'markdown' ? 'bg-gray-700 text-white' : 'text-gray-400'}`}
        >
          Raw Markdown
        </button>
        <button
          onClick={() => setActiveTab('html')}
          className={`px-4 py-2 ${activeTab === 'html' ? 'bg-gray-700 text-white' : 'text-gray-400'}`}
        >
          Generated HTML
        </button>
      </div>

      {activeTab === 'markdown' ? (
        <pre className='text-xs overflow-auto p-2 bg-gray-900 h-64'>
          {markdown}
        </pre>
      ) : (
        <pre className='text-xs overflow-auto p-2 bg-gray-900 h-64'>{html}</pre>
      )}
    </div>
  );
}
