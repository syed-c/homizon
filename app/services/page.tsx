import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServicesPageContent from '@/components/services-page-content';

export const metadata: Metadata = siteMetadata['/services'];

export default function ServicesPage() {
  return <ServicesPageContent />;
}
