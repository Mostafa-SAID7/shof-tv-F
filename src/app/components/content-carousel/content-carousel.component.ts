import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContentItem {
  title: string;
  category: string;
  badge: string;
  image: string;
  meta: string;
}

@Component({
  selector: 'app-content-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="channels" class="py-20 lg:py-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="flex items-end justify-between mb-10">
          <div>
            <span class="eyebrow">A little inspiration</span>
            <h2
              class="mt-3 text-3xl sm:text-4xl font-bold tracking-[-0.04em] text-foreground"
            >
              Trending Content
            </h2>
          </div>
          <div class="hidden sm:flex items-center gap-2">
            <button
              class="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              (click)="scrollCarousel('left')"
              aria-label="Scroll left"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              class="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              (click)="scrollCarousel('right')"
              aria-label="Scroll right"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Category Tabs -->
        <div class="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          <button
            *ngFor="let cat of categories"
            class="shrink-0 text-xs font-bold uppercase tracking-[0.14em] px-5 py-2.5 rounded-full transition-colors"
            [class.bg-primary]="activeCategory === cat"
            [class.text-primary-foreground]="activeCategory === cat"
            [class.bg-secondary]="activeCategory !== cat"
            [class.text-secondary-foreground]="activeCategory !== cat"
            [ngClass]="{ 'hover:bg-secondary/80': activeCategory !== cat }"
            (click)="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Carousel -->
        <div
          #carouselRef
          class="flex gap-5 overflow-x-auto scroll-snap-x pb-4 -mx-4 px-4"
          style="scrollbar-width: none; -ms-overflow-style: none;"
        >
          <div
            *ngFor="let item of filteredContent"
            class="shrink-0 w-64 sm:w-72 scroll-snap-center group cursor-pointer"
          >
            <div
              class="relative aspect-[3/4] rounded-2xl overflow-hidden bg-secondary border border-white/10"
            >
              <img [src]="item.image" [alt]="item.title + ' key art'" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/15"></div>
              <!-- Overlay on hover -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>

              <!-- Badge -->
              <div class="absolute top-3 left-3">
                <span
                  class="bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide"
                  >{{ item.badge }}</span
                >
              </div>

              <!-- Play button on hover -->
              <div
                class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div
                  class="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center scale-90 group-hover:scale-100 transition-transform"
                >
                  <svg
                    class="w-6 h-6 text-primary-foreground ml-0.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>

              <!-- Bottom info on hover -->
              <div
                class="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
              >
                <span class="text-[10px] font-semibold text-primary uppercase tracking-wider">
                  {{ item.category }}
                </span>
                <h3 class="text-sm font-display font-semibold text-foreground mt-1">
                    {{ item.title }}
                </h3>
              </div>
            </div>

            <!-- Title below card -->
            <div class="mt-3">
              <h3 class="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                {{ item.title }}
              </h3>
              <p class="text-xs text-muted-foreground mt-0.5">{{ item.category }} <span class="mx-1 text-white/20">•</span> {{ item.meta }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContentCarouselComponent {
  @ViewChild('carouselRef') carouselRef!: ElementRef<HTMLDivElement>;

  activeCategory = 'All';

  categories = ['All', 'Live', 'Movies', 'Series', 'Sports', 'Kids'];

  contentItems: ContentItem[] = [
    { title: 'After the Last Light', category: 'Series', badge: 'New', meta: '8 episodes', image: '/assets/img/home/posters/desert.jpg' },
    { title: 'Blue Note', category: 'Movies', badge: '4K', meta: '2h 04m', image: '/assets/img/home/posters/jazz.jpg' },
    { title: 'Neon Hours', category: 'Movies', badge: 'Top 10', meta: '1h 51m', image: '/assets/img/home/posters/rain.jpg' },
    { title: 'August, Again', category: 'Series', badge: 'New', meta: '6 episodes', image: '/assets/img/home/posters/summer.jpg' },
    { title: 'The Long Round', category: 'Sports', badge: 'Original', meta: '1h 47m', image: '/assets/img/home/posters/fight.jpg' },
    { title: 'Desert Lines', category: 'Movies', badge: 'HD', meta: '2h 12m', image: '/assets/img/home/posters/desert.jpg' },
  ];

  get filteredContent(): ContentItem[] {
    if (this.activeCategory === 'All') return this.contentItems;
    return this.contentItems.filter((item) => item.category === this.activeCategory);
  }

  scrollCarousel(direction: 'left' | 'right') {
    if (!this.carouselRef) return;
    const el = this.carouselRef.nativeElement;
    const scrollAmount = 300;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }
}
