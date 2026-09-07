import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageShellComponent } from '../../core/layout/page-shell.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, PageShellComponent],
  template: `
    <app-page-shell>
    <div class="min-h-screen bg-background text-foreground">

      <div class="max-w-6xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <!-- Left Column: Info -->
          <div class="lg:col-span-2">
            <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
            <p class="text-muted-foreground leading-relaxed mb-10">
              Have a question about your subscription, a movie request, or just want to say hi? We're here for you.
            </p>

            <!-- Contact Cards -->
            <div class="flex flex-col gap-4">
              <!-- Email -->
              <div class="p-5 rounded-xl border border-border bg-card/30">
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-sm font-semibold text-foreground">Email Us</h3>
                    <p class="text-xs text-muted-foreground mt-1">Our team is ready to help.</p>
                    <a href="mailto:support@shoftv.com" class="text-sm text-primary hover:underline mt-2 inline-block">support&#64;shoftv.com</a>
                  </div>
                </div>
              </div>

              <!-- Phone -->
              <div class="p-5 rounded-xl border border-border bg-card/30">
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-sm font-semibold text-foreground">Call Us</h3>
                    <p class="text-xs text-muted-foreground mt-1">Mon-Fri from 8am to 5pm.</p>
                    <a href="tel:+15551234567" class="text-sm text-primary hover:underline mt-2 inline-block">+1 (555) 123-4567</a>
                  </div>
                </div>
              </div>

              <!-- Address -->
              <div class="p-5 rounded-xl border border-border bg-card/30">
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-sm font-semibold text-foreground">Headquarters</h3>
                    <p class="text-sm text-muted-foreground mt-1">123 ShofTV Blvd</p>
                    <p class="text-sm text-muted-foreground">Cinema City, CA 90210</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Form -->
          <div class="lg:col-span-3">
            <div class="bg-card/50 border border-border rounded-xl p-8">
              <h2 class="text-xl font-semibold text-foreground mb-6">Send us a Message</h2>
              <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="flex flex-col gap-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">First Name</label>
                    <input
                      type="text"
                      [(ngModel)]="form.firstName"
                      name="firstName"
                      required
                      placeholder="Jane"
                      class="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Last Name</label>
                    <input
                      type="text"
                      [(ngModel)]="form.lastName"
                      name="lastName"
                      required
                      placeholder="Doe"
                      class="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    [(ngModel)]="form.email"
                    name="email"
                    required
                    placeholder="jane@example.com"
                    class="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Subject</label>
                  <select
                    [(ngModel)]="form.subject"
                    name="subject"
                    class="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="subscription">Subscription Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Message</label>
                  <textarea
                    [(ngModel)]="form.message"
                    name="message"
                    required
                    placeholder="How can we help you today?"
                    rows="5"
                    class="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-lg hover:brightness-110 transition-all"
                >
                  Send Message
                </button>
                @if (submitted) {
                  <p class="text-sm text-primary" role="status">Thanks — your message is ready for our support team.</p>
                }
                @if (errorMessage) {
                  <p class="text-sm text-red-300" role="alert">{{ errorMessage }}</p>
                }
              </form>
            </div>
          </div>
        </div>

        <!-- Map Placeholder -->
        <div class="mt-16 rounded-xl overflow-hidden border border-border h-64 bg-secondary flex items-center justify-center">
          <div class="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-primary mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <p class="text-sm text-muted-foreground">Map integration area</p>
          </div>
        </div>
      </div>

    </div>
    </app-page-shell>
  `,
})
export class ContactComponent {
  form = {
    firstName: '',
    lastName: '',
    email: '',
    subject: 'subscription',
    message: '',
  };

  submitted = false;
  errorMessage = '';

  onSubmit() {
    this.submitted = false;
    this.errorMessage = '';
    if (!this.form.firstName.trim() || !this.form.lastName.trim() || !this.form.email.trim() || !this.form.message.trim()) {
      this.errorMessage = 'Please complete every required field before sending.';
      return;
    }
    this.submitted = true;
  }
}
