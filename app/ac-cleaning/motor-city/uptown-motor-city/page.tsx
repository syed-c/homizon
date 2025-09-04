import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/motor-city/uptown-motor-city'] || {
  title: 'AC Cleaning & Sanitization in Uptown Motor City - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Uptown Motor City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationUptownMotorCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="motor-city"
      areaName="Motor City"
      subarea="uptown-motor-city"
      subareaName="Uptown Motor City"
    />
  );
}