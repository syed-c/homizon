import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-khawaneej/khawaneej-1'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="al-khawaneej" subAreaSlug="khawaneej-1" />;
}
