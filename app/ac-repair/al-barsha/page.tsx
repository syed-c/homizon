import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-barsha'] || {
  title: 'AC Repair & Maintenance in Al Barsha - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Barsha. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlBarshaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-barsha"
      areaName="Al Barsha"
    />
  );
}