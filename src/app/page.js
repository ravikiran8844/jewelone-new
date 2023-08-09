import Image from 'next/image'
import styles from './page.module.css'
import AnnouncmentBar from './components/AnnouncmentBar/AnnouncmentBar'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <>
    <AnnouncmentBar/>
    <Footer/>
    </>
  )
}
