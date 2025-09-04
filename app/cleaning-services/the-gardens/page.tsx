import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/the-gardens'] || {
  title: 'Cleaning Services in The Gardens - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in The Gardens. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesTheGardensPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="the-gardens"
      areaName="The Gardens"
    />
  );
}