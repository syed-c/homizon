import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-land/remraam'] || {
  title: 'Carpet Cleaning in Remraam - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Remraam. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningRemraamPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-land"
      areaName="Dubai Land"
      subarea="remraam"
      subareaName="Remraam"
    />
  );
}