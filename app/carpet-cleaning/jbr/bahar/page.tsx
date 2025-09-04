import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/jbr/bahar'] || {
  title: 'Carpet Cleaning in Bahar - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Bahar. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningBaharPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="jbr"
      areaName="JBR"
      subarea="bahar"
      subareaName="Bahar"
    />
  );
}