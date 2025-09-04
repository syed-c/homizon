import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/bur-dubai'] || {
  title: 'Bathroom Deep Cleaning in Bur Dubai - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Bur Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningBurDubaiPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="bur-dubai"
      areaName="Bur Dubai"
    />
  );
}