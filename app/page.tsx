import { Approach } from '@/components/aurelmar/approach'
import { Destinations } from '@/components/aurelmar/destinations'
import { Hero } from '@/components/aurelmar/hero'
import { Insights } from '@/components/aurelmar/insights'
import { Partners } from '@/components/aurelmar/partners'
import { Properties } from '@/components/aurelmar/properties'
import { Services } from '@/components/aurelmar/services'
import { SiteFooter } from '@/components/aurelmar/site-footer'
import { SiteHeader } from '@/components/aurelmar/site-header'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Destinations />
        <Approach />
        <Properties />
        <Insights />
        <Services />
        <Partners />
      </main>
      <SiteFooter />
    </>
  )
}
