import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-garhoud/garhoud-bridge'] || {
  title: 'Carpet Cleaning in Garhoud Bridge - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Garhoud Bridge. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningGarhoudBridgePage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-garhoud"
      areaName="Al Garhoud"
      subarea="garhoud-bridge"
      subareaName="Garhoud Bridge"
    />
  );
}