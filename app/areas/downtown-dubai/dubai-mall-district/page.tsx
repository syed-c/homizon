import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/downtown-dubai/dubai-mall-district'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="downtown-dubai" subAreaSlug="dubai-mall-district" />;
}
