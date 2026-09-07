import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="border-t border-white/10 bg-[#09090b]">
      <!-- Main Footer Content -->
      <div class="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <!-- Logo + CTA -->
          <div class="flex flex-col items-center text-center mb-14">
            <div class="flex items-center gap-2 text-2xl font-bold tracking-tight mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 4l3 1.5L12 2l7 3.5L22 4v2l-3 1.5v9L12 20l-7-3.5v-9L2 6V4zm5 5v7l5 2.5L17 16V9l-5-2.5L7 9z"/>
              </svg>
              <span class="text-foreground">shof<span class="text-primary">tv</span></span>
            </div>
            <p class="text-muted-foreground text-sm max-w-md mb-6">
              Curated stories, live moments, and a better way to find what to watch next.
            </p>
            <a routerLink="/gift-cards" class="inline-block bg-primary text-primary-foreground text-sm font-semibold px-6 py-2.5 rounded-full hover:brightness-110 transition-all">
              Start watching free
            </a>
            <!-- Social Icons -->
            <div class="flex items-center gap-4 mt-6">
              <a href="#" class="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors" aria-label="Share">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors" aria-label="Film">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/>
                </svg>
              </a>
            </div>
          </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-border px-6 lg:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div class="flex items-center gap-2 text-xs text-muted-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2 4l3 1.5L12 2l7 3.5L22 4v2l-3 1.5v9L12 20l-7-3.5v-9L2 6V4zm5 5v7l5 2.5L17 16V9l-5-2.5L7 9z"/>
          </svg>
          <span>&copy; {{ year }} shoftv. All stories reserved.</span>
        </div>
        <div class="flex items-center gap-6 text-xs">
          @for (link of siteFooterLinks; track link.label) {
            <a [routerLink]="link.route" class="text-muted-foreground hover:text-primary transition-colors">
              {{ link.label }}
            </a>
          }
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly siteFooterLinks = [
    { label: 'About', route: '/about' },
    { label: 'Help center', route: '/help' },
    { label: 'Contact', route: '/contact' },
    { label: 'Gift cards', route: '/gift-cards' },
  ];

  // Kept as inputs for compatibility with existing page templates. The footer
  // intentionally renders one canonical layout and link set everywhere.
  @Input() variant: 'full' | 'minimal' = 'minimal';
  @Input() bottomLinks: { label: string; route: string }[] = [
    { label: 'Privacy Policy', route: '/privacy' },
    { label: 'Terms of Service', route: '/terms' },
  ];

  year = new Date().getFullYear();
}
