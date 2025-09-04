import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-mamzar'];

export default function AlMamzarPage() {
  return <AreaPageClient areaSlug="al-mamzar" />;
}
