import { memo, MouseEventHandler } from 'react';
import { HashLink } from 'react-router-hash-link';
import deepEqual from 'deep-equal';

type NavigationLinksProps = {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  classNames?: {
    list?: string;
    item?: string;
    link?: string;
  };
};

export function NavigationLinks_({ onClick, classNames }: NavigationLinksProps) {
  return (
    <ul className={classNames?.list}>
      <li className={classNames?.item}>
        <HashLink className={classNames?.link} onClick={onClick} smooth to="/#top">
          Hero
        </HashLink>
      </li>
      <li className={classNames?.item}>
        <HashLink className={classNames?.link} onClick={onClick} smooth to="/#about-me">
          Me
        </HashLink>
      </li>
      <li className={classNames?.item}>
        <HashLink className={classNames?.link} onClick={onClick} smooth to="/#projects">
          Projects
        </HashLink>
      </li>
      <li className={classNames?.item}>
        <HashLink className={classNames?.link} onClick={onClick} smooth to="/#skills">
          Skills
        </HashLink>
      </li>
      <li className={classNames?.item}>
        <HashLink className={classNames?.link} onClick={onClick} smooth to="/#contact">
          Contact
        </HashLink>
      </li>
    </ul>
  );
}

export const NavigationLinks = memo(NavigationLinks_, deepEqual);
