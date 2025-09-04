import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/academic-city'] || {
  title: 'AC Repair & Maintenance in Academic City - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Academic City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAcademicCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="academic-city"
      areaName="Academic City"
    />
  );
}