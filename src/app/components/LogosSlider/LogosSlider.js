"use client"

import React from 'react';
import Flickity from 'react-flickity-component'
import Image from 'next/image'


const flickityOptions = {
    contain: true,
    cellAlign: 'left',
    groupCells: true,
    pageDots: false,
    prevNextButtons:false,
    draggable:true,
    freeScroll:true

}

const LogosSlider = () => {
  return (
    <section className="bg-white logos-section">
      <div className="container p-5">
        <div className="row">
          <Flickity className={'logos--slider'} 
                elementType={'div'} 
                options={flickityOptions} 
                disableImagesLoaded={false} 
                reloadOnUpdate 
                static >
              <div className="col-6 col-md-4 col-xl-2 logos-section_item">
                  <div className="d-flex align-items-center">
                    <div>
                      <Image className="img-fluid" width="40" height="40" src="/logo-slide-1.png" alt="" />
                    </div>
                    <div>
                      <div className="ps-2 text-start logos-text">100% Certified Jewellery</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-2 logos-section_item">
                  <div className="d-flex align-items-center">
                    <div>
                      <Image className="img-fluid" width="40" height="40" src="/logo-slide-1.png" alt="" />
                    </div>
                    <div>
                      <div className="ps-2 text-start logos-text">100% Certified Jewellery</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-2 logos-section_item">
                  <div className="d-flex align-items-center">
                    <div>
                      <Image className="img-fluid" width="40" height="40" src="/logo-slide-1.png" alt="" />
                    </div>
                    <div>
                      <div className="ps-2 text-start logos-text">100% Certified Jewellery</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-2 logos-section_item">
                  <div className="d-flex align-items-center">
                    <div>
                      <Image className="img-fluid" width="40" height="40" src="/logo-slide-1.png" alt="" />
                    </div>
                    <div>
                      <div className="ps-2 text-start logos-text">100% Certified Jewellery</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-2 logos-section_item">
                  <div className="d-flex align-items-center">
                    <div>
                      <Image className="img-fluid" width="40" height="40" src="/logo-slide-1.png" alt="" />
                    </div>
                    <div>
                      <div className="ps-2 text-start logos-text">100% Certified Jewellery</div>
                    </div>
                  </div>
                </div>
          </Flickity>
        </div>
      </div>
    </section>
  );
}

export default LogosSlider;
