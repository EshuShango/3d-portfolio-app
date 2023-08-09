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
import { Avatar } from "../components/Avatar";
import { Exp  } from "../components/Exp";
import { useControls } from "leva";
const Section = (props) => {
  const {children} = props;
  return <section className="h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center " >{children}</section>;
};

export const Interface = () => {
  const [section, setSection] = useState(0);
  return (
    <div className=" flex flex-col items-center w-full">

    <BrowserRouter >
    <div className="relative z-0 bg-primary">
     
          <Section>
          {/* <div className=" bg-cover bg-no-repeat bg-center"> */}
        <Navbar />
        <Hero />
        <Exp section={section}/>
      {/* </div> */}
          </Section>
          <Section>
            <About />
          </Section>
          {/* <Section>
            <Experience />
          </Section> */}
          <Section>
            <Tech />
          </Section>
          <Section>
            <Works />
          </Section>
          {/* <Section>
            <Feedbacks />
          </Section> */}
          <Section>
             {/* <div className="relative z-0 "> */}
        <Contact />
        {/* <StarsCanvas /> */}
      {/* </div> */}
          </Section>
    </div>
    </BrowserRouter>  
    </div>
    
    
  )
}


