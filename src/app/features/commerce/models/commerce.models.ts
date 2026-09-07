export interface ConcessionItem {
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface CartItem {
  item: ConcessionItem;
  qty: number;
}

export interface GiftCardAmount {
  value: number;
  label: string;
  sub?: string;
  popular: boolean;
}

export interface GiftCardType {
  value: string;
  label: string;
  description: string;
  icon: string;
}