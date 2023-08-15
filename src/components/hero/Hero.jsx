import React, {useState} from "react";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import { styles } from "../../styles";
import { navLinks } from "../../constants";
import { Link } from "react-router-dom";

// import { useMobile } from "../../utils/isMobile";
// import { ComputersCanvas } from "../canvas";
import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import Contact from "../navbar/Contact";

const Hero = () => {
  const [active, setActive] = useState("");
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      className="relative  w-full h-screen
    mx-auto"
    >
      <div
        className={`${styles.paddingX} absolute 
    inset-4 top-[120px] max-w-7xl mx-auto flex 
    flex-row items-start gap-5 `}
      >
        <div
          className="flex flex-col
      justify-center items-center mt-5"
        >
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="px-1 italic font-extrabold leading-snug  backdrop-blur-[3px]">
          <h1
            className={`${styles.heroHeadText}
          text-white`}
          >
            👋, call me <span className="text-[#915eff]">Olu</span>{" "}
          </h1>

          <motion.p
            className={`${styles.heroSubText}
            mt-2 text-white-100`}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 1,
              },
            }}
          >
            Creative thinker, self driven <br className="sm: block hidden" />{" "}
            and capable <strong>humane</strong> being, helping people find
            solutions.
          </motion.p>



          <a href="#contact">
          <motion.button
            className={` bg-indigo-gradient backdrop-blur hover:bg-indigo-600 border-2 border-500  sticky text-white py-4 px-8  font-bold text-lg mt-16  rounded-full `}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 2,
              },
            }}
            type="button"
            // onClick={() => setActive()}
        
          >
             {/* <Link
                to="#contact"
                onClick={() => {
                  setActive(`#contact`);
                  scrollToSection("#contact");
                }}
              > */}
                Get in touch
                
              {/* </Link> */}
            {/* <motion.a href="#contact" className="text-[#915eff]"> */}
            
            {/* </motion.a> */}
          </motion.button>
      </a>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

                <motion.div
                  variants={slideIn("right", "tween", 0.2, 1)}
                  className="h-full w-full "
                  scale={[0.9, 0.9, 0.9]}
                >
                  <EarthCanvas />
                </motion.div>
      <div
        className="absolute xs:bottom-10
        bottom-32 w-full flex  justify-center
        items-center"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px]
            rounded-3xl border-4 border-secondary flex justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
