/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient 
        p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 25, // max tilt rotation (degrees)
            scale: 1, // 2 = 200%, 1.5 = 150%, etc..
            speed: 450, // Speed of the enter/exit transition
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12
        min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3
            className="text-white text-[20px]
          font-bold text-center"
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[22px]
      max-w-3xl leading-[30px]"
      >
        Combining tech, art, and humane interaction for a better world 💛🦾🌱
        <br></br>
        <br></br>
        I&apos;m always eager to learn more. Passionate about applying new
        technologies, I embrace creativity in various aspects. While Life
        experiences have taught me adaptability, and my unique problem-solving
        approach sets me apart from the usual. I&apos;m still able to work in a
        team, fostering a collaborative environment.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} /> //spread operator is a convenient way to pass all properties of an object as props to a React component. It's especially useful when you have an object with many properties and you want to avoid writing out each property individually.
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about"); //utilizing higher order function by wrapping this component with SectionWrapper and passing in the About component and the idName of "about" as arguments
