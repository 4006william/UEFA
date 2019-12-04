import React, { Component } from 'react'
import Swiper from 'react-id-swiper';
// import Sushi from '../images/sushi.jpeg'
// import Soccer from '../images/soccer.jpg'
// import Vball from '../images/vball.jpg'


//images sliding in the home body 

class HomeSlides extends Component {
   
  render(){
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30
    }
    // const soccer = () => {
    //   window.location.href="#soccer"
    // }
    // const sushi = () => {
    //   window.location.href="#sushi"
    // }
    //  const vball = () => {
    //   window.location.href="#vball"
    // }
  return (
      <div className="homeSlides">
         <Swiper {...params}>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
      <div>Slide 4</div>
      <div>Slide 5</div>
    </Swiper>
    </div>
  )}
};
export default HomeSlides;