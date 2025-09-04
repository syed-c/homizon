import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-mizhar'] || {
  title: 'AC Servicing in Al Mizhar - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Mizhar. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlMizharPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-mizhar"
      areaName="Al Mizhar"
    />
  );
}