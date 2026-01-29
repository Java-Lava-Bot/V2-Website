import { getDocBySlugAsync } from '@/lib/docs';

export async function generateMetadata({ params }) {
  // In Next.js 15.x, we need to await params before destructuring
  const resolvedParams = await Promise.resolve(params);
  const { updateSlug } = resolvedParams;
  const updateData = await getDocBySlugAsync('updates', updateSlug);

  return {
    title: updateData?.title || 'Update Documentation',
    description:
      updateData?.description || 'Java Lava Bot update documentation',
  };
}

export default async function UpdatePage({ params }) {
  // In Next.js 15.x, we need to await params before destructuring
  const resolvedParams = await Promise.resolve(params);
  const { updateSlug } = resolvedParams;
  const updateData = await getDocBySlugAsync('updates', updateSlug);

  if (!updateData) {
    return (
      <div className='text-center py-12'>
        <h1 className='text-2xl font-bold text-red-600 mb-4'>
          Update Not Found
        </h1>
        <p>The requested update documentation could not be found.</p>
      </div>
    );
  }

  return (
    <article className='max-w-none'>
      <div className='mb-8'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-6 pb-6 border-b border-gray-200 dark:border-gray-700'>
          <h1 className='text-3xl font-bold mb-2 md:mb-0 text-gray-900 dark:text-white'>
            {updateData.title}
          </h1>

          {updateData.date && (
            <span className='text-sm text-gray-500 dark:text-gray-400'>
              Released on{' '}
              {new Date(updateData.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          )}
        </div>

        <div
          className='prose prose-invert max-w-none'
          dangerouslySetInnerHTML={{ __html: updateData.contentHtml }}
        />
      </div>
    </article>
  );
}
