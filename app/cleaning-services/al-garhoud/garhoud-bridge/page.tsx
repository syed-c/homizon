import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-garhoud/garhoud-bridge'] || {
  title: 'Cleaning Services in Garhoud Bridge - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Garhoud Bridge. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesGarhoudBridgePage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-garhoud"
      areaName="Al Garhoud"
      subarea="garhoud-bridge"
      subareaName="Garhoud Bridge"
    />
  );
}