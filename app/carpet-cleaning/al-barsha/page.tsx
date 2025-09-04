import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-barsha'] || {
  title: 'Carpet Cleaning in Al Barsha - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Barsha. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlBarshaPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-barsha"
      areaName="Al Barsha"
    />
  );
}