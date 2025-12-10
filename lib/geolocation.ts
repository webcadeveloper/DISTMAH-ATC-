import { NextRequest } from 'next/server';

export interface GeoLocation {
  ip: string;
  country: string | null;
  countryCode: string | null;
  region: string | null;
  regionName: string | null;
  city: string | null;
  zip: string | null;
  lat: number | null;
  lon: number | null;
  timezone: string | null;
  isp: string | null;
}

export function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const realIp = req.headers.get('x-real-ip');
  const cfConnectingIp = req.headers.get('cf-connecting-ip');

  if (cfConnectingIp) {
    return cfConnectingIp;
  }

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  if (realIp) {
    return realIp;
  }

  return 'unknown';
}

export async function getGeoLocation(ip: string): Promise<GeoLocation> {
  const defaultLocation: GeoLocation = {
    ip,
    country: null,
    countryCode: null,
    region: null,
    regionName: null,
    city: null,
    zip: null,
    lat: null,
    lon: null,
    timezone: null,
    isp: null,
  };

  if (ip === 'unknown' || ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.') || ip.startsWith('10.')) {
    return { ...defaultLocation, country: 'Local', countryCode: 'LO' };
  }

  try {
    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp`, {
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      console.error('Geolocation API error:', response.status);
      return defaultLocation;
    }

    const data = await response.json();

    if (data.status === 'fail') {
      console.error('Geolocation lookup failed:', data.message);
      return defaultLocation;
    }

    return {
      ip,
      country: data.country || null,
      countryCode: data.countryCode || null,
      region: data.region || null,
      regionName: data.regionName || null,
      city: data.city || null,
      zip: data.zip || null,
      lat: data.lat || null,
      lon: data.lon || null,
      timezone: data.timezone || null,
      isp: data.isp || null,
    };
  } catch (error) {
    console.error('Geolocation error:', error);
    return defaultLocation;
  }
}
