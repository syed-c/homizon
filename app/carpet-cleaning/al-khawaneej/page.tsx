import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-khawaneej'] || {
  title: 'Carpet Cleaning in Al Khawaneej - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Khawaneej. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlKhawaneejPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-khawaneej"
      areaName="Al Khawaneej"
    />
  );
}