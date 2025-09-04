import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/palm-jumeirah'] || {
  title: 'Carpet Cleaning in Palm Jumeirah - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Palm Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningPalmJumeirahPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
    />
  );
}