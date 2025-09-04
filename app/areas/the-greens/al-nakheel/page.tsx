import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/the-greens/al-nakheel'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="the-greens" subAreaSlug="al-nakheel" />;
}
