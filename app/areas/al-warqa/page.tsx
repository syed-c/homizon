import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-warqa'];

export default function AlWarqaPage() {
  return <AreaPageClient areaSlug="al-warqa" />;
}
