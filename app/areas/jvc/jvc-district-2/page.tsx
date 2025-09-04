import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/jvc/jvc-district-2'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="jvc" subAreaSlug="jvc-district-2" />;
}
