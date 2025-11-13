import { IconBrandFacebookFilled } from '@tabler/icons-react';
import Link from 'next/link';
import { ComponentPropsWithRef } from 'react';

import { cn } from '@/utils/styles';

import { buttonVariants } from '../ui/button';
import Container from './Container';

export default function Footer({
  className,
  ...restProps
}: ComponentPropsWithRef<'footer'>) {
  return (
    <footer className={cn('relative', className)} {...restProps}>
      <svg
        className="absolute bottom-[99%] left-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
          className="fill-primary inset-shadow-sm"
        />
      </svg>
      <div className="bg-primary text-primary-foreground">
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 py-4">
          <div>
            <h3 className="font-bold text-xl lg:text-2xl text-background mb-2">
              The Kid&apos;s Clinic
            </h3>
            <address className="not-italic font-semibold">
              5215 96th St.
              <br />
              Lubbock, TX 79424
              <br />
              <a
                href="tel:8067715437"
                className="transition-colors hover:cursor-pointer hover:text-primary-purple-50 block mt-3"
              >
                806.771.5437
              </a>
            </address>
          </div>
          <div></div>
          <div>
            <h3 className="font-bold text-xl lg:text-2xl text-background mb-2">
              Hours
            </h3>
            <dl className="font-semibold text-xs grid grid-cols-2 gap-2">
              <dt>Monday</dt>
              <dd>
                <time dateTime="17:30-06:00">5:30 PM</time> -{' '}
                <time dateTime="20:00-06:00">8:00 PM</time>
              </dd>
              <dt>Tuesday</dt>
              <dd>
                <time dateTime="17:30-06:00">5:30 PM</time> -{' '}
                <time dateTime="20:00-06:00">8:00 PM</time>
              </dd>
              <dt>Wednesday</dt>
              <dd>
                <time dateTime="17:30-06:00">5:30 PM</time> -{' '}
                <time dateTime="20:00-06:00">8:00 PM</time>
              </dd>
              <dt>Thursday</dt>
              <dd>
                <time dateTime="17:30-06:00">5:30 PM</time> -{' '}
                <time dateTime="20:00-06:00">8:00 PM</time>
              </dd>
              <dt>Friday</dt>
              <dd>CLOSED</dd>
              <dt>Saturday</dt>
              <dd>
                <time dateTime="09:00-06:00">9:00 AM</time> -{' '}
                <time dateTime="15:00-06:00">3:00 PM</time>
              </dd>
              <dt>Sunday</dt>
              <dd>
                <time dateTime="10:00-06:00">10:00 AM</time> -{' '}
                <time dateTime="15:00-06:00">3:00 PM</time>
              </dd>
            </dl>
          </div>
        </Container>
        <div className="flex items-center justify-between gap-4 py-2 px-4 md:py-4 md:px-6">
          <div className="relative flex items-center justify-start gap-2">
            <Link
              href="https://www.facebook.com/TheKidsClinicPediatricAfterHours/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'icon' })
              )}
            >
              <IconBrandFacebookFilled className="size-4 md:size-5 transition-all" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
          <p className="absolute bottom-5 lg:bottom-8 left-1/2 transform -translate-x-1/2 text-center text-sm font-semibold text-primary-purple-100">
            &copy; {new Date().getFullYear()} The Kids Clinic
          </p>
          <div className="flex items-center justify-end gap-2">
            <Link
              href="/policies"
              className={cn(buttonVariants({ variant: 'default' }))}
            >
              Policies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
