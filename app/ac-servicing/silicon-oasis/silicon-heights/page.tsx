import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/silicon-oasis/silicon-heights'] || {
  title: 'AC Servicing in Silicon Heights - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Silicon Heights. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingSiliconHeightsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="silicon-oasis"
      areaName="Silicon Oasis"
      subarea="silicon-heights"
      subareaName="Silicon Heights"
    />
  );
}