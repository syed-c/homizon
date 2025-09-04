import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/deira/gold-souk-area'] || {
  title: 'AC Servicing in Gold Souk Area - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Gold Souk Area. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingGoldSoukAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="deira"
      areaName="Deira"
      subarea="gold-souk-area"
      subareaName="Gold Souk Area"
    />
  );
}