import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/emaar-beachfront'];

export default function EmaarBeachfrontPage() {
  return <AreaPageClient areaSlug="emaar-beachfront" />;
}
