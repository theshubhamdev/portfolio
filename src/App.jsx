import React from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Header from "./Components/Header";

import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";

import "./Styles.css";
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Parallax pages={4} style={{height:"100vh"}} className="my-swiper">
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{height:"100vh", display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          className="full-wh my-swiper"
          >
          <Section1 />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2} style={{ height:"100vh", backgroundColor: '#1e2632' }} />
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            height:"100vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
          <Section2 />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={2} style={{ height:"100vh", backgroundColor: '#1e2632' }} />
        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            height:"100vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
          <Section3 />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={2} style={{ height:"100vh", backgroundColor: '#1e2632' }} />
        <ParallaxLayer
          offset={3}
          speed={0.5}
          style={{
            height:"100vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
          <Section4 />
        </ParallaxLayer>
      </Parallax>
    </React.Fragment>
  )
}