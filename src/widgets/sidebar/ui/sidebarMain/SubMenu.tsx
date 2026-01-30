import IconArrow from '@/shared/assets/icons/arrow.svg?react';
import { useState } from 'react';
import styles from './SubMenu.module.css';
import type { ReactElement } from 'react';
import type { IconProps } from '@/shared/ui/icon/Icon';
import clsx from 'clsx';

type IconElement = ReactElement<IconProps>;

type Links = {
  icon: IconElement;
  text: string;
  path: string;
};

type Props = {
  buttonText: string;
  buttonIcon: IconElement;
  links: Links[];
};

function SubMenu({ buttonText, buttonIcon, links }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={styles.dropdownCont}>
      <button className={styles.dropdownBtn} onClick={() => setIsOpen((o) => !o)}>
        {buttonIcon}
        <span>{buttonText}</span>
        <IconArrow className={clsx(styles.arrowIcon, isOpen && styles.showArrow)} />
      </button>

      <div className={clsx(styles.dropdown, isOpen && styles.show)}>
        <ul className={styles.dropdownList}>
          {links.map((link) => (
            <li key={link.text}>
              <a className={styles.dropdownItem} href={link.path}>
                {link.icon}
                <span>{link.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default SubMenu;
