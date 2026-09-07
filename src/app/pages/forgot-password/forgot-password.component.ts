import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="min-h-screen bg-background text-foreground flex flex-col">
      <!-- Minimal Top Bar -->
      <div class="px-6 py-4 border-b border-border">
        <a routerLink="/" class="flex items-center gap-1 text-xl font-black tracking-tight">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2 4l3 1.5L12 2l7 3.5L22 4v2l-3 1.5v9L12 20l-7-3.5v-9L2 6V4zm5 5v7l5 2.5L17 16V9l-5-2.5L7 9z"/>
          </svg>
          <span class="text-foreground">ShofTV</span>
        </a>
      </div>

      <!-- Centered Card -->
      <div class="flex-1 flex items-center justify-center px-6 py-16">
        <div class="w-full max-w-md bg-card border border-border rounded-xl p-8 text-center">
          <!-- Icon -->
          <div class="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          </div>

          <h1 class="text-2xl font-bold text-foreground mb-3">Forgot Your Password?</h1>
          <p class="text-sm text-muted-foreground mb-8">
            Enter your email address and we'll send you a link to reset your password.
          </p>

            <form (ngSubmit)="onSubmit()" #resetForm="ngForm" class="text-left">
            <label class="block text-sm font-semibold text-foreground mb-2">Email Address</label>
            <div class="flex items-center bg-secondary border border-border rounded-lg overflow-hidden mb-6">
              <div class="pl-4 text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <input
                type="email"
                [(ngModel)]="email"
                name="email"
                required
                placeholder="Enter your email address"
                class="flex-1 bg-transparent px-3 py-3.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none"
              />
            </div>

            <button
              type="submit"
              class="w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-lg hover:brightness-110 transition-all mb-4"
            >
              Send Reset Link
            </button>
          </form>

          @if (submitted) {
            <p class="mb-4 text-sm text-primary" role="status">If that email is registered, a reset link is on its way.</p>
          }
          <a routerLink="/" class="text-sm text-primary hover:underline inline-flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Back to Home
          </a>
        </div>
      </div>

      <!-- Bottom -->
      <div class="text-center py-6 text-xs text-muted-foreground">
        &copy; 2023 ShofTV. All rights reserved.
      </div>
    </div>
  `,
})
export class ForgotPasswordComponent {
  email = '';
  submitted = false;

  onSubmit() {
    if (!this.email.trim()) return;
    this.submitted = true;
  }
}
