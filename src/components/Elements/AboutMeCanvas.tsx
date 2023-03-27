import { ColorThemeContext } from '@/providers';
import { Loader, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { RefObject, useContext, useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';

import { Me } from '@/components';
import { useMinWidthMediaQuery } from '@/hooks';

export function AboutMeCanvas() {
  const spotLight1 = useRef<THREE.SpotLight>(null);
  const spotLight2 = useRef<THREE.SpotLight>(null);
  const dirLight = useRef<THREE.DirectionalLight>(null);
  const [theme] = useContext(ColorThemeContext);
  const isScreenLg = useMinWidthMediaQuery('lg');

  useLayoutEffect(() => {
    let shouldStop = false;

    // light.current is null on all the renders of useEffect
    // Had to use this hack to circumnavigate it
    const updateLightTarget = (light: RefObject<THREE.SpotLight | THREE.DirectionalLight>) => {
      if (light.current) {
        light.current.target.position.set(0, 3, 0);
        light.current.target.updateMatrixWorld();
      } else if (!shouldStop) setTimeout(() => updateLightTarget(light), 300);
    };
    if (theme === 'dark') {
      updateLightTarget(spotLight1);
      updateLightTarget(spotLight2);
    } else if (isScreenLg) updateLightTarget(dirLight);

    return () => {
      shouldStop = true;
    };
  });

  return (
    <Canvas shadows>
      {/* <Loader /> */}
      <PerspectiveCamera
        makeDefault
        position={isScreenLg ? [0, 5.5, 6] : [0, 4.85, 2.5]}
        rotation={isScreenLg ? [-Math.PI / 8, 0, 0] : [-Math.PI / 24, 0, 0]}
      />

      {theme === 'dark' ? (
        <>
          <spotLight
            ref={spotLight1}
            castShadow
            position={[5, 8, 5]}
            angle={0.4}
            penumbra={1}
            distance={15}
            intensity={4}
            color="#2cacdf"
          />
          <spotLight
            ref={spotLight2}
            castShadow
            position={[-5, 8, -5]}
            angle={0.4}
            penumbra={1}
            distance={15}
            intensity={3.5}
            color="#ff0000"
          />
          {isScreenLg ? (
            <mesh rotation={[Math.PI / 2, 0, 0]} receiveShadow>
              <planeGeometry args={[100, 100, 1, 1]} />
              <meshStandardMaterial color={0xffffff} side={THREE.DoubleSide} />
            </mesh>
          ) : (
            <ambientLight intensity={0.05} />
          )}
        </>
      ) : (
        <>
          <ambientLight intensity={0.3} />
          <directionalLight ref={dirLight} castShadow position={[10, 10, 0]} intensity={0.8} />
          {isScreenLg && (
            <mesh rotation={[Math.PI / 2, 0, 0]} receiveShadow>
              <circleGeometry args={[2.5, 100]} />
              <meshStandardMaterial color={0xffffff} side={THREE.DoubleSide} />
            </mesh>
          )}
        </>
      )}

      <Me position={[0, 0, 0]} scale={3} castShadow receiveShadow />
    </Canvas>
  );
}
