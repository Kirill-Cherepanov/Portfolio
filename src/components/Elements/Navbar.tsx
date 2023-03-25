import clsx from 'clsx';
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState } from 'react';

import {
  Logo,
  ThemeSwitchButton,
  HamburgerButton,
  NavigationLinks,
  ContactLinks,
} from '@/components';
import {
  useDisclosure,
  useMinWidthMediaQuery,
  useOnClickOutside,
  useScrollDirection,
} from '@/hooks';

export function Navbar() {
  const { isOpen, close, toggle } = useDisclosure();
  const drawerRef = useOnClickOutside<HTMLDivElement>(close);
  const isScreenMd = useMinWidthMediaQuery('md');
  const scrollDirection = useScrollDirection((dir) => dir > 0 && close());

  const [isOnTop, setIsOnTop] = useState(true);
  useEffect(() => {
    const updatePosition = () => setIsOnTop(window.scrollY === 0);
    window.addEventListener('scroll', updatePosition);
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return (
    <nav
      className={clsx(
        'fixed left-0 right-0 z-[999999999] transition-all duration-300',
        scrollDirection < 0 || isOnTop ? 'top-0' : '-top-full',
        isOnTop || 'bg-main-reverse-0 dark:bg-main-0'
      )}
    >
      {isScreenMd ? (
        <div className="main-layout flex justify-between items-center py-6 text-lg uppercase font-semibold tracking-widest">
          <div className="grow">
            <HashLink smooth to="/#top">
              <Logo className="h-14 text-default transition-color duration-300" />
            </HashLink>
          </div>
          <NavigationLinks
            classNames={{
              list: 'flex justify-between items-center grow-[2]',
              link: 'pb-1.5 center-to-sides-border',
            }}
          />
          <div className="text-right grow">
            <ThemeSwitchButton className="w-6 h-6" />
          </div>
        </div>
      ) : (
        <div
          className="main-layout h-24 flex justify-between items-center relative z-[999999999]"
          ref={drawerRef}
        >
          <div
            className={clsx(
              'w-full xs:w-80 h-screen fixed top-0 -right-full xs:-right-80 pt-28 pb-8 px-8 flex flex-col transition-all duration-300 bg-default text-default',
              isOpen ? '-translate-x-full' : 'translate-x-0'
            )}
          >
            <NavigationLinks
              classNames={{
                list: 'flex flex-col gap-5 text-xl uppercase font-black tracking-widest',
                link: 'pb-1.5 left-to-right-border after:!border-b-[3px]',
              }}
            />
            <div className="mt-auto w-full text-center">
              <ThemeSwitchButton className="h-8 w-8" />
              <div className="text-center my-6 font-light">
                Website portfolio of
                <br />
                <b className="font-bold">Kirill Cherepanov</b>
              </div>
              <ContactLinks
                classNames={{
                  list: 'flex justify-center gap-4',
                  icon: 'h-8 hover:scale-110 transition-transform',
                }}
              />
            </div>
          </div>
          <HashLink smooth to="/#top" className="relative">
            <Logo className="h-12 xs:h-14 text-default transition-color duration-300" />
          </HashLink>
          <HamburgerButton isOpen={isOpen} onClick={toggle} size={1.12} />
        </div>
      )}
    </nav>
  );
}
