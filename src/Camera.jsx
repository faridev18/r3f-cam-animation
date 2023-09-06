import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Cam } from './Cam';




export default function Camera() {



  return (
    <Canvas className='canvas_header' shadows camera={{ position: [0, 16, 45], fov: 30 }}>
      <color attach="background" args={['#fff']} />
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} autoRotate autoRotateSpeed={2}/>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 20, 20]} intensity={1} />
        <Cam scale={3}  />
    </Canvas>
  );
}
