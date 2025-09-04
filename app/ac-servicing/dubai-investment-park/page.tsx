import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-investment-park'] || {
  title: 'AC Servicing in Dubai Investment Park - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Dubai Investment Park. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingDubaiInvestmentParkPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
    />
  );
}