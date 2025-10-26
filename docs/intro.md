---
sidebar_position: 1
---

# Welcome to Atria

**Build meaningful connections that last beyond your events.**

Atria is an open-source event management platform that combines comprehensive event administration with privacy-respecting networking features. Whether you're running corporate conferences, nonprofit fundraising galas, educational workshops, church events, creator meetups, or community gatherings, Atria provides the tools you need without the bloat you don't.

## What is Atria?

Atria is an **open-source event management and networking platform** that combines:

- **Event Management** - Multi-day events, session scheduling, speaker coordination, hybrid event support
- **Real-Time Communication** - Multi-level chat rooms, direct messaging, session-specific channels
- **Privacy-Respecting Networking** - Icebreaker-based connection requests, attendee discovery with privacy controls
- **Multi-Tenant Architecture** - Organization-level management with complete data isolation
- **Professional Features** - Multi-tier sponsor management, granular role-based permissions, secure file storage

## Why Choose Atria?

### Event-Focused, Not Platform-Focused
When you're managing an event, you see only that event. No distracting sidebars, no unrelated organizations, no feature overload. Just powerful tools to run your event and facilitate meaningful networking.

### True Open Source & Data Ownership
- **AGPL-3.0 licensed** - Complete transparency and freedom
- **Your data stays yours** - Export or migrate anytime, no vendor lock-in
- **Self-host or cloud** - Run it yourself for free, or use managed hosting
- **No surprise pricing** - Never held hostage by sudden price increases
- **Community-driven** - Talk directly to the developers who built it

### Built for Real Events
Corporations, nonprofits, education, faith organizations, influencers, communities - Atria handles conferences, fundraising galas, workshops, church events, creator meetups, professional associations, and everything in between.

### Modern Technology Stack

**Backend:**
- Python 3.13 with Flask framework
- PostgreSQL 15 with SQLAlchemy ORM
- Redis 7 for caching, presence tracking, and Socket.IO clustering
- Flask-SocketIO for real-time features
- S3-compatible storage (MinIO, AWS S3, or similar)

**Frontend:**
- React 18 with Vite 6 build system
- Mantine UI 7 component library
- Redux Toolkit + RTK Query for state management
- Socket.IO Client for real-time updates
- Zod for runtime validation

## Quick Links

- **[Getting Started →](./getting-started/installation)** - Install Atria locally in 5 minutes
- **[API Reference →](/docs/api/atria-api)** - Complete REST API documentation
- **[Live Demo →](https://atria.gg/app)** - Try Atria in action
- **[GitHub Repository →](https://github.com/thesubtleties/atria)** - View the source code and contribute

## Project Status

**Current State:** Live at [atria.gg](https://atria.gg) with active development

- 196 passing tests (~47% backend coverage, target: 80%+)
- Automated CI/CD with GitHub Actions
- Multi-instance scaling ready (Socket.IO clustering with Redis)
- Actively maintained with regular updates

## Deployment Options

### Self-Hosted (Free)
Run your own instance with complete control. Free under AGPL-3.0 license. Perfect for organizations with specific compliance requirements.

### Managed Hosting (atria.gg)
**Currently in Early Access** - Free with no event size limits while we finalize features and stabilize the platform. Free tier (50 attendees) after v1.0 release.

### Custom Private Instance
Managed setup with complete isolation, custom branding and features, flexible commercial licensing. Contact [steven@sbtl.dev](mailto:steven@sbtl.dev) for pricing.

## What's Next?

Ready to get started? Head to the [Installation Guide](./getting-started/installation) to set up Atria locally, or dive into the [API Reference](/docs/api/atria-api) to explore the platform's capabilities.

---

**Have questions?** [Contact us](mailto:steven@sbtl.dev) | [GitHub Issues](https://github.com/thesubtleties/atria/issues) | [GitHub Discussions](https://github.com/thesubtleties/atria/discussions)
