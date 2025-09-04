import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/jumeirah/umm-suqeim'] || {
  title: 'AC Repair & Maintenance in Umm Suqeim - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Umm Suqeim. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceUmmSuqeimPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="umm-suqeim"
      subareaName="Umm Suqeim"
    />
  );
}