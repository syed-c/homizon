import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/downtown-dubai'] || {
  title: 'Cleaning Services in Downtown Dubai - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Downtown Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesDowntownDubaiPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="downtown-dubai"
      areaName="Downtown Dubai"
    />
  );
}