import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/downtown-dubai/old-town-dubai'] || {
  title: 'Bathroom Deep Cleaning in Old Town Dubai - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Old Town Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningOldTownDubaiPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="old-town-dubai"
      subareaName="Old Town Dubai"
    />
  );
}