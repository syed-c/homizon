import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-land/remraam'] || {
  title: 'Cleaning Services in Remraam - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Remraam. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesRemraamPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-land"
      areaName="Dubai Land"
      subarea="remraam"
      subareaName="Remraam"
    />
  );
}