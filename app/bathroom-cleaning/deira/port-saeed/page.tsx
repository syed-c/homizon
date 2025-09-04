import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/deira/port-saeed'] || {
  title: 'Bathroom Deep Cleaning in Port Saeed - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Port Saeed. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningPortSaeedPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="deira"
      areaName="Deira"
      subarea="port-saeed"
      subareaName="Port Saeed"
    />
  );
}