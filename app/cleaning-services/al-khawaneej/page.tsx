import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-khawaneej'] || {
  title: 'Cleaning Services in Al Khawaneej - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Khawaneej. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlKhawaneejPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-khawaneej"
      areaName="Al Khawaneej"
    />
  );
}