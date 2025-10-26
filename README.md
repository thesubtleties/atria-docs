# Atria Documentation

Official documentation site for [Atria](https://atria.gg) - the open-source event management and networking platform.

Built with [Docusaurus](https://docusaurus.io/), a modern static site generator.

## What's Documented

This documentation site provides comprehensive guides for:

### Getting Started
- **Installation** - Set up Atria locally with Docker, Docker Compose, manual installation, or production deployment

### Core Concepts
- **Organizations & Multi-Tenancy** - Organization structure, roles, member management, and data isolation
- **Events Overview** - Event types, lifecycle, formats (virtual/in-person/hybrid), and multi-day support

### Event Management (For Organizers)
- **Creating Events** - Step-by-step event creation, required fields, and configuration
- **Event Customization** - Hero sections, content sections, icebreakers, and branding
- **Publishing Events** - Validation, requirements, and publishing workflow
- **Managing Chat Rooms** - Create and configure chat rooms (General, Admin, Green Room)
- **Managing Icebreakers** - Set up conversation starters for attendee networking

### Attendee Management
- **Inviting Attendees** - Individual and bulk invitations, invitation workflow
- **Managing Roles** - Role hierarchy, permissions, and role changes
- **Moderation** - Event bans, chat restrictions, message deletion, and moderation history

### Sessions & Speakers
- **Creating Sessions** - Session scheduling, types, status management, and chat modes
- **Managing Speakers** - Adding speakers, roles, assignments, and speaker profiles

### Networking Features (For Attendees)
- **Making Connections** - Attendee discovery, connection requests, and icebreakers
- **Privacy Controls** - Email visibility, connection permissions, profile visibility

### Chat & Messaging (For Attendees)
- **Chat Rooms** - Using event chat rooms (global, green room, admin, session rooms)
- **Direct Messaging** - One-on-one conversations, thread management, desktop vs mobile

### Sponsors
- **Managing Sponsors** - Sponsor tiers, logo uploads, drag-and-drop ordering, visibility controls

### Your Account (For Attendees)
- **Account Creation** - Registration and email verification
- **Your Profile** - Profile editing, avatar customization, social links
- **Account & Security Settings** - Privacy settings, password management, event-specific overrides

### API Reference
- **REST API Documentation** - Auto-generated from OpenAPI specification (interactive)

## Documentation Stats

- **21 comprehensive user guides** covering organizer and attendee workflows
- **84% complete** - Core user-facing documentation finished
- All guides include real-world scenarios, troubleshooting, and best practices
- Mobile vs desktop differences documented where applicable

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

The API docs are **auto-generated during Docker builds** from the production OpenAPI spec.

For local development, generate them manually:

```bash
# Fetch and generate API docs from production
npm run gen-api-docs

# Clean generated API docs
npm run clean-api-docs
```

The API documentation is generated from: `https://atria.gg/api-spec.json`

**Note:** `docs/api/` is gitignored - API docs are generated fresh from production during each build.

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
├── docs/                      # Documentation content (Markdown)
│   ├── intro.md              # Welcome page
│   ├── getting-started/      # Installation and setup
│   ├── core-concepts/        # Organizations, events overview
│   ├── event-management/     # Event creation, customization, publishing, chat rooms, icebreakers
│   ├── attendee-management/  # Invitations, roles, moderation
│   ├── sessions-speakers/    # Session and speaker management
│   ├── networking-features/  # Connections and privacy (attendee guides)
│   ├── chat-messaging/       # Chat rooms and DMs (attendee guides)
│   ├── sponsors/             # Sponsor management
│   ├── your-account/         # Account creation, profile, settings
│   └── api/                  # Generated API docs (gitignored)
├── blog/                     # Blog posts
├── src/                      # Custom React components
│   ├── components/
│   ├── css/                  # Custom styling
│   └── pages/
├── static/                   # Static assets (images, favicons)
├── docusaurus.config.ts      # Site configuration
├── sidebars.ts              # Sidebar navigation structure
├── Dockerfile               # Production Docker image
├── DOCS_PROGRESS.md         # Documentation completion tracker
└── package.json
```

## Contributing

Contributions are welcome! Please follow these guidelines:

1. **Use clear, concise language** - Write for users, not developers
2. **Include practical examples** - Real-world scenarios and use cases
3. **Add troubleshooting** - Common issues and solutions
4. **Test locally** - Build and review before submitting
5. **Update progress tracking** - Update `DOCS_PROGRESS.md` if adding new guides

### Documentation Style

- **User-facing, not technical** - Focus on what users see and do, not implementation details
- **Include mobile differences** - Document mobile vs desktop when applicable
- **Real-world scenarios** - Provide common use case walkthroughs
- **Best practices** - Share guidance and recommendations
- **Warnings for destructive actions** - Alert users to irreversible operations

### Creating New Guides

1. Use the **Explore agent** to analyze the relevant codebase sections
2. Create user-focused guides based on actual implementation
3. Apply user corrections to ensure accuracy
4. Update `sidebars.ts` if creating new categories
5. Update `DOCS_PROGRESS.md` with completion status

## OpenAPI Integration

This site uses `docusaurus-plugin-openapi-docs` to generate interactive API documentation from the Atria OpenAPI specification.

**Note:** The OpenAPI spec currently has some schema validation issues that need to be fixed in the backend before API docs can be fully generated.

## License

Documentation is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

The Atria platform itself is licensed under AGPL-3.0 - see the [main repository](https://github.com/thesubtleties/atria) for details.

---

**Questions?** [steven@sbtl.dev](mailto:steven@sbtl.dev) | [GitHub Issues](https://github.com/thesubtleties/atria/issues)
