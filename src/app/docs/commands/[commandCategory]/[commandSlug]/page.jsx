import { getDocBySlugAsync } from '@/lib/docs';
import DebugMarkdown from '@/app/components/DebugMarkdown';
import RawContentViewer from '@/app/components/RawContentViewer';

export async function generateMetadata({ params }) {
  // In Next.js 15.x, we need to await params before destructuring
  const resolvedParams = await Promise.resolve(params);
  const { commandCategory, commandSlug } = resolvedParams;
  const commandData = await getDocBySlugAsync(`commands/${commandCategory}`, commandSlug);
  
  return {
    title: commandData?.title || 'Command Documentation',
    description: commandData?.description || 'Java Lava Bot command documentation',
  };
}

export default async function CommandPage({ params }) {
  // In Next.js 15.x, we need to await params before destructuring
  const resolvedParams = await Promise.resolve(params);
  const { commandCategory, commandSlug } = resolvedParams;
  const commandData = await getDocBySlugAsync(`commands/${commandCategory}`, commandSlug);

  if (!commandData) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Command Not Found</h1>
        <p>The requested command documentation could not be found.</p>
      </div>
    );
  }
  
  return (
    <article className="max-w-none">
      <DebugMarkdown />
      <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 capitalize">
            {commandCategory}
          </span>
        </div>
        
        <div className="prose prose-invert max-w-none" 
             dangerouslySetInnerHTML={{ __html: commandData.contentHtml }} />
        
        {process.env.NODE_ENV === 'development' && (
          <RawContentViewer 
            markdown={commandData.content} 
            html={commandData.contentHtml} 
          />
        )}
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-medium mb-3">Quick Reference</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Usage</p>
            <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm">
              {commandData.usage || 'Usage information not available'}
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Required Permissions</p>
            <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm">
              {commandData.permissions || 'None'}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
