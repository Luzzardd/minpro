import Image from 'next/image'
import styles from './page.module.css'
import AutoCarousel from '@/components/Carousel'
import Content from '@/components/Content'
import ProductSlider from '@/components/ProductSlider'
export default function Home() {
  return (
    <>
    <AutoCarousel/>
    <Content/>
    <ProductSlider/>
    </>
  )
}
