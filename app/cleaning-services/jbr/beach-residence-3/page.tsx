import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/jbr/beach-residence-3'] || {
  title: 'Cleaning Services in Beach Residence 3 - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Beach Residence 3. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesBeachResidence3Page() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="jbr"
      areaName="JBR"
      subarea="beach-residence-3"
      subareaName="Beach Residence 3"
    />
  );
}