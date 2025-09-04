import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-creek-harbour'] || {
  title: 'Bathroom Deep Cleaning in Dubai Creek Harbour - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Dubai Creek Harbour. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningDubaiCreekHarbourPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
    />
  );
}