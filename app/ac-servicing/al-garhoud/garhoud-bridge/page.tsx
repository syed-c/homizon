import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-garhoud/garhoud-bridge'] || {
  title: 'AC Servicing in Garhoud Bridge - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Garhoud Bridge. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingGarhoudBridgePage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-garhoud"
      areaName="Al Garhoud"
      subarea="garhoud-bridge"
      subareaName="Garhoud Bridge"
    />
  );
}