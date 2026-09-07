import { Injectable, computed, signal } from '@angular/core';
import { PLATFORM_TITLES } from './platform.data';
import { PlatformTitle, ViewerProfile, WatchProgress } from './platform.models';

const WATCHLIST_KEY = 'shoftv.watchlist';
const PROGRESS_KEY = 'shoftv.progress';

@Injectable({ providedIn: 'root' })
export class PlatformStore {
  readonly titles = signal<readonly PlatformTitle[]>(PLATFORM_TITLES);
  readonly watchlist = signal<string[]>(this.read<string[]>(WATCHLIST_KEY, []));
  readonly progress = signal<WatchProgress[]>(this.read<WatchProgress[]>(PROGRESS_KEY, [
    { titleId: 'after-the-last-light', percent: 42, episode: 3, updatedAt: Date.now() - 86400000 },
    { titleId: 'neon-hours', percent: 68, updatedAt: Date.now() - 172800000 },
  ]));
  readonly profile = signal<ViewerProfile>({
    name: 'Guest Viewer',
    email: 'viewer@shoftv.example',
    plan: 'Free',
    memberSince: 'September 2026',
    avatarInitials: 'GV',
  });

  readonly watchlistTitles = computed(() => this.watchlist()
    .map((id) => this.titles().find((title) => title.id === id))
    .filter((title): title is PlatformTitle => Boolean(title)));

  readonly continueWatching = computed(() => this.progress()
    .filter((item) => item.percent > 0 && item.percent < 100)
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .map((item) => ({ ...item, title: this.titles().find((title) => title.id === item.titleId) }))
    .filter((item): item is WatchProgress & { title: PlatformTitle } => Boolean(item.title)));

  getTitle(id: string): PlatformTitle | undefined {
    return this.titles().find((title) => title.id === id);
  }

  isSaved(id: string): boolean {
    return this.watchlist().includes(id);
  }

  toggleWatchlist(id: string): void {
    const next = this.isSaved(id)
      ? this.watchlist().filter((item) => item !== id)
      : [...this.watchlist(), id];
    this.watchlist.set(next);
    this.persist(WATCHLIST_KEY, next);
  }

  updateProgress(titleId: string, percent: number, episode?: number): void {
    const next = [
      ...this.progress().filter((item) => item.titleId !== titleId),
      { titleId, percent: Math.min(100, Math.max(0, percent)), episode, updatedAt: Date.now() },
    ];
    this.progress.set(next);
    this.persist(PROGRESS_KEY, next);
  }

  setPlan(plan: ViewerProfile['plan']): void {
    this.profile.update((profile) => ({ ...profile, plan }));
  }

  private read<T>(key: string, fallback: T): T {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) as T : fallback;
    } catch {
      return fallback;
    }
  }

  private persist<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Storage can be unavailable in private browsing; in-memory state still works.
    }
  }
}