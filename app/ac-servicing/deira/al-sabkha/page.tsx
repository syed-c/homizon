import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/deira/al-sabkha'] || {
  title: 'AC Servicing in Al Sabkha - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Sabkha. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlSabkhaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="deira"
      areaName="Deira"
      subarea="al-sabkha"
      subareaName="Al Sabkha"
    />
  );
}