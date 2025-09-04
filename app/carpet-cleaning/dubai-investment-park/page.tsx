import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-investment-park'] || {
  title: 'Carpet Cleaning in Dubai Investment Park - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Dubai Investment Park. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningDubaiInvestmentParkPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
    />
  );
}