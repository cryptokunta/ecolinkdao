import { PreviewButton } from "@/components/preview/preview-button"

const sampleHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Preview Example</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      margin: 0;
      padding: 2rem;
      background: #f9fafb;
      color: #111827;
    }
    .container {
      max-width: 64rem;
      margin: 0 auto;
    }
    .header {
      margin-bottom: 2rem;
      text-align: center;
    }
    .content {
      background: white;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <div class="container">
    <header class="header">
      <h1>Preview Example</h1>
      <p>This is a sample preview page demonstrating the preview functionality.</p>
    </header>
    <main class="content">
      <h2>Features</h2>
      <ul>
        <li>Responsive design</li>
        <li>Clean typography</li>
        <li>Modern styling</li>
      </ul>
    </main>
  </div>
</body>
</html>
`

export default function PreviewPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end mb-4">
        <PreviewButton html={sampleHtml} />
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <h1>Preview Functionality</h1>
        <p>Click the preview button above to see the preview in action.</p>
      </div>
    </div>
  )
}