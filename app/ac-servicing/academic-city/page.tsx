import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/academic-city'] || {
  title: 'AC Servicing in Academic City - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Academic City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAcademicCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="academic-city"
      areaName="Academic City"
    />
  );
}