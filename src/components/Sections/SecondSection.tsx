import { OrbitControls, PerspectiveCamera, SpotLight } from '@react-three/drei';
import * as THREE from 'three';

import { Me, Light } from '../3D';

export function SecondSection() {
  return (
    <>
      {/* <OrbitControls /> */}
      {/* <ambientLight /> */}
      <PerspectiveCamera
        key={process.env.NODE_ENV === 'development' ? Date.now() : undefined}
        makeDefault
        position={[0, 5, 5]}
        fov={60}
        rotation={[-Math.PI / 8, 0, 0]}
      />
      <mesh rotation={[Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100, 1, 1]} />
        <meshStandardMaterial color={0xffffff} side={THREE.DoubleSide} />
      </mesh>
      <Light />
      <Me
        position={[2, 0, 0]}
        rotation={[0, -Math.PI / 12, 0]}
        scale={3}
        castShadow
        receiveShadow
      />
    </>
  );
}
