import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/deira/port-saeed'] || {
  title: 'Carpet Cleaning in Port Saeed - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Port Saeed. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningPortSaeedPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="deira"
      areaName="Deira"
      subarea="port-saeed"
      subareaName="Port Saeed"
    />
  );
}