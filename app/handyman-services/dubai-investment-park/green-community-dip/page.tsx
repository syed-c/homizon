import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-investment-park/green-community-dip'] || {
  title: 'Handyman Services in Green Community Dip, Dubai Investment Park - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Green Community Dip, Dubai Investment Park. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiInvestmentParkGreenCommunityDipPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subArea="green-community-dip"
      subAreaName="Green Community Dip"
    />
  );
}