# Contributing to ShofTV

Thank you for your interest in contributing to ShofTV! We welcome contributions from the community and are excited to have you participate.

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher
- Git

### Development Setup

```bash
# Clone the repository
git clone https://github.com/Mostafa-SAID7/shof-tv-F.git
cd shof-tv-F

# Install dependencies
npm ci --legacy-peer-deps

# Start development server
npm run dev
```

## Development Workflow

### 1. Create a Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

Branch naming convention:
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `chore/description` - Build, dependencies, etc

### 2. Make Your Changes

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Keep commits focused and atomic
- Update relevant tests and documentation

### 3. Testing

```bash
# Run linter
npm run lint

# Run tests
npm run test

# Build project
npm run build
```

### 4. Commit and Push

```bash
git add .
git commit -m "type(scope): description"
git push origin your-branch-name
```

Commit message format:
```
type(scope): subject

body

footer
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `ci`

### 5. Create a Pull Request

- Use a descriptive title
- Reference related issues: `Fixes #123`
- Fill out the PR template completely
- Ensure all checks pass

## Code Style

### TypeScript
- Use strict mode (`"strict": true`)
- Avoid `any` types
- Use meaningful variable names
- Add JSDoc comments for functions

### Angular
- Use standalone components where appropriate
- Follow Angular style guide
- Keep components focused (single responsibility)
- Use proper dependency injection

### CSS/Tailwind
- Use Tailwind utilities instead of custom CSS
- Follow mobile-first approach
- Group related utilities

## Commit Message Guidelines

We follow conventional commits:

```
feat(auth): add login validation
fix(ui): resolve button styling issue
docs(readme): update setup instructions
chore(deps): update angular to 19.0.0
```

## Pull Request Process

1. Update documentation if needed
2. Add/update tests for new features
3. Ensure all tests pass locally
4. Request review from code owners
5. Address review feedback
6. Squash commits if requested

## Reporting Issues

### Bug Reports
- Use the bug report template
- Provide reproduction steps
- Include screenshots/logs
- Specify your environment

### Feature Requests
- Use the feature request template
- Explain the use case
- Suggest implementation if possible

### Questions
- Use the question template
- Search existing issues first
- Be specific and detailed

## Code Review

- Be respectful and constructive
- Focus on code, not the person
- Ask questions rather than make demands
- Acknowledge good work

## Questions?

- Check existing documentation in `/docs`
- Search existing issues
- Open a question issue
- Contact maintainers

## License

By contributing, you agree that your contributions will be licensed under the project's license.

---

Thank you for contributing to ShofTV! 🎉
