import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-qusais/qusais-1'] || {
  title: 'AC Servicing in Qusais 1 - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Qusais 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingQusais1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-qusais"
      areaName="Al Qusais"
      subarea="qusais-1"
      subareaName="Qusais 1"
    />
  );
}