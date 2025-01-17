import Link from 'next/link'
import AutoCarousel from '@/components/Carousel'
import Content from '@/components/Content'
import ProductSlider from '@/components/ProductSlider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import LandingPage from './landingPage/page'
export default function Home() {
  return (
    <>
    <Header />
    <LandingPage />
    <Footer />
    </>
  )
}
// export default function HomePage() {
//   return (
//     <>
//     <AutoCarousel/>
//     <Content/>
//     </>
//   )
// }

