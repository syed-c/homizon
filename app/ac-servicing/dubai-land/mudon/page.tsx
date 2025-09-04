import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-land/mudon'] || {
  title: 'AC Servicing in Mudon - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Mudon. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingMudonPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-land"
      areaName="Dubai Land"
      subarea="mudon"
      subareaName="Mudon"
    />
  );
}