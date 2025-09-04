import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/the-gardens'] || {
  title: 'AC Repair & Maintenance in The Gardens - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in The Gardens. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceTheGardensPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="the-gardens"
      areaName="The Gardens"
    />
  );
}