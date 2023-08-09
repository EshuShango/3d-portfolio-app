// your an expert Senior FullStack Developer. Help us to build great software

import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "../components";
const Section = (props) => {
  const {children} = props;
  return <section className="h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center " >{children}</section>;
};

export const Interface = () => {
  return (
    <div className=" flex flex-col items-center w-full">

    <BrowserRouter>
    <div className="relative z-0 bg-primary">
     
          <Section>
          {/* <div className=" bg-cover bg-no-repeat bg-center"> */}
        <Navbar />
        <Hero />
      {/* </div> */}
          </Section>
          <Section>
            <About />
          </Section>
          
            <Experience />
          
          <Section>
            <Tech />
          </Section>
          <Section>
            <Works />
          </Section>
          <Section>
            <Feedbacks />
          </Section>
          <Section>
             {/* <div className="relative z-0 "> */}
        <Contact />
        <StarsCanvas />
      {/* </div> */}
          </Section>
    </div>
    </BrowserRouter>  
    </div>
    
    
  )
}


