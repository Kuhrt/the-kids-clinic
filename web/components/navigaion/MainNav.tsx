'use client';

import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel
} from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentPropsWithoutRef, useMemo } from 'react';

import { NAV_ITEMS } from '@/constants/navigation';
import { getKeyFromString } from '@/utils/react';
import { cn } from '@/utils/styles';

import MainNavItem, { mainNavItemClasses } from './MainNavItem';

interface Props extends ComponentPropsWithoutRef<'nav'> {
  listClassName?: string;
}

export default function MainNav({ listClassName, ...restProps }: Props) {
  const pathname = usePathname();
  const navItems = useMemo(
    () =>
      NAV_ITEMS.map((item) => {
        return {
          ...item,
          isActive: pathname.startsWith(item.href)
        };
      }),
    [pathname]
  );
  return (
    <nav {...restProps} aria-label="Main navigation">
      <PopoverGroup>
        <ul
          className={cn(
            'flex rounded-full bg-primary-purple-100 px-6 text-primary-purple-700 text-sm font-black font-display uppercase',
            'border border-primary-purple-700',
            listClassName
          )}
        >
          {navItems.map((item) =>
            !item.items?.length ? (
              <MainNavItem
                key={`main-nav-${getKeyFromString(item.text)}`}
                item={item}
              />
            ) : (
              <Popover
                className="relative"
                key={`main-nav-${getKeyFromString(item.text)}`}
              >
                <PopoverButton className={mainNavItemClasses}>
                  {item.text}
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute left-1/2 z-10 mt-3 w-56 -translate-x-1/2 rounded-3xl bg-primary-purple-100 p-2 shadow-xl outline-1 outline-primary-purple-700 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  {item.items.map((subitem) => (
                    <Link
                      key={`main-nav-${item.href}-subitem-${subitem.href}`}
                      href={subitem.href}
                      className="block rounded-full px-3 py-2 text-sm/6 font-black hover:bg-primary-purple-200"
                    >
                      {subitem.text}
                    </Link>
                  ))}
                </PopoverPanel>
              </Popover>
            )
          )}
        </ul>
      </PopoverGroup>
    </nav>
  );
}
