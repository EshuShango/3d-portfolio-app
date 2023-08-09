import { motion } from "framer-motion";
import { Avatar } from "./Avatar";
import { Canvas } from "@react-three/fiber";

export const Exp = (props) => {
  const { section } = props;
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} />

        <group position={[0, -1.5, -10]}>
          <directionalLight intensity={0.5} />
          <group scale={[2, 2, 2]} position-y={-1.5}>
            <Avatar />
          </group>
        </group>
      </Canvas>
    </>
  );
};
