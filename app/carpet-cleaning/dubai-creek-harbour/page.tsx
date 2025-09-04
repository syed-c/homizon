import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-creek-harbour'] || {
  title: 'Carpet Cleaning in Dubai Creek Harbour - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Dubai Creek Harbour. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningDubaiCreekHarbourPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
    />
  );
}