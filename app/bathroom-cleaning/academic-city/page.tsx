import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/academic-city'] || {
  title: 'Bathroom Deep Cleaning in Academic City - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Academic City. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAcademicCityPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="academic-city"
      areaName="Academic City"
    />
  );
}