import { ConcessionItem, GiftCardAmount, GiftCardType } from '../models/commerce.models';

export const CONCESSION_TABS = [
  { key: 'popcorn', label: 'Popcorn', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
  { key: 'drinks', label: 'Drinks', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { key: 'snacks', label: 'Snacks', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { key: 'combos', label: 'Combos', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
] as const;

export const CONCESSION_ITEMS: readonly ConcessionItem[] = [
  { name: 'Large Popcorn', price: 8, description: 'Classic buttery goodness, big enough to share.', category: 'popcorn', image: '/assets/img/pages/concessions/popcorn.jpg' },
  { name: 'Medium Popcorn', price: 6, description: 'Perfectly portioned for one hungry moviegoer.', category: 'popcorn', image: '/assets/img/pages/concessions/popcorn.jpg' },
  { name: 'Small Popcorn', price: 4.5, description: 'A quick snack to satisfy the craving.', category: 'popcorn', image: '/assets/img/pages/concessions/popcorn.jpg' },
  { name: 'Caramel Corn', price: 7.5, description: 'Sweet and crunchy caramel-coated delight.', category: 'popcorn', image: '/assets/img/pages/concessions/popcorn.jpg' },
  { name: 'Large Soda', price: 5, description: 'Choose from Coke, Sprite, or Fanta.', category: 'drinks', image: '/assets/img/pages/concessions/drinks.jpg' },
  { name: 'Medium Soda', price: 4, description: 'The perfect companion to your popcorn.', category: 'drinks', image: '/assets/img/pages/concessions/drinks.jpg' },
  { name: 'Water Bottle', price: 3, description: 'Pure spring water in a recyclable bottle.', category: 'drinks', image: '/assets/img/pages/concessions/drinks.jpg' },
  { name: 'Nachos', price: 6.5, description: 'Crunchy tortilla chips with warm cheese sauce.', category: 'snacks', image: '/assets/img/pages/concessions/snacks.jpg' },
  { name: 'Candy Bar', price: 4, description: 'Choose from M&Ms, Snickers, or Reeses.', category: 'snacks', image: '/assets/img/pages/concessions/snacks.jpg' },
  { name: 'Movie Night Combo', price: 15, description: 'Large popcorn + 2 large sodas + candy.', category: 'combos', image: '/assets/img/pages/concessions/combos.jpg' },
  { name: 'Date Night Combo', price: 22, description: '2 large popcorns + 2 drinks + nachos.', category: 'combos', image: '/assets/img/pages/concessions/combos.jpg' },
];

export const GIFT_CARD_AMOUNTS: readonly GiftCardAmount[] = [
  { value: 25, label: '$25', popular: false },
  { value: 50, label: '$50', popular: true },
  { value: 100, label: '$100', popular: false },
  { value: 0, label: 'Custom', sub: 'Amount', popular: false },
];

export const GIFT_CARD_TYPES: readonly GiftCardType[] = [
  { value: 'digital', label: 'Digital Card', description: 'Delivered instantly via email', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { value: 'physical', label: 'Physical Card', description: 'Mailed in premium packaging', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
];