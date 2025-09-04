import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/jumeirah'];

export default function JumeirahPage() {
  return <AreaPageClient areaSlug="jumeirah" />;
}
