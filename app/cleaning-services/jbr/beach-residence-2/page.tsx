import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/jbr/beach-residence-2'] || {
  title: 'Cleaning Services in Beach Residence 2 - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Beach Residence 2. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesBeachResidence2Page() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="jbr"
      areaName="JBR"
      subarea="beach-residence-2"
      subareaName="Beach Residence 2"
    />
  );
}