import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Canvas, extend} from "@react-three/fiber";
import { Scroll, ScrollControls,  } from "@react-three/drei";
extend({ Canvas, Scroll, ScrollControls });
// import   {ErrorBoundary}   from "./utils/index";
// import { ModelField } from "./components/ModelField";

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
} from "./components";
import { Interface } from "./components/Interface";
import { motion, MotionConfig } from "framer-motion";
import { Exp } from "./components/Exp";
import { ScrollManager } from "./components/ScrollManager";
// import { Experience } from "./components";
// import { MotionConfig } from "framer-motion";

const App = (props) => {
  const [section, setSection] = useState(0);
  // const [menu, setMenu] = useState(false);

  return (
    <>
      {/* <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className=" bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0 ">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter> */}

      {/* How to get full display of the website? */}

        {/* <MotionConfig
          transition={{
            type: "spring",
            mass: 5,
            stiffness: 500,
            damping: 50,
            restDelta: 0.0001,
          }}
        > */}
        {/* <BrowserRouter> */}
          {/* <Canvas camera={{ position: [3, 3, 3], fov: 50 }}> */}
            {/* <ScrollControls pages={7} damping={0.5}>
              <ScrollManager section={section} onSectionChange={setSection} />
              <Scroll > */}
                {/* <ambientLight intensity={0.5} /> */}
                {/* <Exp /> */}
              {/* </Scroll>
              <Scroll html> */}
                <Interface section={section} />
                {/* <Interface style={{section}}/> */}
              {/* </Scroll>
            </ScrollControls> */}
          {/* </Canvas> */}
      {/* </BrowserRouter> */}
        {/* </MotionConfig> */}
    </>
  );
};

export default App;

{
  /* <BrowserRouter>

    <div className="relative z-0 bg-primary">
      <div className=" bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0 ">
        <Contact />
        <StarsCanvas />
      </div>
    </div>

 </BrowserRouter> */
}

// q: what does SOLID stand for?
// a: SOLID is an acronym for the first five object-oriented design (OOD) principles by Robert C. Martin (also known as Uncle Bob).
//  SOLID stands for:
// S: Single responsibility principle (SRP)
// O: Open-closed principle (OCP)
// L: Liskov substitution principle (LSP)
// I: Interface segregation principle (ISP)
// D: Dependency inversion principle (DIP)

// q: Single Responsibility Principle
// a: A class should have one and only one reason to change, meaning that a class should have only one job.
//  Furthermore, it should only have one responsibility, which is why it is called SRP.

// q: Open-Closed Principle
// a: Objects or entities should be open for extension but closed for modification.
//  This means that a class should be extendable without modifying the class itself.

// q: Liskov Substitution Principle
// a: Every subclass/derived class should be substitutable for their base/parent class.
//  LSP is a particular definition of a subtyping relation, called (strong) behavioral subtyping.

// q: Interface Segregation Principle
// a: A client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use.
//

// q: Dependency Inversion Principle
// a: Entities must depend on abstractions not on concretions.
// It states that the high level module must not depend on the low level module, but they should depend on abstractions.
