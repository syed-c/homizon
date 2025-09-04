import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-karama'];

export default function AlKaramaPage() {
  return <AreaPageClient areaSlug="al-karama" />;
}
