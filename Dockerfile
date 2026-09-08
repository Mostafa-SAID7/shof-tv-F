# Build stage
FROM node:20.17.0-alpine AS builder

# Enable Corepack for pnpm
RUN corepack enable && corepack prepare pnpm@9.15.4 --activate

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml .npmrc ./

# Install dependencies with frozen lockfile
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application with Vite
RUN pnpm build

# Verify build output
RUN test -d dist/shoftv-landing && \
    test -f dist/shoftv-landing/index.html && \
    echo "✓ Build verified successfully"

# Production stage
FROM node:20.17.0-alpine

WORKDIR /app

# Install serve globally using corepack
RUN corepack enable && \
    npm install -g serve@14.2.1

# Copy built app from builder
COPY --from=builder /app/dist/shoftv-landing ./dist

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000 || exit 1

# Start the app
CMD ["serve", "-s", "dist", "-l", "3000"]
