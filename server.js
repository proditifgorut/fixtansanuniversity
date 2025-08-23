import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use('/public', express.static(path.join(__dirname, 'public')));
// Serve static files from the 'pages' directory
app.use('/pages', express.static(path.join(__dirname, 'pages')));

// Serve the main index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log('Please run "npm run build:css" to generate styles.');
});
