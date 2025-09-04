import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/jbr/beach-residence-2'] || {
  title: 'AC Servicing in Beach Residence 2 - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Beach Residence 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingBeachResidence2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="jbr"
      areaName="JBR"
      subarea="beach-residence-2"
      subareaName="Beach Residence 2"
    />
  );
}