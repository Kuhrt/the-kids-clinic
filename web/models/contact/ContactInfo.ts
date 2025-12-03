import { API } from '@strapi/client';

export interface ContactInfo extends API.Document {
  address?: string;
  email?: string;
  latitude?: number;
  longitude?: number;
  phone: string;
  hours?: Hour[];
}

export interface Hour {
  day: string;
  openTime: string;
  closeTime: string;
}
