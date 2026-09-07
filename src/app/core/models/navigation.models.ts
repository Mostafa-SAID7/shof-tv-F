export interface SiteLink {
  label: string;
  route: string;
}

export type SiteActionStyle = 'text' | 'outline' | 'primary' | 'icon';

export interface SiteAction extends SiteLink {
  style: SiteActionStyle;
  fragment?: string;
}