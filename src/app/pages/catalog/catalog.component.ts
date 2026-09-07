import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PageShellComponent } from '../../core/layout/page-shell.component';
import { ContentCardComponent } from '../../shared/content-card/content-card.component';
import { CATEGORIES } from '../../platform/platform.data';
import { PlatformStore } from '../../platform/platform.store';
import { ContentCategory } from '../../platform/platform.models';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, PageShellComponent, ContentCardComponent],
  template: `
    <app-page-shell>
      <main class="min-h-screen bg-background pb-24 pt-32 text-foreground">
        <div class="mx-auto max-w-7xl px-5 lg:px-10">
          <header class="flex flex-col gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="eyebrow">The ShofTV library</p>
              <h1 class="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-6xl">Find your next <span class="text-primary">favourite.</span></h1>
              <p class="mt-4 max-w-xl text-base leading-relaxed text-secondary-foreground">A thoughtful mix of stories, live moments, and originals. Search the library, save what catches your eye, and pick up wherever you left off.</p>
            </div>
            <label class="flex w-full items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-muted-foreground lg:max-w-xs">
              <span aria-hidden="true">⌕</span>
              <input [(ngModel)]="query" (ngModelChange)="onQueryChange()" placeholder="Search titles, genres…" class="w-full bg-transparent outline-none placeholder:text-muted-foreground" aria-label="Search titles" />
            </label>
          </header>

          <section *ngIf="store.continueWatching().length" class="pt-10">
            <div class="mb-5 flex items-end justify-between">
              <div><p class="eyebrow">Pick up where you left off</p><h2 class="mt-2 text-2xl font-bold">Continue watching</h2></div>
              <a routerLink="/watchlist" class="text-xs font-bold uppercase tracking-wider text-primary">My list →</a>
            </div>
            <div class="grid gap-4 sm:grid-cols-2">
              <a *ngFor="let item of store.continueWatching()" [routerLink]="['/watch', item.title.id]" class="group flex overflow-hidden rounded-2xl border border-white/10 bg-card">
                <img [src]="item.title.image" [alt]="item.title.title" class="h-32 w-24 object-cover sm:h-40 sm:w-28" />
                <div class="flex flex-1 flex-col justify-center p-4">
                  <p class="text-xs font-bold uppercase tracking-wider text-primary">{{ item.title.kind }} <span *ngIf="item.episode">· Episode {{ item.episode }}</span></p>
                  <h3 class="mt-1 text-lg font-bold group-hover:text-primary">{{ item.title.title }}</h3>
                  <p class="mt-2 text-xs text-muted-foreground">{{ item.percent }}% watched</p>
                  <span class="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"><span class="block h-full rounded-full bg-primary" [style.width.%]="item.percent"></span></span>
                </div>
              </a>
            </div>
          </section>

          <section class="pt-12">
            <div class="flex flex-wrap items-center gap-2">
              <button *ngFor="let category of categories" (click)="selectedCategory.set(category)" [class.bg-primary]="selectedCategory() === category" [class.text-primary-foreground]="selectedCategory() === category" [class.text-secondary-foreground]="selectedCategory() !== category" class="rounded-full border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider transition hover:border-primary">
                {{ category }}
              </button>
            </div>
            <div class="mt-8 flex items-end justify-between">
              <div><p class="eyebrow">{{ results().length }} titles</p><h2 class="mt-2 text-2xl font-bold">{{ selectedCategory() === 'All' ? 'Everything worth watching' : selectedCategory() }}</h2></div>
              <select [(ngModel)]="sort" aria-label="Sort titles" class="select-control rounded-full border border-white/10 px-4 py-2 text-xs text-secondary-foreground outline-none"><option value="featured">Featured</option><option value="rating">Top rated</option><option value="newest">Newest</option></select>
            </div>
            <div *ngIf="results().length; else empty" class="mt-7 grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              <app-content-card *ngFor="let title of results()" [title]="title" />
            </div>
            <ng-template #empty><div class="mt-10 rounded-3xl border border-dashed border-white/15 p-12 text-center"><p class="text-lg font-semibold">Nothing matched that search.</p><p class="mt-2 text-sm text-muted-foreground">Try a different title, genre, or clear the filters.</p></div></ng-template>
          </section>
        </div>
      </main>
    </app-page-shell>
  `,
})
export class CatalogComponent {
  readonly store = inject(PlatformStore);
  readonly categories: readonly ContentCategory[] = ['All', ...CATEGORIES];
  readonly selectedCategory = signal<ContentCategory>('All');
  readonly query = signal('');
  sort = 'featured';

  readonly results = computed(() => {
    const normalized = this.query().trim().toLowerCase();
    let results = this.store.titles().filter((title) => {
      const categoryMatch = this.selectedCategory() === 'All' || title.category === this.selectedCategory();
      const queryMatch = !normalized || [title.title, title.category, title.kind, title.tagline].some((value) => value.toLowerCase().includes(normalized));
      return categoryMatch && queryMatch;
    });
    if (this.sort === 'rating') results = [...results].sort((a, b) => b.rating - a.rating);
    if (this.sort === 'newest') results = [...results].sort((a, b) => b.year - a.year);
    return results;
  });

  onQueryChange(): void {
    this.query.update((value) => value);
  }
}