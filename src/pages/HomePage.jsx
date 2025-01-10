import Hero from "../Components/home/Hero"
import Services from "../Components/home/Services"
import Testimonials from "../Components/home/Testimonials"
import Faq from "../Components/home/Faq"
import Quotes from "../Components/home/Quotes"
import Text from "../Components/home/Text"
import Hero2 from "../Components/home/Hero2"
import Hero3 from "../Components/home/Hero3"
import Services2 from "../Components/home/Services2"

export default function HomePage() {
  return (
    <>
      {/* <Hero /> */}
      {/* <Hero3 /> */}
      <Hero2 />
      <Text />
      {/* <Services /> */}
      <Services2 />
      <Quotes />
      <Testimonials />
      <Faq />
    </>
  )
}
