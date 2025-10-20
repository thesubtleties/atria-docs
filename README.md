# Atria Documentation

Official documentation site for [Atria](https://atria.gg) - the open-source event management and networking platform.

Built with [Docusaurus](https://docusaurus.io/), a modern static site generator.

## Development

### Prerequisites

- Node.js 20+
- npm

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start
```

This command starts a local development server and opens a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
# Build static site
npm run build
```

This command generates static content into the `build` directory that can be served using any static hosting service.

### Generate API Documentation

When the backend OpenAPI spec is updated:

```bash
# Fetch and generate API docs from production
npm run gen-api-docs

# Clean generated API docs
npm run clean-api-docs
```

The API documentation is generated from: `https://atria.gg/api-spec.json`

## Deployment

### Docker

Build and run with Docker:

```bash
# Build the image
docker build -t atria-docs .

# Run the container
docker run -p 3000:80 atria-docs
```

Or use Docker Compose:

```bash
docker-compose up
```

The site will be available at `http://localhost:3000`

### Production

The docs site is automatically deployed to the K3s cluster when changes are pushed to the main branch.

## Project Structure

```
atria-docs/
├── docs/               # Documentation content (Markdown)
│   ├── intro.md
│   ├── getting-started/
│   └── api/            # Generated API docs (gitignored)
├── blog/              # Blog posts
├── src/               # Custom React components
│   ├── components/
│   ├── css/
│   └── pages/
├── static/            # Static assets
├── docusaurus.config.ts  # Site configuration
├── sidebars.ts        # Sidebar configuration
├── Dockerfile         # Production Docker image
└── package.json
```

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Use clear, concise language
2. Include code examples where appropriate
3. Update the table of contents if adding new sections
4. Test the build locally before submitting

## OpenAPI Integration

This site uses `docusaurus-plugin-openapi-docs` to generate interactive API documentation from the Atria OpenAPI specification.

**Note:** The OpenAPI spec currently has some schema validation issues that need to be fixed in the backend before API docs can be fully generated.

## License

Documentation is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

The Atria platform itself is licensed under AGPL-3.0 - see the [main repository](https://github.com/thesubtleties/atria) for details.
