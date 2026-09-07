import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="devices" class="py-20 lg:py-28 border-t border-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <!-- Left: Devices illustration -->
          <div class="flex-1 w-full">
            <div class="relative">
              <!-- Large TV/Desktop -->
              <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl shadow-primary/5">
                <div class="aspect-video relative overflow-hidden">
                  <img src="/assets/img/shoftv-cinema.jpg" alt="ShofTV playing on a cinema screen" class="absolute inset-0 h-full w-full object-cover" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20"></div>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="text-center">
                      <div
                        class="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-3"
                      >
                        <svg
                          class="w-8 h-8 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="1.5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                        <p class="text-white text-sm font-semibold">Watch it your way</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tablet overlay -->
              <div
                class="absolute -bottom-6 -right-4 lg:-right-8 w-32 lg:w-44 bg-card border border-border rounded-xl overflow-hidden shadow-xl shadow-background/80"
              >
                <div
                  class="aspect-[3/4] bg-secondary relative overflow-hidden"
                >
                  <img src="/assets/img/shoftv-poster-jazz.jpg" alt="" class="absolute inset-0 h-full w-full object-cover opacity-80" />
                  <div class="absolute inset-0 flex items-center justify-center">
                    <svg
                      class="w-6 h-6 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Phone overlay -->
              <div
                class="absolute -bottom-4 left-4 lg:left-12 w-20 lg:w-24 bg-card border border-border rounded-lg overflow-hidden shadow-xl shadow-background/80"
              >
                <div
                  class="aspect-[9/16] bg-secondary relative overflow-hidden"
                >
                  <img src="/assets/img/shoftv-poster-rain.jpg" alt="" class="absolute inset-0 h-full w-full object-cover opacity-80" />
                  <div class="absolute inset-0 flex items-center justify-center">
                    <svg
                      class="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Content -->
          <div class="flex-1">
            <span
              class="text-xs font-semibold text-primary tracking-widest uppercase"
              >Watch Anywhere</span
            >
            <h2
              class="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight text-balance"
            >
              All your devices. One experience.
            </h2>
            <p class="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
              Stream ShofTV on your favorite devices. Smart TV, mobile, tablet,
              laptop, or gaming console -- your entertainment follows you everywhere.
            </p>

            <!-- Device list -->
            <div class="mt-8 grid grid-cols-2 gap-4">
              <div
                *ngFor="let device of devices"
                class="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-colors"
              >
                <div class="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <svg
                    class="w-5 h-5 text-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      [attr.d]="device.icon"
                    />
                  </svg>
                </div>
                <span class="text-sm font-medium text-foreground">{{ device.name }}</span>
              </div>
            </div>

            <div class="mt-8 flex items-center gap-6">
              <div class="flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span class="text-sm text-muted-foreground">Download for offline</span>
              </div>
              <div class="flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
                <span class="text-sm text-muted-foreground">Seamless sync</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class DevicesComponent {
  devices = [
    {
      name: 'Smart TV',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
    {
      name: 'Mobile',
      icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    },
    {
      name: 'Tablet',
      icon: 'M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
    },
    {
      name: 'Laptop',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
    {
      name: 'Gaming Console',
      icon: 'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z',
    },
    {
      name: 'Web Browser',
      icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    },
  ];
}
