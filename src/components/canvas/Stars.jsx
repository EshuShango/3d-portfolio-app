import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

import * as random from "maath/random/dist/maath-random.esm";
import { CanvasLoader } from "../../utils/Loader";

const Stars = ({...props}) => {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    // eslint-disable-next-line react/no-unknown-property
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustrumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.0002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={<CanvasLoader/>}>
          <Stars />
        </Suspense>
        <Preload position={null} />
      </Canvas>
    </div>
  );
};
export default StarsCanvas;
