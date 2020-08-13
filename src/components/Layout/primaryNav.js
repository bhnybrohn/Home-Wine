import React, { useEffect } from 'react';
import Logo from '../img/logo.png'
import $ from 'jquery';
import styled from 'styled-components';
import SideLogo from '../img/1.png'

// const Nav = styled.div`

// position: fixed;
// top: 30px;
// width: 100%;

// `

const Img = styled.img`
width:2em;
height:2em;

-webkit-filter: invert(100%);
filter: invert(100%);
`
const Link = styled.h4`
  &:hover  {
   opacity:0.3;
   border-bottom: 3px solid white;
   transition: 500ms;
  }
  &:active {
    border-bottom: 3px solid white;
  }
  &:before{
    transition: 300ms;
    height: 5px;
    position: absolute;
    background-color: white;
    height: 0%;
    width: 100%;
    bottom: 0px;
  }
  &:hover::before {
    height: 5px;
  }

`

export default function Navbar() {

    useEffect(() => {
        $(document).ready(function () {
            var scrollTop = 0;
            $(window).scroll(function () {
                scrollTop = $(window).scrollTop();
                $('.counter').html(scrollTop);

                if (scrollTop >= 100) {
                    $('#global-nav').addClass('scrolled-nav');
                } else if (scrollTop < 100) {
                    $('#global-nav').removeClass('scrolled-nav');
                }

            });

        });
    }, []);

    return (
        <>
            <div className="bg-Nav bg-fixed w-full hidden lg:block"  >
                <div className="border-t border-b border-white pl-12 h-20">

                    <div className="inline-flex container sm:mx-auto  mx-auto" >
                        <div className="flex justify-start object-center mt-1 mx-auto sm:ml-1 " id="logo">
                            <img src={Logo} alt="the Wine Concierge" width="200px" height="150px" />
                        </div>

                        <div className="shadow-lg ml-auto items-center lg:flex lg:justify-end lg:space-x-4 hidden ">
                            <Link to="/" className="text-white font-medium text-xs mr-4 nav-text"> HOME </Link>
                            <Link to="/regions" className="text-white font-medium text-xs mr-4 nav-text">REGIONS </Link>
                            <Link to="/wineries" className="text-white font-medium text-xs mr-4  nav-text" > WINERIES </Link>
                            <Link to="/club" className="text-white font-medium text-xs mr-4  nav-text" > WINE CLUB </Link>
                            <Link to="/shop" className="text-white font-medium text-xs mr-4  nav-text" > SHOP </Link>
                            <Link to="/contact" className="text-white font-medium text-xs mr-4  nav-text" > CONTACT US </Link>
                            <Link src="https://img.icons8.com/pastel-glyph/64/000000/search--v2.png" alt="search" />
                        </div>


                    </div>
                </div>

            </div>
            <div>

                <div className="bg-Nav bg-fixed w-full transition transform lg:hidden "  >
                    <div className="border-t border-b border-white shadow-lg  pl-12 w-full h-20">


                        <div className="flex  justify-start" >
                            <Img src={SideLogo} className="my-auto absolute inset-y-0 left-0 

"/>
                            <div className="flex  object-center mt-1 mx-auto sm:ml-1 " id="logo">
                                <img src={Logo} alt="the Wine Concierge" width="200px" height="150px" />
                            </div>

                            <div className="mx-auto shadow-lg ml-auto items-center flex justify-end space-x-3">
                                <Img src="https://img.icons8.com/pastel-glyph/64/000000/search--v2.png" alt="search" />
                                <Img src="https://img.icons8.com/ios-filled/50/000000/menu.png" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>

    )
}

// }
// }
