import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [ngClass]="{ 'bg-background/95': isScrolled }"
      [class.backdrop-blur-md]="isScrolled"
      [class.border-b]="isScrolled"
      [class.border-border]="isScrolled"
      [class.bg-transparent]="!isScrolled"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 lg:h-20">
          <!-- Logo -->
          <a href="#" class="flex items-center gap-2 group">
            <div
              class="w-9 h-9 rounded-lg bg-primary flex items-center justify-center"
            >
              <svg
                class="w-5 h-5 text-primary-foreground"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <span
              class="text-xl font-display font-bold tracking-tight text-foreground group-hover:text-primary transition-colors"
              >ShofTV</span
            >
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-8">
            <a
              *ngFor="let link of navLinks"
              [href]="link.href"
              class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {{ link.label }}
            </a>
          </div>

          <!-- CTA Buttons -->
          <div class="hidden md:flex items-center gap-3">
            <button
              class="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
            >
              Sign In
            </button>
            <button
              class="text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-5 py-2.5 rounded-lg"
            >
              Start Free Trial
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button
            class="md:hidden text-foreground p-2"
            (click)="toggleMobileMenu()"
            [attr.aria-label]="mobileMenuOpen ? 'Close menu' : 'Open menu'"
            aria-expanded="false"
          >
            <svg
              *ngIf="!mobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              *ngIf="mobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div
          *ngIf="mobileMenuOpen"
          class="md:hidden border-t border-border bg-background/95 backdrop-blur-md animate-fade-in"
        >
          <div class="px-2 pt-4 pb-6 flex flex-col gap-1">
            <a
              *ngFor="let link of navLinks"
              [href]="link.href"
              class="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors px-4 py-3 rounded-lg"
              (click)="mobileMenuOpen = false"
            >
              {{ link.label }}
            </a>
            <hr class="border-border my-2" />
            <button
              class="text-sm font-medium text-foreground hover:bg-secondary/50 transition-colors px-4 py-3 rounded-lg text-left"
            >
              Sign In
            </button>
            <button
              class="text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-4 py-3 rounded-lg mt-1"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent {
  isScrolled = false;
  mobileMenuOpen = false;

  navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Channels', href: '#channels' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Devices', href: '#devices' },
    { label: 'FAQ', href: '#faq' },
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
