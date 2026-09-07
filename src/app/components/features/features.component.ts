import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 lg:py-28 relative">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(229,9,20,0.05)_0%,_transparent_70%)]"
      ></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span
            class="text-xs font-semibold text-primary tracking-widest uppercase"
            >Why ShofTV</span
          >
          <h2
            class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight text-balance"
          >
            Everything you need to watch
          </h2>
          <p class="mt-4 text-lg text-muted-foreground text-pretty">
            One platform for all your entertainment. Live channels, on-demand shows,
            and exclusive content -- all legally licensed.
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            *ngFor="let feature of features; let i = index"
            class="group relative bg-card/70 border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:bg-card"
          >
            <!-- Icon -->
            <div
              class="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-colors"
              [class]="feature.iconBg"
            >
              <svg
                class="w-6 h-6"
                [class]="feature.iconColor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  [attr.d]="feature.iconPath"
                />
              </svg>
            </div>

            <h3 class="text-lg font-display font-semibold text-foreground mb-2">
              {{ feature.title }}
            </h3>
            <p class="text-sm text-muted-foreground leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class FeaturesComponent {
  features = [
    {
      title: 'Live TV Channels',
      description:
        'Access 200+ live channels including news, sports, entertainment, and kids programming in real time.',
      iconPath: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
    },
    {
      title: 'On-Demand Library',
      description:
        'Thousands of movies, series, and documentaries ready to watch whenever you want, pause, and continue anytime.',
      iconPath: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      iconBg: 'bg-accent/10',
      iconColor: 'text-accent',
    },
    {
      title: '4K Ultra HD',
      description:
        'Crystal clear picture quality with 4K streaming, HDR support, and Dolby Audio on compatible devices.',
      iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
    },
    {
      title: 'Multi-Device Sync',
      description:
        'Start watching on your phone and continue on TV, tablet, or laptop. Your progress stays synced everywhere.',
      iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      iconBg: 'bg-accent/10',
      iconColor: 'text-accent',
    },
    {
      title: 'Fully Licensed',
      description:
        'All content is 100% legally obtained and fully licensed. Watch with confidence knowing creators are supported.',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
    },
    {
      title: 'Family Profiles',
      description:
        'Create up to 5 profiles with personalized recommendations. Set parental controls for a safe viewing experience.',
      iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      iconBg: 'bg-accent/10',
      iconColor: 'text-accent',
    },
  ];
}
