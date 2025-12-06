import type { Schema, Struct } from '@strapi/strapi';

export interface SeoPageMetadata extends Struct.ComponentSchema {
  collectionName: 'components_seo_page_metadata';
  info: {
    displayName: 'Page Metadata';
    icon: 'dashboard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    keywords: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'comma, separated, list'>;
    title: Schema.Attribute.String;
  };
}

export interface TimeStoreHour extends Struct.ComponentSchema {
  collectionName: 'components_time_store_hours';
  info: {
    displayName: 'Store Hour';
    icon: 'clock';
  };
  attributes: {
    closeTime: Schema.Attribute.Time;
    day: Schema.Attribute.Enumeration<
      [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Monday'>;
    openTime: Schema.Attribute.Time;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'seo.page-metadata': SeoPageMetadata;
      'time.store-hour': TimeStoreHour;
    }
  }
}
