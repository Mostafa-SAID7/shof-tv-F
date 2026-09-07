import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageShellComponent } from '../../core/layout/page-shell.component';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule, RouterModule, PageShellComponent],
  template: `
    <app-page-shell>
    <div class="min-h-screen bg-background text-foreground">

      <div class="max-w-3xl mx-auto px-6 py-16 text-center">
        <!-- Success Icon -->
        <div class="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-foreground mb-2">Success!</h1>
        <p class="text-muted-foreground mb-2">Your tickets for {{ ticket.movie }} have been booked successfully.</p>
        <p class="text-muted-foreground mb-10">Present this digital ticket at the theater.</p>

        <!-- Ticket Card -->
        <div class="bg-card border border-border rounded-2xl overflow-hidden max-w-2xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-5">
            <!-- Left: Movie Info -->
            <div class="md:col-span-3 relative">
              <div class="relative overflow-hidden p-8 min-h-[280px] flex flex-col justify-end text-left">
                <img src="/assets/img/pages/ticket/ticket.jpg" alt="Dune: Part Two key art" class="absolute inset-0 h-full w-full object-cover opacity-75" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10"></div>
                <div class="relative">
                <span class="inline-block bg-foreground/10 backdrop-blur text-foreground text-xs font-semibold px-3 py-1 rounded border border-foreground/20 mb-3 w-fit">
                  ADMIT 1
                </span>
                <h2 class="text-2xl font-bold text-foreground">{{ ticket.movie }}</h2>
                <p class="text-sm text-primary mt-1">{{ ticket.format }}</p>
                </div>
              </div>

              <!-- Details Grid -->
              <div class="grid grid-cols-2 gap-6 p-6 text-left">
                <div>
                  <p class="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Theater</p>
                  <p class="text-sm font-medium text-foreground">{{ ticket.theater }}</p>
                </div>
                <div>
                  <p class="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Date & Time</p>
                  <p class="text-sm font-medium text-primary">{{ ticket.dateTime }}</p>
                </div>
                <div>
                  <p class="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Seat Info</p>
                  <p class="text-sm font-medium text-foreground">{{ ticket.seat }}</p>
                </div>
                <div>
                  <p class="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Order #</p>
                  <p class="text-sm font-medium text-foreground">{{ ticket.orderNumber }}</p>
                </div>
              </div>
            </div>

            <!-- Right: QR Code -->
            <div class="md:col-span-2 border-t md:border-t-0 md:border-l border-dashed border-border bg-background-elevated p-8 flex flex-col items-center justify-center">
              <p class="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Scan at Entrance</p>
              <!-- QR Placeholder -->
              <div class="w-40 h-40 bg-foreground/90 rounded-xl flex items-center justify-center mb-4">
                <div class="w-32 h-32 bg-background rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-foreground/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/>
                  </svg>
                </div>
              </div>
              <p class="text-xs text-muted-foreground text-center leading-relaxed">
                Screenshots will not be accepted.<br />Present live ticket.
              </p>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center justify-center gap-4 mt-10">
          <button type="button" (click)="printTicket()" class="flex items-center gap-2 border border-border text-foreground font-medium px-8 py-3 rounded-full hover:border-border-highlight transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            Download PDF
          </button>
          <a routerLink="/" class="flex items-center gap-2 bg-secondary border border-border text-foreground font-medium px-8 py-3 rounded-full hover:border-border-highlight transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            Back to Home
          </a>
        </div>
      </div>

    </div>
    </app-page-shell>
  `,
})
export class TicketComponent {
  ticket = {
    movie: 'Dune: Part Two',
    format: 'IMAX 70mm Experience',
    theater: 'AMC Lincoln Square 13',
    dateTime: 'Oct 24 \u2022 7:30 PM',
    seat: 'Row H, Seat 12',
    orderNumber: '#STV-99281A',
  };

  printTicket() {
    window.print();
  }

}
