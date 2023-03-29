import { Icon } from '@/components';

type ContactLinksProps = {
  classNames?: {
    list?: string;
    item?: string;
    link?: string;
    icon?: string;
  };
};

export function ContactLinks({ classNames }: ContactLinksProps) {
  return (
    <ul className={classNames?.list}>
      <li className={classNames?.item}>
        <a target="_blank" href="mailto:cherkirr@gmail.com" className={classNames?.link}>
          <Icon type="mail" className={classNames?.icon} />
        </a>
      </li>
      <li className={classNames?.item}>
        <a target="_blank" href="https://github.com/Kirill-Cherepanov" className={classNames?.link}>
          <Icon type="github" className={classNames?.icon} />
        </a>
      </li>
      <li className={classNames?.item}>
        <a target="_blank" href="https://vk.com/kcherepanov1/" className={classNames?.link}>
          <Icon type="vk" className={classNames?.icon} />
        </a>
      </li>
      <li className={classNames?.item}>
        <a
          target="_blank"
          href="https://discord.com/users/292300959265062922"
          className={classNames?.link}
        >
          <Icon type="discord" className={classNames?.icon} />
        </a>
      </li>
    </ul>
  );
}
