import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/jbr'] || {
  title: 'Cleaning Services in JBR - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in JBR. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesJBRPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="jbr"
      areaName="JBR"
    />
  );
}