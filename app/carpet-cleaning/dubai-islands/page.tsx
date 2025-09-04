import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-islands'] || {
  title: 'Carpet Cleaning in Dubai Islands - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Dubai Islands. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningDubaiIslandsPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-islands"
      areaName="Dubai Islands"
    />
  );
}