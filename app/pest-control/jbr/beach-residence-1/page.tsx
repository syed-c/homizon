import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/jbr/beach-residence-1'] || {
  title: 'Pest Control in Beach Residence 1 - Professional Services | HOMIZON',
  description: 'Professional pest control services in Beach Residence 1. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlBeachResidence1Page() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="jbr"
      areaName="JBR"
      subarea="beach-residence-1"
      subareaName="Beach Residence 1"
    />
  );
}