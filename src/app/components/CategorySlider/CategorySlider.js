"use client"

import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import Link from 'next/link';
import WooCommerce from '@/app/WooCommerce';

const CategorySlider = () => {
    const [subcategories, setSubcategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const parentCategoryId=28;

    useEffect(() => {
        WooCommerce.get(`products/categories?parent=${parentCategoryId}`)
        .then((response) => {
          console.log(response.data);   
          setSubcategories(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }, []);

  return (
    <div className="shop-by-category container mt-5">
    <div className="row">
        <div className="col-12 mb-4">
            <div className="main-heading text-color-red">Shop by Category</div>
        </div>
    </div>
   {loading ? (<div class="my-5 d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>): ( <Splide options={ {
    type: 'loop',              
    perPage: 5,                
    perMove: 1,               
    gap: '10px',               
    autoplay: true,            
    interval: 3000,            
    pauseOnHover: true, 
    pagination:false,
        breakpoints: {
        1200: {
        perPage: 4,             
      },
      992: {
        perPage: 3,             
      },
      768: {
        perPage: 2,             
      },
      420: {
        perPage: 1,         
      }
    }
} }>

{subcategories.map((category,index) => (
            <SplideSlide key={index}>
            <div className="text-center category-container">
                <div className="shop-by-category_img-wrapper">
                    <Image className="img-fluid mb-4" src={category.image ? category.image.src : ""}
                alt={category.name} width="283" height="283" />
                    </div>
                    <div className="category-container_content py-4">
                <div className="category-container__content-title">{category.name}</div>
                <div className="mt-1">
                    <Link className="links-custom-btn" href={`/collection/${category.slug}`}>Explore <span className='ms-2'><svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.879 3.59456L12.2054 0.551057C12.1666 0.507759 12.1203 0.473516 12.0693 0.450041C12.0182 0.426566 11.9634 0.414429 11.9081 0.414429C11.8527 0.414429 11.7979 0.426566 11.7468 0.450041C11.6958 0.473516 11.6495 0.507759 11.6107 0.551057C11.5335 0.642757 11.4907 0.762918 11.4907 0.887664C11.4907 1.01241 11.5335 1.13257 11.6107 1.22427L13.5742 3.4545H1.36426C1.24891 3.4545 1.13829 3.50478 1.05672 3.59421C0.975158 3.68365 0.929302 3.80503 0.929302 3.93151C0.929302 4.05798 0.975158 4.17902 1.05672 4.26846C1.13829 4.35789 1.24891 4.40817 1.36426 4.40817H13.5742L11.6107 6.6384C11.5335 6.7301 11.4907 6.85026 11.4907 6.97501C11.4907 7.09975 11.5335 7.21991 11.6107 7.31161C11.649 7.35588 11.6951 7.39094 11.7462 7.41503C11.7973 7.43912 11.8524 7.45167 11.9081 7.45167C11.9637 7.45167 12.0188 7.43912 12.0699 7.41503C12.121 7.39094 12.1671 7.35588 12.2054 7.31161L14.879 4.26811C14.959 4.17802 15.0038 4.05726 15.0038 3.93151C15.0038 3.80576 14.959 3.68465 14.879 3.59456Z" fill="#C0832B" />
                    </svg>
                </span> </Link></div></div></div>
            </SplideSlide>
        )
        )}

    </Splide>) }
   
</div>  
  )
}

export default CategorySlider
