import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/dubai-investment-park/dip-1'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="dubai-investment-park" subAreaSlug="dip-1" />;
}
