import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-mizhar/mizhar-1'] || {
  title: 'Carpet Cleaning in Mizhar 1 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Mizhar 1. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningMizhar1Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-mizhar"
      areaName="Al Mizhar"
      subarea="mizhar-1"
      subareaName="Mizhar 1"
    />
  );
}