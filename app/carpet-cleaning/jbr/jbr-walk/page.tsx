import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/jbr/jbr-walk'] || {
  title: 'Carpet Cleaning in JBR Walk - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in JBR Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningJBRWalkPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="jbr"
      areaName="JBR"
      subarea="jbr-walk"
      subareaName="JBR Walk"
    />
  );
}