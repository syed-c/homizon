import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-sports-city/golf-horizon'] || {
  title: 'Handyman Services in Golf Horizon, Dubai Sports City - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Golf Horizon, Dubai Sports City. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiSportsCityGolfHorizonPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subArea="golf-horizon"
      subAreaName="Golf Horizon"
    />
  );
}