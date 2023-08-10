"use client"

import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';


const ImageSlider = () => {
  return (
   <div className='image-slider-section'>
     <Splide aria-label="My Favorite Images">
     <SplideSlide>
                <Image loading='eager' priority  className='image-banner__desktop-img d-none d-md-block img-fluid' width={1920} height={740} src="/main-slider-img1.webp" alt="Image Banner"/>
                <Image loading='eager' priority  className='image-banner__mobile-img d-block d-md-none img-fluid' width={428} height={579} src="/main-slider-mobile-img1.webp" alt="Image Banner"/>        
                </SplideSlide>
                <SplideSlide>
                <Image loading='eager' priority  className='image-banner__desktop-img d-none d-md-block img-fluid' width={1920} height={740} src="/main-slider-img1.webp" alt="Image Banner"/>
                <Image loading='eager' priority  className='image-banner__mobile-img d-block d-md-none img-fluid' width={428} height={579} src="/main-slider-mobile-img1.webp" alt="Image Banner"/>        
                </SplideSlide>
                <SplideSlide>
                <Image loading='eager' priority  className='image-banner__desktop-img d-none d-md-block img-fluid' width={1920} height={740} src="/main-slider-img1.webp" alt="Image Banner"/>
                <Image loading='eager' priority  className='image-banner__mobile-img d-block d-md-none img-fluid' width={428} height={579} src="/main-slider-mobile-img1.webp" alt="Image Banner"/>        
                </SplideSlide>
        </Splide>
   </div>
  )
}

export default ImageSlider
