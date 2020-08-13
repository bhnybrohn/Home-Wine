import React from 'react'
import PrimaryNav from './Layout/primaryNav'
import TertiaryNav from './Layout/tertiaryNav'
// import Carousel from './Layout/carousel'
import Midsection from './Layout/midsection'
// import Carousel2 from './Layout/carousel2'
import Footer from './Layout/footer'
import Slider from './Layout/react.slider'




export default function Index() {
    return (

        <div className="app" >
            <div className="sticky top-0 z-10">
            <TertiaryNav />
            <PrimaryNav />
            </div>
         <Slider/>
            {/* <Carousel/> */}
            <Midsection/>
            {/* <Carousel/> */}
            <Footer/>
        </div>

                   )
}