import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/jvc/jvc-district-1'] || {
  title: 'AC Servicing in JVC District 1 - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in JVC District 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingJVCDistrict1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="jvc"
      areaName="JVC"
      subarea="jvc-district-1"
      subareaName="JVC District 1"
    />
  );
}