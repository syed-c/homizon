import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/deira/port-saeed'] || {
  title: 'AC Servicing in Port Saeed - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Port Saeed. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingPortSaeedPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="deira"
      areaName="Deira"
      subarea="port-saeed"
      subareaName="Port Saeed"
    />
  );
}