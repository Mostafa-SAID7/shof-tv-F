export type ContentKind = 'Movie' | 'Series' | 'Live';
export type ContentCategory = 'All' | 'Drama' | 'Documentary' | 'Comedy' | 'Sports' | 'Kids' | 'Live';

export interface PlatformTitle {
  id: string;
  title: string;
  tagline: string;
  description: string;
  kind: ContentKind;
  category: Exclude<ContentCategory, 'All'>;
  year: number;
  maturity: 'U' | '7' | '12' | '16' | '18';
  runtime: string;
  rating: number;
  image: string;
  backdrop: string;
  badge?: string;
  episodes?: number;
  featured?: boolean;
  isPremium?: boolean;
  cast: string[];
}

export interface WatchProgress {
  titleId: string;
  percent: number;
  episode?: number;
  updatedAt: number;
}

export interface ViewerProfile {
  name: string;
  email: string;
  plan: 'Free' | 'Premium' | 'Sports+';
  memberSince: string;
  avatarInitials: string;
}

export interface AdminMetric {
  label: string;
  value: string;
  change: string;
  direction: 'up' | 'down';
}