import React from 'react'
// import styled from 'styled-components'

// const Nav = styled.div`

  
//   position: fixed;
//   top: 0;
//   width: 100%;

// `
export default function TertiaryNav() {
    return (
        <div className="bg-topNav h-8 " >
            <div className="container flex justify-end  mx-auto my-auto " >
                <h3 to="/signin" className='text-white text-xls px-1 py-1 text-right font-medium  ' > Login </h3>
                <h3 className="text-white text-right pl-1 pr-8 py-1 text-xls font-medium" > Cart 0 $0 .00 </h3>
            </div>
        </div>
    )
}