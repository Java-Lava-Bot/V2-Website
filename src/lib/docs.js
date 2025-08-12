import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import remarkSlug from 'remark-slug';

// Base path for documentation files
const docsDirectory = path.join(process.cwd(), 'src/content/docs');

// Get all documentation categories (folders in the docs directory)
export function getDocCategories() {
  return fs.readdirSync(docsDirectory).filter(dir => 
    fs.statSync(path.join(docsDirectory, dir)).isDirectory()
  );
}

// Get all files in a specific category
export function getDocsByCategory(category) {
  const categoryPath = path.join(docsDirectory, category);
  
  if (!fs.existsSync(categoryPath)) {
    return [];
  }
  
  // Get all .md files in the category directory
  const fileNames = fs.readdirSync(categoryPath)
    .filter(file => file.endsWith('.md'));
  
  const allDocs = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');
    
    // Read markdown file as string
    const fullPath = path.join(categoryPath, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    
    // Combine the data
    return {
      id,
      category,
      ...matterResult.data,
      content: matterResult.content,
    };
  });
  
  // Sort docs by date if available, otherwise by title
  return allDocs.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date) - new Date(a.date);
    }
    return a.title?.localeCompare(b.title) || 0;
  });
}

// Get a specific document by category and id (synchronous version for client components)
export function getDocBySlug(category, slug) {
  const fullPath = path.join(docsDirectory, category, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  
  // For client components, we'll return the markdown content directly
  // The component using this data should handle rendering
  return {
    slug,
    category,
    content: matterResult.content,
    ...matterResult.data,
  };
}

// Get a specific document by category and id (async version for server components)
export async function getDocBySlugAsync(category, slug) {
  const fullPath = path.join(docsDirectory, category, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkGfm) // GitHub Flavored Markdown support
    .use(remarkSlug) // Add IDs to headings for linking
    .use(remarkEmoji) // Convert emoji shortcodes to actual emojis
    .use(html, { 
      sanitize: false
    })
    .process(matterResult.content);
  
  const contentHtml = processedContent.toString();
  
  // Combine the data
  return {
    slug,
    category,
    contentHtml,
    content: matterResult.content, // Include the raw content as well
    ...matterResult.data,
  };
}

// Get all command categories
export function getCommandCategories() {
  const commandsPath = path.join(docsDirectory, 'commands');
  
  if (!fs.existsSync(commandsPath)) {
    return [];
  }
  
  return fs.readdirSync(commandsPath)
    .filter(dir => fs.statSync(path.join(commandsPath, dir)).isDirectory());
}

// Get all commands in a category
export function getCommandsByCategory(category) {
  const categoryPath = path.join(docsDirectory, 'commands', category);
  
  if (!fs.existsSync(categoryPath)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(categoryPath)
    .filter(file => file.endsWith('.md'));
  
  return fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(categoryPath, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    return {
      id,
      category,
      ...matterResult.data,
      content: matterResult.content,
    };
  }).sort((a, b) => a.title?.localeCompare(b.title) || 0);
}

// Get all updates
export function getAllUpdates() {
  const updatesPath = path.join(docsDirectory, 'updates');
  
  if (!fs.existsSync(updatesPath)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(updatesPath)
    .filter(file => file.endsWith('.md') && file !== 'index.md');
  
  return fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(updatesPath, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    return {
      id,
      category: 'updates',
      ...matterResult.data,
    };
  }).sort((a, b) => {
    if (a.version && b.version) {
      // Try to sort numerically by version
      const aVer = parseFloat(a.version.replace('Version ', ''));
      const bVer = parseFloat(b.version.replace('Version ', ''));
      return bVer - aVer; // Newest versions first
    }
    return new Date(b.date || 0) - new Date(a.date || 0);
  });
}
