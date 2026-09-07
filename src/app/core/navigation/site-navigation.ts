import { SiteAction, SiteLink } from '../models/navigation.models';

export const SITE_NAV_LINKS: readonly SiteLink[] = [
  { label: 'Discover', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Help', route: '/help' },
];

export const SITE_NAV_ACTIONS: readonly SiteAction[] = [
  { label: 'Account help', route: '/forgot-password', style: 'text' },
  { label: 'Start free', route: '/', fragment: 'pricing', style: 'primary' },
];

export const SITE_FOOTER_LINKS: readonly SiteLink[] = [
  { label: 'About', route: '/about' },
  { label: 'Help center', route: '/help' },
  { label: 'Contact', route: '/contact' },
  { label: 'Gift cards', route: '/gift-cards' },
];