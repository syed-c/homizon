import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/jbr/beach-residence-2'] || {
  title: 'Carpet Cleaning in Beach Residence 2 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Beach Residence 2. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningBeachResidence2Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="jbr"
      areaName="JBR"
      subarea="beach-residence-2"
      subareaName="Beach Residence 2"
    />
  );
}