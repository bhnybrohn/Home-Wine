import React, { useEffect } from 'react'
import Primary from '../Layout/primaryNav';
import TertiaryNav from '../Layout/tertiaryNav';
import SecondaryNav from '../Layout/secondaryNav'
import Footer from '../Layout/footer'
import AOS from 'aos';
// import Images from './winiries.image'
import Img from './wineriesimgs/jj.jpg'
import Img1 from './wineriesimgs/fc.jpg'
import Img2 from './wineriesimgs/wr.jpg'
import Img3 from './wineriesimgs/ww.jpg'
import Img4 from './wineriesimgs/shingleback-1.png'
import Img5 from './wineriesimgs/paxton-1.png'
import Img6 from './wineriesimgs/associate-1-1.png'
import Img7 from './wineriesimgs/hither-yon-1.png'
import Img8 from './wineriesimgs/hedonist-1.png'
import Img9 from './wineriesimgs/hastwell-lightfoot-1.png'
import Img00 from './wineriesimgs/pennys-hill-1-1.png'
import Img01 from './wineriesimgs/five-geese-1-1.png'
import Img02 from './wineriesimgs/koltz-1.png'
import Img03 from './wineriesimgs/eccolo-1.png'
import Img04 from './wineriesimgs/sisters-run-1-1.png'
import Img05 from './wineriesimgs/heirloom-1-1.png'
import Img06 from './wineriesimgs/dandelion-1-1.png'
import Img07 from './wineriesimgs/1.jpg'
import Img08 from './wineriesimgs/2.png'



import styled from 'styled-components'

//  useEffect(() => {
//     AOS.init({
//         offset:400,
//         duration:1000
//       });

// }, []);

export default function wineries() {
    return (

        <>
            <TertiaryNav />
            <Primary />
            <SecondaryNav />

            <p className="text-sm font-light text-center px-16 mt-8 container ">Enjoy wines from some of the best wineries
            in the country. Explore wines from Australia’s best wine regions. We invite you to explore
             the wine from our many wineries. Join one of our wine clubs and explore new sensations</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
             lg:grid-cols-4 sgap-4 lg:mx-auto gap-10 justify-center px-16  
             text-center mx-auto mt-8 mb-16 container">
                <div className="grid" data-aos="zoom-in"   data-aos-duration="1000">
                <img src={Img} alt="jj"/>
                </div>
                <div className="grid" data-aos="zoom-in"   data-aos-duration="1500">
                <img src={Img1} alt="fc"/>
                </div>
                <div className="grid" data-aos="zoom-in"   data-aos-duration="2000">
                <img src={Img2} alt="wr"/>
                </div>
                <div className="grid" data-aos="zoom-in"   data-aos-duration="2500">
                <img src={Img3} alt="ww"/>
                </div>
                <div className="grid" data-aos="zoom-in"  data-aos-duration="3000">
                <img src={Img4} a/>              
                  </div>
                <div className="grid" data-aos="zoom-in"  data-aos-duration="3500">
                <img src={Img5} a/>   
                </div>
                <div className="grid" data-aos="zoom-in" data-aos-duration="4000" >
                <img src={Img6} a/>   
                </div>
                <div className="grid" data-aos="zoom-in" data-aos-duration="4500">
                <img src={Img7} a/>   
                </div>
                <div className="grid" data-aos="zoom-in" data-aos-duration="5000">
                <img src={Img8} a/>   
                </div>
               <div className="grid" data-aos="zoom-in" data-aos-duration="5500">
               <img src={Img9} a/>   
                </div>
                <div className="grid" data-aos="zoom-in"   data-aos-duration="6000">
                <img src={Img00} alt="fc"/>
                </div>
                <div className="grid" data-aos="zoom-in"   data-aos-duration="6500">
                <img src={Img01} alt="wr"/>
                </div>
                <div className="grid" data-aos="zoom-in"   data-aos-duration="7000">
                <img src={Img02} alt="ww"/>
                </div>
                <div className="grid" data-aos="zoom-in"  data-aos-duration="3000">
                <img src={Img03} a/>              
                  </div>
                <div className="grid" data-aos="zoom-in"  data-aos-duration="3500">
                <img src={Img04} a/>   
                </div>
                <div className="grid" data-aos="zoom-in" data-aos-duration="4000" >
                <img src={Img05} a/>   
                </div>
                <div className="grid" data-aos="zoom-in" data-aos-duration="4500">
                <img src={Img06} a/>   
                </div>
                <div className="grid" data-aos="zoom-in" data-aos-duration="5000">
                <img src={Img07} a/>   
                </div>
                <div className="grid" data-aos="zoom-in" data-aos-duration="5000">
                <img src={Img08} a/>   
                </div>
              
              
              
              
    {/* <Img2/>  */}
                {/* <Img3/> */}
            </div>
            <Footer />
        </>

    )
}

const LogoCard = styled.div`
height:250px;
//  width:auto; 
background-color:red;
`;

const Logo = () => {
    return (
        <LogoCard className="w-64 sm:w-full  mx-auto">
            hello wolrd
        </LogoCard>
    )
}