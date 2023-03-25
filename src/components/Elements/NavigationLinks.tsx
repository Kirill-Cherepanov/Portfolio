import { HashLink } from 'react-router-hash-link';

type NavigationLinksProps = {
  classNames?: {
    list?: string;
    item?: string;
    link?: string;
  };
};

export function NavigationLinks({ classNames }: NavigationLinksProps) {
  return (
    <ul className={classNames?.list}>
      <li className={classNames?.item}>
        <HashLink className={classNames?.link} smooth to="/#top">
          Hero
        </HashLink>
      </li>
      <li className={classNames?.item}>
        <HashLink className={classNames?.link} smooth to="/#about-me">
          Me
        </HashLink>
      </li>
      <li className={classNames?.item}>
        <HashLink className={classNames?.link} smooth to="/#projects">
          Projects
        </HashLink>
      </li>
      <li className={classNames?.item}>
        <HashLink className={classNames?.link} smooth to="/#skills">
          Skills
        </HashLink>
      </li>
      <li className={classNames?.item}>
        <HashLink className={classNames?.link} smooth to="/#contact">
          Contact
        </HashLink>
      </li>
    </ul>
  );
}
