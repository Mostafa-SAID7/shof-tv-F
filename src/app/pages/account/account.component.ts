import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageShellComponent } from '../../core/layout/page-shell.component';
import { PlatformStore } from '../../platform/platform.store';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, RouterModule, PageShellComponent],
  template: `
    <app-page-shell>
      <main class="min-h-screen bg-background pb-24 pt-32 text-foreground">
        <div class="mx-auto max-w-6xl px-5 lg:px-10">
          <div class="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end"><div><p class="eyebrow">Your account</p><h1 class="mt-3 text-5xl font-extrabold tracking-tight">Welcome back, {{ store.profile().name.split(' ')[0] }}<span class="text-primary">.</span></h1><p class="mt-3 text-secondary-foreground">{{ store.profile().email }}</p></div><div class="grid h-16 w-16 place-items-center rounded-2xl bg-primary text-xl font-extrabold text-primary-foreground">{{ store.profile().avatarInitials }}</div></div>
          <div class="mt-10 grid gap-5 lg:grid-cols-3">
            <section class="rounded-3xl border border-white/10 bg-card p-6 lg:col-span-2"><div class="flex items-center justify-between"><div><p class="eyebrow">Membership</p><h2 class="mt-2 text-2xl font-bold">{{ store.profile().plan }} plan</h2></div><a routerLink="/plans" class="rounded-full border border-white/15 px-4 py-2 text-xs font-bold hover:border-primary hover:text-primary">Change plan</a></div><div class="mt-6 grid gap-4 sm:grid-cols-3"><div class="rounded-2xl bg-white/[0.04] p-4"><p class="text-xs text-muted-foreground">Status</p><p class="mt-2 font-semibold text-success">Active</p></div><div class="rounded-2xl bg-white/[0.04] p-4"><p class="text-xs text-muted-foreground">Member since</p><p class="mt-2 font-semibold">{{ store.profile().memberSince }}</p></div><div class="rounded-2xl bg-white/[0.04] p-4"><p class="text-xs text-muted-foreground">Devices</p><p class="mt-2 font-semibold">1 of {{ store.profile().plan === 'Free' ? '1' : '4' }}</p></div></div></section>
            <section class="rounded-3xl border border-white/10 bg-card p-6"><p class="eyebrow">Your activity</p><div class="mt-5 space-y-5"><a routerLink="/watchlist" class="flex items-center justify-between border-b border-white/10 pb-4"><span class="text-sm">Saved titles</span><strong>{{ store.watchlistTitles().length }}</strong></a><a routerLink="/browse" class="flex items-center justify-between border-b border-white/10 pb-4"><span class="text-sm">In progress</span><strong>{{ store.continueWatching().length }}</strong></a><a routerLink="/help" class="flex items-center justify-between"><span class="text-sm">Need help?</span><span class="text-primary">→</span></a></div></section>
          </div>
          <section class="mt-5 rounded-3xl border border-white/10 bg-card p-6"><p class="eyebrow">Preferences</p><div class="mt-5 divide-y divide-white/10"><label class="flex items-center justify-between gap-4 py-4"><span><span class="block font-semibold">Autoplay next episode</span><span class="mt-1 block text-xs text-muted-foreground">Keep the story moving when an episode ends.</span></span><input type="checkbox" checked class="h-5 w-5 accent-[#f2b544]" /></label><label class="flex items-center justify-between gap-4 py-4"><span><span class="block font-semibold">Email recommendations</span><span class="mt-1 block text-xs text-muted-foreground">A small weekly note with things worth watching.</span></span><input type="checkbox" checked class="h-5 w-5 accent-[#f2b544]" /></label><label class="flex items-center justify-between gap-4 py-4"><span><span class="block font-semibold">Maturity filter</span><span class="mt-1 block text-xs text-muted-foreground">Use your profile controls to keep viewing age appropriate.</span></span><select class="rounded-xl border border-white/10 bg-background px-3 py-2 text-sm"><option>All content</option><option>12 and under</option><option>7 and under</option></select></label></div></section>
          <p class="mt-6 text-xs text-muted-foreground">Identity, sessions, and verified email are managed securely by Clerk. Billing changes are handled by the connected checkout provider.</p>
        </div>
      </main>
    </app-page-shell>
  `,
})
export class AccountComponent {
  readonly store = inject(PlatformStore);
}