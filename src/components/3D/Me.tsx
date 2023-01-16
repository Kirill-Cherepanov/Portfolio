import { useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';
import { GroupProps } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { AnimationClip } from 'three';

const modelURL = new URL(
  '../../assets/models/me_animated.glb',
  import.meta.url
).toString();

useGLTF.preload(modelURL);

type ActionName =
  | 'Armature|mixamo.com|Layer0'
  | 'Armature|mixamo.com|Layer0.001'
  | 'Armature|mixamo.com|Layer0.001_Armature.001'
  | 'Armature|mixamo.com|Layer0.001_Armature.001_Armature.002'
  | 'Armature|mixamo.com|Layer0.001_Armature.002'
  | 'Armature|mixamo.com|Layer0.001_Armature.002_Armature.002'
  | 'Armature|mixamo.com|Layer0.001_Armature.003'
  | 'Armature|mixamo.com|Layer0.002'
  | 'Armature|mixamo.com|Layer0.002_Armature.002'
  | 'Armature|mixamo.com|Layer0_Armature.001'
  | 'Armature|mixamo.com|Layer0_Armature.001_Armature.002'
  | 'Armature|mixamo.com|Layer0_Armature.002'
  | 'Armature|mixamo.com|Layer0_Armature.002_Armature.002'
  | 'Armature|mixamo.com|Layer0_Armature.003'
  | 'Look around'
  | 'Look around_Armature.002';
interface GLTFActions extends AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    Wolf3D_Body001: THREE.SkinnedMesh;
    Wolf3D_Hair001: THREE.SkinnedMesh;
    Wolf3D_Outfit_Bottom001: THREE.SkinnedMesh;
    Wolf3D_Outfit_Footwear001: THREE.SkinnedMesh;
    Wolf3D_Outfit_Top001: THREE.SkinnedMesh;
    EyeLeft001: THREE.SkinnedMesh;
    EyeRight001: THREE.SkinnedMesh;
    Wolf3D_Head001: THREE.SkinnedMesh;
    Wolf3D_Teeth001: THREE.SkinnedMesh;
    Hips: THREE.Bone;
  };
  materials: {
    ['Wolf3D_Body.006']: THREE.MeshStandardMaterial;
    ['Wolf3D_Hair.006']: THREE.MeshStandardMaterial;
    ['Wolf3D_Outfit_Bottom.006']: THREE.MeshStandardMaterial;
    ['Wolf3D_Outfit_Footwear.006']: THREE.MeshStandardMaterial;
    ['Wolf3D_Outfit_Top.006']: THREE.MeshStandardMaterial;
    ['Wolf3D_Eye.006']: THREE.MeshStandardMaterial;
    ['Wolf3D_Skin.006']: THREE.MeshStandardMaterial;
    ['Wolf3D_Teeth.006']: THREE.MeshStandardMaterial;
  };
  animations: GLTFActions[];
};

const ANIMATION_DELAY = 5000;

export function Me(props: GroupProps) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials, animations, scene } = useGLTF(
    modelURL
  ) as unknown as GLTFResult;
  const { actions } = useAnimations<GLTFActions>(animations, group);

  useLayoutEffect(() => {
    const animation = actions['Armature|mixamo.com|Layer0'];

    if (!animation) return;

    let shouldStopAnimation = false;
    animation.loop = THREE.LoopOnce;

    const animate = () => {
      animation.reset().play();
      setTimeout(() => {
        if (shouldStopAnimation) return;
        animation.paused = true;

        setTimeout(() => !shouldStopAnimation && animate(), ANIMATION_DELAY);
      }, animation.getClip().duration * 1000 - 100);
    };
    animate();

    return () => (shouldStopAnimation = true) && undefined;
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature001">
          <primitive object={nodes.Hips} />
          <skinnedMesh
            castShadow
            name="Wolf3D_Body001"
            geometry={nodes.Wolf3D_Body001.geometry}
            material={materials['Wolf3D_Body.006']}
            skeleton={nodes.Wolf3D_Body001.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Wolf3D_Hair001"
            geometry={nodes.Wolf3D_Hair001.geometry}
            material={materials['Wolf3D_Hair.006']}
            skeleton={nodes.Wolf3D_Hair001.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Wolf3D_Outfit_Bottom001"
            geometry={nodes.Wolf3D_Outfit_Bottom001.geometry}
            material={materials['Wolf3D_Outfit_Bottom.006']}
            skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Wolf3D_Outfit_Footwear001"
            geometry={nodes.Wolf3D_Outfit_Footwear001.geometry}
            material={materials['Wolf3D_Outfit_Footwear.006']}
            skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Wolf3D_Outfit_Top001"
            geometry={nodes.Wolf3D_Outfit_Top001.geometry}
            material={materials['Wolf3D_Outfit_Top.006']}
            skeleton={nodes.Wolf3D_Outfit_Top001.skeleton}
          />
          <skinnedMesh
            castShadow
            name="EyeLeft001"
            geometry={nodes.EyeLeft001.geometry}
            material={materials['Wolf3D_Eye.006']}
            skeleton={nodes.EyeLeft001.skeleton}
            morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences}
          />
          <skinnedMesh
            castShadow
            name="EyeRight001"
            geometry={nodes.EyeRight001.geometry}
            material={materials['Wolf3D_Eye.006']}
            skeleton={nodes.EyeRight001.skeleton}
            morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences}
          />
          <skinnedMesh
            castShadow
            name="Wolf3D_Head001"
            geometry={nodes.Wolf3D_Head001.geometry}
            material={materials['Wolf3D_Skin.006']}
            skeleton={nodes.Wolf3D_Head001.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences}
          />
          <skinnedMesh
            castShadow
            name="Wolf3D_Teeth001"
            geometry={nodes.Wolf3D_Teeth001.geometry}
            material={materials['Wolf3D_Teeth.006']}
            skeleton={nodes.Wolf3D_Teeth001.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences}
          />
        </group>
      </group>
    </group>
  );
}
