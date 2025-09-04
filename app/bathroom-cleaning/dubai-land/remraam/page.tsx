import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-land/remraam'] || {
  title: 'Bathroom Deep Cleaning in Remraam - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Remraam. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningRemraamPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-land"
      areaName="Dubai Land"
      subarea="remraam"
      subareaName="Remraam"
    />
  );
}