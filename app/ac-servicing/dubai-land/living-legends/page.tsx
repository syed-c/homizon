import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-land/living-legends'] || {
  title: 'AC Servicing in Living Legends - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Living Legends. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingLivingLegendsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-land"
      areaName="Dubai Land"
      subarea="living-legends"
      subareaName="Living Legends"
    />
  );
}