import React,{useSTate} from 'react'
// import {Link} from "gatsby"
export default function SecondaryNav() {
    const [path, setPath] = React.useState("")
    
       const url = window.location.pathname.replace('/',"")
    

    return (
        <div className="bg-laser flex justify-between items-center px-16  py-2">
            <p className="text-2xl "><h3 className="uppercase text-white" to={`/${url}`}>{url}
            </h3></p>

            <p className="text-white ">You are here: <h3 className="capitalize text-white" to="/">Home</h3> / <span className="capitalize">{url}</span>winieries</p>
        </div>
    )
}
