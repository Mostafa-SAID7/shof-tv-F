import { ContentItem, PricingPlan } from '../models/home.models';

export const HOME_CONTENT_CATEGORIES = ['All', 'Live', 'Movies', 'Series', 'Sports', 'Kids'] as const;

export const HOME_CONTENT_ITEMS: readonly ContentItem[] = [
  { title: 'After the Last Light', category: 'Series', badge: 'New', meta: '8 episodes', image: '/assets/img/shoftv-poster-desert.jpg' },
  { title: 'Blue Note', category: 'Movies', badge: '4K', meta: '2h 04m', image: '/assets/img/shoftv-poster-jazz.jpg' },
  { title: 'Neon Hours', category: 'Movies', badge: 'Top 10', meta: '1h 51m', image: '/assets/img/shoftv-poster-rain.jpg' },
  { title: 'August, Again', category: 'Series', badge: 'New', meta: '6 episodes', image: '/assets/img/shoftv-poster-summer.jpg' },
  { title: 'The Long Round', category: 'Sports', badge: 'Original', meta: '1h 47m', image: '/assets/img/shoftv-poster-fight.jpg' },
  { title: 'Desert Lines', category: 'Movies', badge: 'HD', meta: '2h 12m', image: '/assets/img/shoftv-poster-desert.jpg' },
];

export const HOME_PRICING_PLANS: readonly PricingPlan[] = [
  {
    name: 'Basic',
    price: '$4.99',
    period: 'month',
    description: 'Great for casual viewers',
    features: ['50+ Live Channels', 'SD & HD Quality', '1 Device at a time', '7-day catch-up', 'Basic parental controls'],
    popular: false,
    cta: 'Start Free Trial',
  },
  {
    name: 'Premium',
    price: '$9.99',
    period: 'month',
    description: 'Best for families and binge-watchers',
    features: ['200+ Live Channels', '4K Ultra HD + HDR', 'Up to 4 Devices', '30-day catch-up', 'Advanced parental controls', 'Offline downloads', 'No ads on on-demand'],
    popular: true,
    cta: 'Start Free Trial',
  },
  {
    name: 'Sports+',
    price: '$14.99',
    period: 'month',
    description: 'For the ultimate sports fan',
    features: ['All Premium features', 'Exclusive sports channels', 'Multi-cam view', 'Live stats overlay', 'Match highlights & replays', 'Up to 6 Devices'],
    popular: false,
    cta: 'Start Free Trial',
  },
];