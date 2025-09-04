import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/the-lakes'];

export default function TheLakesPage() {
  return <AreaPageClient areaSlug="the-lakes" />;
}
