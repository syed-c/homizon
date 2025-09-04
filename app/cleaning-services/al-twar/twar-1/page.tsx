import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-twar/twar-1'] || {
  title: 'Cleaning Services in Twar 1 - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Twar 1. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesTwar1Page() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-twar"
      areaName="Al Twar"
      subarea="twar-1"
      subareaName="Twar 1"
    />
  );
}