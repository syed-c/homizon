import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-land/living-legends'] || {
  title: 'Cleaning Services in Living Legends - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Living Legends. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesLivingLegendsPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-land"
      areaName="Dubai Land"
      subarea="living-legends"
      subareaName="Living Legends"
    />
  );
}