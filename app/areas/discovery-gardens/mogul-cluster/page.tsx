import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/discovery-gardens/mogul-cluster'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="discovery-gardens" subAreaSlug="mogul-cluster" />;
}
