import React, { useEffect } from 'react';
import '../layerslider/css/layerslider.css'
import $ from 'jquery';
import LayerJquery from '../layerhooks/layer.jquery'
import layerEasing from '../layerhooks/layer.jquery.easing'
import LayerKreatura from '../layerhooks/layer.kreaturamedia'
import LayerTransit from '../layerhooks/layer.transit.jquery'
import LayerTransition from '../layerhooks/layer.transitions'
import Image from '../img/5.jpg';
import Image2 from '../img/6.png';
// import src from '*.bmp';

import styled from 'styled-components'
const Text = styled.h3`
    top:100px;
    left: 175.433px; 
    font-weight: 500; 
     font-size: 50px; 
    line-height: 50px; 
    color: #CCA46C;
    font-family: Georgia;
     width: 761.2px; white-space: normal;
    margin: 0px;
    z-index: auto;
    height: 105.557px;        padding: 0px;
     border-width: 0px;
    border-radius: 0px;
    letter-spacing: 0px;
    filter: none;

`;

const Img = styled.img`
background-position: center;
    width: 100%;
   
    max-height:200px
    background-repeat: no-repeat;
    background-size: cover;
`


const layersComponent = () => {
    LayerJquery('../layerslider/jquery/jquery.js')
}
const layereasing = () => {
    layerEasing('../layerslider/jquery/jquery-easing-1.3.js')
}
const kreaturamedia = () => {
    LayerTransit('../layerslider/jquery/jquery-transit-modified.js')
}
const transitJquery = () => {
    LayerKreatura('../layerslider/js/layerslider.Kreaturamedia.jquery.js')
}

const transitionJquery = () => {
    LayerTransition('../layerslider/js/layerslider.transition.js')

}

export default function Carousel() {

    // useEffect(() => {
    
    //     $('document').ready(function() {
    //         $('#layerslider').layerSlider({
    //             autoStart: true,
    //             responsive: true,
    //             responsiveUnder: 0,
    //             sublayerContainer: 0,
    //             firstLayer: 1,
    //             navPrevNext: false,
    //             navStartStop: true,
    //             navButtons: true,
    //             keybNav: true,
    //             touchNav: true,
    //             // twoWaySlideshow: true,
    //             pauseOnHover: false,
    //             showBarTimer: true,
    //             slideDirection: 'right',
    //             slideDelay: 4000,
    //             durationIn: 1000,
    //             durationOut: 3000,
    //             // easingIn: 'easeInOutQuint',
    //             // easingOut: 'easeInOutQuint',
    //             delayIn: 0,
    //             delayOut: 0,
    //             skin: 'minimal',
    //             skinsPath: 'layerslider/skins/',
    //         })
                      
    //     })
       
    // }, []);
    

    return (
            <>
        {/* <script src={layersComponent}></script>

        <script src={layereasing}></script>

        <script src={kreaturamedia}></script>

        <script src={transitJquery}></script>

        <script src={transitionJquery}></script>

        <div className="caruosel">

            <div id="layerslider" style={{ height: '700px', background:'#CCA46C' }}>

                <div className="ls-layer">
                    <img className="ls-bg" src={Image} alt="layer1-background"></img>
                    <Text className="ls-s1">Welcome to my page</Text>
                </div>

                <div className="ls-layer">
                    <img className="ls-bg" src={Image2} alt="layer2-background"></img>
                    <Text className="ls-s1">The winery</Text>
                </div>

                <div className="ls-layer">
                    <img className="ls-bg" src="./images/3.jpg" alt="layer2-background"></img>
                </div>
            </div>
        </div>
       */}

<>
       <div id="layerslider"  >
    <Img src={Image2}></Img>
     </div>

</>

 
        </>
    )
}