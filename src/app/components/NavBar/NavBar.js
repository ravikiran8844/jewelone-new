import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <div className="main-header">
      <div className="container">
        <div className="header-1 col-12 d-flex justify-content-between align-items-center">
          <div>
            <div>
              <Link href="/">
              <Image priority className='img-fluid' height={66} width={256} src="/jewel-one-logo.png" alt="jewelone logo"/></Link>
            </div>
          </div>
          <div>
            <div>
              <ul className='list-unstyled d-flex justify-content-between m-auto'>
                <li className='ms-2'>
                  <Link href="/shop">
                  <div className='text-center'>
                  <Image className='img-fluid' height={32} width={32} src="/shop.svg" alt="shop"/>
                    <div className='text-uppercase header1-menu-link-title  d-none d-md-block' >
                    stores
                    </div>
                  </div>
                  </Link>
                </li>
                <li className='ms-2'>
                  <Link href="/account">
                  <div className='text-center'>
                  <Image className='img-fluid' height={32} width={32} src="/account.svg" alt="shop"/>
                    <div className='text-uppercase header1-menu-link-title d-none d-md-block' >
                    ACCOUNT
                    </div>
                  </div></Link>
                </li>
                <li className='ms-2'>
                 <Link href="/cart">
                 <div className='text-center'>
                  <Image className='img-fluid' height={32} width={32} src="/cart.svg" alt="shop"/>

                    <div className='text-uppercase header1-menu-link-title d-none d-md-block' >
                    CART
                    </div>
                  </div>
                 </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className='mega-menu'>
          <div>
            mega menu
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default NavBar;
