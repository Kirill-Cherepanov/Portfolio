import { OrbitControls } from '@react-three/drei';

import { Box, Carousel, ProjectTablet } from '../3D';

export function ThirdSection() {
  return (
    <>
      <OrbitControls dampingFactor={0.1} />
      <ambientLight />
      <Carousel />
      {/* <ProjectTablet /> */}
      {/* <Box /> */}
    </>
  );
}
