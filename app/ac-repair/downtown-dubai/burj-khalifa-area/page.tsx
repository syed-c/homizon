import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/downtown-dubai/burj-khalifa-area'] || {
  title: 'AC Repair & Maintenance in Burj Khalifa Area - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Burj Khalifa Area. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceBurjKhalifaAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="burj-khalifa-area"
      subareaName="Burj Khalifa Area"
    />
  );
}