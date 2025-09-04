import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-investment-park/dip-1'] || {
  title: 'Cleaning Services in DIP 1 - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in DIP 1. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesDIP1Page() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="dip-1"
      subareaName="DIP 1"
    />
  );
}