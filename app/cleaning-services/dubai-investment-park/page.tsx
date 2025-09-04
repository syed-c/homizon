import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-investment-park'] || {
  title: 'Cleaning Services in Dubai Investment Park - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Dubai Investment Park. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesDubaiInvestmentParkPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
    />
  );
}