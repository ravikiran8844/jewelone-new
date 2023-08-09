import Image from 'next/image'
import styles from './page.module.css'
import AnnouncmentBar from './components/AnnouncmentBar/AnnouncmentBar'
import Footer from './components/Footer/Footer'
import TextSection from './components/TextSection/TextSection'
import NavBar from './components/NavBar/NavBar'
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
    <AnnouncmentBar/>
    <NavBar/>
    <ImageSlider/>
    {/* <MainSlider/> */}
    
    <LogosSlider/>
    <CategoryImageTextOverLay/>
    <TextSection/>
    <VideoSection/>
    <ImageTextGrid/>
    <ImageTextCards/>
    <BlogSection/>
    <Footer/>

    </>
  )
}
