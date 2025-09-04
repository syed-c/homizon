import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/jebel-ali'] || {
  title: 'Cleaning Services in Jebel Ali - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Jebel Ali. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesJebelAliPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="jebel-ali"
      areaName="Jebel Ali"
    />
  );
}