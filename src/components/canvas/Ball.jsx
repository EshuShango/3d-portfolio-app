/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  PresentationControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import {CanvasLoader} from "../../utils/Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
        color="#fff8eb"
        polygonOffset={true}
        polygonOffsetFactor={-5}
        flatShading={true}
        />
        <Decal 
        position={[0,0,1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        flatShading={true}
        map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas orthographic={false} frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
      </Suspense>
      <PresentationControls
            config={{ mass: 2, tension: 500}}
            snap={{ mass: 8, tension: 750 }}
            // rotation={[5, , 9 * Math.PI]}
            polar={[-Math.PI / 1.6, Math.PI / 1.6]}
            azimuth={[-Math.PI / 1.6, Math.PI / 1.6]}
          >

      <Ball imgUrl={icon} />
    </PresentationControls>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
