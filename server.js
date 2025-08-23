import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Since we are using ES modules, __dirname is not available directly.
// This is the standard way to get the directory name in an ES module.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Use the PORT environment variable if available, otherwise default to 3000
const port = process.env.PORT || 3000;

// Serve static files from the 'dist' directory, which is where Vite places the build output.
app.use(express.static(path.join(__dirname, 'dist')));

// This catch-all route handles all other requests by sending back the main index.html file.
// This is crucial for single-page applications (SPAs) that use client-side routing (like React Router).
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
