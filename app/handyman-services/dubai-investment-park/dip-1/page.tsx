import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-investment-park/dip-1'] || {
  title: 'Handyman Services in Dip 1, Dubai Investment Park - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Dip 1, Dubai Investment Park. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiInvestmentParkDip1Page() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subArea="dip-1"
      subAreaName="Dip 1"
    />
  );
}