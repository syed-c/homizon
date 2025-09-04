import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/international-city/france-cluster'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="international-city" subAreaSlug="france-cluster" />;
}
