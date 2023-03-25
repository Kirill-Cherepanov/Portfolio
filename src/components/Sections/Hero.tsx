import { useState, useLayoutEffect, useRef, useContext } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { HashLink } from 'react-router-hash-link';
import * as THREE from 'three';
import Marquee from 'react-fast-marquee';

import { Icon, Text, ScrollDownTextCircle } from '@/components';
import { ColorThemeContext } from '@/providers';
import { useMinWidthMediaQuery } from '@/hooks';

import diamond from '@/assets/images/diamond.png';

const backgroundImageDark = new URL(
  '../../assets/images/backgroundDark.webp',
  import.meta.url
).toString();
const backgroundTextureDark = new THREE.TextureLoader().load(backgroundImageDark);
const backgroundImageLight = new URL(
  '../../assets/images/backgroundLight.webp',
  import.meta.url
).toString();
const backgroundTextureLight = new THREE.TextureLoader().load(backgroundImageLight);

export function Hero() {
  return (
    <section>
      <div className="mt-24 sm:mt-0 h-[400px] md:h-screen relative">
        <Canvas camera={{ fov: 30 }} className="cursor-pointer">
          <Hero3DText />
        </Canvas>
        <div className="absolute left-4 bottom-4 lg:left-10 lg:bottom-10 flex items-center gap-4 group w-16 sm:w-20 lg:w-24">
          <Icon type="swipe" className="h-full w-full shrink-0" />
          <p className="sm:text-xl font-medium transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none shrink-0 w-80">
            Drag to rotate
            <br />
            the camera
          </p>
        </div>
        <HashLink
          smooth
          to="#hero-about"
          className="hidden sm:block absolute right-8 md:right-10 bottom-0 translate-y-1/2"
        >
          <div className="animate-spinSlowly">
            <ScrollDownTextCircle className="h-56 w-56 lg:h-80 lg:w-80" />
          </div>
        </HashLink>
      </div>
      <div className="main-layout mt-8 sm:mt-24" id="hero-about">
        <h2 className="text-4xl 2xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-righteous relative font-bold">
          Professional <br className="sm:hidden" /> Full Stack{' '}
          <img
            src={diamond}
            alt=""
            className="inline sm:hidden rotate-[30deg] absolute bottom-10 2xs:bottom-[52px] h-10 2xs:h-12 "
          />
          <br />
          Web Developer
          <img
            src={diamond}
            alt=""
            className="hidden sm:inline rotate-[30deg] absolute bottom-0 h-16 md:h-20 lg:h-24 ml-4"
          />
        </h2>
        <p className="text-xl xs:text-2xl md:w-7/12 font-semibold">
          Developing Creative and Innovative Web Applications. Tackling tricky business problems.
        </p>
      </div>
      <Marquee
        gradient={false}
        className="text-7xl xs:text-8xl sm:text-[112px] md:text-9xl lg:text-[160px] xl:text-[208px] 2xl:text-[256px] leading-[0.8] tracking-tight font-righteous text-stroke text-transparent overflow-hidden mt-8 lg:mt-16 mb-20"
        speed={100}
      >
        {/* It works, so it's alright */}
        READY FOR HIRE!{'ㅤ·ㅤ'}READY FOR HIRE!{'ㅤ·ㅤ'}
      </Marquee>
    </section>
  );
}

function Hero3DText() {
  const [theme] = useContext(ColorThemeContext);
  const [isControlled, setIsControlled] = useState(false);
  const sphereRef = useRef<THREE.SphereGeometry>(null!);
  const environmentRef = useRef<THREE.Mesh>(null!);
  const isScreenSm = useMinWidthMediaQuery('sm');
  const isScreenMd = useMinWidthMediaQuery('md');

  useLayoutEffect(() => {
    sphereRef.current.scale(1, 1, -1);
  }, []);

  const backgroundTexture = theme === 'dark' ? backgroundTextureDark : backgroundTextureLight;

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
      <mesh ref={environmentRef}>
        <sphereGeometry ref={sphereRef} args={[500, 60, 40]} />
        {/* Sometimes mesh disappears. By adding key={theme} it at least fixes itself after the change of theme */}
        <meshBasicMaterial map={backgroundTexture} key={theme} />
      </mesh>
      <Text isControlled={isControlled} position={[0, 4, 0]} backgroundTexture={backgroundTexture}>
        Kirill
      </Text>
      <Text isControlled={isControlled} position={[0, -4, 0]} backgroundTexture={backgroundTexture}>
        Cherepanov
      </Text>
    </>
  );
}
