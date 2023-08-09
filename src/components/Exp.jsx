import { motion } from "framer-motion";
import { Avatar } from "./Avatar";
import { Canvas } from "@react-three/fiber";
import { useControls, Leva } from "leva";
import { OrbitControls, PresentationControls, ContactShadows } from "@react-three/drei";
import { SectionWrapper } from "../hoc";
// import { animations } from "framer-motion";

export const Exp = (props) => {
  const { section } = props;
  return (
    <>
      {/* <Canvas shadows camera={[-1.5, 2, 10]}> */}
        <motion.group
          position={[0, 0, 0]}
          animate={{
            z: section === 1 ? 0 : -10,
            y: section === 1 ? -viewport.height : -1.5,
          }}
        >
          {/* <OrbitControls position={[1.5, 3, 10]} enableZoom={false} /> */}
          <PresentationControls
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 500 }}
            rotation={[1.5, .001, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <group position={[0.075, 2, 4]}>
              <directionalLight intensity={0.5} />
              <group scale={[-20, 20, 20]}>
                <Avatar animations={section === 0 ? "Falling" : "Standing"} />
              </group>
            </group>
          </PresentationControls>
          <ContactShadows
            position={[0, -1.4, 0]}
            opacity={0.75}
            scale={10}
            blur={2.5}
            far={4}
          />
        </motion.group>
        <Leva hidden={true} />
        <ambientLight position={[-5, 3, 5]} intensity={0.5} />
      {/* </Canvas> */}
    </>
  );
};

export default SectionWrapper(Exp, "");