import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const SITE_URL = 'https://waron.fr'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Waron — Cabinet de conseil et formation dropshipping',
    template: '%s — Waron',
  },
  description:
    "Waron structure vos projets dropshipping avec la rigueur d'un cabinet de conseil : sourcing, stratégie d'acquisition, scaling. Accompagnement 1:1 et formation complète à 40 €.",
  keywords: [
    'Waron',
    'formation dropshipping',
    'cabinet conseil e-commerce',
    'dropshipping France',
    'sourcing produits',
    'lancer une boutique en ligne',
    'accompagnement e-commerce',
    'scaling dropshipping',
  ],
  authors: [{ name: 'Waron' }],
  creator: 'Waron',
  publisher: 'Waron',
  generator: 'v0.app',
  applicationName: 'Waron',
  alternates: {
    canonical: SITE_URL,
  },
  category: 'business',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Waron — Cabinet de conseil et formation dropshipping',
    description:
      'Accompagnement 1:1 et formation complète pour lancer des projets dropshipping durables. Du sourcing au scaling, avec la rigueur d’un cabinet de conseil.',
    url: SITE_URL,
    siteName: 'Waron',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waron — Cabinet de conseil et formation dropshipping',
    description:
      'Accompagnement 1:1 et formation complète pour lancer des projets dropshipping durables.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0b',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organisation`,
      name: 'Waron',
      url: SITE_URL,
      description:
        "Cabinet de conseil en e-commerce spécialisé dans l'accompagnement et la formation de projets dropshipping.",
      areaServed: 'FR',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#site`,
      url: SITE_URL,
      name: 'Waron',
      inLanguage: 'fr-FR',
      publisher: { '@id': `${SITE_URL}/#organisation` },
    },
    {
      '@type': 'Course',
      name: 'Programme Waron — Formation dropshipping',
      description:
        'Formation complète en dropshipping : cadrage de la niche, sourcing, construction de la boutique et scaling. 4 modules, gabarits et accès à vie.',
      provider: { '@id': `${SITE_URL}/#organisation` },
      inLanguage: 'fr-FR',
      offers: {
        '@type': 'Offer',
        price: '40',
        priceCurrency: 'EUR',
        category: 'Formation',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/#formation`,
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans font-light antialiased maison-texture">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
