import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-investment-park/dip-2'] || {
  title: 'Cleaning Services in DIP 2 - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in DIP 2. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesDIP2Page() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="dip-2"
      subareaName="DIP 2"
    />
  );
}