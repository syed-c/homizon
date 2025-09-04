import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-khawaneej/khawaneej-1'] || {
  title: 'AC Servicing in Khawaneej 1 - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Khawaneej 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingKhawaneej1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-khawaneej"
      areaName="Al Khawaneej"
      subarea="khawaneej-1"
      subareaName="Khawaneej 1"
    />
  );
}