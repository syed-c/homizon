import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/jlt/cluster-d'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="jlt" subAreaSlug="cluster-d" />;
}
