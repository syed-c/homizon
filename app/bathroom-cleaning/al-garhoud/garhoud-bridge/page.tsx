import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-garhoud/garhoud-bridge'] || {
  title: 'Bathroom Deep Cleaning in Garhoud Bridge - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Garhoud Bridge. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningGarhoudBridgePage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-garhoud"
      areaName="Al Garhoud"
      subarea="garhoud-bridge"
      subareaName="Garhoud Bridge"
    />
  );
}