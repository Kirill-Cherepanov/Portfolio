import { ColorThemeContext } from '@/providers';
import { useProgress } from '@react-three/drei';
import clsx from 'clsx';
import { memo, useContext } from 'react';

type LoaderProps = {
  className?: string;
};

function Loader_({ className }: LoaderProps) {
  const { progress } = useProgress();
  const [theme] = useContext(ColorThemeContext);
  const hue = 220;
  const trackColor = theme === 'dark' ? `rgb(30 30 30)` : 'rgb(212 212 212)';

  return (
    <div className={clsx('radial-loader-bar', className)}>
      {`${Math.round(progress)}%`}
      <span
        style={{
          background: `conic-gradient(hsl(${hue} 100% 70%), 
                                      hsl(${hue} 100% 40%), 
                                      hsl(${hue} 100% 70%) ${progress}%, 
                                      ${trackColor} ${progress}% 100%)`,
        }}
      />
    </div>
  );
}

export const Loader = memo(Loader_);
