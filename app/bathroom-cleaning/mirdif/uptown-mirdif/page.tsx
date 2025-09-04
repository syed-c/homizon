import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/mirdif/uptown-mirdif'] || {
  title: 'Bathroom Deep Cleaning in Uptown Mirdif - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Uptown Mirdif. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningUptownMirdifPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="mirdif"
      areaName="Mirdif"
      subarea="uptown-mirdif"
      subareaName="Uptown Mirdif"
    />
  );
}