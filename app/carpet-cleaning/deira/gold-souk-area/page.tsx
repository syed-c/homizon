import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/deira/gold-souk-area'] || {
  title: 'Carpet Cleaning in Gold Souk Area - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Gold Souk Area. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningGoldSoukAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="deira"
      areaName="Deira"
      subarea="gold-souk-area"
      subareaName="Gold Souk Area"
    />
  );
}