import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryImageTextOverLay = () => {
  return (
    <div className="container my-5">
    <div className="row justify-content-center">
        <div className="col-12 d-flex overflow-auto">
                                   <div className="col collection-slider-items">
           <div className="collection-slider-item_wrapper">
                <Image className="img-fluid" width="412" height="530" src="/collection-bannner1-1.webp" alt=""/>
                <div className="collection-slider-item_content">
                    <div className="collection-slider-item_content--title mb-2">Discover New Arrivals</div>
                    <div className="collection-slider-item_content--text mb-2">Stay ahead of the fashion curve with our latest designs.</div>
                    <Link href="https:/shop" className="collection-slider-item_content--link">EXPLORE NOW</Link>
                </div>
            </div>
           </div>
           
                      <div className="col collection-slider-items">
           <div className="collection-slider-item_wrapper">
                <Image className="img-fluid" width="412" height="530" src="/collection-bannner2-1.webp" alt=""/>
                <div className="collection-slider-item_content">
                    <div className="collection-slider-item_content--title mb-2">Experience Timeless Brilliance</div>
                    <div className="collection-slider-item_content--text mb-2">Explore our collection on earrings, designed to enhance your beauty.</div>
                    <Link href="/shop" className="collection-slider-item_content--link">EXPLORE BEST SELLERS</Link>
                </div>
            </div>
           </div>
           
                      <div className="col collection-slider-items">
           <div className="collection-slider-item_wrapper">
                <Image className="img-fluid" width="412" height="530" src="/collection-bannner3-1.webp" alt=""/>
                <div className="collection-slider-item_content">
                    <div className="collection-slider-item_content--title mb-2">Your Favourites Return</div>
                    <div className="collection-slider-item_content--text mb-2">Don’t miss out on the opportunity to own these sought. After treasure once again</div>
                    <Link href="/shop" className="collection-slider-item_content--link">EXPLORE BEST SELLERS</Link>
                </div>
            </div>
           </div>
           
                               </div>
    </div>
</div>
  )
}

export default CategoryImageTextOverLay
