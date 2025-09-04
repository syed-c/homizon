import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-marina'] || {
  title: 'Cleaning Services in Dubai Marina - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Dubai Marina. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesDubaiMarinaPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-marina"
      areaName="Dubai Marina"
    />
  );
}