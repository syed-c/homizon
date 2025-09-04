import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-twar'];

export default function AlTwarPage() {
  return <AreaPageClient areaSlug="al-twar" />;
}
