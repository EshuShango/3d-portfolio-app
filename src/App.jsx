// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import {
  About,
  Contact,
  Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  // Menu,
} from "./components";

const App = () => {
  // need to add better error handling.
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className=" bg-cover bg-no-repeat bg-center">
          <Navbar
            onSectionChange={setSection}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
          />
          <Hero />
          <StarsCanvas />
        </div>
        <About section={section} menuOpened={menuOpened} />
        <Experience />
        <Tech section={section} menuOpened={menuOpened} />
        <Works section={section} menuOpened={menuOpened} />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact section={section} menuOpened={menuOpened} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
