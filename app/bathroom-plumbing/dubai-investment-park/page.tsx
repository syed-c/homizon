import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-investment-park'] || {
  title: 'Bathroom Plumbing in Dubai Investment Park - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Dubai Investment Park. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingDubaiInvestmentParkPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
    />
  );
}