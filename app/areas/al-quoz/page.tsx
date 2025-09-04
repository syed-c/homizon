import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-quoz'];

export default function AlQuozPage() {
  return <AreaPageClient areaSlug="al-quoz" />;
}
