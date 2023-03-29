import clsx from 'clsx';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Carousel, Icon, projects, ProjectsPopup } from '@/components';
import { ProjectType } from '@/types';
import { useDisclosure, usePreviousValue } from '@/hooks';
import { normalizeAngle, nextArrElement, prevArrElement, isAngleInAngleSpan } from '@/utility';

export type ProjectsAnglesType = {
  vertices: [number, number];
  center: number;
  project: ProjectType;
}[];

export function Projects() {
  const popupDisclosure = useDisclosure(true);
  const orbitControlsRef = useRef<OrbitControlsImpl>(null);
  const [cameraAngle, setCameraAngle] = useState(0);
  const [projectsAngles, setProjectsAngles] = useState<ProjectsAnglesType>([]);
  const prevTouchPosition = useRef<{ x: number; y: number }>();

  const projectIndex = projectsAngles.findIndex(({ vertices }) => {
    return isAngleInAngleSpan(vertices, cameraAngle);
  });

  const projectAngles = projectsAngles[projectIndex];
  const project = projectsAngles[projectIndex]?.project;
  const previouslyAimed = usePreviousValue(projectAngles);

  let nextProjectCenter: number;
  let prevProjectCenter: number;
  if (projectAngles) {
    nextProjectCenter = nextArrElement(projectsAngles, projectAngles).center;
    prevProjectCenter = prevArrElement(projectsAngles, projectAngles).center;
  } else {
    let prev = projectsAngles[projects.length - 1];
    for (let curr of projectsAngles) {
      if (isAngleInAngleSpan([prev.vertices[1], curr.vertices[0]], cameraAngle)) {
        nextProjectCenter = curr.center;
        prevProjectCenter = prev.center;
        break;
      }
      prev = curr;
    }
  }

  // IMPORTANT!!!
  // Angle A in carousel is equal to angle -A in orbit controls

  return (
    <section
      id="projects"
      className="h-screen relative select-none [&_*]:select-none flex items-center"
    >
      <ProjectsPopup {...popupDisclosure} />

      {/* Position of videos in ProjectTablet becomes very unstable if height is anything other than full screen... Why? */}
      <div className="h-full w-full">
        <Canvas
          camera={{ fov: 77.5 * 0.9 }}
          onTouchStart={(e) =>
            (prevTouchPosition.current = {
              x: e.changedTouches[0].screenX,
              y: e.changedTouches[0].screenY,
            })
          }
          onTouchMove={(e) => {
            if (prevTouchPosition.current) {
              const movedDist = {
                x: prevTouchPosition.current.x - e.changedTouches[0].screenX,
                y: prevTouchPosition.current.y - e.changedTouches[0].screenY,
              };
              if (Math.abs(movedDist.x) * 2 < Math.abs(movedDist.y)) {
                window.scrollBy({ top: movedDist.y, behavior: 'instant' as ScrollBehavior });
              }
            }
            prevTouchPosition.current = {
              x: e.changedTouches[0].screenX,
              y: e.changedTouches[0].screenY,
            };
          }}
          onTouchEnd={() => (prevTouchPosition.current = undefined)}
        >
          <OrbitControls
            ref={orbitControlsRef}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            enableZoom={false}
            position={[0, 0, 0]}
            minDistance={0.01}
            maxDistance={0.01}
            enablePan={false}
            dampingFactor={0.12}
            reverseOrbit
            onChange={(e) => {
              if (!e?.target) return;
              const orbitControls = e.target as OrbitControlsImpl;
              setCameraAngle(normalizeAngle(-orbitControls.getAzimuthalAngle()));
            }}
          />
          <ambientLight />
          <Carousel setProjectsAngles={setProjectsAngles} />
        </Canvas>
      </div>

      <div className="absolute w-full main-layout top-12 md:top-20 left-1/2 -translate-x-1/2 flex items-center">
        <h3
          className={clsx(
            'font-righteous text-3xl 2xs:text-4xl md:text-5xl w-full text-center px-12',
            project ? 'opacity-100' : 'opacity-0'
          )}
        >
          <Link
            to={`/project/${project?.name || previouslyAimed.current?.project.name}`}
            className="transition-colors duration-300 hover:text-main-9 dark:hover:text-main-reverse-3 text-default"
          >
            {project?.name || previouslyAimed.current?.project.name}
          </Link>
        </h3>
        <button onClick={popupDisclosure.open} className="absolute right-0 main-layout">
          <Icon
            type="info"
            className="h-10 2xs:h-10 sm:h-12 ml-auto transition-colors duration-300 hover:text-main-9 dark:hover:text-main-reverse-3 text-default"
          />
        </button>
      </div>

      <div className="flex absolute -translate-x-1/2 left-1/2 bottom-12 md:bottom-20 justify-between gap-12 2xs:gap-16 md:w-1/2">
        <button
          onClick={() => {
            if (!orbitControlsRef.current) return;

            orbitControlsRef.current.setAzimuthalAngle(-prevProjectCenter);
          }}
        >
          <Icon
            type="long-arrow"
            className="h-8 2xs:h-10 transition-colors duration-300 hover:text-main-9 dark:hover:text-main-reverse-3 text-default"
          />
        </button>

        <div
          className={clsx(
            'flex gap-2 transition-opacity duration-300',
            project ? 'opacity-100' : 'opacity-0'
          )}
        >
          <a
            target="_blank"
            href={project?.urls.deploy || previouslyAimed.current?.project.urls.deploy}
          >
            <Icon
              type="link"
              className="h-8 2xs:h-10 transition-colors duration-300 hover:text-main-9 dark:hover:text-main-reverse-3 text-default"
            />
          </a>
          <a
            target="_blank"
            href={project?.urls.repo || previouslyAimed.current?.project.urls.deploy}
          >
            <Icon
              type="github"
              className="h-8 2xs:h-10 transition-colors duration-300 hover:text-main-9 dark:hover:text-main-reverse-3 text-default"
            />
          </a>
        </div>

        <button
          onClick={() => {
            if (!orbitControlsRef.current) return;

            orbitControlsRef.current.setAzimuthalAngle(-nextProjectCenter);
          }}
        >
          <Icon
            type="long-arrow"
            className="h-8 2xs:h-10 rotate-180 transition-colors duration-300 hover:text-main-9 dark:hover:text-main-reverse-3 text-default"
          />
        </button>
      </div>
    </section>
  );
}
