import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/jumeirah'] || {
  title: 'Carpet Cleaning in Jumeirah - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningJumeirahPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="jumeirah"
      areaName="Jumeirah"
    />
  );
}