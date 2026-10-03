const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Configuração da versão do launcher
const VERSION = "1.0.0";
const UPDATE_URL = "https://SEU-ENDERECO.onrender.com/api/download/launcher.apk";

app.get("/", (req, res) => {
  res.json({
    status: "online",
    name: "SA-MP Launcher API",
    version: VERSION
  });
});

app.get("/api/version", (req, res) => {
  res.json({
    version: VERSION,
    update: true,
    download: UPDATE_URL
  });
});

app.get("/api/files", (req, res) => {
  const folder = path.join(__dirname, "files");

  fs.readdir(folder, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Não foi possível listar os arquivos." });
    }

    res.json({
      files: files
    });
  });
});

app.get("/api/download/:filename", (req, res) => {
  const filename = path.basename(req.params.filename);
  const filePath = path.join(__dirname, "files", filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "Arquivo não encontrado." });
  }

  res.download(filePath);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API online na porta ${PORT}`);
});
