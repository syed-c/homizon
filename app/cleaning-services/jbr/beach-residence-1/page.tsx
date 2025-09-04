import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/jbr/beach-residence-1'] || {
  title: 'Cleaning Services in Beach Residence 1 - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Beach Residence 1. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesBeachResidence1Page() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="jbr"
      areaName="JBR"
      subarea="beach-residence-1"
      subareaName="Beach Residence 1"
    />
  );
}