import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-sufouh'] || {
  title: 'AC Repair & Maintenance in Al Sufouh - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Sufouh. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlSufouhPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-sufouh"
      areaName="Al Sufouh"
    />
  );
}