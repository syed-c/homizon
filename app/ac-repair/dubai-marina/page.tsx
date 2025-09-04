import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-marina'] || {
  title: 'AC Repair & Maintenance in Dubai Marina - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Dubai Marina. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceDubaiMarinaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-marina"
      areaName="Dubai Marina"
    />
  );
}