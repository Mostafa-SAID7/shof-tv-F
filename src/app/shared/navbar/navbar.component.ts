import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="absolute top-0 left-0 right-0 z-40 px-5 py-5 lg:px-10">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Logo -->
      <a routerLink="/" class="flex items-center gap-3 text-xl font-bold tracking-tight group">
        <span class="w-9 h-9 rounded-xl bg-primary text-primary-foreground grid place-items-center shadow-lg shadow-primary/20 group-hover:rotate-[-8deg] transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="m3 5 3.5 1.7L12 4l5.5 2.7L21 5v2l-3.5 1.7v7.7L12 19l-5.5-2.6V8.7L3 7V5Zm5.5 4.6v5.6l3.5 1.7 3.5-1.7V9.6L12 8 8.5 9.6Z"/></svg>
        </span>
        <span class="text-foreground">shof<span class="text-primary">tv</span></span>
      </a>

      <!-- Consistent site navigation -->
      <div class="hidden md:flex items-center glass rounded-full px-1.5 py-1.5">
        @for (link of siteLinks; track link.label) {
          <a
            [routerLink]="link.route"
            class="px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] rounded-full transition-colors"
            [class.text-primary]="isActive(link.route)"
            [class.text-secondary-foreground]="!isActive(link.route)"
            [ngClass]="{ 'hover:text-foreground': !isActive(link.route) }"
          >
            {{ link.label }}
          </a>
        }
      </div>

      <!-- Right Side -->
      <div class="hidden md:flex items-center gap-4">
        @for (action of siteActions; track action.label) {
          @if (action.style === 'text') {
            <a [routerLink]="action.route" [fragment]="action.fragment" class="text-xs font-semibold uppercase tracking-[0.14em] text-secondary-foreground hover:text-foreground transition-colors">
              {{ action.label }}
            </a>
          }
          @if (action.style === 'outline') {
            <a
              [routerLink]="action.route"
              [fragment]="action.fragment"
              class="text-sm font-medium border border-foreground/20 text-foreground px-5 py-2 rounded-full hover:bg-foreground/5 transition-all"
            >
              {{ action.label }}
            </a>
          }
          @if (action.style === 'primary') {
            <a
              [routerLink]="action.route"
              [fragment]="action.fragment"
              class="text-xs font-bold uppercase tracking-[0.14em] bg-primary text-primary-foreground px-5 py-3 rounded-full hover:brightness-110 transition-all shadow-lg shadow-primary/10"
            >
              {{ action.label }}
            </a>
          }
          @if (action.style === 'icon') {
            <button class="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border-highlight transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </button>
          }
        }
      </div>

      <!-- Mobile Menu Toggle -->
      <button
        (click)="mobileOpen.set(!mobileOpen())"
        class="md:hidden w-10 h-10 flex items-center justify-center text-foreground"
        aria-label="Toggle menu"
      >
        @if (mobileOpen()) {
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        } @else {
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        }
      </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    @if (mobileOpen()) {
      <div class="md:hidden absolute top-[76px] left-4 right-4 z-50 glass rounded-2xl p-5 flex flex-col gap-3 animate-fade-in shadow-2xl">
        @for (link of siteLinks; track link.label) {
          <a
            [routerLink]="link.route"
            (click)="mobileOpen.set(false)"
            class="text-sm font-medium py-2"
            [class.text-primary]="isActive(link.route)"
            [class.text-secondary-foreground]="!isActive(link.route)"
          >
            {{ link.label }}
          </a>
        }
        <div class="h-px bg-border my-2"></div>
        @for (action of siteActions; track action.label) {
          @if (action.style === 'primary') {
            <a
              [routerLink]="action.route"
              [fragment]="action.fragment"
              (click)="mobileOpen.set(false)"
              class="text-sm font-semibold bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-center hover:brightness-110 transition-all"
            >
              {{ action.label }}
            </a>
          } @else {
            <a
              [routerLink]="action.route"
              [fragment]="action.fragment"
              (click)="mobileOpen.set(false)"
              class="text-sm font-medium text-secondary-foreground py-2"
            >
              {{ action.label }}
            </a>
          }
        }
      </div>
    }
  `,
})
export class NavbarComponent {
  constructor(private router: Router) {}

  readonly siteLinks = [
    { label: 'Discover', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Help', route: '/help' },
  ];

  readonly siteActions: {
    label: string;
    route: string;
    style: 'text' | 'outline' | 'primary' | 'icon';
    fragment?: string;
  }[] = [
    { label: 'Account help', route: '/forgot-password', style: 'text' },
    { label: 'Start free', route: '/', fragment: 'pricing', style: 'primary' },
  ];

  isActive(route: string) {
    const currentUrl = this.router.url.split('?')[0];
    return route === '/' ? currentUrl === '/' : currentUrl.startsWith(route);
  }

  mobileOpen = signal(false);
}
