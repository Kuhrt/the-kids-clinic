'use client';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel
} from '@headlessui/react';
import { IconChevronDown, IconMenu, IconX } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentPropsWithoutRef, useMemo } from 'react';

import { NAV_ITEMS } from '@/constants/navigation';

import { Button } from '../ui/button';

export default function MobileNav(
  props: ComponentPropsWithoutRef<typeof Popover>
) {
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
    <Popover {...props}>
      <PopoverButton as={Button} size="icon">
        <IconMenu className="size-4" />
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 bg-neutral-900/40 backdrop-blur-xs duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-4 top-8 z-50 origin-top shadow-md rounded-3xl bg-primary-purple-100 p-8 pe-10 ring-1 ring-primary-purple-700 duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      >
        <div className="absolute top-4 right-4 flex flex-row-reverse items-center justify-between">
          <PopoverButton aria-label="Close menu" className="-m-1 p-1">
            <IconX className="h-6 w-6 text-primary-purple-700" />
          </PopoverButton>
        </div>
        <nav aria-label="Mobile navigation">
          <ul className="-my-2 divide-y divide-primary-purple-200 text-base font-black uppercase text-primary-purple-700">
            {navItems.map((item) => (
              <li key={`mobile-nav-${item.href}`}>
                {!item.items?.length ? (
                  <PopoverButton
                    as={Link}
                    href={item.href}
                    className="block py-2"
                  >
                    {item.text}
                  </PopoverButton>
                ) : (
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg pt-2 pb-2 pr-3.5 pl-3 font-black uppercase hover:bg-primary-purple-200">
                      {item.text}
                      <IconChevronDown
                        aria-hidden="true"
                        className="size-5 flex-none transition-transform group-data-open:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="">
                      {item.items.map((subitem) => (
                        <DisclosureButton
                          key={`mobile-${item.href}-subitem-${subitem.href}`}
                          as="a"
                          href={subitem.href}
                          className="block rounded-full py-2 pr-3 pl-6 text-sm/7 font-black hover:bg-primary-purple-200"
                        >
                          {subitem.text}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  );
}
