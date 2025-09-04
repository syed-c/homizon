import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/al-rashidiya'];

export default function AlRashidiyaPage() {
  return <AreaPageClient areaSlug="al-rashidiya" />;
}
