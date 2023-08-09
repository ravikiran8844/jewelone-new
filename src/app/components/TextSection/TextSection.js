import React from 'react';

const TextSection = () => {
  return (
    <div className="container-lg p-0 text-center my-5">
      <div className="lc-block card border-0 text-center p-4" style={{ background: "url(/rich-text-section-bg.webp) left / cover no-repeat" }}>
        <div className="row card-body mb-3 mb-lg-4">
          <div className="col-xl-11 col-xxl-9 mx-auto text-white">
            <div className="lc-block">
              <div className="main-heading text-white mb-3">Designed For Everyday Glamour</div>
              <div className="caption-text text-white">Creating jewellery that is exquisitely made with care, passion, and love. <span><a className="view-more-link" href="/shop">View more.</a></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextSection;
