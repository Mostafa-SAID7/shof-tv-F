import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="pricing" class="py-20 lg:py-28 relative">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(229,9,20,0.06)_0%,_transparent_60%)]"
      ></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span
            class="text-xs font-semibold text-primary tracking-widest uppercase"
            >Pricing</span
          >
          <h2
            class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight text-balance"
          >
            Choose your plan
          </h2>
          <p class="mt-4 text-lg text-muted-foreground text-pretty">
            Start with a free trial. No credit card required. Cancel anytime.
          </p>
        </div>

        <!-- Pricing Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <div
            *ngFor="let plan of plans"
            class="relative bg-card/70 border rounded-2xl p-6 lg:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:bg-card"
            [class.border-primary]="plan.popular"
            [class.border-border]="!plan.popular"
            [class.shadow-2xl]="plan.popular"
            [class.shadow-primary/10]="plan.popular"
          >
            <!-- Popular badge -->
            <div
              *ngIf="plan.popular"
              class="absolute -top-3.5 left-1/2 -translate-x-1/2"
            >
              <span
                class="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full"
                >Most Popular</span
              >
            </div>

            <div class="mb-6">
              <h3 class="text-lg font-display font-semibold text-foreground">
                {{ plan.name }}
              </h3>
              <p class="text-sm text-muted-foreground mt-1">
                {{ plan.description }}
              </p>
            </div>

            <div class="mb-6">
              <span class="text-4xl font-display font-bold text-foreground">{{
                plan.price
              }}</span>
              <span class="text-muted-foreground text-sm ml-1">/{{ plan.period }}</span>
            </div>

            <ul class="flex-1 flex flex-col gap-3 mb-8">
              <li
                *ngFor="let feature of plan.features"
                class="flex items-start gap-3 text-sm"
              >
                <svg
                  class="w-5 h-5 shrink-0 mt-0.5"
                  [class.text-primary]="plan.popular"
                  [class.text-accent]="!plan.popular"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-card-foreground">{{ feature }}</span>
              </li>
            </ul>

            <button
              class="w-full py-3.5 rounded-xl font-semibold text-sm transition-colors"
              [class.bg-primary]="plan.popular"
              [class.text-primary-foreground]="plan.popular"
              [class.hover:bg-primary/90]="plan.popular"
              [class.bg-secondary]="!plan.popular"
              [class.text-secondary-foreground]="!plan.popular"
              [class.hover:bg-secondary/80]="!plan.popular"
            >
              {{ plan.cta }}
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class PricingComponent {
  plans: PricingPlan[] = [
    {
      name: 'Basic',
      price: '$4.99',
      period: 'month',
      description: 'Great for casual viewers',
      features: [
        '50+ Live Channels',
        'SD & HD Quality',
        '1 Device at a time',
        '7-day catch-up',
        'Basic parental controls',
      ],
      popular: false,
      cta: 'Start Free Trial',
    },
    {
      name: 'Premium',
      price: '$9.99',
      period: 'month',
      description: 'Best for families and binge-watchers',
      features: [
        '200+ Live Channels',
        '4K Ultra HD + HDR',
        'Up to 4 Devices',
        '30-day catch-up',
        'Advanced parental controls',
        'Offline downloads',
        'No ads on on-demand',
      ],
      popular: true,
      cta: 'Start Free Trial',
    },
    {
      name: 'Sports+',
      price: '$14.99',
      period: 'month',
      description: 'For the ultimate sports fan',
      features: [
        'All Premium features',
        'Exclusive sports channels',
        'Multi-cam view',
        'Live stats overlay',
        'Match highlights & replays',
        'Up to 6 Devices',
      ],
      popular: false,
      cta: 'Start Free Trial',
    },
  ];
}
