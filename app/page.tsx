import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Methode } from '@/components/methode'
import { Piliers } from '@/components/piliers'
import { Temoignage } from '@/components/temoignage'
import { Offre } from '@/components/offre'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Methode />
        <Piliers />
        <Temoignage />
        <Offre />
      </main>
      <SiteFooter />
    </>
  )
}
