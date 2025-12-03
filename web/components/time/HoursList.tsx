import { Fragment } from 'react';

import { Hour } from '@/models/contact/ContactInfo';
import { formatTime, getTimeIso } from '@/utils/dates';
import { cn } from '@/utils/styles';

interface Props {
  className?: string;
  hours: Hour[];
}

export default function HoursList({ className, hours }: Props) {
  return (
    <dl className={cn('font-semibold grid grid-cols-2 gap-2', className)}>
      {hours.map((hour) => (
        <Fragment key={`hour-item-${hour.day}`}>
          <>
            <dt>{hour.day}</dt>
            <dd>
              {!!hour.openTime && !!hour.closeTime ? (
                <>
                  <time dateTime={getTimeIso(hour.openTime)}>
                    {formatTime(hour.openTime)}
                  </time>{' '}
                  -{' '}
                  <time dateTime={getTimeIso(hour.closeTime)}>
                    {formatTime(hour.closeTime)}
                  </time>
                </>
              ) : (
                <>CLOSED</>
              )}
            </dd>
          </>
        </Fragment>
      ))}
      {/* <dt>Monday</dt>
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
      </dd> */}
    </dl>
  );
}
