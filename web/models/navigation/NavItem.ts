import { type Icon } from '@tabler/icons-react';

export interface NavItem {
  href: string;
  icon?: Icon;
  isActive?: boolean;
  items?: NavItem[];
  target?: '_self' | '_blank' | '_parent' | '_top';
  text: string;
}
