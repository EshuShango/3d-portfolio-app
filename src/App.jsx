// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
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
} from "./components";
const App = () => {
  return (
    // <ErrorBoundary >
    <BrowserRouter>
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
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
    // </ErrorBoundary>
  );
};

export default App;
