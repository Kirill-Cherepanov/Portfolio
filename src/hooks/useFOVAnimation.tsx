import { useThree } from '@react-three/fiber';
import { useCallback, useMemo, useRef } from 'react';
import { PerspectiveCamera } from 'three';

// I decided to make FPS static instead of using requestAnimationFrame because
// it's much easier to control how much time animation should last like this
const FRAMES_PER_SECOND = 60;

type ReturnType = {
  animateFov: () => void;
  resetFov: () => void;
};

// Sometimes fov just doesn't reset for some reason.
// The value itself changes, camera.updateProjectionMatrix() gets invoked
// but no changes on the screen appear.

export const useFovAnimation = (
  initialFov: number,
  duration: number = 0.5
): ReturnType => {
  const { camera } = useThree<{ camera: PerspectiveCamera }>();

  const incrementationStep = useMemo(
    () => (180 - initialFov) / (FRAMES_PER_SECOND * duration),
    [duration]
  );
  const interval = useRef<NodeJS.Timer>();

  const animateFov = useCallback(() => {
    clearInterval(interval.current);

    interval.current = setInterval(() => {
      if (camera.fov >= 180) return clearInterval(interval.current);

      camera.fov += incrementationStep;
      camera.updateProjectionMatrix();
    }, 1000 / FRAMES_PER_SECOND);
  }, []);

  const resetFov = useCallback((): number => {
    clearInterval(interval.current);
    camera.fov = initialFov;
    camera.updateProjectionMatrix();

    return camera.fov;
  }, []);

  return { animateFov, resetFov };
};
