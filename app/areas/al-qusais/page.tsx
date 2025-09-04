import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-qusais'];

export default function AlQusaisPage() {
  return <AreaPageClient areaSlug="al-qusais" />;
}
