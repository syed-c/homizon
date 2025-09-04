import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/bur-dubai/textile-souk'] || {
  title: 'Cleaning Services in Textile Souk - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Textile Souk. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesTextileSoukPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="textile-souk"
      subareaName="Textile Souk"
    />
  );
}