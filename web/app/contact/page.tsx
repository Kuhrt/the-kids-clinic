import {
  IconClockFilled,
  IconMapPinFilled,
  IconPhoneFilled
} from '@tabler/icons-react';
import { Metadata } from 'next';

import Container from '@/components/layout/Container';
import Main from '@/components/layout/Main';
import LocationMap from '@/components/maps/LocationMap';
import HoursList from '@/components/time/HoursList';
import { getContactInfo } from '@/repositories/page-repository';
import { cleanPhoneNumber } from '@/utils/strings';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Call The Kids Clinic at 806-771-5437 or stop by 5215 96th St. Open 6 days a week, walk-ins welcome. Pediatric care.',
  // keywords: '',
  openGraph: {
    title: 'Contact Us',
    description:
      'Call The Kids Clinic at 806-771-5437 or stop by 5215 96th St. Open 6 days a week, walk-ins welcome. Pediatric care.',
    url: 'https://thekids.clinic/contact'
  },
  twitter: {
    title: 'Contact Us',
    description:
      'Call The Kids Clinic at 806-771-5437 or stop by 5215 96th St. Open 6 days a week, walk-ins welcome. Pediatric care.'
  }
};

export default async function ContactPage() {
  const contactInfo = await getContactInfo();

  const buildAddressLink = () => {
    if (!contactInfo?.address) return '#';
    const addressQuery = encodeURIComponent(
      contactInfo.address.replace(/\n/g, ' ')
    );

    let sll = '';
    if (!!contactInfo.latitude && !!contactInfo.longitude) {
      sll = `&sll=${contactInfo.latitude},${contactInfo.longitude}`;
    }
    return `https://maps.google.com/maps?q=${addressQuery}${sll}`;
  };

  return (
    <Main className="nav-clearance footer-clearance bg-primary-teal-200">
      <section className="pt-16 ">
        <h1 className="text-6xl lg:7xl mb-12 tracking-tighter text-primary-teal-600 font-black uppercase text-center">
          Contact Us
        </h1>
        <Container className="md:flex md:items-center md:gap-4 px-4 sm:px-8">
          <div className="md:w-5/12 text-primary-teal-700 text-xl mb-12 md:mb-0">
            <h3 className="text-primary-teal-700 mb-8">Our Lubbock Location</h3>
            {!!contactInfo?.address && (
              <a
                href={buildAddressLink()}
                className="flex items-start justify-start gap-2 mb-4 transition-colors hover:cursor-pointer hover:text-primary-teal-500"
                target="_blank"
              >
                <IconMapPinFilled className="size-8" />
                <address
                  className="not-italic font-semibold whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: contactInfo.address }}
                ></address>
              </a>
            )}
            {!!contactInfo?.phone && (
              <a
                href={`tel:${cleanPhoneNumber(contactInfo.phone)}`}
                className="flex items-start justify-start gap-2 transition-colors hover:cursor-pointer hover:text-primary-teal-500"
              >
                <IconPhoneFilled className="size-8 transition-colors" />
                <span className="transition-colors font-semibold">
                  {contactInfo.phone}
                </span>
              </a>
            )}
            {!!contactInfo?.hours && (
              <div className="flex items-start justify-start gap-2 my-8">
                <IconClockFilled className="size-8" />
                <HoursList hours={contactInfo.hours} className="text-base" />
              </div>
            )}
            <p className="text-sm italic">
              No appointment needed, walk-ins welcome. We will take our last
              patient 15 minutes before posted closing, and doors are locked 5
              minutes before posted closing.
            </p>
          </div>
          <div className="h-96 lg:h-122 w-full md:w-7/12 rounded-4xl shadow-lg overflow-hidden border border-primary-purple-700">
            {!!contactInfo?.latitude && !!contactInfo?.longitude && (
              <LocationMap
                center={[contactInfo.longitude, contactInfo.latitude]}
              />
            )}
            {/* TODO: Map fallback */}
          </div>
        </Container>
      </section>
    </Main>
  );
}
