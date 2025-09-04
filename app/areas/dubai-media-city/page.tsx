import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/dubai-media-city'];

export default function DubaiMediaCityPage() {
  return <AreaPageClient areaSlug="dubai-media-city" />;
}
