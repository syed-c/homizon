import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-creek-harbour'] || {
  title: 'Cleaning Services in Dubai Creek Harbour - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Dubai Creek Harbour. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesDubaiCreekHarbourPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
    />
  );
}