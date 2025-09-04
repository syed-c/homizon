import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-mizhar'];

export default function AlMizharPage() {
  return <AreaPageClient areaSlug="al-mizhar" />;
}
