import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/jbr/jbr-walk'] || {
  title: 'Pest Control in JBR Walk - Professional Services | HOMIZON',
  description: 'Professional pest control services in JBR Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlJBRWalkPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="jbr"
      areaName="JBR"
      subarea="jbr-walk"
      subareaName="JBR Walk"
    />
  );
}