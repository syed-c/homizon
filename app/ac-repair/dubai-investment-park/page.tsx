import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-investment-park'] || {
  title: 'AC Repair & Maintenance in Dubai Investment Park - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Dubai Investment Park. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceDubaiInvestmentParkPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
    />
  );
}