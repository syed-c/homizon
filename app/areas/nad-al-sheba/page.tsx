import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/nad-al-sheba'];

export default function NadAlShebaPage() {
  return <AreaPageClient areaSlug="nad-al-sheba" />;
}
