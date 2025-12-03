import { type API } from '@strapi/client';
import { cacheTag } from 'next/cache';

import { KEY_CONTACT_INFO } from '@/constants/cache/page-keys';
import { ContactInfo } from '@/models/contact/ContactInfo';

import { getDataClient, handleRepositoryError } from './base-repository';

export const getContactInfo = async () => {
  'use cache';
  cacheTag(KEY_CONTACT_INFO);

  try {
    const client = getDataClient();
    const infoRes = (await client
      .single('contact-info')
      .find({ populate: ['hours'] })) as API.DocumentResponse<ContactInfo>;
    return infoRes.data;
  } catch (error) {
    handleRepositoryError(error, { shouldThrow: false });
    return null;
  }
};
