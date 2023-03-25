import { useEffect } from 'react';
import { GroupProps, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import { projects, ProjectsAnglesType, ProjectTablet } from '@/components';
import { cotangent, normalizeAngle } from '@/utility';
import { useMinWidthMediaQuery } from '@/hooks';

// Doing trygonometry to calculate positions and rotations of all the projects no matter the amount of them
// There might have already been a tool for that, but looking for it would've taken more time

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

Theta is an angle between one of the vertices of a slide and its center
Its the same for each slide so its calculated for the 1st slide by substituting α = 0
After a little bit of simplification
Θ = Atan(Width / (2 * Radius))
*/

const WIDTH = 3;
const GAP = 3;

interface CarouselProps extends GroupProps {
  position?: [x: number, y: number, z: number];
  setProjectsAngles?: (projectsAngles: ProjectsAnglesType) => void;
}

export function Carousel({ setProjectsAngles, ...props }: CarouselProps) {
  const isScreenMd = useMinWidthMediaQuery('md');

  const total = projects.length;
  const beta = (2 * Math.PI) / total;
  const center = props.position || [0, 0, 0];
  const radius = ((WIDTH + GAP / Math.sin(beta / 2)) * cotangent(beta / 2)) / 2;
  const fov = Math.atan2(WIDTH / 2 + center[2], radius + center[0]);
  const theta = fov / (isScreenMd ? 1 : 1.5);
  const projectsAngles: ProjectsAnglesType = [];

  useThree((state) => {
    if (!('fov' in state.camera)) return;
    (state.camera as THREE.PerspectiveCamera).fov =
      ((fov * 360) / Math.PI) * (isScreenMd ? 0.9 : 1.2);
  });

  useEffect(() => {
    if (!setProjectsAngles) return;

    setProjectsAngles(projectsAngles);

    return () => setProjectsAngles([]);
  }, [setProjectsAngles]);

  return (
    <group {...props} rotation={[0, Math.PI / 2, 0]}>
      {projects.map((project, current) => {
        const alpha = (2 * Math.PI * current) / total;

        const x = Math.cos(alpha) * radius + center[0];
        const y = center[1];
        const z = Math.sin(alpha) * radius + center[2];

        projectsAngles.push({
          vertices: [normalizeAngle(alpha - theta), normalizeAngle(alpha + theta)],
          center: alpha,
          project,
        });

        return (
          <ProjectTablet
            key={project.name}
            position={[x, y, z]}
            // At first we rotate around it's initial axis, then rotate around it's new axis for a mobile screen
            quaternion={new THREE.Quaternion()
              .setFromEuler(new THREE.Euler(Math.PI / 2, 0, Math.PI / 2 + alpha))
              .multiply(
                new THREE.Quaternion().setFromEuler(
                  new THREE.Euler(0, isScreenMd ? 0 : Math.PI / 2, 0)
                )
              )}
            project={project}
            isMobile={!isScreenMd}
          />
        );
      })}
    </group>
  );
}
