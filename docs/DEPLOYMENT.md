# Deployment Guide

## Overview

This guide covers deploying the Shof TV Angular application using Docker and various hosting platforms.

## Prerequisites

- Docker and Docker Compose installed
- Node.js 18+ (for local development)
- Git
- Docker Hub account (for image registry)

## Table of Contents

1. [Local Development](#local-development-with-docker)
2. [Production Deployment](#production-deployment)
3. [Cloud Platforms](#cloud-deployment)
4. [CI/CD Pipeline](#cicd-pipeline)
5. [Monitoring](#monitoring)
6. [Scaling](#scaling)
7. [SSL/TLS](#ssltls)
8. [Troubleshooting](#troubleshooting)

## Local Development with Docker

### Build and Run

```bash
# Build the Docker image
docker build -t shof-tv:dev .

# Run with Docker Compose
docker-compose up

# Access the app at http://localhost:3000
```

### Development Server (without Docker)

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Access at `http://localhost:4200`

### Docker Compose Commands

```bash
# Start services in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Remove volumes
docker-compose down -v

# Rebuild images
docker-compose build --no-cache
```

## Production Deployment

### Docker Image

```bash
# Build production image
docker build -t shof-tv:latest .

# Tag for registry
docker tag shof-tv:latest your-registry/shof-tv:latest

# Push to registry
docker push your-registry/shof-tv:latest
```

### Environment Variables

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Configure the following:
```env
NODE_ENV=production
API_URL=your-api-url
ENABLE_ANALYTICS=true
LOG_LEVEL=info
```

### Docker Compose Production

```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# View service status
docker-compose ps
```

### Health Checks

The application includes health checks:
- Docker health check configured in Dockerfile
- Nginx `/health` endpoint
- Automatic restart on failure

## Cloud Deployment

### Vercel

1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `pnpm build`
   - Output Directory: `dist/shoftv-landing`
   - Install Command: `pnpm install --frozen-lockfile`
3. Set environment variables
4. Deploy

**Advantages**:
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Serverless functions

### Netlify

1. Connect GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist/shoftv-landing`
   - Install command: `npm ci`
3. Set environment variables
4. Deploy

**Advantages**:
- Easy GitHub integration
- Automatic deployments
- Built-in analytics
- Form handling

### AWS (ECS/Fargate)

1. Push Docker image to ECR:
```bash
# Get login token
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin YOUR_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com

# Tag image
docker tag shof-tv:latest YOUR_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/shof-tv:latest

# Push image
docker push YOUR_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/shof-tv:latest
```

2. Create ECS task definition
3. Create ECS service
4. Configure Application Load Balancer

**Advantages**:
- Scalable infrastructure
- Auto-scaling groups
- Load balancing
- CloudWatch monitoring

### Google Cloud Run

```bash
# Build and push
gcloud builds submit --tag gcr.io/PROJECT_ID/shof-tv

# Deploy
gcloud run deploy shof-tv \
  --image gcr.io/PROJECT_ID/shof-tv \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1
```

**Advantages**:
- Serverless deployment
- Auto-scaling
- Pay per use
- Easy integration

### Azure Container Instances

```bash
# Build and push to ACR
az acr build --registry myregistry --image shof-tv:latest .

# Deploy
az container create \
  --resource-group mygroup \
  --name shof-tv \
  --image myregistry.azurecr.io/shof-tv:latest \
  --ports 3000 \
  --environment-variables NODE_ENV=production \
  --cpu 1 \
  --memory 1
```

**Advantages**:
- Azure ecosystem integration
- Container registry
- Easy scaling
- Cost-effective

### Kubernetes

```bash
# Create deployment
kubectl create deployment shof-tv --image=your-registry/shof-tv:latest

# Expose service
kubectl expose deployment shof-tv --type=LoadBalancer --port=80 --target-port=3000

# Scale deployment
kubectl scale deployment shof-tv --replicas=3

# View status
kubectl get deployments
kubectl get pods
```

**Advantages**:
- Container orchestration
- Auto-scaling
- Self-healing
- Rolling updates

## CI/CD Pipeline

### GitHub Actions

The project includes automated workflows:

#### Build Workflow (`.github/workflows/build.yml`)
- Runs on push to main/develop
- Tests on Node 18 and 20
- Uploads coverage reports
- Checks code quality

#### Deploy Workflow (`.github/workflows/deploy.yml`)
- Runs on push to main
- Builds Docker image
- Pushes to registry (if credentials configured)
- Deploys to production

### Secrets Configuration

Add these secrets to GitHub:
- `DOCKER_USERNAME`: Docker Hub username
- `DOCKER_PASSWORD`: Docker Hub token
- `REGISTRY_URL`: Container registry URL (optional)
- `DEPLOY_KEY`: SSH key for deployment (optional)

### Workflow Triggers

```yaml
# Push to main branch
on:
  push:
    branches: [ main ]

# Manual trigger
on:
  workflow_dispatch:

# Pull requests
on:
  pull_request:
    branches: [ main ]
```

## Monitoring

### Health Checks

The application includes health check endpoints:
- `/health` - Basic health status
- Docker health check configured in Dockerfile
- Automatic restart on failure

### Logs

View logs with Docker Compose:
```bash
# View all logs
docker-compose logs

# Follow logs
docker-compose logs -f

# View specific service logs
docker-compose logs -f shof-tv

# View last 100 lines
docker-compose logs --tail=100
```

### Metrics

Monitor with:
- Docker stats: `docker stats`
- Prometheus: Metrics collection
- Grafana: Visualization
- DataDog: APM monitoring

## Scaling

### Horizontal Scaling

#### Docker Compose
```bash
# Scale to 3 instances
docker-compose up -d --scale shof-tv=3
```

#### Kubernetes
```bash
# Scale deployment
kubectl scale deployment shof-tv --replicas=3

# Auto-scale based on CPU
kubectl autoscale deployment shof-tv --min=2 --max=10 --cpu-percent=80
```

#### AWS ECS
```bash
# Update service desired count
aws ecs update-service --cluster my-cluster --service shof-tv --desired-count 3
```

### Load Balancing

Nginx is configured as a reverse proxy in `docker-compose.yml`. For production, use:
- AWS Application Load Balancer
- Google Cloud Load Balancer
- Azure Load Balancer
- Nginx/HAProxy
- Kubernetes Service

## SSL/TLS

### Self-Signed Certificate (Development)

```bash
mkdir -p ssl
openssl req -x509 -newkey rsa:4096 -keyout ssl/key.pem -out ssl/cert.pem -days 365 -nodes
```

### Production Certificates

Use Let's Encrypt with Certbot:
```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Get certificate
certbot certonly --standalone -d your-domain.com

# Renew certificate
certbot renew
```

Update `nginx.conf` with certificate paths:
```nginx
ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;
```

### HTTPS Redirect

```nginx
server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$server_name$request_uri;
}
```

## Backup and Recovery

### Database Backups

If using a database, implement regular backups:
```bash
# PostgreSQL backup
docker exec shof-tv-db pg_dump -U user dbname > backup.sql

# Restore from backup
docker exec -i shof-tv-db psql -U user dbname < backup.sql

# MongoDB backup
docker exec shof-tv-db mongodump --out /backup

# Restore MongoDB
docker exec -i shof-tv-db mongorestore /backup
```

### Application Backups

```bash
# Backup dist folder
tar -czf backup-dist.tar.gz dist/

# Backup entire application
tar -czf backup-app.tar.gz .

# Restore from backup
tar -xzf backup-app.tar.gz
```

### Automated Backups

```bash
# Create backup script
#!/bin/bash
BACKUP_DIR="/backups"
DATE=$(date +%Y%m%d_%H%M%S)
docker-compose exec -T db pg_dump -U user dbname > $BACKUP_DIR/backup_$DATE.sql

# Schedule with cron
0 2 * * * /path/to/backup.sh
```

## Troubleshooting

### Container won't start

```bash
# Check logs
docker logs shof-tv

# Inspect image
docker inspect shof-tv:latest

# Rebuild without cache
docker build --no-cache -t shof-tv:latest .

# Run with verbose output
docker run -it shof-tv:latest
```

### Port conflicts

```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>

# Change port in docker-compose.yml
ports:
  - "3001:3000"
```

### Memory issues

```bash
# Check memory usage
docker stats

# Increase Docker memory limit
docker run -m 2g shof-tv:latest

# Update docker-compose.yml
services:
  shof-tv:
    mem_limit: 2g
```

### Network issues

```bash
# Check network connectivity
docker network ls
docker network inspect bridge

# Create custom network
docker network create shof-tv-network

# Connect container to network
docker network connect shof-tv-network container-name
```

## Performance Optimization

### Image Optimization

- Multi-stage builds (already implemented)
- Alpine base image (3.5MB vs 900MB)
- Minimal dependencies
- Remove unnecessary files

### Caching

- Docker layer caching
- Nginx caching configured
- Browser caching headers
- CDN caching

### Compression

- Gzip enabled in Nginx
- Angular production build optimization
- Image compression
- CSS/JS minification

### Database Optimization

- Connection pooling
- Query optimization
- Indexing
- Caching layer (Redis)

## Security

### Best Practices

- Use secrets management for sensitive data
- Keep dependencies updated
- Scan images for vulnerabilities
- Use read-only filesystems where possible
- Run containers as non-root user
- Enable HTTPS/TLS
- Implement rate limiting
- Use Web Application Firewall (WAF)

### Vulnerability Scanning

```bash
# Scan with Trivy
trivy image shof-tv:latest

# Scan with Snyk
snyk container test shof-tv:latest

# Scan with Grype
grype shof-tv:latest

# Check dependencies
npm audit
```

### Secrets Management

```bash
# Use environment variables
export DOCKER_PASSWORD=your-password

# Use Docker secrets (Swarm)
echo "your-secret" | docker secret create my-secret -

# Use Kubernetes secrets
kubectl create secret generic my-secret --from-literal=password=your-password
```

## Deployment Checklist

- [ ] Environment variables configured
- [ ] SSL/TLS certificates installed
- [ ] Database backups configured
- [ ] Monitoring and logging enabled
- [ ] Health checks configured
- [ ] Load balancer configured
- [ ] Auto-scaling configured
- [ ] Security scans passed
- [ ] Performance tests passed
- [ ] Disaster recovery plan ready

## Support

For deployment issues, refer to:
- [Docker Documentation](https://docs.docker.com/)
- [Angular Deployment Guide](https://angular.io/guide/deployment)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Kubernetes Documentation](https://kubernetes.io/docs/)

---

Last Updated: 2026-04-05
