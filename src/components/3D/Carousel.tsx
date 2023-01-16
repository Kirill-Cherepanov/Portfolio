import { GroupProps } from '@react-three/fiber';

import { ProjectTablet } from './';
import { cotangent } from '@/utility';
import projects from '@/assets/misc/projects.json';

/*
Let the position of the camera equal (0, 0);
Let the number of slides equal Total;
Let the width of the slide equal Width;
Let the desired gap between the slides equal Gap;
Let the number of the current slide equal Current;

Then the position of the center of the current slide in polar coordinates equals
(Radius, α) = (Radius, 2π * Current / Total);

Where Radius is the optimal distance to the center of the current slide
Radius = (Width + Gap / Sin[β / 2]) * Cot[β / 2] / 2;

Where β is the angle between slide Current and and Current+1 in polar coordinates
β = 2π / Total;

Then the position of the center of the current slide in cartesian coordinates equals
(x, z) = (Cos[α] * Radius, Sin[α] * Radius);

And if the position of the camera equals (x1, z1)
(x, z) = (x1 + Cos[α] * Radius, z1 + Sin[α] * Radius)
*/

interface CarouselProps extends GroupProps {
  position?: [x: number, y: number, z: number];
}

export function Carousel(props: CarouselProps) {
  const width = 10;
  const gap = 2;
  const total = projects.length;
  const beta = (2 * Math.PI) / total;
  const center = props.position || [0, 0, 0];
  const radius = ((width + gap / Math.sin(beta / 2)) * cotangent(beta / 2)) / 2;

  return (
    <group {...props}>
      {projects.map((project, current) => {
        const alpha = (2 * Math.PI * current) / total;

        const x = Math.cos(alpha) * radius + center[0];
        const y = center[1];
        const z = Math.sin(alpha) * radius + center[2];

        return (
          <ProjectTablet
            key={project.name}
            position={[x, y, z]}
            rotation={[Math.PI / 2, 0, alpha + Math.PI / 2]}
            project={project}
          />
        );
      })}
    </group>
  );
}
