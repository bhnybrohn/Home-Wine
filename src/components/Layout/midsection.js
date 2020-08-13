import React from 'react';

import Shop from '../img/1.jpg'
import Regions from '../img/2.jpg'
import Winerines from '../img/3.jpg'
import Wineclubs from '../img/4.jpg'


export default function Midsection() {
    return (
        <div className="mid_section mb-24">
            <div className='container'>
                <h3 className="text-center text-2xl font-medium mt-6">  OUR VISION </h3>
                <div className="text-lg text-topNav  text-center  text-Button">
                    The Wine Concierge is a convenient way to access
                    your favourite wines from South Australia’s premier wine regions. Our vision is to provide our customers with the option to select wines
                    from multiple wineries and
                    mixing their own case of wine, giving them the opportunity to try new varieties or brands without having to buy a case from each winery. A simple but great service.
           </div>

                <div className="text-xl mt-6 text-center text-Button">
                    The wineries on offer are some of the country’s best wineries and the most prestigious wines in the country. Customers will be able to select their own or
                    they can join some of our innovative clubs with regular deliveries throughout the year, either monthly, bi-monthly, quarterly or every six month.
                    You place the order, The Wine Concierge picks up and deliver
          </div>

                <div className="images_section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2
             lg:grid-cols-4 gap-4 lg:mx-auto gap-10 justify-between  mt-6">
                    <div className=" object-center">
                        <img src={Shop} alt="Shop" className="mx-auto " />
                        <div className="text-sm mt-4 text-center text-Button object-center">
                            Enjoy wines from some of the
                         best <br></br>wineries in the country</div>
                        <div className="click-button mt-4 flex">
                            <button className="bg-Button shadow-lg  hover:bg-Vision text-white py-2 px-4 rounded mx-auto ">Click me</button>
                        </div>
                    </div>

                    <div className="object-center  ">
                        <img src={Regions} alt="Regions" className="mx-auto" />
                        <div className="text-sm mt-4 text-center text-Button object-center">
                            Explore wines from Australia’s best<br></br> wine regions</div>
                            <div className="click-button mt-4">
                                <div className="flex">
                                <button className="bg-Button shadow-lg hover:bg-Vision text-white  mx-auto   py-2 px-4 rounded ">Click me</button>
                                </div>
                         
                        </div>

                    </div>
                    <div className=" ">
                        <img src={Winerines} alt="Winerines" className="mx-auto" />
                        <div className="text-sm mt-4 text-center text-Button">
                            We invite you to explore the wine <br></br>from our many wineries</div>
                            <div className="click-button mt-4 flex justify-center">
                            <button className="bg-Button shadow-lg hover:bg-Vision text-white  py-2 px-4 rounded  mx-auto  ">Click me</button>
                        </div>
                    </div>
                    <div className=" object-center ">
                        <img src={Wineclubs} alt="Wineclubs" className="mx-auto" />
                        <div className="text-sm mt-4 text-center text-Button">
                            Join one of our wine clubs and <br></br>explore new sensations</div>
                            <div className="click-button mt-4 flex ">
                            <button className="bg-Button shadow-lg hover:bg-Vision text-white  py-2 px-4 rounded mx-auto  ">Click me</button>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>

    )
}