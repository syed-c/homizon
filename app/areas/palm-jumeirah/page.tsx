import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/palm-jumeirah'];

export default function PalmJumeirahPage() {
  return <AreaPageClient areaSlug="palm-jumeirah" />;
}
