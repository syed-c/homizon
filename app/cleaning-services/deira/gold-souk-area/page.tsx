import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/deira/gold-souk-area'] || {
  title: 'Cleaning Services in Gold Souk Area - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Gold Souk Area. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesGoldSoukAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="deira"
      areaName="Deira"
      subarea="gold-souk-area"
      subareaName="Gold Souk Area"
    />
  );
}