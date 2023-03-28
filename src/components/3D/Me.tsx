import { useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

const modelURL = new URL('../../assets/models/me_animated.glb', import.meta.url).toString();

type GLTFResult = GLTF & {
  nodes: {
    Wolf3D_Body002: THREE.SkinnedMesh;
    Wolf3D_Hair002: THREE.SkinnedMesh;
    Wolf3D_Outfit_Bottom002: THREE.SkinnedMesh;
    Wolf3D_Outfit_Footwear002: THREE.SkinnedMesh;
    Wolf3D_Outfit_Top002: THREE.SkinnedMesh;
    EyeLeft002: THREE.SkinnedMesh;
    EyeRight002: THREE.SkinnedMesh;
    Wolf3D_Head002: THREE.SkinnedMesh;
    Wolf3D_Teeth002: THREE.SkinnedMesh;
    Hips: THREE.Bone;
  };
  materials: {
    ['Wolf3D_Body.002']: THREE.MeshStandardMaterial;
    ['Wolf3D_Hair.002']: THREE.MeshStandardMaterial;
    ['Wolf3D_Outfit_Bottom.002']: THREE.MeshStandardMaterial;
    ['Wolf3D_Outfit_Footwear.002']: THREE.MeshStandardMaterial;
    ['Wolf3D_Outfit_Top.002']: THREE.MeshStandardMaterial;
    ['Wolf3D_Eye.002']: THREE.MeshStandardMaterial;
    ['Wolf3D_Skin.002']: THREE.MeshStandardMaterial;
    ['Wolf3D_Teeth.002']: THREE.MeshStandardMaterial;
  };
  animations: GLTFActions[];
};

type ActionName = 'Armature|mixamo.com|Layer0' | 'Armature|mixamo.com|Layer0_Armature.002';
interface GLTFActions extends THREE.AnimationClip {
  name: ActionName;
}

export function Me(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials, animations } = useGLTF(modelURL) as unknown as GLTFResult;
  const { actions } = useAnimations<GLTFActions>(animations, group);

  useLayoutEffect(() => {
    const animation = actions['Armature|mixamo.com|Layer0'];

    if (!animation) return;

    animation.loop = THREE.LoopRepeat;
    animation.reset().play();

    // Sometimes the animation just stops
    // This is a workaround
    let shouldStopAnimation = false;
    const animate = () => {
      animation.reset().play();
      setInterval(() => {
        if (!shouldStopAnimation && animation.paused) animation.reset().play();
      }, 500);
    };
    animate();

    return () => {
      animation.stop();
      shouldStopAnimation = true;
    };
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature001">
          <primitive object={nodes.Hips} />
          <skinnedMesh
            castShadow
            name="Wolf3D_Body002"
            geometry={nodes.Wolf3D_Body002.geometry}
            material={materials['Wolf3D_Body.002']}
            skeleton={nodes.Wolf3D_Body002.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Wolf3D_Hair002"
            geometry={nodes.Wolf3D_Hair002.geometry}
            material={materials['Wolf3D_Hair.002']}
            skeleton={nodes.Wolf3D_Hair002.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Wolf3D_Outfit_Bottom002"
            geometry={nodes.Wolf3D_Outfit_Bottom002.geometry}
            material={materials['Wolf3D_Outfit_Bottom.002']}
            skeleton={nodes.Wolf3D_Outfit_Bottom002.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Wolf3D_Outfit_Footwear002"
            geometry={nodes.Wolf3D_Outfit_Footwear002.geometry}
            material={materials['Wolf3D_Outfit_Footwear.002']}
            skeleton={nodes.Wolf3D_Outfit_Footwear002.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Wolf3D_Outfit_Top002"
            geometry={nodes.Wolf3D_Outfit_Top002.geometry}
            material={materials['Wolf3D_Outfit_Top.002']}
            skeleton={nodes.Wolf3D_Outfit_Top002.skeleton}
          />
          <skinnedMesh
            castShadow
            name="EyeLeft002"
            geometry={nodes.EyeLeft002.geometry}
            material={materials['Wolf3D_Eye.002']}
            skeleton={nodes.EyeLeft002.skeleton}
            morphTargetDictionary={nodes.EyeLeft002.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft002.morphTargetInfluences}
          />
          <skinnedMesh
            castShadow
            name="EyeRight002"
            geometry={nodes.EyeRight002.geometry}
            material={materials['Wolf3D_Eye.002']}
            skeleton={nodes.EyeRight002.skeleton}
            morphTargetDictionary={nodes.EyeRight002.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight002.morphTargetInfluences}
          />
          <skinnedMesh
            castShadow
            name="Wolf3D_Head002"
            geometry={nodes.Wolf3D_Head002.geometry}
            material={materials['Wolf3D_Skin.002']}
            skeleton={nodes.Wolf3D_Head002.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head002.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head002.morphTargetInfluences}
          />
          <skinnedMesh
            castShadow
            name="Wolf3D_Teeth002"
            geometry={nodes.Wolf3D_Teeth002.geometry}
            material={materials['Wolf3D_Teeth.002']}
            skeleton={nodes.Wolf3D_Teeth002.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth002.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth002.morphTargetInfluences}
          />
        </group>
      </group>
    </group>
  );
}
