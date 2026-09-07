import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ContentCarouselComponent } from '../../components/content-carousel/content-carousel.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { DevicesComponent } from '../../components/devices/devices.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { FaqComponent } from '../../components/faq/faq.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    ContentCarouselComponent,
    FeaturesComponent,
    DevicesComponent,
    PricingComponent,
    CtaComponent,
    FaqComponent,
  ],
  template: `
    <div class="min-h-screen overflow-hidden bg-background text-foreground">
      <app-navbar [centerLinks]="navLinks" [rightActions]="navActions" />
      <app-hero />

      <section class="border-y border-white/10 bg-[#111014]">
        <div class="max-w-7xl mx-auto px-5 py-6 lg:px-10">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex items-center gap-3">
              <span class="grid h-8 w-8 place-items-center rounded-full bg-accent/15 text-accent">
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7Z"/></svg>
              </span>
              <p class="text-sm text-secondary-foreground"><strong class="text-foreground">Tonight's pick:</strong> stories worth staying up for.</p>
            </div>
            <a routerLink="/about" class="text-xs font-bold uppercase tracking-[0.18em] text-primary hover:text-foreground transition-colors">Why shoftv <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <app-content-carousel />
      <app-features />
      <app-devices />
      <app-pricing />
      <app-faq />
      <app-cta />
      <app-footer variant="full" [bottomLinks]="footerLinks" />

      <div *ngIf="showCookieBanner" class="fixed bottom-4 left-4 right-4 z-50 mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-white/10 bg-[#1a181e]/95 p-4 shadow-2xl backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <p class="max-w-xl text-xs leading-relaxed text-secondary-foreground">We use cookies to make shoftv feel smoother. By continuing, you agree to our <a routerLink="/help" class="text-primary hover:underline">privacy policy</a>.</p>
        <div class="flex shrink-0 items-center gap-2">
          <button (click)="showCookieBanner = false" class="rounded-full border border-white/15 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-foreground hover:border-primary transition-colors">Not now</button>
          <button (click)="showCookieBanner = false" class="rounded-full bg-primary px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-primary-foreground hover:brightness-110 transition-all">Sounds good</button>
        </div>
      </div>
    </div>
  `,
})
export class HomeComponent {
  showCookieBanner = true;

  navLinks = [
    { label: 'Discover', route: '/', active: true },
    { label: 'About', route: '/about' },
    { label: 'Help', route: '/help' },
  ];

  navActions = [
    { label: 'Sign in', route: '/forgot-password', style: 'text' as const },
    { label: 'Join free', route: '/gift-cards', style: 'primary' as const },
  ];

  footerLinks = [
    { label: 'About', route: '/about' },
    { label: 'Help centre', route: '/help' },
    { label: 'Contact', route: '/contact' },
  ];
}