import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PresentationControls, Preload, useGLTF  } from "@react-three/drei"
import {CanvasLoader} from "../../utils/Loader";
import { useMobile } from "../../utils/isMobile";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf")
  return (
    <primitive 
    object={earth.scene}
    scale={8.5}
    
    position-y={-2}
    position-z={5}
    rotation-y={2}
    // rotation-x={-6}
    />
  )
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{preserveDrawingBuffer: true}}
      
      camera={{
        fov: 50,
        near: 0.9,
        far: 1000,
        // position: [12, 6, .6],
        position: [20,-20,20]
      }}
      className="  z-[-2]"
      >
        <Suspense fallback={ <CanvasLoader /> }>
          <OrbitControls
            autoRotate
            enableZoom={false}
            // maxAzimuthAngle={Math.PI / 3}
            // minAzimuthAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            />
             {/* <PresentationControls
        autoRotate
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 750 }}
        polar={[-Math.PI / 3, Math.PI / 3]}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      > */}
            <Earth useMobile={useMobile}  />
            {/* </PresentationControls> */}
          </Suspense>
      </Canvas>
  )
}

export default EarthCanvas