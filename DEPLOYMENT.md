# Deployment Guide - The Kids Clinic

This guide walks through deploying the application to a Digital Ocean droplet with automatic GitHub deployments and Cloudflare for SSL/CDN.

## Architecture Overview

```
                         Cloudflare (SSL + CDN)
                                │
                                ▼
                    ┌─────────────────────────────────────────────────┐
                    │              Digital Ocean Droplet              │
                    │                                                 │
Internet ─────────► │  nginx (:80)                                   │
                    │      │                                          │
                    │      ├──► web (Next.js :3000)                  │
                    │      │                                          │
                    │      └──► cms (Strapi :1337)                   │
                    │                │                                │
                    │                └──► postgres (:5432)           │
                    │                                                 │
                    └─────────────────────────────────────────────────┘
```

- `thekids.clinic` → Next.js web application
- `cms.thekids.clinic` → Strapi CMS admin panel
- Cloudflare handles SSL termination and HTTPS

---

## Prerequisites

- Digital Ocean account
- GitHub repository
- Cloudflare account (for DNS + SSL)
- Domain: `thekids.clinic`

---

## Step 1: Create Digital Ocean Droplet

1. Log in to Digital Ocean
2. Create a new Droplet:
   - **Image**: Ubuntu 24.04 LTS
   - **Size**: Basic, 2GB RAM / 1 vCPU minimum (recommend 4GB for builds)
   - **Datacenter**: Choose closest to your users
   - **Authentication**: SSH Key (recommended)
   - **Hostname**: `thekidsclinic-prod`

3. Note the droplet's IP address

---

## Step 2: Configure Cloudflare

### DNS Records

In your Cloudflare dashboard for `thekids.clinic`:

1. Add an **A record**:
   - Name: `@`
   - IPv4: `<your-droplet-ip>`
   - Proxy status: **Proxied** (orange cloud)
   - TTL: Auto

2. Add another **A record**:
   - Name: `cms`
   - IPv4: `<your-droplet-ip>`
   - Proxy status: **Proxied** (orange cloud)
   - TTL: Auto

### SSL/TLS Settings

1. Go to **SSL/TLS** → **Overview**
2. Set encryption mode to **Flexible** (Cloudflare handles SSL, connects to origin via HTTP)

### Recommended Security Settings

1. **SSL/TLS** → **Edge Certificates**:
   - Always Use HTTPS: **On**
   - Automatic HTTPS Rewrites: **On**
   - Minimum TLS Version: **TLS 1.2**

2. **Security** → **Settings**:
   - Security Level: **Medium** or higher

---

## Step 3: Initial Server Setup

SSH into your droplet:

```bash
ssh root@<your-droplet-ip>
```

Run the initialization script:

```bash
# Clone the repository first
git clone https://github.com/YOUR_USERNAME/the-kids-clinic.git /opt/the-kids-clinic
cd /opt/the-kids-clinic

# Make scripts executable
chmod +x scripts/*.sh

# Run server initialization
sudo ./scripts/init-server.sh
```

---

## Step 4: Configure Environment Variables

Edit the production `.env` file:

```bash
nano /opt/the-kids-clinic/.env
```

Fill in all values (see `.env.example` for reference):

```env
# Database
POSTGRES_USER=tkc_user
POSTGRES_PASSWORD=<generate-strong-password>
POSTGRES_DB=thekidsclinic

# CMS - Generate each with: openssl rand -base64 32
CMS_APP_KEYS=<key1>,<key2>,<key3>,<key4>
CMS_API_TOKEN_SALT=<generate>
CMS_ADMIN_JWT_SECRET=<generate>
CMS_TRANSFER_TOKEN_SALT=<generate>
CMS_ENCRYPTION_KEY=<generate>
CMS_JWT_SECRET=<generate>

# Web
NEXT_PUBLIC_CMS_API_URL=https://cms.thekids.clinic/api
NEXT_PUBLIC_CMS_API_KEY=<create-in-strapi-admin>
NEXT_PUBLIC_GA_ID=G-ZH37VL0HVT
NEXT_PUBLIC_MAPBOX_KEY=<your-mapbox-key>
```

Generate secure keys:

```bash
# Run this 6+ times to generate unique keys
openssl rand -base64 32
```

---

## Step 5: Start the Application

```bash
cd /opt/the-kids-clinic
docker compose up -d
```

Verify all services are running:

```bash
docker compose ps
```

You should see:
- `tkc-postgres` - healthy
- `tkc-cms` - running
- `tkc-web` - running
- `tkc-nginx` - running

---

## Step 6: Initial Strapi Setup

1. Navigate to `https://cms.thekids.clinic/admin`
2. Create your admin account
3. Go to Settings → API Tokens
4. Create a new API token:
   - Name: `Web Frontend`
   - Type: `Read-only` or `Custom` (based on needs)
5. Copy the token and update `.env`:
   ```
   NEXT_PUBLIC_CMS_API_KEY=<your-new-token>
   ```
6. Rebuild the web container:
   ```bash
   docker compose up -d --build web
   ```

---

## Step 7: Configure GitHub Actions for Auto-Deploy

### 7.1 Generate SSH Key for Deploy User

On your droplet:

```bash
# Switch to deploy user
su - deploy

# Generate SSH key
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github_deploy -N ""

# Add to authorized keys
cat ~/.ssh/github_deploy.pub >> ~/.ssh/authorized_keys

# Display private key (you'll need this for GitHub)
cat ~/.ssh/github_deploy
```

### 7.2 Add GitHub Repository Secrets

In your GitHub repository, go to **Settings → Secrets and variables → Actions** and add:

| Secret Name | Value |
|-------------|-------|
| `DROPLET_HOST` | Your droplet's IP address |
| `DROPLET_USER` | `deploy` |
| `DROPLET_SSH_KEY` | The entire private key from step 7.1 (including BEGIN/END lines) |

### 7.3 Test the Deployment

Push a change to the `main` branch:

```bash
git checkout main
git push origin main
```

Check GitHub Actions to verify the deployment runs successfully.

---

## Maintenance

### View Logs

```bash
# All services
docker compose logs -f

# Specific service
docker compose logs -f web
docker compose logs -f cms
docker compose logs -f nginx
```

### Database Backups

Set up automated backups:

```bash
# Add to crontab (daily at 3 AM)
crontab -e

# Add this line:
0 3 * * * /opt/the-kids-clinic/scripts/backup-db.sh
```

Manual backup:

```bash
./scripts/backup-db.sh
```

### Update Application

Updates happen automatically via GitHub Actions, but for manual updates:

```bash
cd /opt/the-kids-clinic
git pull origin main
docker compose up -d --build
```

---

## Troubleshooting

### Container won't start

```bash
# Check logs
docker compose logs <service-name>

# Rebuild from scratch
docker compose down
docker compose up -d --build
```

### Database connection issues

```bash
# Check postgres is healthy
docker exec tkc-postgres pg_isready -U $POSTGRES_USER

# Connect directly
docker exec -it tkc-postgres psql -U $POSTGRES_USER -d $POSTGRES_DB
```

### 502 Bad Gateway

```bash
# Check if containers are running
docker compose ps

# Restart all services
docker compose restart
```

### Out of disk space

```bash
# Clean up Docker resources
docker system prune -a --volumes
```

### Cloudflare caching issues

If you're seeing stale content after deployments:
1. Go to Cloudflare → **Caching** → **Configuration**
2. Click **Purge Everything** to clear the cache
