import { OrbitControls } from '@react-three/drei';

type FourthSectionProps = {};

export function FourthSection({}: FourthSectionProps) {
  return (
    <>
      <OrbitControls dampingFactor={0.1} />
      <ambientLight />
    </>
  );
}
