import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-barsha/al-barsha-1'] || {
  title: 'AC Servicing in Al Barsha 1 - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Barsha 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlBarsha1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-1"
      subareaName="Al Barsha 1"
    />
  );
}