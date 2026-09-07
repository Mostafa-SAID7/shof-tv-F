import { HelpCategory, HelpFaq } from '../models/support.models';

export const HELP_CATEGORIES: readonly HelpCategory[] = [
  {
    title: 'Subscription & Billing',
    description: 'Manage plans, update payment methods, and view invoices.',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
  },
  {
    title: 'Theaters',
    description: 'Find locations, book tickets, and theater amenities.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
  {
    title: 'App Support',
    description: 'Troubleshooting, device compatibility, and offline viewing.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    title: 'Account Settings',
    description: 'Profile updates, password resets, and family sharing.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  },
];

export const HELP_FAQS: readonly HelpFaq[] = [
  {
    question: 'How do I cancel my subscription?',
    answer: 'You can cancel your subscription at any time from your Account Settings page. Navigate to Subscription > Manage Plan > Cancel. Your access will continue until the end of your current billing period.',
  },
  {
    question: 'Can I watch offline on my mobile device?',
    answer: 'Yes! Premium and Family plan subscribers can download movies for offline viewing on up to 3 devices. Downloads are available for 30 days and expire 48 hours after you start watching.',
  },
  {
    question: 'How do I use my theater tickets?',
    answer: 'After booking, your digital ticket will appear in the My Tickets section. Present the QR code at the theater entrance for scanning. Screenshots are not accepted — you must present the live ticket from the app.',
  },
  {
    question: 'Why am I having playback issues?',
    answer: 'Playback issues are usually caused by a slow internet connection. We recommend at least 5 Mbps for HD and 25 Mbps for 4K. Try restarting the app, clearing your cache, or switching to a wired connection.',
  },
];