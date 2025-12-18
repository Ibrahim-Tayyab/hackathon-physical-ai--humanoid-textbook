# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

### Vercel Deployment (Recommended)

**⚠️ IMPORTANT: Read the [VERCEL_DEPLOYMENT_GUIDE.md](VERCEL_DEPLOYMENT_GUIDE.md) for complete setup instructions!**

#### Quick Setup:
1. **Set Environment Variables** in Vercel Dashboard:
   - `QDRANT_URL` - Your Qdrant Cloud instance URL
   - `QDRANT_API_KEY` - Qdrant API key
   - `COHERE_API_KEY` - Cohere API key
   - `GOOGLE_API_KEY` - Google Gemini API key
   - `MODEL_NAME` - (optional, default: gemini-1.5-flash-latest)

2. **Deploy**:
   ```bash
   vercel --prod
   ```

   Or connect your GitHub repo to Vercel for automatic deployments.

3. **Test**: Visit your Vercel domain and try the chatbot!

For detailed instructions, environment variables, and troubleshooting, see [VERCEL_DEPLOYMENT_GUIDE.md](VERCEL_DEPLOYMENT_GUIDE.md)

### GitHub Pages Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

⚠️ Note: GitHub Pages doesn't support Python backends, so the chatbot API won't work. Use Vercel for full functionality.
