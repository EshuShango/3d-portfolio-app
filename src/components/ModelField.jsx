import { OrbitControls } from '@react-three/drei'
import React from 'react'
import { Avatar } from './avatar/Avatar'
import { Canvas } from '@react-three/fiber'

export const ModelField = () => {
  return (
    <>
     <Canvas shadows camera={{position: [0, 2, 5], fov: 30}}> 
     <OrbitControls />
      <group position-y={[ -1]}>
        <Avatar />
      </group>
      <ambientLight intensity={0.5} />
      </Canvas>
    </>
  )
}

 
