import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-nahda'] || {
  title: 'Carpet Cleaning in Al Nahda - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Nahda. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlNahdaPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-nahda"
      areaName="Al Nahda"
    />
  );
}