import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/business-bay/business-central'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="business-bay" subAreaSlug="business-central" />;
}
