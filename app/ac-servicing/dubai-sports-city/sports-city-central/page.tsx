import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-sports-city/sports-city-central'] || {
  title: 'AC Servicing in Sports City Central - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Sports City Central. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingSportsCityCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="sports-city-central"
      subareaName="Sports City Central"
    />
  );
}