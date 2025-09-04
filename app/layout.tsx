import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { SettingsProvider } from '@/lib/settings-context'
import { ConditionalLayout } from '@/components/conditional-layout'
import AnalyticsProvider from '@/components/analytics-provider'
import AnalyticsHeadTags from '@/components/analytics-head-tags'
import GTMNoscript from '@/components/gtm-noscript'
import siteMetadata from './metadata.json'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...siteMetadata['/'],
  metadataBase: new URL('https://homizon.com'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <AnalyticsHeadTags />
      </head>
      <body className={inter.className}>
        <SettingsProvider>
          <AnalyticsProvider />
          <GTMNoscript />
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
          <Toaster />
        </SettingsProvider>
      </body>
    </html>
  )
}
