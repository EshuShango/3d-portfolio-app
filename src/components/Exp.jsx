import { motion } from "framer-motion";
import { Avatar } from "./Avatar";
import { Canvas, useThree, useFrame, extend} from "@react-three/fiber";

import { Leva } from "leva";
import {
  // OrbitControls,
  PresentationControls,
  ContactShadows,
} from "@react-three/drei";
extend({ PresentationControls, ContactShadows });
import { SectionWrapper } from "../hoc";
import { useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

// import { animations } from "framer-motion";
// rememeber to add the menuOpended prop
export const Exp = (props) => {
  const { section, menuOpened, children } = props;
  
  // const { viewport } = useThree();

  // const cameraPosX = useMotionValue();
  // const cameraLookAtX = useMotionValue();
  // useEffect(() => {
  //   animate(cameraPosX, menuOpened ? -5 : section === 0);
  //   animate(cameraLookAtX, menuOpened ? 5 : section === 0);
  // }, [menuOpened]);

  // useFrame((state) => {
  //   state.camera.position.x = cameraPosX.get();
  //   state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  // });
  return (
    <>
      {/* <Canvas shadows camera={[-1.5, 2, 10]}> */}
      <ambientLight intensity={0.5} />
      {/* <motion.group
        position={[0, -1.5, -10]}
        rotation-y={Math.PI / 4}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      > */}
        {/* <OrbitControls position={[1.5, 3, 10]} enableZoom={false} /> */}
        <PresentationControls
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 500 }}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        
        >
          <group position={[0.075, -25, 25]}>
            <directionalLight intensity={0.5} />
            <group scale={[-20, 20, 20]}>
              <Avatar animation={section === 0 ? "Falling" : "Standing"} />
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
      {/* </motion.group> */}
      <Leva hidden={true} />
      <ambientLight position={[-5, 3, 5]} intensity={0.5} />
      {/* </Canvas> */}
    </>
  );
};

export default SectionWrapper(Exp, "");
