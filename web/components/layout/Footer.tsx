import { IconBrandFacebookFilled } from '@tabler/icons-react';
import Link from 'next/link';
import { ComponentPropsWithRef } from 'react';

import { ContactInfo } from '@/models/contact/ContactInfo';
import { getCurrentYear } from '@/utils/dates';
import { cleanPhoneNumber } from '@/utils/strings';
import { cn } from '@/utils/styles';

import HoursList from '../time/HoursList';
import { buttonVariants } from '../ui/buttons/button';
import Container from './Container';

interface Props extends ComponentPropsWithRef<'footer'> {
  contactInfo?: ContactInfo;
}

export default async function Footer({
  className,
  contactInfo,
  ...restProps
}: Props) {
  const currentYear = await getCurrentYear();

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
              {!!contactInfo?.address && (
                <span
                  dangerouslySetInnerHTML={{ __html: contactInfo.address }}
                  className="whitespace-pre-wrap"
                ></span>
              )}
              {!!contactInfo?.phone && (
                <>
                  <br />
                  <a
                    href={`tel:${cleanPhoneNumber(contactInfo.phone)}`}
                    className="transition-colors hover:cursor-pointer hover:text-primary-purple-50 block mt-3"
                  >
                    {contactInfo.phone}
                  </a>
                </>
              )}
            </address>
          </div>
          <div></div>
          <div>
            {!!contactInfo?.hours && (
              <>
                <h3 className="font-bold text-xl lg:text-2xl text-background mb-2">
                  Hours
                </h3>
                <HoursList hours={contactInfo.hours} className="text-xs" />
              </>
            )}
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
            &copy; {currentYear} The Kids Clinic
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
