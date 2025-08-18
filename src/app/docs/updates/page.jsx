import Link from 'next/link';
import { getAllUpdates } from '@/lib/docs';

export const metadata = {
  title: 'Updates - Java Lava Bot',
  description: 'Release notes and version history for Java Lava Bot',
};

export default function UpdatesPage() {
  const allUpdates = getAllUpdates();
  
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Java Lava Updates
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
          Stay informed about the latest features, improvements, and bug fixes.
        </p>
      </div>
      
      {/* Index content */}
      <div className="prose dark:prose-invert max-w-none mb-10">
        <p>Find all the latest updates and release notes for the Java Lava Discord bot below.</p>
      </div>
      
      {/* Updates list */}
      <div className="mt-16 grid gap-8">
        {allUpdates.map((update) => (
          <div key={update.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{update.title}</h2>
              {update.date && (
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Released on {new Date(update.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              )}
            </div>
            
            <Link 
              href={`/docs/updates/${update.id}`}
              className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
      
      {allUpdates.length === 0 && (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
          <p className="text-gray-500 dark:text-gray-400">No updates available yet.</p>
        </div>
      )}
    </div>
  );
}
