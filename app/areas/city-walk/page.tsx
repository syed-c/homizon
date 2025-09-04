import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/city-walk'];

export default function CityWalkPage() {
  return <AreaPageClient areaSlug="city-walk" />;
}
