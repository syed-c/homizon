import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/jvc/jvc-district-2'] || {
  title: 'AC Servicing in JVC District 2 - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in JVC District 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingJVCDistrict2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="jvc"
      areaName="JVC"
      subarea="jvc-district-2"
      subareaName="JVC District 2"
    />
  );
}