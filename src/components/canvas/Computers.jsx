import React, { Suspense, useEffect, useState } from "react";
import  {useMobile}  from "../../utils/isMobile";
import { Canvas } from "@react-three/fiber";
// import { ModelField } from "../ModelField";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import {CanvasLoader} from "../../utils/Loader";
import { Exp } from "../Exp";

// const Computers = () => {
  
//   const computer = useGLTF("./laptop/laptop/scene.gltf");
//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <pointLight intensity={1} />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={5}
//         intensity={.5}
//         castShadow
//         shadow-mapSize-width={1024}
//       />
//       <primitive
//         object={computer.scene}
//         scale={useMobile ? 0.7 : 0.75}
//         position={useMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };
const ComputersCanvas = (props) => {

  
  return (
    <Canvas
      frameloop="demand"
      
      camera={{ position: [60, 100, 50], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      
      <Suspense fallback={<CanvasLoader /> }>
        <OrbitControls
        // autoRotate
        // autoRotateSpeed={0.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        
        {/* <Computers useMobile={useMobile} /> */}
        
        <Exp props={{props}} usedMobile={useMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
    
  );
};

export default ComputersCanvas;
