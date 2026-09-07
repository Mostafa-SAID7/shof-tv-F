import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SITE_FOOTER_LINKS } from '../../core/navigation/site-navigation';
import { SiteLink } from '../../core/models/navigation.models';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  template: `
    <footer class="border-t border-white/10 bg-[#09090b]">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div class="flex flex-col items-center text-center">
          <a routerLink="/" class="flex items-center gap-2 text-2xl font-bold tracking-tight mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M2 4l3 1.5L12 2l7 3.5L22 4v2l-3 1.5v9L12 20l-7-3.5v-9L2 6V4zm5 5v7l5 2.5L17 16V9l-5-2.5L7 9z"/>
            </svg>
            <span class="text-foreground">shof<span class="text-primary">tv</span></span>
          </a>
          <p class="text-muted-foreground text-sm max-w-md mb-6">
            Curated stories, live moments, and a better way to find what to watch next.
          </p>
           <a routerLink="/plans" class="inline-block bg-primary text-primary-foreground text-sm font-semibold px-6 py-2.5 rounded-full hover:brightness-110 transition-all">
            Start watching free
          </a>
        </div>
      </div>

      <div class="border-t border-border px-6 lg:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <div class="flex items-center gap-2 text-xs text-muted-foreground">
          <span>&copy; {{ year }} shoftv. All stories reserved.</span>
        </div>
        <nav class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs" aria-label="Footer navigation">
          @for (link of siteFooterLinks; track link.label) {
            <a [routerLink]="link.route" class="text-muted-foreground hover:text-primary transition-colors">
              {{ link.label }}
            </a>
          }
        </nav>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly siteFooterLinks: readonly SiteLink[] = SITE_FOOTER_LINKS;

  year = new Date().getFullYear();
}