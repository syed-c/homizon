import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-land/remraam'] || {
  title: 'AC Servicing in Remraam - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Remraam. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingRemraamPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-land"
      areaName="Dubai Land"
      subarea="remraam"
      subareaName="Remraam"
    />
  );
}