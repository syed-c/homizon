import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-barsha/al-barsha-south'] || {
  title: 'Carpet Cleaning in Al Barsha South - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Barsha South. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlBarshaSouthPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-south"
      subareaName="Al Barsha South"
    />
  );
}