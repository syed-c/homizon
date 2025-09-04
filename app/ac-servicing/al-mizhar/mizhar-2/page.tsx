import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-mizhar/mizhar-2'] || {
  title: 'AC Servicing in Mizhar 2 - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Mizhar 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingMizhar2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-mizhar"
      areaName="Al Mizhar"
      subarea="mizhar-2"
      subareaName="Mizhar 2"
    />
  );
}