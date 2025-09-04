import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-land/living-legends'] || {
  title: 'Bathroom Plumbing in Living Legends - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Living Legends. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingLivingLegendsPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-land"
      areaName="Dubai Land"
      subarea="living-legends"
      subareaName="Living Legends"
    />
  );
}