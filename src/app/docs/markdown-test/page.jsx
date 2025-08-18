export default function MarkdownTestPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Markdown Test Page</h1>

      <div className="prose prose-invert max-w-none">
        <h1>This is an H1 heading</h1>
        <h2>This is an H2 heading</h2>
        <h3>This is an H3 heading</h3>
        
        <p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>
        
        <ul>
          <li>Unordered list item 1</li>
          <li>Unordered list item 2</li>
          <li>Unordered list item 3</li>
        </ul>
        
        <ol>
          <li>Ordered list item 1</li>
          <li>Ordered list item 2</li>
          <li>Ordered list item 3</li>
        </ol>
        
        <pre><code className="language-javascript">
        {`function hello() {
  console.log("Hello world");
  return true;
}`}
        </code></pre>
        
        <p>Here is some <code>inline code</code> in a paragraph.</p>
        
        <blockquote>
          <p>This is a blockquote with some text.</p>
        </blockquote>
        
        <table>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cell 1</td>
              <td>Cell 2</td>
              <td>Cell 3</td>
            </tr>
            <tr>
              <td>Cell 4</td>
              <td>Cell 5</td>
              <td>Cell 6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
