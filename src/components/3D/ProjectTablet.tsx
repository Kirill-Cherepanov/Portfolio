import { Html, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';
import { useNavigate } from 'react-router-dom';

import { ProjectType } from '@/types';
import { useNoDragClick } from '@/hooks';

const modelURL = new URL('../../assets/models/tablet.glb', import.meta.url).toString();

useGLTF.preload(modelURL);

type GLTFResult = GLTF & {
  nodes: {
    Mesh: THREE.Mesh;
    Mesh_1: THREE.Mesh;
    Mesh_2: THREE.Mesh;
    Mesh_3: THREE.Mesh;
    Mesh_4: THREE.Mesh;
  };
  materials: {
    dbl_Layer0_001: THREE.MeshStandardMaterial;
    dbl_Layer0_002: THREE.MeshStandardMaterial;
    dbl_Layer0_003: THREE.MeshStandardMaterial;
    dbl_Layer0_004: THREE.MeshStandardMaterial;
    dbl_Layer0_005: THREE.MeshStandardMaterial;
  };
};

interface ProjectTabletProps extends GroupProps {
  isMobile?: boolean;
  project: ProjectType;
}

export function ProjectTablet({ project, isMobile = false, ...groupProps }: ProjectTabletProps) {
  const { nodes, materials } = useGLTF(modelURL) as unknown as GLTFResult;

  const navigate = useNavigate();
  const events = useNoDragClick({ func: () => navigate(`/project/${project.name}`) });

  return (
    <group {...groupProps} dispose={null}>
      <group scale={0.01}>
        <mesh // White frame
          geometry={nodes.Mesh.geometry}
          material={materials.dbl_Layer0_001}
        />
        <mesh // Black casing
          geometry={nodes.Mesh_1.geometry}
          material={materials.dbl_Layer0_002}
        />
        <mesh // Blue camera
          geometry={nodes.Mesh_2.geometry}
          material={materials.dbl_Layer0_003}
        />
        <mesh // The inner part of camera
          geometry={nodes.Mesh_3.geometry}
          material={materials.dbl_Layer0_004}
        />
        <mesh // Screen
          geometry={nodes.Mesh_4.geometry}
          rotation-x={Math.PI}
          position-y={2.1}
        >
          <Html
            rotation-x={Math.PI / 2}
            rotation-z={isMobile ? -Math.PI / 2 : 0}
            transform
            occlude
            scale={7.3}
            style={{
              width: isMobile ? '776px' : '1268px',
              height: isMobile ? '1268px' : '776px',
            }}
          >
            <a
              href={`/project/${project.name}`}
              className="w-full h-full cursor-pointer"
              draggable={false}
              {...events}
            >
              <video
                className="w-full h-full"
                src={isMobile ? project.demo.mobile : project.demo.desktop}
                autoPlay
                muted
                loop
              />
            </a>
          </Html>
        </mesh>
      </group>
    </group>
  );
}
