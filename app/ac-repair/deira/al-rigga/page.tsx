import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/deira/al-rigga'] || {
  title: 'AC Repair & Maintenance in Al Rigga - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Al Rigga. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceAlRiggaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="deira"
      areaName="Deira"
      subarea="al-rigga"
      subareaName="Al Rigga"
    />
  );
}