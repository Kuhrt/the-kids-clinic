'use client';

import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';

import { COLOR_PRIMARY } from '@/constants/colors';
import {
  TKC_LATITUDE,
  TKC_LONGITUDE,
  TKC_MAPBOX_STYLE
} from '@/constants/location';
import { cn } from '@/utils/styles';

interface Props {
  className?: string;
  center?: [number, number]; // [lng, lat]
  zoom?: number;
}

export default function LocationMap({
  className,
  center = [TKC_LONGITUDE, TKC_LATITUDE],
  zoom = 16
}: Props) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current) return; // Initialize map only once
    if (!mapContainer.current) return;

    const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_KEY;
    if (!mapboxToken) {
      console.error('Mapbox access token is missing');
      return;
    }

    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: TKC_MAPBOX_STYLE,
      center: center,
      zoom: zoom,
      keyboard: false
    });

    const marker = new mapboxgl.Marker({ color: COLOR_PRIMARY })
      .setLngLat(center)
      .addTo(map.current);

    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: true,
      className:
        '[&>.mapboxgl-popup-content]:p-4! [&>.mapboxgl-popup-content]:rounded-xl! [&>.mapboxgl-popup-content]:shadow-md! [&>button]:right-4!'
    }).setHTML(
      `<h4 class="text-primary text-2xl text-center font-black uppercase">The Kid's Clinic</h4>
        <p class="text-foreground text-center font-semibold">We can't wait to see you!</p>`
    );
    marker.setPopup(popup);
    marker.togglePopup();

    // Cleanup function
    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [center, zoom]);

  return (
    <div
      ref={mapContainer}
      className={cn('w-full h-full bg-primary', className)}
    />
  );
}
