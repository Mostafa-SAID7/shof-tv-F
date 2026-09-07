import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PlatformStore } from '../../platform/platform.store';

@Component({
  selector: 'app-watch',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <main *ngIf="title as item; else missing" class="min-h-screen bg-[#050506] text-foreground">
      <header class="fixed inset-x-0 top-0 z-10 flex items-center justify-between bg-gradient-to-b from-black/90 to-transparent px-5 py-5 lg:px-10">
        <a routerLink="/browse" class="text-sm font-semibold text-secondary-foreground hover:text-foreground">← Back to browse</a><span class="text-lg font-bold">shof<span class="text-primary">tv</span></span><button type="button" (click)="toggleMute()" class="rounded-full border border-white/15 px-4 py-2 text-xs text-secondary-foreground">{{ muted ? 'Unmute' : 'Mute' }}</button>
      </header>
      <section class="grid min-h-screen place-items-center px-5 py-24">
        <div class="w-full max-w-6xl">
          <div class="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl">
            <img [src]="item.backdrop" [alt]="item.title" class="h-full w-full object-cover opacity-70" />
            <div class="absolute inset-0 bg-black/35"></div><div class="absolute inset-0 grid place-items-center"><button type="button" (click)="togglePlaying()" class="grid h-20 w-20 place-items-center rounded-full bg-primary text-2xl text-primary-foreground shadow-2xl shadow-primary/30 transition hover:scale-105">{{ playing ? 'Ⅱ' : '▶' }}</button></div>
            <div class="absolute inset-x-0 bottom-0 p-4 sm:p-7"><div class="mb-3 flex justify-between text-xs text-white/80"><span>{{ item.title }}</span><span>{{ playing ? 'Playing' : 'Paused' }}</span></div><input type="range" min="0" max="100" [(ngModel)]="progress" (change)="saveProgress()" class="w-full accent-[#f2b544]" aria-label="Playback progress" /><div class="mt-3 flex items-center justify-between text-xs text-white/70"><span>{{ progress }}%</span><span>{{ item.runtime }}</span></div></div>
          </div>
          <div class="mt-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p class="eyebrow">Now playing</p><h1 class="mt-2 text-3xl font-bold">{{ item.title }}</h1><p class="mt-2 text-sm text-secondary-foreground">{{ item.tagline }}</p></div><button type="button" (click)="saveProgress()" class="rounded-full border border-white/15 px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary">Save progress</button></div>
        </div>
      </section>
    </main>
    <ng-template #missing><main class="grid min-h-screen place-items-center bg-background px-5 text-center"><div><h1 class="text-4xl font-bold">Playback unavailable</h1><a routerLink="/browse" class="mt-6 inline-block text-primary">Return to browse →</a></div></main></ng-template>
  `,
})
export class WatchComponent {
  readonly store = inject(PlatformStore);
  private readonly route = inject(ActivatedRoute);
  readonly title = this.store.getTitle(this.route.snapshot.paramMap.get('id') ?? '');
  progress = this.store.progress().find((item) => item.titleId === this.title?.id)?.percent ?? 0;
  playing = false;
  muted = false;

  togglePlaying(): void { this.playing = !this.playing; }
  toggleMute(): void { this.muted = !this.muted; }
  saveProgress(): void { if (this.title) this.store.updateProgress(this.title.id, this.progress); }
}