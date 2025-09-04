import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/dubai-festival-city/marsa-plaza'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="dubai-festival-city" subAreaSlug="marsa-plaza" />;
}
