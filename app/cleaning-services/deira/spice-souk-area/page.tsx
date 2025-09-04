import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/deira/spice-souk-area'] || {
  title: 'Cleaning Services in Spice Souk Area - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Spice Souk Area. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesSpiceSoukAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="deira"
      areaName="Deira"
      subarea="spice-souk-area"
      subareaName="Spice Souk Area"
    />
  );
}