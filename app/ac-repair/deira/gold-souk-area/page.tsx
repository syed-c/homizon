import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/deira/gold-souk-area'] || {
  title: 'AC Repair & Maintenance in Gold Souk Area - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Gold Souk Area. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceGoldSoukAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="deira"
      areaName="Deira"
      subarea="gold-souk-area"
      subareaName="Gold Souk Area"
    />
  );
}