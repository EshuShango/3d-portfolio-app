// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import React, {useState} from "react";
// import   ErrorBoundary   from "./utils/index";
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
  // Menu,
} from "./components";
// export const Section = (props) => {
//   const { children } = props;
//   return (
//     <section className="h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center ">
//       {children}
//     </section>
//   );
// };
const App = () => {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    // <ErrorBoundary >
    <BrowserRouter>
        
       <div className="relative z-0 bg-primary">
        <div className=" bg-cover bg-no-repeat bg-center">
          {/* <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      /> */}
      <Navbar onSectionChange={setSection}
    menuOpened={menuOpened}
    setMenuOpened={setMenuOpened} />
          <Hero />
          <StarsCanvas />
        </div>
        <About section={section} menuOpened={menuOpened}/>
        <Experience />
        <Tech section={section} menuOpened={menuOpened} />
        <Works section={section} menuOpened={menuOpened}/>
        <Feedbacks />

        <div className="relative z-0">
          <Contact section={section} menuOpened={menuOpened}/>
        </div>
      </div> 
      
    </BrowserRouter>
    // </ErrorBoundary>
  );
};

export default App;
