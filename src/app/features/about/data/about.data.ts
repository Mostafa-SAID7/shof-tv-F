export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
}

export const ABOUT_TIMELINE: readonly TimelineEvent[] = [
  { year: '2018', title: 'The Inception', description: 'A group of cinephiles realized that finding classic and indie films was too hard. The idea for ShofTV was born in a small garage.' },
  { year: '2020', title: 'First Beta Launch', description: 'Launched to a closed group of 1,000 users. The feedback was overwhelmingly positive, validating our mission to curate the best.' },
  { year: '2022', title: 'Going Global', description: 'Expanded our streaming rights internationally, bringing diverse cinema to over 50 countries worldwide.' },
  { year: '2024', title: 'The Future is Here', description: 'Introducing 4K remasters of classic films and exclusive partnerships with independent studios.' },
];

export const ABOUT_TEAM: readonly TeamMember[] = [
  { name: 'Alex Vance', role: 'Founder & CEO' },
  { name: 'Sarah Jenkins', role: 'Chief Technology Officer' },
  { name: 'David Chen', role: 'Head of Curation' },
  { name: 'Maya Patel', role: 'Lead Designer' },
];