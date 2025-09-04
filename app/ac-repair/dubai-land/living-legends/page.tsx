import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/dubai-land/living-legends'] || {
  title: 'AC Repair & Maintenance in Living Legends - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Living Legends. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceLivingLegendsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="dubai-land"
      areaName="Dubai Land"
      subarea="living-legends"
      subareaName="Living Legends"
    />
  );
}