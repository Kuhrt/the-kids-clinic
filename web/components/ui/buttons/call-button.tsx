import { IconPhoneFilled } from '@tabler/icons-react';

import { getContactInfo } from '@/repositories/page-repository';
import { cleanPhoneNumber } from '@/utils/strings';

export default async function CallButton() {
  const contactInfo = await getContactInfo();

  if (!contactInfo?.phone) {
    return null;
  }

  return (
    <a
      href={`tel:${cleanPhoneNumber(contactInfo.phone)}`}
      className="group hidden md:flex absolute top-7 right-4 text-base font-display font-bold items-center justify-end gap-1"
    >
      <IconPhoneFilled className="text-primary size-5" />
      <span className="text-foreground/50 transition-colors group-hover:text-primary">
        {contactInfo.phone}
      </span>
    </a>
  );
}
