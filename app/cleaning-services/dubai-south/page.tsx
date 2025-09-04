import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-south'] || {
  title: 'Cleaning Services in Dubai South - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Dubai South. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesDubaiSouthPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-south"
      areaName="Dubai South"
    />
  );
}