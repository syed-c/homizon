import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/jbr/beach-residence-1'] || {
  title: 'Carpet Cleaning in Beach Residence 1 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Beach Residence 1. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningBeachResidence1Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="jbr"
      areaName="JBR"
      subarea="beach-residence-1"
      subareaName="Beach Residence 1"
    />
  );
}