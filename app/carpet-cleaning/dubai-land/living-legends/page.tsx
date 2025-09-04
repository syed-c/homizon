import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-land/living-legends'] || {
  title: 'Carpet Cleaning in Living Legends - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Living Legends. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningLivingLegendsPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-land"
      areaName="Dubai Land"
      subarea="living-legends"
      subareaName="Living Legends"
    />
  );
}