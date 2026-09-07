# Security Policy

## Supported Versions

We support the following versions with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.x     | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in ShofTV, please email **security@shoftv.com** instead of using the issue tracker.

### Guidelines:
1. **Do not** publicly disclose the vulnerability until it has been addressed
2. Include detailed steps to reproduce the issue
3. Provide your contact information
4. Allow reasonable time for a fix before public disclosure (typically 90 days)

### What to Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

## Security Best Practices

When using ShofTV:
- Keep dependencies updated regularly
- Use environment variables for sensitive data (API keys, tokens)
- Never commit `.env` files to version control
- Use HTTPS for all communications
- Validate and sanitize user input
- Keep Node.js and npm updated

## Security Scanning

We perform the following security checks:
- Weekly npm audit scans
- OWASP Dependency Check
- TypeScript type checking
- ESLint security rules

## Contact

For security inquiries, contact: **Mostafa-SAID7**
