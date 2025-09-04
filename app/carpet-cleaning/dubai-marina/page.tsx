import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-marina'] || {
  title: 'Carpet Cleaning in Dubai Marina - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Dubai Marina. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningDubaiMarinaPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-marina"
      areaName="Dubai Marina"
    />
  );
}