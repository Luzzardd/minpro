import Link from 'next/link'
import AutoCarousel from '@/components/Carousel'
import Content from '@/components/Content'
import Login from './login/page'

export default function Home() {
  return (
    <>
     <AutoCarousel/>
    <Content/>
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

