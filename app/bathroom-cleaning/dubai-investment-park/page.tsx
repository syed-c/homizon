import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-investment-park'] || {
  title: 'Bathroom Deep Cleaning in Dubai Investment Park - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Dubai Investment Park. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningDubaiInvestmentParkPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
    />
  );
}