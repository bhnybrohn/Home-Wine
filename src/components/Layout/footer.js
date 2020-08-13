import React from 'react'

export default function Footer() {
    return (
        <div className="footer mt-10">
            <div className="bg-darkgray text-white block md:flex  gap-6 px-16 py-16">
                <div className="left block md:flex md:space-x-20 w-full md:w-1/2 justify-between">
                    <div className="ll w-full md:w-9/13">
                        <p className="logo">
                            THE WINE<br />CONCIERGE
                          </p>
                        <p className="text-grayOrange text-sm">
                            The Wine Concierge is a new convenient way to access your favourite wines from South Australia’s premier wine regions.</p>
                        <p className="text-grayOrange mt-4 text-sm">Customers will be able to select their own or they can join some of our innovative clubs with regular deliveries throughout the year, either monthly, bi-monthly or quarterly. A simple but great service.</p>
                    </div>
                    <div className="lr w-full md:9/13 ">
                        <p className="uppercase text-grayOrange">site links</p>
                        <h4 to="/" className="uppercase block text-sm my-1 font-bold">About us</h4>
                        <h4 to="/" className="uppercase block text-sm my-1 font-normal">Terms & conditions</h4>
                        <h4 to="/" className="uppercase block text-sm my-1 font-normal">Regions</h4>
                        <h4 to="/" className="uppercase block text-sm my-1 font-normal">privacy policy</h4>
                        <h4 to="/" className="uppercase block text-sm my-1 font-normal">wineries</h4>
                        <h4 to="/" className="uppercase block text-sm my-1 font-normal">shipping</h4>
                    </div>
                </div>
                <div className="right block md:flex flex-1 md:w-1/2 justify-between md:space-x-16 lg:space-x-20">
                    <div className="rl flex h-12 w-full md:w-7/12 ">

                        <input type="text" name="" id="" className="mr-1 py-2 px-2 w-full inline-block text-gray-900 placeholder-gray-900" placeholder="Enter Email" />
                        <button className="bg-white text-gray-500 py-2 px-3"><i class="fas fa-search inline"></i></button>
                    </div>
                    <div className="rr w-full md:w-5/12">
                        <p className="uppercase text-grayOrange">contact info</p>
                        <p className="text-white">Address:</p>
                        <p className="text-grayOrange">
                            The Wine Concierge<br />
                        PO Box 366. McLaren Vale. SA. 5171</p>
                        <p className="">Phone:</p>
                        <p className="text-grayOrange">1300 885 966</p>
                        <p className="text-white">Email:</p>
                        <a href="mailto:admin@thewineconcierge.com.au" className="">admin@thewineconcierge.com.au</a>
                    </div>
                </div>
            </div>
            <div className="bg-darkGrayOrange px-16 py-2 border-top-2 border-paleOyster">
                <span className="text-paleOyster text-xs">
                    Legal Name: The Wine Concierge | License Number: 51406411 | Australian Information: Membership is for Australian residents only who are over 18 years oldUnder the Liquor Control Reform Act 1998 it is an offence: to supply alcohol to a person under the age of 18 years or a person under the age of 18 years to purchase or receive liquor </span>
            </div>
        </div>
    )
}
