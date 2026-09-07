export interface ContentItem {
  title: string;
  category: string;
  badge: string;
  image: string;
  meta: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
}