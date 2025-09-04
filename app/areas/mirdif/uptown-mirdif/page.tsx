import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/mirdif/uptown-mirdif'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="mirdif" subAreaSlug="uptown-mirdif" />;
}
