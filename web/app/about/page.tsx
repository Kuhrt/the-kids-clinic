import { Metadata } from 'next';

import ContentContainer from '@/components/layout/ContentContainer';
import Main from '@/components/layout/Main';

export const metadata: Metadata = {
  title: 'Contact Us',
  // description: '',
  // keywords: '',
  openGraph: {
    title: 'Contact Us',
    // description: '',
    url: 'https://thekids.clinic/about'
  },
  twitter: {
    title: 'Contact Us'
    // description: ''
  }
};

export default function AboutPage() {
  return (
    <Main className="nav-clearance footer-clearance bg-sage-200 px-2 md:px-4">
      <ContentContainer className="mt-16">
        <article className="tkc-prose">
          <section>
            <h1>About The Kid&apos;s Clinic</h1>

            <h2>A team of professionals here to help your child get better</h2>
            <p>
              Every employee you meet at our clinic has one goal in mind, and
              that is to provide the best treatment for your child. Let us help
              when your little one isn&apos;t feeling 100%.
            </p>
          </section>
          <section id="staff">
            <h2>An experienced team that&apos;s there for you</h2>
            <ul>
              <li>
                <strong>Todd Brodbeck</strong>, DO
              </li>
              <li>
                <strong>April Davies</strong>, NP
              </li>
              <li>
                <strong>Carrie Erwin</strong>, NP
              </li>
              <li>
                <strong>Teri Glascock</strong>, NP
              </li>
              <li>
                <strong>Amanda Guetersloh</strong>, MD
              </li>
              <li>
                <strong>Cheryl Landry</strong>, MD
              </li>
              <li>
                <strong>Amy McDonald</strong>, PA
              </li>
              <li>
                <strong>Trishia McEachern</strong> - Practice Administrator
              </li>
              <li>
                <strong>Shayla Perry</strong>, LVN
              </li>
              <li>
                <strong>Tanya Russell</strong>, NP
              </li>
              <li>
                <strong>Amanda</strong> - Supervisor
              </li>
              <li>
                <strong>Rocsi</strong> - Receptionist
              </li>
              <li>
                <strong>Shayla</strong> - LVN
              </li>
              <li>
                <strong>Christina</strong> - MA
              </li>
              <li>
                <strong>Lydia</strong> - MA
              </li>
            </ul>
          </section>
          <section>
            <h2>Giving back to the community</h2>
            <ul>
              <li>Christmas for Women&apos;s Protected Services</li>
              <li>Burkhart Walk for Autism Awareness</li>
              <li>April Child Abuse Awareness</li>
              <li>Shoe Boxes for Guatemala Sponsorships</li>
              <li>Sponsoring soccer and tee ball youth teams</li>
              <li>Texas Quarter Horse Association</li>
              <li>Monterey High School Basketball</li>
              <li>Slaton Youth Baseball</li>
              <li>The Dance Studio Frenship</li>
              <li>USSSA Baseball</li>
              <li>Lubbock Cooper FFA Booster Club</li>
              <li>Cooper Fun Run 5K</li>
              <li>Sponser Drug Abuse Campaign</li>
              <li>Susan G. Komen for the Cure</li>
              <li>Lubbock Cooper Pom</li>
              <li>Lubbock Cooper Tennis</li>
            </ul>
          </section>
        </article>
      </ContentContainer>
    </Main>
  );
}
