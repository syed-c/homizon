import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-barari'] || {
  title: 'AC Servicing in Al Barari - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Barari. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlBarariPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-barari"
      areaName="Al Barari"
    />
  );
}