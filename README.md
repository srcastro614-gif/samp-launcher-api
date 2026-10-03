# SA-MP Launcher API

API simples para hospedar arquivos e informações de atualização do seu launcher SA-MP.

## Endpoints

- GET `/` - verifica se a API está online
- GET `/api/version` - retorna a versão e URL de atualização
- GET `/api/files` - lista os arquivos disponíveis
- GET `/api/download/:filename` - baixa um arquivo

## Rodar localmente

```bash
npm install
npm start
```

## Deploy no Render

- Build Command: `npm install`
- Start Command: `npm start`

Depois do deploy, você receberá uma URL parecida com:

`https://samp-launcher-api.onrender.com`

## Importante

Abra `server.js` e altere:

`https://SEU-ENDERECO.onrender.com/api/download/launcher.apk`

para a URL real do seu serviço.

Coloque o APK ou outros arquivos do launcher dentro da pasta `files/`.
