import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import routes from "./src/routes"; // array form
import App from "./src/App";

const app = express();
const PORT = process.env.PORT || 4173;

// Serve static built client bundle (after build)
// Adjust path if you output to /dist
app.use(express.static(path.resolve(__dirname, "dist"), { index: false }));

app.get("*", async (req, res) => {
  try {
    // create a static router for server rendering
    // React Router v7 supports creating a memory/static router for SSR
    const context = {};
    const markup = renderToString(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    );

    // Simple HTML template: load the built index.html and inject markup
    const indexFile = path.resolve(__dirname, "dist/index.html");
    let html = fs.readFileSync(indexFile, "utf8");
    html = html.replace(`<!--ssr-outlet-->`, markup);

    res.status(200).set({ "Content-Type": "text/html" }).send(html);
  } catch (e) {
    console.error(e);
    res.status(500).end("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`SSR server running at http://localhost:${PORT}`);
});
