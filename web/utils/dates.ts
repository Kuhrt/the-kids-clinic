import { cacheTag } from 'next/cache';

import { KEY_CURRENT_YEAR } from '@/constants/cache/date-keys';

export const getCurrentYear = async () => {
  'use cache';
  cacheTag(KEY_CURRENT_YEAR);
  return new Date().getFullYear();
};

export const getTimeIso = (timeString: string) => {
  return `${timeString}-06:00`;
};

export const formatTime = (timeString: string) => {
  const [hours, minutes] = timeString.split(':').map(Number);
  const postFix = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${postFix}`;
};
