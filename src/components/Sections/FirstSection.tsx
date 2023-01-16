import { useState, useLayoutEffect, useRef } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

import { Text } from '../3D';

const backgroundImage = new URL(
  '../../assets/images/background.jpg',
  import.meta.url
).toString();
const backgroundTexture = new THREE.TextureLoader().load(backgroundImage);

export function FirstSection() {
  const [isControlled, setIsControlled] = useState(false);

  const sphereRef = useRef<THREE.SphereGeometry>(null!);
  const environmentRef = useRef<THREE.Mesh>(null!);

  useLayoutEffect(() => {
    sphereRef.current.scale(1, 1, -1);
  }, []);

  return (
    <>
      <PerspectiveCamera
        key={process.env.NODE_ENV === 'development' ? Date.now() : undefined}
        position={[0, 0, 60]}
        fov={35}
      />
      <mesh ref={environmentRef}>
        <sphereGeometry ref={sphereRef} args={[100, 60, 40]} />
        <meshBasicMaterial map={backgroundTexture} />
      </mesh>
      <OrbitControls
        onStart={() => setIsControlled(true)}
        onEnd={() => setIsControlled(false)}
      />
      <Text isControlled={isControlled} position={[0, 4, 0]}>
        Kirill
      </Text>
      <Text isControlled={isControlled} position={[0, -4, 0]}>
        Cherepanov
      </Text>
    </>
  );
}
