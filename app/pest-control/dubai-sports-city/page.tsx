import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/dubai-sports-city'] || {
  title: 'Pest Control in Dubai Sports City - Professional Services | HOMIZON',
  description: 'Professional pest control services in Dubai Sports City. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlDubaiSportsCityPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
    />
  );
}