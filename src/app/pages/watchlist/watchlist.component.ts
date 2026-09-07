import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageShellComponent } from '../../core/layout/page-shell.component';
import { ContentCardComponent } from '../../shared/content-card/content-card.component';
import { PlatformStore } from '../../platform/platform.store';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [CommonModule, RouterModule, PageShellComponent, ContentCardComponent],
  template: `
    <app-page-shell>
      <main class="min-h-screen bg-background pb-24 pt-32 text-foreground">
        <div class="mx-auto max-w-7xl px-5 lg:px-10">
          <p class="eyebrow">Your library</p><h1 class="mt-3 text-5xl font-extrabold tracking-tight">My list<span class="text-primary">.</span></h1><p class="mt-4 max-w-xl text-secondary-foreground">Save titles you want to remember. Your list stays with you across sessions on this device.</p>
          <section class="mt-12">
            <div *ngIf="store.watchlistTitles().length; else empty" class="grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 lg:grid-cols-5"><app-content-card *ngFor="let title of store.watchlistTitles()" [title]="title" /></div>
            <ng-template #empty><div class="rounded-3xl border border-dashed border-white/15 p-14 text-center"><div class="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-2xl text-primary">+</div><h2 class="mt-5 text-2xl font-bold">Your list is waiting.</h2><p class="mx-auto mt-2 max-w-md text-sm text-muted-foreground">When you find something you love, tap “My list” to save it here.</p><a routerLink="/browse" class="mt-7 inline-block rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground">Browse titles</a></div></ng-template>
          </section>
        </div>
      </main>
    </app-page-shell>
  `,
})
export class WatchlistComponent {
  readonly store = inject(PlatformStore);
}