import {
  IconClockFilled,
  IconMapPinFilled,
  IconPhoneFilled
} from '@tabler/icons-react';

import Container from '@/components/layout/Container';
import Main from '@/components/layout/Main';
import LocationMap from '@/components/maps/LocationMap';

export default function ContactPage() {
  return (
    <Main className="nav-clearance footer-clearance bg-primary-teal-200">
      <section className="pt-16 ">
        <h1 className="text-6xl lg:7xl mb-12 tracking-tighter text-primary-teal-600 font-black uppercase text-center">
          Contact Us
        </h1>
        <Container className="md:flex md:items-center md:gap-4 px-4 sm:px-8">
          <div className="md:w-5/12 text-primary-teal-700 text-xl mb-12 md:mb-0">
            <h3 className="text-primary-teal-700 mb-8">Our Lubbock Location</h3>
            <a
              href="https://maps.google.com/maps?q=5215+96th+St%2C+Lubbock%2C+TX+79424%2C+United+States+of+America&sll=33.5066,-101.92422"
              className="flex items-start justify-start gap-2 mb-4 transition-colors hover:cursor-pointer hover:text-primary-teal-500"
              target="_blank"
            >
              <IconMapPinFilled className="size-8" />
              <address className="not-italic font-semibold">
                5215 96th St.
                <br />
                Lubbock, TX 79424
              </address>
            </a>
            <a
              href="tel:8067715437"
              className="flex items-start justify-start gap-2 transition-colors hover:cursor-pointer hover:text-primary-teal-500"
            >
              <IconPhoneFilled className="size-8 transition-colors" />
              <span className="transition-colors font-semibold">
                806.771.5437
              </span>
            </a>
            <div className="flex items-start justify-start gap-2 my-8">
              <IconClockFilled className="size-8" />
              <dl className="grid grid-cols-2 gap-1 text-base font-semibold">
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
            <p className="text-sm italic">
              No appointment needed, walk-ins welcome. We will take our last
              patient 15 minutes before posted closing, and doors are locked 5
              minutes before posted closing.
            </p>
          </div>
          <div className="h-96 lg:h-122 w-full md:w-7/12 rounded-4xl shadow-lg overflow-hidden border border-primary-purple-700">
            <LocationMap />
          </div>
        </Container>
      </section>
    </Main>
  );
}
