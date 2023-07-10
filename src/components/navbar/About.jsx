import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt
    className="xs:w-[250px] w-full"
    >

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px]
      max-w-3xl leading-[30px]"
      >
      Visioneer 👁️ | Software Constructor 🧠 | AI Enthusiast & Prompt Engineer 🤖 | MDA 🎨 Combining tech, art, and humane interaction for a better world 💛🦾🌱
      <br>
      </br>
      <br>
      </br>
      Among other things, I consider myself a Software Constructor experienced in JavaScript and TypeScript. I have worked with frameworks like Node, Express, and React, and I'm always eager to learn more. Passionate about applying new technologies, I embrace creativity in various aspects. Life experiences have taught me adaptability, and my unique problem-solving approach sets me apart.🚀💻🎨
      
      </motion.p>

      <div 
      className="md-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title}
          index={index} {...service} /> //spread operator is a convenient way to pass all properties of an object as props to a React component. It's especially useful when you have an object with many properties and you want to avoid writing out each property individually.
        ))}

      </div>
    </>
  );
};

export default About;
