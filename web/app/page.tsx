import Link from 'next/link';

import Container from '@/components/layout/Container';
import Main from '@/components/layout/Main';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/utils/styles';

export default function Home() {
  return (
    <Main>
      <section className="nav-clearance flex flex-col items-center space-y-16">
        <h1 className="text-primary-teal-600 tracking-tighter text-7xl md:text-8xl lg:text-9xl text-center font-black uppercase max-w-6xl mx-auto leading-[0.8] mt-24">
          Pediatric care that comes with a smile
        </h1>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            Get Care Now
          </Link>
          <Link
            href="/about#staff"
            className={cn(buttonVariants({ variant: 'secondary' }))}
          >
            Meet Our Doctors
          </Link>
        </div>
      </section>
      <section className="mt-24 px-2 md:px-4">
        <div className="bg-primary-purple-200 rounded-5xl lg:rounded-6xl p-6 md:p-10 lg:p-12 xl:p-24">
          <Container>
            <h2 className="text-primary-purple-600 font-black lg:text-5xl">
              The emergency room doesn&apos;t have to be the only choice for
              getting your child help when your regular doctor&apos;s office is
              closed.
            </h2>
            {/* Our clinic is all about providing you with easy access and
              a comfortable environment for your child to be treated in. */}
            <div className="flex flex-col md:flex-row items-center justify-center py-16">
              <div className="flex items-center justify-center p-2 lg:p-4 rounded-3xl bg-background size-52 lg:size-60 shadow-lg -rotate-6">
                <h4 className="h3 font-black text-center text-primary-teal-600">
                  Easy Access
                </h4>
              </div>
              <div className="flex items-center justify-center p-2 lg:p-4 rounded-3xl bg-background size-80 lg:size-96 shadow-lg rotate-6">
                <h3 className="h2 font-black text-center text-primary">
                  Walk-ins only,
                  <br />
                  no appointment needed
                </h3>
              </div>
              <div className="flex items-center justify-center p-2 lg:p-4 rounded-3xl bg-background size-56 lg:size-64 shadow-lg -rotate-12">
                <h4 className="h3 font-black text-center text-sky-500">
                  Comfortable Environment
                </h4>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section className="bg-sky-200 min-h-[60vh] relative mt-[calc(20vw)] md:mt-[calc(25vw)]">
        {/* Owl head SVG sitting on top of the section */}
        <div className="absolute bottom-[calc(100%-1px)] left-0 right-0 w-full">
          <svg
            viewBox="0 0 1200 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="xMidY slice"
          >
            {/* Main owl head - one solid smooth arch */}
            <path
              d="M 150 400 Q 150 80, 400 50 Q 600 40, 800 50 Q 1050 80, 1050 400 Z"
              className="fill-sky-200"
            />

            {/* Left rounded cap - separate from owl head, less extreme */}
            <ellipse
              cx="0"
              cy="400"
              rx="140"
              ry="120"
              className="fill-sky-200"
            />

            {/* Right rounded cap - separate from owl head, less extreme */}
            <ellipse
              cx="1200"
              cy="400"
              rx="140"
              ry="120"
              className="fill-sky-200"
            />

            {/* Left ear tuft - moved way up */}
            <path d="M 350 120 Q 380 60, 410 120 Z" className="fill-sky-700" />

            {/* Right ear tuft - moved way up */}
            <path d="M 790 120 Q 820 60, 850 120 Z" className="fill-sky-700" />

            {/* Left eye - minimal (just two circles) */}
            <circle cx="450" cy="220" r="60" className="fill-background" />
            <circle cx="450" cy="220" r="25" className="fill-sky-700" />

            {/* Right eye - minimal (just two circles) */}
            <circle cx="750" cy="220" r="60" className="fill-background" />
            <circle cx="750" cy="220" r="25" className="fill-sky-700" />

            {/* Small triangular beak - point down with rounded corners */}
            <path
              d="M 585 280 Q 583 282, 581 284 L 598 308 Q 600 311, 602 308 L 619 284 Q 617 282, 615 280 Q 610 275, 600 275 Q 590 275, 585 280 Z"
              className="fill-sky-700"
            />
          </svg>
        </div>
      </section>
    </Main>
  );
}
