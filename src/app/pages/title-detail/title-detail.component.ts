import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PageShellComponent } from '../../core/layout/page-shell.component';
import { ContentCardComponent } from '../../shared/content-card/content-card.component';
import { PlatformStore } from '../../platform/platform.store';

@Component({
  selector: 'app-title-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, PageShellComponent, ContentCardComponent],
  template: `
    <app-page-shell>
      <main *ngIf="title as item; else missing" class="min-h-screen bg-background text-foreground">
        <section class="relative min-h-[620px] overflow-hidden pt-28">
          <img [src]="item.backdrop" [alt]="item.title" class="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div class="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30"></div>
          <div class="relative mx-auto flex min-h-[500px] max-w-7xl items-end px-5 pb-16 lg:px-10">
             <div class="min-w-0 max-w-2xl">
              <div class="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider text-primary"><span>{{ item.kind }}</span><span class="text-white/30">•</span><span>{{ item.year }}</span><span class="text-white/30">•</span><span>{{ item.maturity }}</span><span class="text-white/30">•</span><span>{{ item.runtime }}</span></div>
               <h1 class="mt-5 text-4xl font-extrabold tracking-tight sm:text-7xl">{{ item.title }}</h1>
              <p class="mt-4 text-xl text-primary">{{ item.tagline }}</p>
              <p class="mt-5 max-w-xl leading-relaxed text-secondary-foreground">{{ item.description }}</p>
              <div class="mt-8 flex flex-wrap gap-3">
                <a [routerLink]="['/watch', item.id]" (click)="startWatching()" class="rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:brightness-110">▶ Watch now</a>
                <button type="button" (click)="toggleSaved()" class="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary">{{ store.isSaved(item.id) ? '✓ In my list' : '+ My list' }}</button>
              </div>
               <div class="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-secondary-foreground"><span class="shrink-0"><strong class="text-foreground">{{ item.rating }}</strong>/10 audience rating</span><span class="min-w-0 break-words">{{ item.cast.join(' · ') }}</span></div>
            </div>
          </div>
        </section>
        <section class="mx-auto max-w-7xl px-5 pb-24 lg:px-10">
          <div class="grid gap-8 border-t border-white/10 pt-10 md:grid-cols-[1fr_280px]">
            <div><p class="eyebrow">About this title</p><p class="mt-3 max-w-2xl leading-relaxed text-secondary-foreground">{{ item.description }} Watch on any device with a ShofTV account. Premium titles include high-quality playback and an uninterrupted experience.</p></div>
             <div class="rounded-2xl border border-white/10 bg-card p-5"><p class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Details</p><dl class="mt-4 space-y-3 text-sm"><div class="flex justify-between gap-3"><dt class="shrink-0 text-muted-foreground">Genre</dt><dd class="min-w-0 break-words text-right">{{ item.category }}</dd></div><div class="flex justify-between gap-3"><dt class="shrink-0 text-muted-foreground">Audio</dt><dd class="min-w-0 break-words text-right">Arabic · English</dd></div><div class="flex justify-between gap-3"><dt class="shrink-0 text-muted-foreground">Subtitles</dt><dd class="min-w-0 break-words text-right">Arabic · English</dd></div><div class="flex justify-between gap-3"><dt class="shrink-0 text-muted-foreground">Availability</dt><dd class="min-w-0 break-words text-right">{{ item.isPremium ? 'Premium' : 'Free' }}</dd></div></dl></div>
          </div>
        </section>
        <section class="mx-auto max-w-7xl px-5 pb-24 lg:px-10">
          <p class="eyebrow">More like this</p><h2 class="mt-2 text-2xl font-bold">Keep exploring</h2>
          <div class="mt-6 flex gap-4 overflow-x-auto pb-4"><app-content-card *ngFor="let related of relatedTitles" [title]="related" /></div>
        </section>
      </main>
      <ng-template #missing><div class="min-h-screen px-5 pt-40 text-center"><p class="eyebrow">404</p><h1 class="mt-3 text-4xl font-bold">That title moved off the schedule.</h1><a routerLink="/browse" class="mt-7 inline-block rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground">Browse the library</a></div></ng-template>
    </app-page-shell>
  `,
})
export class TitleDetailComponent {
  readonly store = inject(PlatformStore);
  private readonly route = inject(ActivatedRoute);
  readonly title = this.store.getTitle(this.route.snapshot.paramMap.get('id') ?? '');
  readonly relatedTitles = this.store.titles().filter((item) => item.id !== this.title?.id).slice(0, 5);

  toggleSaved(): void {
    if (this.title) this.store.toggleWatchlist(this.title.id);
  }

  startWatching(): void {
    if (this.title && !this.store.progress().some((item) => item.titleId === this.title?.id)) this.store.updateProgress(this.title.id, 2);
  }
}