import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/business-bay'];

export default function BusinessBayPage() {
  return <AreaPageClient areaSlug="business-bay" />;
}
