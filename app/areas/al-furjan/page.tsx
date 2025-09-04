import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-furjan'];

export default function AlFurjanPage() {
  return <AreaPageClient areaSlug="al-furjan" />;
}
