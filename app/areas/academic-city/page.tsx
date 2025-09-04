import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/academic-city'];

export default function AcademicCityPage() {
  return <AreaPageClient areaSlug="academic-city" />;
}
