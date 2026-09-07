import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageShellComponent } from '../../core/layout/page-shell.component';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [CommonModule, FormsModule, PageShellComponent],
  template: `
    <app-page-shell>
    <div class="min-h-screen bg-background text-foreground">

      <!-- Hero with Search -->
      <section class="relative px-6 py-20 lg:py-28 overflow-hidden">
        <img src="/assets/img/pages/help/help.jpg" alt="" class="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div class="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background pointer-events-none"></div>
        <div class="relative z-10 max-w-2xl mx-auto text-center">
          <h1 class="text-3xl md:text-5xl font-bold text-foreground mb-8">How can we help you?</h1>
          <div class="flex items-center bg-secondary border border-border rounded-lg overflow-hidden">
            <div class="pl-4 text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
            <input
              type="text"
              [(ngModel)]="searchQuery"
              placeholder="Search for answers, articles, or topics..."
              class="flex-1 bg-transparent px-4 py-3.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none"
            />
              <button type="button" (click)="search()" class="bg-primary text-primary-foreground font-medium px-6 py-3.5 text-sm hover:brightness-110 transition-all">
              Search
            </button>
          </div>
        </div>
      </section>

      <!-- Help Categories -->
      <section class="max-w-5xl mx-auto px-6 pb-16">
        <h2 class="text-xl font-semibold text-foreground mb-6">Help Categories</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          @for (cat of categories; track cat.title) {
              <button type="button" (click)="searchQuery = cat.title" class="w-full p-6 rounded-xl border border-border bg-card/30 card-hover cursor-pointer text-center text-left">
                <div class="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="cat.icon"/>
                </svg>
                </div>
                <h3 class="text-sm font-semibold text-foreground mb-2">{{ cat.title }}</h3>
                <p class="text-xs text-muted-foreground leading-relaxed">{{ cat.description }}</p>
              </button>
          }
        </div>
      </section>

      <!-- FAQ Accordion -->
      <section class="max-w-5xl mx-auto px-6 pb-16">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold text-foreground">Frequently Asked Questions</h2>
          <button type="button" (click)="clearSearch()" class="text-sm text-primary hover:underline">View all</button>
        </div>
        <div class="flex flex-col gap-3">
          @for (faq of faqs; track faq.question; let i = $index) {
            <div class="border border-border rounded-xl overflow-hidden bg-card/30">
              <button
                (click)="toggleFaq(i)"
                class="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span class="text-sm font-medium text-foreground">{{ faq.question }}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-muted-foreground transition-transform duration-200"
                  [class.rotate-180]="openFaqIndex() === i"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              @if (openFaqIndex() === i) {
                <div class="px-6 pb-4 text-sm text-muted-foreground leading-relaxed animate-fade-in">
                  {{ faq.answer }}
                </div>
              }
            </div>
          }
        </div>
      </section>

      <!-- Still Need Help -->
      <section class="max-w-5xl mx-auto px-6 pb-16">
        <div class="bg-card/50 border border-border rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 class="text-lg font-semibold text-foreground mb-1">Still need help?</h3>
            <p class="text-sm text-muted-foreground">Our support team is available 24/7 to assist you.</p>
          </div>
          <div class="flex items-center gap-3">
            <button type="button" (click)="openChat()" class="flex items-center gap-2 text-sm font-medium border border-border text-foreground px-5 py-2.5 rounded-lg hover:border-border-highlight transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              Live Chat
            </button>
            <a routerLink="/contact" class="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-lg hover:brightness-110 transition-all">
              Contact Us
            </a>
          </div>
        </div>
      </section>

    </div>
    </app-page-shell>
  `,
})
export class HelpComponent {
  searchQuery = '';
  openFaqIndex = signal<number | null>(null);

  categories = [
    {
      title: 'Subscription & Billing',
      description: 'Manage plans, update payment methods, and view invoices.',
      icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    },
    {
      title: 'Theaters',
      description: 'Find locations, book tickets, and theater amenities.',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    },
    {
      title: 'App Support',
      description: 'Troubleshooting, device compatibility, and offline viewing.',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
    {
      title: 'Account Settings',
      description: 'Profile updates, password resets, and family sharing.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    },
  ];

  faqs = [
    {
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel your subscription at any time from your Account Settings page. Navigate to Subscription > Manage Plan > Cancel. Your access will continue until the end of your current billing period.',
    },
    {
      question: 'Can I watch offline on my mobile device?',
      answer: 'Yes! Premium and Family plan subscribers can download movies for offline viewing on up to 3 devices. Downloads are available for 30 days and expire 48 hours after you start watching.',
    },
    {
      question: 'How do I use my theater tickets?',
      answer: 'After booking, your digital ticket will appear in the My Tickets section. Present the QR code at the theater entrance for scanning. Screenshots are not accepted — you must present the live ticket from the app.',
    },
    {
      question: 'Why am I having playback issues?',
      answer: 'Playback issues are usually caused by a slow internet connection. We recommend at least 5 Mbps for HD and 25 Mbps for 4K. Try restarting the app, clearing your cache, or switching to a wired connection.',
    },
  ];

  toggleFaq(index: number) {
    this.openFaqIndex.set(this.openFaqIndex() === index ? null : index);
  }

  search() {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query) return;
    const matchingIndex = this.faqs.findIndex(faq =>
      `${faq.question} ${faq.answer}`.toLowerCase().includes(query)
    );
    this.openFaqIndex.set(matchingIndex >= 0 ? matchingIndex : null);
  }

  clearSearch() {
    this.searchQuery = '';
    this.openFaqIndex.set(null);
  }

  openChat() {
    window.dispatchEvent(new CustomEvent('shof:open-chat'));
  }
}
