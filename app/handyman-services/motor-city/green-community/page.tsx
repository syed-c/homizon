import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from './service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/motor-city/green-community'] || {
  title: 'Handyman Services in Green Community, Motor City - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Green Community, Motor City. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesMotorCityGreenCommunityPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="motor-city"
      areaName="Motor City"
      subArea="green-community"
      subAreaName="Green Community"
    />
  );
}