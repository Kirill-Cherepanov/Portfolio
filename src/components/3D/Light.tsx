import { useRef } from 'react';
import * as THREE from 'three';
import { SpotLight, useHelper } from '@react-three/drei';

export function Light() {
  const spotLightRef1 = useRef<THREE.SpotLight>(null!);
  const spotLightRef2 = useRef<THREE.SpotLight>(null!);

  useHelper(spotLightRef1, THREE.PointLightHelper);
  useHelper(spotLightRef2, THREE.PointLightHelper);

  return (
    <>
      <SpotLight
        castShadow
        ref={spotLightRef1}
        position={[-4, 12, 0]}
        target-position={[2, 0, 0]}
        angle={0.6}
        penumbra={1}
        anglePower={5}
        attenuation={12}
        distance={15}
        intensity={4}
        color="#0c8cbf"
      />
      <SpotLight
        castShadow
        ref={spotLightRef2}
        position={[8, 12, 0]}
        target-position={[2, 0, 0]}
        angle={0.6}
        penumbra={1}
        anglePower={5}
        attenuation={12}
        distance={15}
        intensity={4}
        color="#b00c3f"
      />
    </>
  );
}
