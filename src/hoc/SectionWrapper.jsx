// import React from "react"
import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variant={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl
      mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;

//* This code exports a Higher Order Component (HOC) called SectionWrapper. 
// The HOC takes two arguments, a component and an idName. 
// The HOC returns a function that renders a motion section with the given component and idName.

//^ Step by step explanation:
// 1. Define a function called SectionWrapper that takes two arguments, a component and an idName.
// 2. The function returns a new function called HOC.
// 3. The HOC function returns a JSX element that renders a motion section.
// 4. The motion section has several properties:
//    - variant: a function that returns a staggered animation for the section's children.
//    - initial: the section is initially hidden.
//    - whileInView: the section is shown when it is in view.
//    - viewport: the section is shown only once and when it is 25% visible.
//    - className: a string that sets the padding and maximum width of the section.
// 5. The motion section contains a span element with the given idName.
// 6. The motion section also contains the given component.
// 7. The SectionWrapper function is exported as the default export of the module.