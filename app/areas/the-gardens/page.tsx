import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/the-gardens'];

export default function TheGardensPage() {
  return <AreaPageClient areaSlug="the-gardens" />;
}
