import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/mirdif'] || {
  title: 'Cleaning Services in Mirdif - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Mirdif. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesMirdifPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="mirdif"
      areaName="Mirdif"
    />
  );
}