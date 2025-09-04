import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-barsha'] || {
  title: 'Bathroom Deep Cleaning in Al Barsha - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Barsha. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlBarshaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-barsha"
      areaName="Al Barsha"
    />
  );
}