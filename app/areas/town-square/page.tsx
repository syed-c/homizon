import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/town-square'];

export default function TownSquarePage() {
  return <AreaPageClient areaSlug="town-square" />;
}
