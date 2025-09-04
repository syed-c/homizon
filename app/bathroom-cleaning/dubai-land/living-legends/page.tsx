import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-land/living-legends'] || {
  title: 'Bathroom Deep Cleaning in Living Legends - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Living Legends. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningLivingLegendsPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-land"
      areaName="Dubai Land"
      subarea="living-legends"
      subareaName="Living Legends"
    />
  );
}