import React, { useEffect } from 'react';
import Slider from 'react-slick';
import Image from '../img/7.jpg'
import Image2 from '../img/8.jpg'
import Image3 from '../img/9.jpg'
import styled from 'styled-components'
import $ from 'jquery'
import anime from 'animejs'
import './slick.slider.css'
const Layer = styled.div` 
    height:100px
    background-position: center;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;

`


const Text = styled.div`
font-size:80px;
color:#f7f7f7;
position:absolute;
top:140px;
padding-left: 2em;
z-index:99;
word-spacing:20%;
font-weight:500;
line-height:100px;
font-family: Georgia, 'Times New Roman', Times, serif;
// // transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
// // transform-origin: 50% 50% 0px;
animation-iteration-count: inherit;
animation-name: fadeIn;
animation-duration: 4s;
animation-direction: normal;
animation-delay: 0s;


@keyframes fadeIn {
    0% {opacity: 0;}
    50% {opacity: 0.5 }
    100% {opacity: 1}
    
}
   
`


export default function CarouselSlider() {

  useEffect(() => {

    $('.ml3').each(function () {
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    ml.timelines["ml3"] = anime.timeline({ loop: true })
      .add({
        targets: '.ml3 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: function (el, i) {
          return 150 * (i + 1)
        }
      }).add({
        targets: '.ml3',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 2000
      });

  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    lazyLoad: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,


  }
  var ml = {
    timelines:
    {

    }
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <Layer>
          <div>
          <img src={Image3}></img>
          <Text >
        
              <span>You order,</span><br></br>
            we pick up<br></br>
            we deliver
              
          </Text>
          </div>
          
        </Layer>
        <Layer>

          <img src={Image2}></img>
          <Text>Select wines from a region,<br></br>
not just wine from a winery</Text>

        </Layer>
        <Layer>

          <img src={Image}></img>
          <div className="my-auto">
            <Text >Which wine? <br></br>This is your Choice</Text>
          </div>

        </Layer>

      </Slider>
    </div>

  )
}