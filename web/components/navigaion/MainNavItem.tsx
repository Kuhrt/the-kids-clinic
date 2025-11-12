import Link from 'next/link';

import { NavItem } from '@/models/navigation/NavItem';
import { cn } from '@/utils/styles';

interface Props {
  item: NavItem;
}

export const mainNavItemClasses =
  "relative block px-3 py-3 transition after:content[''] after:absolute after:bottom-0 after:left-0 after:w-full after:bg-primary-purple-700 after:transition-all after:h-0 after:rounded-t-sm hover:after:h-1 uppercase hover:cursor-pointer";

export default function MainNavItem({ item }: Props) {
  return (
    <li>
      <Link
        className={cn(mainNavItemClasses, item.isActive && 'after:h-1')}
        href={item.href}
        target={item.target}
      >
        {item.text}
      </Link>
    </li>
  );
}
