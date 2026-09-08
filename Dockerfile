# Build stage
FROM node:20.17.0-alpine AS builder

# Install build dependencies
RUN apk add --no-cache git

# Enable Corepack for pnpm
RUN corepack enable && corepack prepare pnpm@9.15.4 --activate

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml .npmrc ./

# Install dependencies with frozen lockfile and hoisted node-linker
RUN pnpm install --frozen-lockfile --shamefully-hoist

# Copy source code and config files
COPY . .

# Build the application with Vite
RUN pnpm build

# Verify build output
RUN test -d dist/shoftv-landing && \
    test -f dist/shoftv-landing/index.html && \
    ls -lah dist/shoftv-landing && \
    echo "✓ Build verified successfully"

# Production stage
FROM nginx:alpine

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built app from builder
COPY --from=builder /app/dist/shoftv-landing /usr/share/nginx/html

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 && \
    chown -R nextjs:nodejs /usr/share/nginx/html

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80 || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
