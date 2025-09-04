import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/arabian-ranches/mirador'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="arabian-ranches" subAreaSlug="mirador" />;
}
