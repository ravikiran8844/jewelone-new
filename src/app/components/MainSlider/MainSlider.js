"use client"
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';

const flickityOptions = {
    contain: true,
    cellAlign: 'left',
    groupCells: true,
    pageDots: true,
    prevNextButtons: true,
    draggable: true,
    freeScroll: true,
};

const MainSlider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);
    const flickityRef = useRef(null);

    useEffect(() => {
        if (flickityRef.current) {
            const flickityInstance = flickityRef.current.flkty;
            if (flickityInstance) {
                setTotalSlides(flickityInstance.slides.length);
            }
        }
    }, []);

    const handleFlickityChange = (index) => {
        setSlideIndex(index);
    };

    const getNextSlideIndex = (currentIndex) => {
        if (totalSlides === 0) {
            return 0;
        }
        return (currentIndex + 1) % totalSlides;
    };

    const getFormattedSlideNumber = (number) => {
        if (number === totalSlides - 1) {
            return '00';
        }
        return String(number + 1).padStart(2, '0');
    };

    const slides = [
        {
            desktopImg: '/main-slider-img1.webp',
            mobileImg: '/main-slider-mobile-img1.webp',
            icon: '/main-slider-icon.png',
            caption: 'Caption 1',
            title: 'Title 1',
            text: 'Text 1',
        },
        {
            desktopImg: '/main-slider-img1.webp',
            mobileImg: '/main-slider-mobile-img1.webp',
            icon: '/main-slider-icon.png',
            caption: 'Caption 2',
            title: 'Title 2',
            text: 'Text 2',
        },
        {
            desktopImg: '/main-slider-img1.webp',
            mobileImg: '/main-slider-mobile-img1.webp',
            icon: '/main-slider-icon.png',
            caption: 'Caption 3',
            title: 'Title 3',
            text: 'Text 2',
        }
    ];

    
    return (
        <div id="main-slider" className="main-slider-section">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <Flickity
                        ref={flickityRef}
                        className={'main--slider'}
                        elementType={'div'}
                        options={flickityOptions}
                        disableImagesLoaded={false}
                        reloadOnUpdate
                        static
                        onChange={handleFlickityChange}
                    >
                        {slides.map((slide, index) => (
                            <div key={index} className="main-slider-section_item col-12">
                                <Image
                                    loading="eager"
                                    priority
                                    className="image-banner__desktop-img d-none d-md-block w-100 h-auto"
                                    width={1920}
                                    height={890}
                                    src={slide.desktopImg}
                                    alt="Image Banner"
                                />
                                <Image
                                    loading="eager"
                                    priority
                                    className="image-banner__mobile-img d-block d-md-none w-100 h-auto"
                                    width={428}
                                    height={579}
                                    src={slide.mobileImg}
                                    alt="Image Banner"
                                />

                                <div className="main-slider-section_item-content">
                                    <div className="main-slider-section_item-content_wrapper">
                                        <div>
                                            <Image className="img-fluid" width="85" height="63" src={slide.icon} alt="" />
                                        </div>
                                        <div className="fs-5 text-white mb-1">{slide.caption}</div>
                                        <div className="display-1 text-white main-slider-section_item-content_title mb-1">
                                            {slide.title}
                                        </div>
                                        <div className="fs-5 text-white mb-2 w-75">{slide.text}</div>
                                        <a className="btn btn-outline-light px-4 py-2" href="#">
                                            Shop Now
                                        </a>
                                    </div>
                                    <div className="slide-counter">
                                        <span className="current-slide">{getFormattedSlideNumber(index)}</span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="35" viewBox="0 0 2 35" fill="none">
                                                <path d="M0.980469 0.789062V34.1361" stroke="white" strokeWidth="1.51577" />
                                            </svg>
                                        </span>
                                        <span className="next-slide">{getFormattedSlideNumber(getNextSlideIndex(index))}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Flickity>
                </div>
            </div>
        </div>
    );
};

export default MainSlider;