import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/the-gardens'] || {
  title: 'AC Servicing in The Gardens - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in The Gardens. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingTheGardensPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="the-gardens"
      areaName="The Gardens"
    />
  );
}