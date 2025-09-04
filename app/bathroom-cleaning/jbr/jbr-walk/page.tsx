import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/jbr/jbr-walk'] || {
  title: 'Bathroom Deep Cleaning in JBR Walk - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in JBR Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningJBRWalkPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="jbr"
      areaName="JBR"
      subarea="jbr-walk"
      subareaName="JBR Walk"
    />
  );
}