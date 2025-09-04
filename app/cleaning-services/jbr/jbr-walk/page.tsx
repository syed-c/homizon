import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/jbr/jbr-walk'] || {
  title: 'Cleaning Services in JBR Walk - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in JBR Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesJBRWalkPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="jbr"
      areaName="JBR"
      subarea="jbr-walk"
      subareaName="JBR Walk"
    />
  );
}