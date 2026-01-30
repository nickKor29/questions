import styles from './Header.module.css';
import IconSettings from '@/shared/assets/icons/settings.svg?react';
import profileImg from '/profile.png';
import { Icon } from '@/shared/ui/icon/Icon';
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <IconSettings className="icon" />
        <Icon type="user" />
        <img className={styles.profileImg} src={profileImg} alt="" />
      </div>
    </header>
  );
}
