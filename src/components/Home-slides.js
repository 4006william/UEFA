import React, { Component } from 'react'
import Swiper from 'react-id-swiper';
import Sushi from '../images/sushi.jpeg'
import Soccer from '../images/soccer.jpg'
import Vball from '../images/vball.jpg'


//images sliding in the home body 

class HomeSlides extends Component {
   
  render(){
    const params = {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next .tree',
        prevEl: '.swiper-button-prev'
      },
      containerClass: 'swiper-container'
    }
    const soccer = () => {
      window.location.href="#soccer"
    }
    const sushi = () => {
      window.location.href="#sushi"
    }
     const vball = () => {
      window.location.href="#vball"
    }
  return (
      <div className="homeSlides">
          <Swiper {...params}>
          <button onClick={soccer}><img src={Soccer} alt={<p>globe</p>} />
                <h3>Pep Guardiola To Be Sacked By Christmas Break...</h3>
                <p>Soccer Pros App Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. 
                </p>
            </button>
          <button onClick={sushi}><img src={Sushi} alt={<p>globe</p>} /><p>Sushi Restaurants</p></button>
          <button onClick={vball}><img src={Vball} alt={<p>globe</p>} /><p>Volleyball Game</p></button>
          </Swiper>
    </div>
  )}
};
export default HomeSlides;