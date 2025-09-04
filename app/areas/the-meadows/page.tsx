import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/the-meadows'];

export default function TheMeadowsPage() {
  return <AreaPageClient areaSlug="the-meadows" />;
}
