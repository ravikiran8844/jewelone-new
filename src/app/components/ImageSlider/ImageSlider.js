"use client"

import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';


const ImageSlider = () => {
  return (
    <Splide aria-label="My Favorite Images">
        <SplideSlide>
                <Image loading='eager' priority  className='image-banner__desktop-img d-none d-md-block w-100 h-auto' width={1920} height={600} src="/main-slider-img1.webp" alt="Image Banner"/>
                <Image loading='eager' priority  className='image-banner__mobile-img d-block d-md-none w-100 h-auto' width={428} height={600} src="/main-slider-mobile-img1.webp" alt="Image Banner"/>        
                </SplideSlide>
                <SplideSlide>
                <Image loading='eager' priority  className='image-banner__desktop-img d-none d-md-block w-100 h-auto' width={1920} height={600} src="/main-slider-img1.webp" alt="Image Banner"/>
                <Image loading='eager' priority  className='image-banner__mobile-img d-block d-md-none w-100 h-auto' width={428} height={600} src="/main-slider-mobile-img1.webp" alt="Image Banner"/>        
                </SplideSlide>
                <SplideSlide>
                <Image loading='eager' priority  className='image-banner__desktop-img d-none d-md-block w-100 h-auto' width={1920} height={600} src="/main-slider-img1.webp" alt="Image Banner"/>
                <Image loading='eager' priority  className='image-banner__mobile-img d-block d-md-none w-100 h-auto' width={428} height={600} src="/main-slider-mobile-img1.webp" alt="Image Banner"/>        
                </SplideSlide>
        </Splide>
  )
}

export default ImageSlider
