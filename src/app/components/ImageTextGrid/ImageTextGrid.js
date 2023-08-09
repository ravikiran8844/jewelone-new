import React from 'react';

const ImageTextGrid = () => {
  return (
    <div className="container overflow-hidden mb-5">
      <div className="row g-0">

        <div className="col-lg-6 order-1 order-lg-0" style={{ minHeight: '45vh', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url("/home-bannner1-1.webp")' }}>
        </div>
        <div className="col-lg-6 my-auto px-5 py-5 order-0 order-lg-1">
          <div className="lc-block">
            <div className="text-center text-lg-start">
              <div className="main-heading mb-3 body-text-dark">Buy Now Pay Later</div>
              <div className="caption-text mb-4 body-text-light">PayLater by Grab | Atome</div>
              <p className="main-text mb-4 body-text-light">Get what you want now, pay later. 3 split payments with 0% interest, no credit card required.</p>
              <a className="links-custom-btn" href="/shop">LEARN NOW <span className="ms-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.8227 4.51949L16.0235 0.194639C15.9684 0.133112 15.9026 0.0844526 15.8301 0.0510941C15.7575 0.0177356 15.6796 0.000488281 15.6009 0.000488281C15.5223 0.000488281 15.4444 0.0177356 15.3718 0.0510941C15.2993 0.0844526 15.2335 0.133112 15.1783 0.194639C15.0687 0.324946 15.0078 0.495696 15.0078 0.672962C15.0078 0.850227 15.0687 1.02098 15.1783 1.15128L17.9686 4.32047H0.618087C0.454173 4.32047 0.29697 4.39192 0.181066 4.519C0.0651612 4.64609 0 4.81857 0 4.9983C0 5.17802 0.0651612 5.35002 0.181066 5.47711C0.29697 5.60419 0.454173 5.67564 0.618087 5.67564H17.9686L15.1783 8.84483C15.0687 8.97513 15.0078 9.14588 15.0078 9.32315C15.0078 9.50041 15.0687 9.67116 15.1783 9.80147C15.2328 9.86437 15.2983 9.91419 15.371 9.94842C15.4436 9.98265 15.5219 10.0005 15.6009 10.0005C15.68 10.0005 15.7583 9.98265 15.8309 9.94842C15.9036 9.91419 15.9691 9.86437 16.0235 9.80147L19.8227 5.47662C19.9364 5.3486 20 5.17699 20 4.9983C20 4.81961 19.9364 4.64751 19.8227 4.51949Z" fill="#C0832B"></path>                </svg>
              </span></a>
            </div>
          </div>
        </div>

      </div>
      <div className="row g-0">
        <div className="d-none d-lg-block col-lg-6 order-lg-2" style={{ minHeight: '45vh', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url("/home-bannner2-1.webp")' }}>

        </div>
        <div className="col-lg-6 order-lg-1 my-auto px-5 py-5">
          <div className="lc-block">
            <div className="text-center text-lg-start">
              <div className="main-heading mb-3 body-text-dark">Perfect Gift Ideas</div>
              <div className="caption-text mb-4 body-text-light"></div>
              <p className="main-text mb-4 body-text-light">Comes with JewelOne jewellery box, silver polishing cloth and paper bag</p>
              <a className="links-custom-btn" href="/shop/">SHOP GIFTS <span className="ms-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.8227 4.51949L16.0235 0.194639C15.9684 0.133112 15.9026 0.0844526 15.8301 0.0510941C15.7575 0.0177356 15.6796 0.000488281 15.6009 0.000488281C15.5223 0.000488281 15.4444 0.0177356 15.3718 0.0510941C15.2993 0.0844526 15.2335 0.133112 15.1783 0.194639C15.0687 0.324946 15.0078 0.495696 15.0078 0.672962C15.0078 0.850227 15.0687 1.02098 15.1783 1.15128L17.9686 4.32047H0.618087C0.454173 4.32047 0.29697 4.39192 0.181066 4.519C0.0651612 4.64609 0 4.81857 0 4.9983C0 5.17802 0.0651612 5.35002 0.181066 5.47711C0.29697 5.60419 0.454173 5.67564 0.618087 5.67564H17.9686L15.1783 8.84483C15.0687 8.97513 15.0078 9.14588 15.0078 9.32315C15.0078 9.50041 15.0687 9.67116 15.1783 9.80147C15.2328 9.86437 15.2983 9.91419 15.371 9.94842C15.4436 9.98265 15.5219 10.0005 15.6009 10.0005C15.68 10.0005 15.7583 9.98265 15.8309 9.94842C15.9036 9.91419 15.9691 9.86437 16.0235 9.80147L19.8227 5.47662C19.9364 5.3486 20 5.17699 20 4.9983C20 4.81961 19.9364 4.64751 19.8227 4.51949Z" fill="#C0832B"></path>                </svg>
              </span></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ImageTextGrid;
