import Hero from '@/components/Hero'
import ThreeTools from '@/components/ThreeTools'
import Tools from '@/components/Tools'
import Testimonials from '@/components/Testimonials'
import UseCases from '@/components/UseCases'
import BeyondAudio from '@/components/BeyondAudio'
import Pricing from '@/components/Pricing'
import Faq from '@/components/Faq'
import FinalCTA from '@/components/FinalCTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <ThreeTools />
      <Tools />
      <Testimonials />
      <UseCases />
      <BeyondAudio />
      <Pricing />
      <Faq />
      <FinalCTA />
    </main>
  )
}
