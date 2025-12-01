import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Serve public assets (raw gltf, images, models, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Serve built frontend
app.use(express.static(path.join(__dirname, "dist")));

app.get(/.*/, (_, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => console.log(`Server running on ${port}`));
