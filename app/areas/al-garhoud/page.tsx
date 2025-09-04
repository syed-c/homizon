import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-garhoud'];

export default function AlGarhoudPage() {
  return <AreaPageClient areaSlug="al-garhoud" />;
}
