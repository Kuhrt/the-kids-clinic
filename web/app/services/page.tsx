import { Metadata } from 'next';

import ContentContainer from '@/components/layout/ContentContainer';
import Main from '@/components/layout/Main';
import { buttonVariants } from '@/components/ui/buttons/button';
import { cn } from '@/utils/styles';

export const metadata: Metadata = {
  title: 'Services',
  // description: '',
  // keywords: '',
  openGraph: {
    title: 'Services',
    // description: '',
    url: 'https://thekids.clinic/services'
  },
  twitter: {
    title: 'Services'
    // description: ''
  }
};

export default function ServicesPage() {
  return (
    <Main className="nav-clearance footer-clearance bg-sky-200 px-2 md:px-4">
      <ContentContainer className="mt-16">
        <article className="tkc-prose">
          <section>
            <h1>Services</h1>

            <h2>Your child&apos;s care doesn&apos;t have to wait</h2>
            <p>
              When your little one is feeling under the weather, let our
              experienced pediatric team help. Our comfortable, calm atmosphere
              will help put them at ease as our pediatric team of professionals
              help them get back to feeling better.
            </p>
          </section>
          <section>
            <h2>Let us notify your regular doctor</h2>
            <p>
              Not only is our clinic here to help your family after your regular
              doctor&apos;s office is closed, but after your treatment
              we&apos;ll notify your pediatrician by fax and put your medical
              treatment plan in your child&apos;s medical file.
            </p>
          </section>
          <section>
            <h2>One less thing to worry about</h2>
            <p>
              Now you can focus on helping your little one get better, knowing
              that you&apos;re covered:
            </p>
            <ul>
              <li>United Healthcare</li>
              <li>Blue Cross/Blue Shield</li>
              <li>First Care</li>
              <li>Cigna</li>
              <li>Healthsmart</li>
            </ul>
            <p className="text-sm lg:text-base text-neutral-600">
              <em>
                If you do not see your insurance listed above, ask us if
                you&apos;re covered.
              </em>
            </p>
          </section>
          <aside className="bg-coral-200 text-coral-700! rounded-3xl p-8 lg:p-12 flex flex-col items-center justify-center">
            <h3 className="text-coral-700! uppercase font-black! text-center my-0!">
              If your child is experiencing an emergency, dial 911.
            </h3>
            <div className="flex items-center justify-center gap-2 mt-4!">
              <a
                className={cn(
                  'no-underline! font-black! text-primary-purple-700!',
                  buttonVariants({ variant: 'coral', size: 'sm' })
                )}
                href="tel:911"
              >
                Call 911
              </a>
              <a
                className={cn(
                  'no-underline! font-black! text-primary-purple-700!',
                  buttonVariants({ variant: 'sage', size: 'sm' })
                )}
                href="tel:18002221222"
                title="Call the hotline: 1-800-222-1222"
              >
                Poison Control
              </a>
            </div>
          </aside>
        </article>
      </ContentContainer>
    </Main>
  );
}
