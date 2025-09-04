import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/the-views/golf-tower'] || {
  title: 'AC Repair & Maintenance in Golf Tower - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Golf Tower. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceGolfTowerPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="the-views"
      areaName="The Views"
      subarea="golf-tower"
      subareaName="Golf Tower"
    />
  );
}