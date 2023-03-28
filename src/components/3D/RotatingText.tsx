import * as THREE from 'three';
import { useRef, useLayoutEffect } from 'react';
import { Text3D } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber';

import typeFace from '@/assets/fonts/Roboto_Regular.json';

const TEXT_OPTIONS = {
  size: 40,
  height: 30,
  curveSegments: 32,
  bevelEnabled: true,
  bevelThickness: 0,
  bevelSize: 2,
  bevelOffset: 0,
  bevelSegments: 8,
};
const ROTATION_SPEED = 0.002;
const ROTATION_DELAY = 1000;

interface RotatingTextProps extends GroupProps {
  backgroundTexture?: THREE.Texture;
  children?: React.ReactNode;
  size?: number;
  color?: THREE.ColorRepresentation;
  isControlled?: boolean;
}

export function RotatingText({
  children,
  size = 1.5,
  color = 0xffffff,
  isControlled = false,
  backgroundTexture,
  ...props
}: RotatingTextProps) {
  const meshRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>(
    null!
  );
  const groupRef = useRef<THREE.Group>(null!);
  const shouldRotate = useRef(!isControlled);

  useFrame(() => {
    groupRef.current.rotation.y += +shouldRotate.current * ROTATION_SPEED;
  });

  useLayoutEffect(() => {
    let timeout: NodeJS.Timeout | undefined;

    if (isControlled) shouldRotate.current = false;
    else timeout = setTimeout(() => (shouldRotate.current = true), ROTATION_DELAY);

    return () => clearTimeout(timeout);
  }, [isControlled]);

  useLayoutEffect(() => {
    meshRef.current.geometry.center();
  }, [children]);

  return (
    <group ref={groupRef} {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <Text3D
        castShadow
        receiveShadow
        ref={meshRef}
        font={typeFace as any} // it should be of THREE.FontData type, but I couldn't import it
        {...TEXT_OPTIONS}
      >
        {children}
        <meshMatcapMaterial color={color} matcap={backgroundTexture} />
      </Text3D>
    </group>
  );
}
