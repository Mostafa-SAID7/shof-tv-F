# Shof TV - Angular Landing Page

A modern, responsive landing page for Shof TV built with **Angular 19**, **Vite**, **pnpm**, and **Tailwind CSS**.

[![Build Status](https://github.com/Mostafa-SAID7/shof-tv/workflows/Build%20and%20Test/badge.svg)](https://github.com/Mostafa-SAID7/shof-tv/actions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node Version](https://img.shields.io/badge/node-20.17.0-brightgreen.svg)](https://nodejs.org/)
[![pnpm Version](https://img.shields.io/badge/pnpm-9.15.4-orange.svg)](https://pnpm.io/)
[![Angular Version](https://img.shields.io/badge/angular-19.2-red.svg)](https://angular.io/)
[![Vite Version](https://img.shields.io/badge/vite-6.4-646cff.svg)](https://vitejs.dev/)

## 🚀 Quick Start

### Prerequisites
- **Node.js**: 20.17.0 (see `.nvmrc`)
- **pnpm**: 9.15.4+ (managed via Corepack)
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/Mostafa-SAID7/shof-tv.git
cd shof-tv

# Enable Corepack (ships with Node.js 16.9+)
corepack enable

# Install dependencies
pnpm install --frozen-lockfile

# Start development server
pnpm dev
```

Visit `http://localhost:4200` in your browser.

## 📚 Documentation

Comprehensive documentation is available in the `docs/` folder:

| Document | Description |
|----------|-------------|
| [PROJECT_SETUP.md](docs/PROJECT_SETUP.md) | Setup and installation guide |
| [STRUCTURE.md](docs/STRUCTURE.md) | Project structure and organization |
| [TECHNOLOGIES.md](docs/TECHNOLOGIES.md) | Tech stack and dependencies |
| [STYLES.md](docs/STYLES.md) | Styling guide and design system |
| [FEATURES.md](docs/FEATURES.md) | Current and planned features |
| [USE_CASES.md](docs/USE_CASES.md) | User scenarios and workflows |
| [DEPLOYMENT.md](docs/DEPLOYMENT.md) | Deployment and hosting guide |
| [SECURITY.md](docs/SECURITY.md) | Security policies and best practices |
| [CHANGELOG.md](docs/CHANGELOG.md) | Version history and updates |
| [ERD.md](docs/ERD.md) | Database schema (planned) |
| [CONTRIBUTORS.md](docs/CONTRIBUTORS.md) | Contribution guidelines |

## 🛠️ Available Commands

```bash
# Development
pnpm dev              # Start Vite dev server (http://localhost:4200)
pnpm start            # Alias for pnpm dev
pnpm build            # Build for production with Vite
pnpm build:prod       # Alias for pnpm build
pnpm preview          # Preview production build locally

# Testing
pnpm test             # Run tests once with Vitest
pnpm test:watch       # Run tests in watch mode
pnpm test:ui          # Run tests with UI

# Code Quality
pnpm lint             # Run ESLint
pnpm typecheck        # TypeScript type checking

# Docker
docker-compose up     # Start with Docker (http://localhost:3000)
docker build -t shof-tv:latest .  # Build Docker image
```

## 📁 Project Structure

```
shof-tv/
├── .github/              # GitHub workflows and templates
│   └── workflows/        # CI/CD pipelines (pnpm-based)
├── docs/                 # Comprehensive documentation
├── public/              # Static assets
├── src/
│   ├── app/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── platform/     # Platform services
│   │   └── shared/       # Shared utilities
│   ├── main.ts          # Angular entry point
│   ├── styles.css       # Global styles
│   ├── test-setup.ts    # Vitest test setup
│   └── vite-env.d.ts    # Vite type definitions
├── index.html           # Vite entry point
├── vite.config.ts       # Vite configuration
├── angular.json         # Angular CLI config (lint only)
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── package.json         # Dependencies and scripts
├── pnpm-lock.yaml       # Locked dependencies
├── .npmrc               # pnpm configuration
├── Dockerfile           # Docker image definition
├── docker-compose.yml   # Docker Compose config
└── README.md            # This file
```

## 🎨 Tech Stack

### Core
- **Angular 19.2** - Modern web framework
- **TypeScript 5.5** - Typed JavaScript
- **Vite 6.4** - Next-generation build tool
- **pnpm 9.15** - Fast, disk space efficient package manager
- **RxJS 7.8** - Reactive programming

### Development
- **@analogjs/vite-plugin-angular 1.22** - Angular + Vite integration
- **Vitest 2.1** - Vite-native unit testing
- **ESLint 8.57** - Code linting
- **Husky 8.0** - Git hooks
- **Commitlint 17.8** - Conventional commits

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS
- **PostCSS 8.5** - CSS processing
- **Autoprefixer 10.4** - Vendor prefixes

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Local development
- **GitHub Actions** - CI/CD (pnpm-based)
- **Semantic Release 23.1** - Automated versioning

## 🎯 Features

### Current
✅ Responsive landing page  
✅ Modern Angular 19 + Vite architecture  
✅ Tailwind CSS styling  
✅ Vitest unit testing  
✅ Docker support  
✅ pnpm package management  
✅ CI/CD pipelines with frozen lockfiles  
✅ Semantic versioning  
✅ Comprehensive documentation  

### Planned
🔄 User authentication  
🔄 Content streaming  
🔄 Payment integration  
🔄 Mobile app  
🔄 Advanced analytics  

See [FEATURES.md](docs/FEATURES.md) for detailed roadmap.

## 🐳 Docker Support

### Development with Docker

```bash
# Start services
docker-compose up

# Access the app
# http://localhost:3000

# Stop services
docker-compose down
```

### Production Docker Image

```bash
# Build image
docker build -t shof-tv:latest .

# Run container
docker run -p 3000:3000 shof-tv:latest
```

## 🔄 CI/CD Pipeline

Automated workflows with GitHub Actions:

- **Build & Test** - Runs on every push (pnpm, Vite, Vitest)
- **Lint** - Code quality checks (ESLint, TypeScript)
- **Security** - Dependency auditing (pnpm audit, OWASP)
- **Deploy** - Vercel deployment on main branch
- **Release** - Semantic versioning and changelog

All workflows use:
- **pnpm 9.15.4** with frozen lockfiles
- **Node 20.17.0** for consistency
- **Corepack** for package manager pinning

See [.github/workflows/](.github/workflows/) for details.

## 📖 Getting Started

1. **Setup Development Environment**
   - Install Node.js 20.17.0 (use nvm: `nvm use`)
   - Enable Corepack: `corepack enable`
   - Install dependencies: `pnpm install --frozen-lockfile`

2. **Understand Project Structure**
   - Read [STRUCTURE.md](docs/STRUCTURE.md)

3. **Learn the Tech Stack**
   - Angular 19: [angular.io](https://angular.io/)
   - Vite: [vitejs.dev](https://vitejs.dev/)
   - pnpm: [pnpm.io](https://pnpm.io/)
   - Tailwind: [tailwindcss.com](https://tailwindcss.com/)

4. **Start Contributing**
   - See [CONTRIBUTING.md](.github/CONTRIBUTING.md)

## 🤝 Contributing

We welcome contributions! Please:

1. Read [CONTRIBUTING.md](.github/CONTRIBUTING.md)
2. Follow [CODE_OF_CONDUCT.md](.github/CODE_OF_CONDUCT.md)
3. Check [good first issues](https://github.com/Mostafa-SAID7/shof-tv/labels/good%20first%20issue)
4. Create a feature branch
5. Submit a pull request

See [CONTRIBUTORS.md](docs/CONTRIBUTORS.md) for more details.

## 🔒 Security

- Security policy: [SECURITY.md](docs/SECURITY.md)
- Report vulnerabilities: security@shof-tv.com
- No public disclosure until fixed

## 📝 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Angular Team](https://angular.io/)
- [Vite Team](https://vitejs.dev/)
- [AnalogJS](https://analogjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [pnpm Team](https://pnpm.io/)
- All contributors and supporters

## 📞 Support

- **Documentation**: See [docs/](docs/) folder
- **Issues**: [GitHub Issues](https://github.com/Mostafa-SAID7/shof-tv/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Mostafa-SAID7/shof-tv/discussions)
- **Email**: support@shof-tv.com

## 🗺️ Roadmap

### Q2 2026
- User authentication
- User profiles
- Social login

### Q3 2026
- Content management system
- Video streaming
- Search and filtering

### Q4 2026
- Payment integration
- Analytics dashboard
- Admin panel

### 2027
- Mobile app
- Live streaming
- AI recommendations

See [FEATURES.md](docs/FEATURES.md) for detailed roadmap.

## 📊 Project Stats

- **Framework**: Angular 19 + Vite 6
- **Language**: TypeScript 5.5
- **Styling**: Tailwind CSS 3
- **Testing**: Vitest 2
- **Package Manager**: pnpm 9
- **CI/CD**: GitHub Actions
- **Containerization**: Docker

## 🎓 Learning Resources

- [Angular Documentation](https://angular.io/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Vitest Guide](https://vitest.dev/guide/)
- [pnpm Documentation](https://pnpm.io/motivation)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [AnalogJS Documentation](https://analogjs.org/docs)

## 📈 Performance

- Optimized bundle size with Vite code splitting
- Tree-shaking enabled
- Manual chunks for Angular core, router, and RxJS
- Production build optimization
- Docker multi-stage builds
- Static asset caching

## 🔍 SEO

- Semantic HTML
- Meta tags configured
- Structured data ready
- Mobile-friendly
- Fast load times with Vite

---

**Made with ❤️ by [Mostafa SAID](https://github.com/Mostafa-SAID7)**

⭐ If you find this project helpful, please star it on GitHub!

---

## Migration Notes

This project has been migrated from:
- **npm** → **pnpm 9.15.4**
- **Angular CLI build** → **Vite 6.4**
- **Karma/Jasmine** → **Vitest 2.1**

All commands, workflows, and documentation have been updated accordingly.

Last Updated: 2026-09-08
