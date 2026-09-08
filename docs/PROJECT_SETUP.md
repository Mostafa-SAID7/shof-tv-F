# Project Setup Guide

## Prerequisites

- **Node.js**: 20.17.0 (see `.nvmrc`)
- **pnpm**: 9.15.4+ (managed via Corepack)
- **Git**: Latest version
- **Docker** (optional): For containerized development
- **VS Code** (recommended): With Angular extensions

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Mostafa-SAID7/shof-tv.git
cd shof-tv
```

### 2. Install Dependencies

```bash
pnpm install --frozen-lockfile
```

This will install all required packages listed in `package.json`.

### 3. Environment Setup

Create a `.env` file from the template:

```bash
cp .env.example .env
```

Configure the environment variables as needed:

```env
NODE_ENV=development
API_URL=http://localhost:3000
ENABLE_ANALYTICS=true
```

## Development Server

### Start the Development Server

```bash
pnpm dev
```

The application will be available at `http://localhost:4200`

### Features
- Hot Module Replacement (HMR) enabled
- Automatic browser refresh on code changes
- Source maps for debugging
- Development build optimization

### Stopping the Server

Press `Ctrl+C` in the terminal.

## Building for Production

### Build the Application

```bash
pnpm build
```

Output will be in `dist/shoftv-landing/`

### Build Options

```bash
# Development build
pnpm dev

# Production build (default)
pnpm build

# Preview production build
pnpm preview
```

## Testing

### Run Unit Tests

```bash
pnpm test
```

### Run Tests in Watch Mode

```bash
pnpm test -- --watch
```

### Run Tests with Coverage

```bash
pnpm test -- --code-coverage
```

### Run Specific Test File

```bash
pnpm test -- --include='**/my-component.spec.ts'
```

## Linting

### Check Code Quality

```bash
pnpm lint
```

### Fix Linting Issues

```bash
pnpm lint -- --fix
```

## Docker Setup

### Build Docker Image

```bash
docker build -t shof-tv:dev .
```

### Run with Docker Compose

```bash
docker-compose up
```

Access the app at `http://localhost:3000`

### Stop Docker Services

```bash
docker-compose down
```

## IDE Setup

### VS Code Extensions

Recommended extensions:

1. **Angular Language Service**
   - ID: Angular.ng-template
   - Provides template intellisense

2. **Prettier - Code formatter**
   - ID: esbenp.prettier-vscode
   - Auto-format code

3. **ESLint**
   - ID: dbaeumer.vscode-eslint
   - Lint code in editor

4. **Tailwind CSS IntelliSense**
   - ID: bradlc.vscode-tailwindcss
   - Tailwind class suggestions

5. **Thunder Client** (optional)
   - ID: rangav.vscode-thunder-client
   - API testing

### VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Git Setup

### Configure Git

```bash
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### Create Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### Commit Changes

```bash
git add .
git commit -m "feat: add your feature description"
```

### Push Changes

```bash
git push origin feature/your-feature-name
```

## Troubleshooting

### Port Already in Use

If port 4200 is already in use:

```bash
# Use a different port
ng serve --port 4201
```

### Dependencies Installation Issues

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Clean build
rm -rf dist
pnpm build

# Check for TypeScript errors
npx tsc --noEmit
```

### Docker Issues

```bash
# Remove all containers
docker-compose down -v

# Rebuild images
docker-compose build --no-cache

# Start fresh
docker-compose up
```

## Development Workflow

### 1. Create Feature Branch
```bash
git checkout -b feature/my-feature
```

### 2. Make Changes
- Edit files in `src/`
- Server auto-reloads

### 3. Test Changes
```bash
pnpm test
pnpm lint
```

### 4. Commit Changes
```bash
git add .
git commit -m "feat: add my feature"
```

### 5. Push and Create PR
```bash
git push origin feature/my-feature
```

## Performance Tips

### Development
- Use `ng serve` for development
- Enable HMR for faster rebuilds
- Use Chrome DevTools for debugging

### Production
- Always use `pnpm build`
- Check bundle size: `pnpm build -- --stats-json`
- Analyze bundle: `npm install -g webpack-bundle-analyzer`

## Common Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Build for production |
| `pnpm test` | Run tests |
| `pnpm lint` | Check code quality |
| `npm run watch` | Watch mode build |
| `docker-compose up` | Start Docker services |
| `git status` | Check git status |
| `git log` | View commit history |

## Next Steps

1. Read [STRUCTURE.md](./STRUCTURE.md) to understand project layout
2. Check [STYLES.md](./STYLES.md) for styling guidelines
3. Review [CONTRIBUTING.md](../.github/CONTRIBUTING.md) for contribution guidelines
4. Explore [FEATURES.md](./FEATURES.md) for planned features

## Support

For issues or questions:
- Check [GitHub Issues](https://github.com/Mostafa-SAID7/shof-tv/issues)
- Read [CONTRIBUTING.md](../.github/CONTRIBUTING.md)
- Contact: support@shof-tv.com

---

Happy coding! 🚀
