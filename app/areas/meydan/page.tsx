import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/meydan'];

export default function MeydanPage() {
  return <AreaPageClient areaSlug="meydan" />;
}
