import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/the-views/fairways-north'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="the-views" subAreaSlug="fairways-north" />;
}
