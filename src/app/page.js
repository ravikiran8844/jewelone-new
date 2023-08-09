import Image from 'next/image'
import styles from './page.module.css'
import AnnouncmentBar from './components/AnnouncmentBar/AnnouncmentBar'
import Footer from './components/Footer/Footer'
import TextSection from './components/TextSection/TextSection'
import NavBar from './components/NavBar/NavBar'
import ImageTextGrid from './components/ImageTextGrid/ImageTextGrid'
import ImageTextCards from './components/ImageTextCards/ImageTextCards'
import CategoryImageTextOverLay from './components/CategoryImageTextOverLay/CategoryImageTextOverLay'

export default function Home() {
  return (
    <>
    <AnnouncmentBar/>
    <NavBar/>
    <CategoryImageTextOverLay/>
    <TextSection/>
    <ImageTextGrid/>
    <ImageTextCards/>
    <Footer/>

    </>
  )
}
