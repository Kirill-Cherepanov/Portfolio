import { useState, useLayoutEffect, useRef, useContext, memo, useEffect } from 'react';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

import { ColorThemeContext } from '@/providers';
import { useMinWidthMediaQuery } from '@/hooks';
import { RotatingText } from '@/components';

const backgroundImages = {
  dark: new URL('../../assets/images/backgroundDark.webp', import.meta.url).toString(),
  light: new URL('../../assets/images/backgroundLight.webp', import.meta.url).toString(),
};

export function HeroCanvas() {
  const [theme] = useContext(ColorThemeContext);
  const [isControlled, setIsControlled] = useState(false);
  const sphereRef = useRef<THREE.SphereGeometry>(null!);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null!);
  const isScreenSm = useMinWidthMediaQuery('sm');
  const isScreenMd = useMinWidthMediaQuery('md');
  const textures = useTexture(backgroundImages);
  const backgroundTexture = textures[theme];

  // useLayoutEffect doesn't work, because we need to update the textures only after they've been set. Doesn't make much sense to me either
  useEffect(() => {
    textures.dark.needsUpdate = true;
    textures.light.needsUpdate = true;
  }, [textures.dark.source.data, textures.light.source.data]);
  useLayoutEffect(() => void sphereRef.current.scale(1, 1, -1), []);

  return (
    <>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={isScreenMd || !isScreenSm ? 105 : 150}
        maxDistance={isScreenMd || !isScreenSm ? 105 : 150}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
        onStart={() => setIsControlled(true)}
        onEnd={() => setIsControlled(false)}
        dampingFactor={0.15}
      />
      <mesh>
        <sphereGeometry ref={sphereRef} args={[500, 60, 40]} />
        <meshBasicMaterial map={backgroundTexture} ref={materialRef} />
      </mesh>
      <RotatingText
        isControlled={isControlled}
        position={[0, 4, 0]}
        backgroundTexture={backgroundTexture}
      >
        Kirill
      </RotatingText>
      <RotatingText
        isControlled={isControlled}
        position={[0, -4, 0]}
        backgroundTexture={backgroundTexture}
      >
        Cherepanov
      </RotatingText>
    </>
  );
}
