import styles from './page.module.css'
import TextSection from './components/TextSection/TextSection'
import ImageTextGrid from './components/ImageTextGrid/ImageTextGrid'
import ImageTextCards from './components/ImageTextCards/ImageTextCards'
import CategoryImageTextOverLay from './components/CategoryImageTextOverLay/CategoryImageTextOverLay'
import VideoSection from './components/VideoSection/VideoSection'
import BlogSection from './components/BlogSection/BlogSection'
import LogosSlider from './components/LogosSlider/LogosSlider'
import MainSlider from './components/MainSlider/MainSlider'
import ImageSlider from './components/ImageSlider/ImageSlider'

export default function Home() {
  return (
    <>

    <ImageSlider/>
    {/* <MainSlider/> */}
    
    <LogosSlider/>
    <CategoryImageTextOverLay/>
    <TextSection/>
    <VideoSection/>
    <ImageTextGrid/>
    <ImageTextCards/>
    <BlogSection/>

    </>
  )
}
