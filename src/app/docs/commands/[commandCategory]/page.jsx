import { getCommandsByCategory } from '@/lib/docs';
import Link from 'next/link';

export default function CommandCategoryPage({ params }) {
  const { commandCategory } = params;
  const commands = getCommandsByCategory(commandCategory);

  if (!commands || commands.length === 0) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-red-600 mb-4">No Commands Found</h1>
        <p>No commands available in this category.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 capitalize">{commandCategory} Commands</h1>
      <ul className="space-y-4">
        {commands.map((cmd) => (
          <li key={cmd.id}>
            <Link href={`/docs/commands/${commandCategory}/${cmd.id}`}>
              <span className="text-indigo-600 hover:underline font-medium">{cmd.title || cmd.id}</span>
            </Link>
            {cmd.description && (
              <p className="text-gray-500 text-sm">{cmd.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}