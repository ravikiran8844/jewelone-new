"use client"

import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import Link from 'next/link';
import WooCommerce from '@/app/WooCommerce';

const CategorySlider = () => {
    const [subcategories, setSubcategories] = useState([]);
    const parentCategoryId=28;

    useEffect(() => {
        WooCommerce.get(`products/categories?parent=${parentCategoryId}`)
        .then((response) => {
          console.log(response.data);   
          setSubcategories(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }, [subcategories]);

  return (
    <div class="shop-by-category container mt-5">
    <div class="row">
        <div class="col-12 mb-4">
            <div class="main-heading text-color-red">Shop by Category</div>
        </div>
    </div>
    <Splide options={ {
    type: 'loop',              
    perPage: 5,                
    perMove: 1,               
    gap: '10px',               
    autoplay: false,            
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
            <div class="text-center category-container">
                <div class="shop-by-category_img-wrapper">
                    <Image class="img-fluid mb-4" src={category.image ? category.image.src : ""}
                alt={category.name} width="283" height="283" />
                    </div>
                    <div class="category-container_content py-4">
                <div class="category-container__content-title">{category.name}</div>
                <div class="mt-1">
                    <Link class="links-custom-btn" href={`/collection/${category.slug}`}>Explore <span>
                </span> </Link></div></div></div>
            </SplideSlide>
        )
        )}

    </Splide>
   
</div>  
  )
}

export default CategorySlider
