import Link from 'next/link';
import { getCommandCategories, getCommandsByCategory } from '@/lib/docs';

export const metadata = {
  title: 'Commands - Java Lava Bot',
  description: 'Browse all Java Lava bot commands',
};

export default function CommandsPage() {
  const categories = getCommandCategories();
  
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Bot Commands
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
          Explore all of Java Lava's powerful commands and learn how to use them.
        </p>
      </div>
      
      {/* Command Categories */}
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {categories.map((category) => {
          const commands = getCommandsByCategory(category);
          return (
            <div key={category} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 capitalize">{category} Commands</h2>
              
              {commands.length > 0 ? (
                <ul className="space-y-2 mb-6">
                  {commands.map((command) => (
                    <li key={command.id}>
                      <Link 
                        href={`/docs/commands/${category}/${command.id}`}
                        className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
                      >
                        {command.title}
                      </Link>
                      {command.description && (
                        <p className="text-sm text-gray-500 dark:text-gray-400">{command.description}</p>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 dark:text-gray-400 mb-6">No commands available in this category yet.</p>
              )}
              
              <Link 
                href={`/docs/commands/${category}`}
                className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
              >
                View All {category} Commands
              </Link>
            </div>
          );
        })}
      </div>
      
      {categories.length === 0 && (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
          <p className="text-gray-500 dark:text-gray-400">No command categories available yet.</p>
        </div>
      )}
    </div>
  );
}
