import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-sufouh'] || {
  title: 'AC Servicing in Al Sufouh - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Sufouh. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlSufouhPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-sufouh"
      areaName="Al Sufouh"
    />
  );
}