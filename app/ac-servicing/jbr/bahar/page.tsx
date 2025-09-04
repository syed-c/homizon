import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/jbr/bahar'] || {
  title: 'AC Servicing in Bahar - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Bahar. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingBaharPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="jbr"
      areaName="JBR"
      subarea="bahar"
      subareaName="Bahar"
    />
  );
}