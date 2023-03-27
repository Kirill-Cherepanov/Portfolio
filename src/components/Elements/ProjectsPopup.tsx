import clsx from 'clsx';
import { memo } from 'react';

import { Icon } from '@/components';
import { useNoDragClick } from '@/hooks';

type ProjectsPopupProps = { isOpen: boolean; close: Function };

function ProjectsPopup_({ isOpen, close }: ProjectsPopupProps) {
  const events = useNoDragClick({
    func: close,
    extendedEvents: {
      onPointerDown: (e) => e.stopPropagation(),
      onClick: (e) => e.stopPropagation(),
    },
  });

  return (
    <div
      className={clsx(
        'absolute h-full w-full top-0 l-0 bg-main-reverse-0 dark:bg-main-0 backdrop-blur-md z-[99999999] cursor-pointer bg-opacity-[85%] dark:bg-opacity-[85%] transition-opacity duration-300',
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      {...events}
    >
      <div className="main-layout py-16 h-full flex flex-col">
        <h2 className="uppercase text-4xl 2xs:text-5xl xs:text-6xl font-righteous leading-[0.8] text-center">
          My Projects
        </h2>
        <div className="flex gap-2 items-center mt-16">
          <Icon type="swipe" className="h-14 w-14 xs:h-20 xs:w-20 shrink-0" />
          <span className="text-lg xs:text-xl font-medium">
            Pan, swipe or use arrows to navigate
          </span>
        </div>
        <div className="flex gap-2 items-center my-6 xs:my-8">
          <Icon type="tap" className="h-14 w-14 xs:h-20 xs:w-20 shrink-0" />
          <span className="text-lg xs:text-xl font-medium">
            Click on a project tablet to learn more about the project
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <Icon type="info" className="h-14 w-14 xs:h-20 xs:w-20 px-3 shrink-0" />
          <span className="text-lg xs:text-xl font-medium">
            Click on the info button to enable scroll on touchscreens
          </span>
        </div>
        <p className="mt-auto text-center italic text-lg tracking-wide animate-pulse">
          Click anywhere to close
        </p>
      </div>
    </div>
  );
}

export const ProjectsPopup = memo(ProjectsPopup_);
