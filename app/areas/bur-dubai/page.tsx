import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/bur-dubai'];

export default function BurDubaiPage() {
  return <AreaPageClient areaSlug="bur-dubai" />;
}
