import { Canvas } from '@react-three/fiber';

import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  PageNavigation,
} from '@/components';

export function Landing() {
  return (
    <>
      <Canvas
        shadows
        style={{
          backgroundColor: '#000000',
        }}
      >
        {/* <FirstSection /> */}
        {/* <SecondSection /> */}
        {/* <ThirdSection /> */}
        <FourthSection />
      </Canvas>
      <PageNavigation />
    </>
  );
}
