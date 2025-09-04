import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-barsha'] || {
  title: 'Cleaning Services in Al Barsha - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Barsha. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlBarshaPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-barsha"
      areaName="Al Barsha"
    />
  );
}