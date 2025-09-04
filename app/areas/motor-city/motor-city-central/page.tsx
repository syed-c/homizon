import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/motor-city/motor-city-central'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="motor-city" subAreaSlug="motor-city-central" />;
}
