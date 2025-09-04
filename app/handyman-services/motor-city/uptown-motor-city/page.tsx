import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/motor-city/uptown-motor-city'] || {
  title: 'Handyman Services in Uptown Motor City, Motor City - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Uptown Motor City, Motor City. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesMotorCityUptownMotorCityPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="motor-city"
      areaName="Motor City"
      subArea="uptown-motor-city"
      subAreaName="Uptown Motor City"
    />
  );
}