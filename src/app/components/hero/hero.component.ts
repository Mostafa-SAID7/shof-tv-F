import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="relative isolate min-h-[720px] overflow-hidden lg:min-h-[800px]">
       <img src="/assets/img/home/hero.jpg" alt="A cinematic theatre audience watching a film" class="absolute inset-0 h-full w-full object-cover object-[58%_center]" />
      <div class="absolute inset-0 bg-gradient-to-r from-[#0b0b0d] via-[#0b0b0d]/85 to-[#0b0b0d]/10"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40"></div>
      <div class="absolute -right-32 top-24 h-72 w-72 rounded-full bg-primary/10 blur-[100px]"></div>

       <div class="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-end px-5 pb-20 pt-36 lg:min-h-[800px] lg:items-center lg:px-10 lg:pb-0">
         <div class="min-w-0 w-full max-w-2xl">
          <div class="mb-7 flex items-center gap-3 animate-fade-in">
            <span class="h-px w-10 bg-primary"></span>
            <span class="eyebrow">Your seat is waiting</span>
          </div>
          <h1 class="max-w-xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-foreground sm:text-7xl lg:text-[88px] animate-fade-in-up">
            Stories that stay with you.
          </h1>
           <p class="mt-7 min-w-0 max-w-lg text-base leading-7 text-secondary-foreground sm:text-lg animate-fade-in-up" style="animation-delay: .12s">
            A better way to discover cinema, live moments, and the shows everyone will be talking about tomorrow.
          </p>
           <div class="mt-9 flex flex-col gap-3 sm:flex-row animate-fade-in-up" style="animation-delay: .24s">
             <a routerLink="/plans" class="inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-xl shadow-primary/15 transition-all hover:-translate-y-0.5 hover:brightness-110 sm:w-auto">
              Start watching free
              <span aria-hidden="true">↗</span>
            </a>
             <a routerLink="/browse" class="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 sm:w-auto">
              Explore the library
            </a>
          </div>
          <div class="mt-12 flex items-center gap-7 border-t border-white/15 pt-6 animate-fade-in" style="animation-delay: .36s">
            <div *ngFor="let stat of stats">
              <strong class="block text-2xl font-bold text-foreground">{{ stat.value }}</strong>
              <span class="text-xs text-muted-foreground">{{ stat.label }}</span>
            </div>
            <div class="h-9 w-px bg-white/15"></div>
            <div class="flex -space-x-2">
              <span *ngFor="let person of audience" class="grid h-8 w-8 place-items-center rounded-full border-2 border-[#151318] text-[10px] font-bold text-white" [style.background]="person"></span>
              <span class="grid h-8 w-8 place-items-center rounded-full border-2 border-[#151318] bg-primary text-[10px] font-bold text-primary-foreground">+</span>
            </div>
            <span class="hidden text-xs text-muted-foreground sm:block">Loved by film people</span>
          </div>
        </div>
      </div>

      <div class="absolute bottom-8 right-8 z-10 hidden max-w-[210px] rounded-2xl border border-white/15 bg-black/30 p-4 backdrop-blur-xl lg:block">
        <div class="mb-3 flex items-center justify-between">
          <span class="text-[10px] font-bold uppercase tracking-[.2em] text-primary">Now showing</span>
          <span class="flex items-center gap-1.5 text-[10px] text-white/60"><i class="h-1.5 w-1.5 rounded-full bg-accent"></i> Live</span>
        </div>
        <p class="text-sm font-semibold text-foreground">The art of a good night in.</p>
        <div class="mt-3 h-1 overflow-hidden rounded-full bg-white/15"><div class="h-full w-2/3 rounded-full bg-primary"></div></div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  stats = [
    { value: '200+', label: 'live channels' },
    { value: '50K+', label: 'hours to explore' },
    { value: '4K', label: 'where available' },
  ];
  audience = ['#81534b', '#4a6372', '#b58758', '#8a637c'];
}