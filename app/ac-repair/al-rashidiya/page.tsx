import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/al-rashidiya'] || {
  title: 'AC Repair & Maintenance in Al Rashidiya - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Rashidiya. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlRashidiyaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="al-rashidiya"
      areaName="Al Rashidiya"
    />
  );
}