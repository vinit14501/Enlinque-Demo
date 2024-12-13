import Hero from "../Components/home/Hero"
import Services from "../Components/home/Services"
import Testimonials from "../Components/home/Testimonials"
import Faq from "../Components/home/Faq"
import Quotes from "../Components/home/Quotes"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Quotes />
      <Testimonials />
      <Faq />
    </>
  )
}
