import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterModule],
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({ height: '0px', opacity: 0, overflow: 'hidden' })
      ),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('collapsed <=> expanded', [animate('200ms ease-in-out')]),
    ]),
  ],
  template: `
    <section id="faq" class="py-20 lg:py-28 border-t border-border">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-14">
          <span
            class="text-xs font-semibold text-primary tracking-widest uppercase"
            >FAQ</span
          >
          <h2
            class="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight"
          >
            Frequently Asked Questions
          </h2>
          <p class="mt-4 text-lg text-muted-foreground">
            Got questions? We have answers.
          </p>
        </div>

        <!-- FAQ Items -->
        <div class="flex flex-col gap-3">
          <div
            *ngFor="let item of faqItems; let i = index"
            class="bg-card border border-border rounded-xl overflow-hidden transition-colors"
            [ngClass]="{ 'border-primary/30': item.isOpen }"
          >
            <button
              class="w-full flex items-center justify-between p-5 lg:p-6 text-left"
              (click)="toggleFaq(i)"
              [attr.aria-expanded]="item.isOpen"
            >
              <span class="text-sm lg:text-base font-semibold text-foreground pr-4">
                {{ item.question }}
              </span>
              <svg
                class="w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-200"
                [class.rotate-180]="item.isOpen"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div [@expandCollapse]="item.isOpen ? 'expanded' : 'collapsed'">
              <div class="px-5 pb-5 lg:px-6 lg:pb-6">
                <p class="text-sm text-muted-foreground leading-relaxed">
                  {{ item.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact CTA -->
        <div class="mt-12 text-center">
          <p class="text-muted-foreground text-sm">
            Still have questions?
            <a routerLink="/contact" class="text-primary hover:underline font-medium"
              >Contact our support team</a
            >
          </p>
        </div>
      </div>
    </section>
  `,
})
export class FaqComponent {
  faqItems: FaqItem[] = [
    {
      question: 'What is ShofTV?',
      answer:
        'ShofTV is a streaming platform that provides access to 200+ live TV channels, on-demand movies, series, and exclusive content. All content is fully licensed and legally obtained, so you can watch with confidence.',
      isOpen: false,
    },
    {
      question: 'How much does ShofTV cost?',
      answer:
        'ShofTV offers three plans: Basic at $4.99/month, Premium at $9.99/month, and Sports+ at $14.99/month. All plans come with a free trial period, and you can cancel anytime with no hidden fees.',
      isOpen: false,
    },
    {
      question: 'Which devices are supported?',
      answer:
        'ShofTV works on Smart TVs (Samsung, LG, Android TV), iOS and Android phones, tablets, laptops via web browser, gaming consoles (PlayStation, Xbox), and streaming sticks (Chromecast, Fire TV, Apple TV).',
      isOpen: false,
    },
    {
      question: 'Can I watch on multiple devices?',
      answer:
        'Yes! Depending on your plan, you can stream on 1 to 6 devices simultaneously. The Basic plan supports 1 device, Premium supports 4, and Sports+ supports up to 6 devices at the same time.',
      isOpen: false,
    },
    {
      question: 'Is there a free trial?',
      answer:
        'Absolutely. All new users get a 7-day free trial with full access to their selected plan. No credit card required to start. You can upgrade, downgrade, or cancel at any time during or after the trial.',
      isOpen: false,
    },
    {
      question: 'Can I download content for offline viewing?',
      answer:
        'Yes, Premium and Sports+ subscribers can download movies, series episodes, and highlights for offline viewing on mobile devices. Downloads are available for up to 30 days.',
      isOpen: false,
    },
  ];

  toggleFaq(index: number) {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }
}
