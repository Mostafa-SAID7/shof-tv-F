import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlatformTitle } from '../../platform/platform.models';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article class="group min-w-0 w-full max-w-none">
      <a [routerLink]="['/title', title.id]" class="relative block aspect-[2/3] overflow-hidden rounded-2xl border border-white/10 bg-card shadow-lg">
        <img [src]="title.image" [alt]="title.title + ' poster'" class="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-75" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 opacity-80"></div>
        <span *ngIf="title.badge" class="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">{{ title.badge }}</span>
        <button type="button" class="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition group-hover:opacity-100" (click)="$event.preventDefault(); play.emit(title)" [attr.aria-label]="'Play ' + title.title">
          ▶
        </button>
      </a>
      <div class="mt-3 flex min-w-0 items-start justify-between gap-2">
        <div class="min-w-0">
          <a [routerLink]="['/title', title.id]" class="font-semibold text-foreground hover:text-primary">{{ title.title }}</a>
          <p class="mt-1 text-xs text-muted-foreground">{{ title.kind }} · {{ title.runtime }} · {{ title.rating }}/10</p>
        </div>
        <span class="mt-0.5 shrink-0 text-[10px] font-bold uppercase tracking-wider text-primary">{{ title.category }}</span>
      </div>
    </article>
  `,
})
export class ContentCardComponent {
  @Input({ required: true }) title!: PlatformTitle;
  @Output() play = new EventEmitter<PlatformTitle>();
}