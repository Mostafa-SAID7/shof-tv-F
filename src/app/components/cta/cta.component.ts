import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="signup" class="py-20 lg:py-28 relative overflow-hidden">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(229,9,20,0.12)_0%,_transparent_60%)]"
      ></div>

      <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-16 sm:px-12">
          <img src="/home/cinema.jpg" alt="" class="absolute inset-0 h-full w-full object-cover opacity-25" />
          <div class="absolute inset-0 bg-gradient-to-br from-accent/30 via-background/80 to-background"></div>
          <div class="relative">
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight text-balance"
        >
          Ready to start watching?
        </h2>
        <p
          class="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty"
        >
          Join thousands of viewers enjoying premium entertainment. Start your
          free trial today -- no credit card needed.
        </p>

        <!-- Email signup -->
        <form
          (ngSubmit)="onSubmit()"
          class="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            name="email"
            [(ngModel)]="email"
            required
            placeholder="Enter your email"
            class="w-full bg-card border border-border rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button
            type="submit"
            class="w-full sm:w-auto shrink-0 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-lg text-sm hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            Get Started
          </button>
        </form>
        @if (submitted) {
          <p class="mt-4 text-sm text-primary" role="status">
            Thanks — we’ll use {{ email }} to start your free trial.
          </p>
        }

          <p class="mt-4 text-xs text-muted-foreground">
          Free for 7 days, then from $4.99/month. Cancel anytime.
        </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CtaComponent {
  email = '';
  submitted = false;

  onSubmit() {
    if (!this.email.trim()) return;
    this.submitted = true;
  }
}
