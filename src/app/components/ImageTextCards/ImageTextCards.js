import Image from 'next/image';
import React from 'react';

const ImageTextCards = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center mb-5">
      <div className="row">

        <div className="col-md-4 mb-4">
          <div className="card_blocks-item card border-0">
            <div className="p-3 bg-white text-dark">
              <div className="text-center my-4">
                <div className="card_blocks-item_img-wrapper">
                  <Image className="img-fluid" width="65" height="65" src="/Group-14734.png" alt="" />
                </div>
              </div>
              <div className="card-body text-center">
                <div className="card-main-title mb-3">Affordable Jewellery</div>
                <div className="card-sub-title">High quality jewellery with affordable price</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card_blocks-item card border-0">
            <div className="p-3 bg-white text-dark">
              <div className="text-center my-4">
                <div className="card_blocks-item_img-wrapper">
                  <Image className="img-fluid" width="65" height="65" src="/Group-14733.png" alt="" />
                </div>
              </div>
              <div className="card-body text-center">
                <div className="card-main-title mb-3">Complementary Shipping</div>
                <div className="card-sub-title">Free shipping for orders above RM99 across India</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card_blocks-item card border-0">
            <div className="p-3 bg-white text-dark">
              <div className="text-center my-4">
                <div className="card_blocks-item_img-wrapper">
                  <Image className="img-fluid" width="65" height="65" src="/Vector-5.png" alt="" />
                </div>
              </div>
              <div className="card-body text-center">
                <div className="card-main-title mb-3">High-Quality Assured</div>
                <div className="card-sub-title">90 days warranty for every piece of our jewellery. T&Cs apply</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ImageTextCards;
