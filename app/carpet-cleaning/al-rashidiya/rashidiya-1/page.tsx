import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-rashidiya/rashidiya-1'] || {
  title: 'Carpet Cleaning in Rashidiya 1 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Rashidiya 1. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningRashidiya1Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-rashidiya"
      areaName="Al Rashidiya"
      subarea="rashidiya-1"
      subareaName="Rashidiya 1"
    />
  );
}