import { SiteAction, SiteLink } from '../models/navigation.models';

export const SITE_NAV_LINKS: readonly SiteLink[] = [
  { label: 'Browse', route: '/browse' },
  { label: 'My list', route: '/watchlist' },
  { label: 'Plans', route: '/plans' },
];

export const SITE_NAV_ACTIONS: readonly SiteAction[] = [
  { label: 'Account', route: '/account', style: 'text' },
  { label: 'Start watching', route: '/browse', style: 'primary' },
];

export const SITE_FOOTER_LINKS: readonly SiteLink[] = [
  { label: 'About', route: '/about' },
  { label: 'Help center', route: '/help' },
  { label: 'Contact', route: '/contact' },
  { label: 'Gift cards', route: '/gift-cards' },
];