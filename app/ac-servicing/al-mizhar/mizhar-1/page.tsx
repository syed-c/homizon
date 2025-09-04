import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-mizhar/mizhar-1'] || {
  title: 'AC Servicing in Mizhar 1 - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Mizhar 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingMizhar1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-mizhar"
      areaName="Al Mizhar"
      subarea="mizhar-1"
      subareaName="Mizhar 1"
    />
  );
}