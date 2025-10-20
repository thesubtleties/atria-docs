---
sidebar_position: 1
---

# Installation

Get Atria up and running on your local machine in minutes. This guide covers the quickest path to a working development environment.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Docker** (20.10+) and **Docker Compose** (v2.0+)
  - [Install Docker Desktop](https://docs.docker.com/get-docker/) (includes Docker Compose)
- **Git** for cloning the repository

:::tip Recommended but Optional
- **tmux** - Used by the development scripts for managing multiple services
- If you don't have tmux, you can run Docker Compose commands directly
:::

## Quick Start (5 Minutes)

The fastest way to get Atria running locally:

### 1. Clone the Repository

```bash
git clone https://github.com/thesubtleties/atria.git
cd atria
```

### 2. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.development
```

Edit `.env.development` with your database credentials:

```bash
# Database (required)
POSTGRES_USER=atria_user
POSTGRES_PASSWORD=your_secure_password
POSTGRES_DB=atria_dev

# Ports (defaults work fine)
BACKEND_PORT=5000
FRONTEND_PORT=5173
VITE_API_URL=http://localhost:5000/api
```

:::info MinIO Configuration
For local development, you'll need to configure object storage. See the [Storage Configuration](#minio--s3-storage) section below.
:::

### 3. Choose Your Development Environment

Atria provides multiple development environments. For first-time setup, use the **interactive chooser**:

```bash
./dev-environment-chooser.sh
```

Select option **1) Standard Local Development** for the simplest setup.

Alternatively, run directly:

```bash
./start-local-dev-tmux.sh
```

### 4. Access Atria

Once the containers are running:

- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5000](http://localhost:5000)
- **API Documentation**: [http://localhost:5000/new-swagger](http://localhost:5000/new-swagger)

### 5. Create Your First Account

1. Navigate to [http://localhost:5173](http://localhost:5173)
2. Click "Sign Up" and create an account
3. Create your first organization
4. Start exploring!

## Development Environments

Atria offers 4 different development environments for different use cases. Use the interactive chooser to switch between them:

```bash
./dev-environment-chooser.sh
```

### 1. Standard Local Development

**Best for:** General development, UI work, getting started

```bash
./start-local-dev-tmux.sh
```

**Features:**
- Single backend instance
- No Redis (in-memory Socket.IO)
- Direct port access (5000, 5173)
- Fastest startup
- Hot reload for both frontend and backend

**Services:**
- Backend: `localhost:5000`
- Frontend (Vite dev server): `localhost:5173`
- PostgreSQL: `localhost:5432`

### 2. Redis + Traefik Development

**Best for:** Testing clustering, Socket.IO, caching, production-like behavior

```bash
./start-redis-dev-tmux.sh
```

**Features:**
- **Two backend instances** (clustered)
- **Redis** for Socket.IO pub/sub + caching
- **Traefik** load balancer
- Production-like environment

**Services:**
- Load Balancer (Traefik): `localhost:80`
- Backend instances: 2 replicas
- Redis: `localhost:6379`
- PostgreSQL: `localhost:5432`

**Use this when:**
- Testing multi-instance deployments
- Verifying Socket.IO works across instances
- Testing Redis caching behavior
- Simulating production load balancing

### 3. Production Preview (nginx)

**Best for:** Testing SEO, performance, production builds

```bash
./start-preview-tmux.sh
```

**Features:**
- Builds frontend with pre-rendering
- Serves with nginx (compression, HTTP/2)
- Production-accurate performance
- **No hot reload** (requires rebuild)

**Services:**
- Frontend (nginx): `localhost:8080`
- Backend: `localhost:5000`

**Use this when:**
- Testing production build performance
- Verifying SEO and meta tags
- Benchmarking page load times
- Testing nginx configurations

### 4. Tailscale Mobile Testing

**Best for:** Mobile/phone testing, remote access

```bash
./start-tailscale-dev-tmux.sh
```

**Features:**
- Redis + Traefik (production-like)
- Configured for Tailscale remote access
- Two backend instances (clustered)

**Requires:**
- [Tailscale](https://tailscale.com/) installed and configured
- Access from mobile devices on the same Tailscale network

## Configuration

### Database Seeding

Some dev environments support database seeding with demo data:

```bash
# With Redis/Traefik environment
./start-redis-dev-tmux.sh
# You'll be prompted: "Seed the database? (y/N)"
```

Or set the environment variable:

```bash
export SEED_DB=true
./start-redis-dev-tmux.sh
```

### MinIO / S3 Storage

Atria uses **MinIO** (S3-compatible storage) for file uploads. You have several options:

#### Option 1: Use External MinIO (Recommended for Development)

Set these environment variables in your `.env.development`:

```bash
# MinIO Configuration
MINIO_ENDPOINT=minio.yourserver.com:9000  # Your MinIO instance
MINIO_ACCESS_KEY=your_access_key
MINIO_SECRET_KEY=your_secret_key
MINIO_USE_SSL=true
MINIO_EXTERNAL_URL=https://storage.yourserver.com  # For presigned URLs

# Optional: Custom bucket names
MINIO_BUCKET_PUBLIC=atria-public
MINIO_BUCKET_AUTHENTICATED=atria-authenticated
MINIO_BUCKET_PRIVATE=atria-private
```

#### Option 2: Run MinIO Locally

Add a MinIO service to your Docker Compose setup:

```yaml
# Add to docker-compose.local-dev.yml
services:
  minio:
    image: minio/minio:latest
    command: server /data --console-address ":9001"
    ports:
      - "9000:9000"  # API
      - "9001:9001"  # Console
    environment:
      - MINIO_ROOT_USER=minioadmin
      - MINIO_ROOT_PASSWORD=minioadmin
    volumes:
      - minio_data:/data

volumes:
  minio_data:
```

Then configure:

```bash
MINIO_ENDPOINT=localhost:9000
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin
MINIO_USE_SSL=false
MINIO_EXTERNAL_URL=http://localhost:9000
```

#### Option 3: Use AWS S3 or Compatible Service

MinIO is S3-compatible, so you can use any S3-compatible storage:

```bash
# AWS S3
MINIO_ENDPOINT=s3.amazonaws.com
MINIO_ACCESS_KEY=<your-aws-access-key>
MINIO_SECRET_KEY=<your-aws-secret-key>
MINIO_USE_SSL=true
MINIO_EXTERNAL_URL=https://s3.amazonaws.com

# Wasabi
MINIO_ENDPOINT=s3.wasabisys.com
# ... etc

# Backblaze B2 (via S3-compatible API)
MINIO_ENDPOINT=s3.us-west-002.backblazeb2.com
# ... etc
```

:::tip
The MinIO Python client works with **any S3-compatible storage provider**. Just change the endpoint and credentials!
:::

### Email Configuration (Optional)

Atria uses SMTP2GO for transactional emails. Without configuration, email features will be disabled but the app will work fine.

```bash
# SMTP2GO Configuration (optional)
SMTP2GO_API_KEY=your_api_key
MAIL_DEFAULT_SENDER=noreply@yourdomain.com
FRONTEND_URL=http://localhost:5173
```

### Redis Configuration (Optional for Standard Dev)

Redis is optional in development. When not configured, Atria uses in-memory alternatives:

```bash
# Redis (optional in development)
REDIS_URL=redis://localhost:6379/0

# Socket.IO can use separate Redis instance
SOCKETIO_REDIS_URL=redis://localhost:6379/1
```

**What happens without Redis:**
- Socket.IO uses in-memory adapter (single instance only)
- Caching disabled (all queries hit database)
- No presence tracking/typing indicators
- App remains fully functional for development

## Troubleshooting

### Port Already in Use

If you see "port already in use" errors:

```bash
# Check what's using the ports
lsof -i :5000  # Backend
lsof -i :5173  # Frontend
lsof -i :5432  # PostgreSQL

# Stop all running environments
./dev-environment-chooser.sh
# Select option "6) Stop All"
```

### Database Connection Issues

```bash
# Reset the database
docker-compose -f docker-compose.local-dev.yml down -v
docker-compose -f docker-compose.local-dev.yml up -d

# Check database logs
docker logs atria-db-dev
```

### Frontend Not Loading

```bash
# Rebuild frontend container
docker-compose -f docker-compose.local-dev.yml up -d --build frontend
```

### MinIO Connection Errors

```bash
# Verify MinIO endpoint is reachable
curl http://your-minio-endpoint:9000

# Check backend logs for storage errors
docker logs atria-api-dev
```

## Next Steps

- **[API Documentation](https://atria.gg/new-swagger)** - Explore the REST API
- **[GitHub Repository](https://github.com/thesubtleties/atria)** - View source code and contribute

---

**Having trouble?** [Open an issue on GitHub](https://github.com/thesubtleties/atria/issues) or [contact us](mailto:steven@sbtl.dev).
