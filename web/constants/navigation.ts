import { NavItem } from '@/models/navigation/NavItem';

export const NAV_ITEMS: NavItem[] = [
  { href: '/services', text: 'Services' },
  { href: '/contact', text: 'Contact' },
  { href: '/about', text: 'About' },
  { href: '/resources', text: 'Resources' }
] as const;
