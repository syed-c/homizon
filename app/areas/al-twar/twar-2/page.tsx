import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-twar/twar-2'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="al-twar" subAreaSlug="twar-2" />;
}
