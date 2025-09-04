import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-sports-city/golf-promenade'] || {
  title: 'Handyman Services in Golf Promenade, Dubai Sports City - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Golf Promenade, Dubai Sports City. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiSportsCityGolfPromenadePage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subArea="golf-promenade"
      subAreaName="Golf Promenade"
    />
  );
}