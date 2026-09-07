import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageShellComponent } from '../../core/layout/page-shell.component';
import { BillingService } from '../../platform/billing.service';
import { PlatformStore } from '../../platform/platform.store';

type PlanName = 'Free' | 'Premium' | 'Sports+';

interface Plan {
  name: PlanName;
  price: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule, RouterModule, PageShellComponent],
  template: `
    <app-page-shell>
      <main class="min-h-screen bg-background pb-24 pt-32 text-foreground">
        <div class="mx-auto max-w-6xl px-5 lg:px-10"><div class="mx-auto max-w-2xl text-center"><p class="eyebrow">Choose your way to watch</p><h1 class="mt-3 text-5xl font-extrabold tracking-tight">More stories. <span class="text-primary">Less friction.</span></h1><p class="mt-4 text-secondary-foreground">Start with a free account. Upgrade whenever you want, with secure checkout and easy cancellation.</p></div>
          <div class="mt-12 grid gap-5 lg:grid-cols-3">
            <article *ngFor="let plan of plans" [class.border-primary]="plan.name === 'Premium'" class="relative flex flex-col rounded-3xl border border-white/10 bg-card p-7"><span *ngIf="plan.name === 'Premium'" class="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">Most popular</span><p class="eyebrow">{{ plan.name }}</p><h2 class="mt-4 text-3xl font-bold">{{ plan.price }}<span class="text-sm font-normal text-muted-foreground">/month</span></h2><p class="mt-3 min-h-10 text-sm text-muted-foreground">{{ plan.description }}</p><ul class="mt-7 flex-1 space-y-3 text-sm text-secondary-foreground"><li *ngFor="let feature of plan.features" class="flex gap-2"><span class="text-primary">✓</span>{{ feature }}</li></ul><button *ngIf="plan.name !== 'Free'" type="button" (click)="checkout(plan.name)" [disabled]="loading === plan.name" class="mt-8 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:brightness-110 disabled:cursor-wait disabled:opacity-60">{{ loading === plan.name ? 'Connecting…' : 'Start secure checkout' }}</button><a *ngIf="plan.name === 'Free'" routerLink="/browse" class="mt-8 rounded-full border border-white/15 px-5 py-3 text-center text-sm font-bold hover:border-primary hover:text-primary">Browse for free</a></article>
          </div>
          <p *ngIf="message" class="mx-auto mt-6 max-w-xl rounded-2xl border border-primary/30 bg-primary/10 p-4 text-center text-sm text-primary">{{ message }}</p>
          <p class="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">Secure checkout is handled by Whop. ShofTV never stores full payment card details. By subscribing, you agree to the terms and cancellation policy.</p>
        </div>
      </main>
    </app-page-shell>
  `,
})
export class PlansComponent {
  private readonly billing = inject(BillingService);
  readonly store = inject(PlatformStore);
  loading = '';
  message = '';
  readonly plans: Plan[] = [
    { name: 'Free', price: '$0', description: 'A generous starting point for curious viewers.', features: ['Curated free library', 'Watchlist and progress', 'Watch on any device'] },
    { name: 'Premium', price: '$9.99', description: 'The full ShofTV experience for everyday watching.', features: ['Full on-demand library', '4K quality where available', 'Up to 4 devices', 'Offline viewing ready', 'No ads on on-demand'] },
    { name: 'Sports+', price: '$14.99', description: 'For live moments, match nights, and the whole story.', features: ['Everything in Premium', 'Exclusive sports channels', 'Live stats and replays', 'Up to 6 devices'] },
  ];

  async checkout(plan: 'Premium' | 'Sports+'): Promise<void> {
    this.loading = plan; this.message = '';
    const result = await this.billing.startCheckout({ plan });
    this.loading = ''; this.message = result.message;
    if (result.ok) this.store.setPlan(plan);
  }
}