# ShofTV Docker Setup

Complete Docker configuration for running ShofTV with pnpm + Vite + Angular 19.

## Quick Start

```bash
# Build and run with docker-compose
docker-compose up -d

# View logs
docker-compose logs -f shof-tv

# Stop containers
docker-compose down
```

## Access the Application

- **Main App**: http://localhost:8080
- **Health Check**: http://localhost:8080/health

## What's Included

### Multi-Stage Build
1. **Builder Stage** (node:20.17.0-alpine)
   - Installs pnpm@9.15.4 via corepack
   - Installs all dependencies with `--shamefully-hoist`
   - Builds production bundle with Vite
   - Verifies build output

2. **Production Stage** (nginx:alpine)
   - Serves static files with nginx
   - Optimized for performance with gzip compression
   - Security headers enabled
   - SPA routing support (fallback to index.html)
   - Aggressive asset caching (1 year)

### Features
- ✅ **ESM Support**: Full ES modules with `"type": "module"`
- ✅ **pnpm**: Package manager with hoisted linker
- ✅ **Vite**: Lightning-fast builds (~50s)
- ✅ **Angular 19**: Latest framework version
- ✅ **nginx**: Production-ready web server
- ✅ **Health Checks**: Automatic container monitoring
- ✅ **Compression**: gzip for all assets
- ✅ **Caching**: Optimized cache headers

## Environment Variables

Set these in `.env` file:

```env
NODE_ENV=production
```

## Build Options

### Build image only
```bash
docker build -t shof-tv:latest .
```

### Run single container
```bash
docker run -d -p 8080:80 --name shof-tv shof-tv:latest
```

### Build with custom tag
```bash
docker build -t shof-tv:v1.0.0 .
```

## Docker Compose Services

### shof-tv
Main application container serving the Angular SPA.

**Ports**: 8080:80 (host:container)
**Health Check**: wget http://localhost:80 every 30s

### nginx-proxy (Optional)
Reverse proxy for SSL termination and advanced routing.

**Ports**: 80:80, 443:443
**Config**: ./nginx-proxy.conf
**SSL Certs**: ./ssl/

## Production Deployment

### With SSL/HTTPS

1. Obtain SSL certificates (Let's Encrypt recommended)
2. Place certificates in `./ssl/` directory
3. Uncomment nginx-proxy service in docker-compose.yml
4. Configure nginx-proxy.conf with your domain

### Environment-Specific Builds

```bash
# Development
docker-compose -f docker-compose.dev.yml up

# Staging
docker-compose -f docker-compose.staging.yml up

# Production
docker-compose -f docker-compose.prod.yml up
```

## Troubleshooting

### Build Fails

```bash
# Clear Docker build cache
docker builder prune -a

# Rebuild without cache
docker-compose build --no-cache
```

### Container Won't Start

```bash
# Check logs
docker logs shof-tv-app

# Inspect container
docker inspect shof-tv-app

# Enter container shell
docker exec -it shof-tv-app sh
```

### Port Already in Use

```bash
# Change host port in docker-compose.yml
ports:
  - "3000:80"  # Use port 3000 instead of 8080
```

## Performance Tips

1. **Build Time**: ~2-3 minutes (depending on network speed)
2. **Image Size**: ~50MB (nginx:alpine + built assets)
3. **Memory Usage**: ~50MB per container
4. **CPU Usage**: Minimal (static file serving)

## Security

- Non-root user for nginx process
- Security headers enabled (X-Frame-Options, CSP, etc.)
- No sensitive data in image layers
- Regular security updates via alpine base image

## CI/CD Integration

```yaml
# GitHub Actions example
- name: Build Docker image
  run: docker build -t ${{ secrets.REGISTRY }}/shof-tv:${{ github.sha }} .

- name: Push to registry
  run: docker push ${{ secrets.REGISTRY }}/shof-tv:${{ github.sha }}
```

## Monitoring

```bash
# Container stats
docker stats shof-tv-app

# Health status
docker inspect --format='{{.State.Health.Status}}' shof-tv-app

# nginx access logs
docker logs shof-tv-app --tail=100
```

## Backup & Restore

```bash
# Save image
docker save shof-tv:latest > shof-tv-backup.tar

# Load image
docker load < shof-tv-backup.tar
```

## Clean Up

```bash
# Stop and remove containers
docker-compose down

# Remove images
docker rmi shof-tv:latest

# Clean everything
docker system prune -a
```
