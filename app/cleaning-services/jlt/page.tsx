import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/jlt'] || {
  title: 'Cleaning Services in JLT - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in JLT. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesJLTPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="jlt"
      areaName="JLT"
    />
  );
}