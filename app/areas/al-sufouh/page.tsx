import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-sufouh'];

export default function AlSufouhPage() {
  return <AreaPageClient areaSlug="al-sufouh" />;
}
