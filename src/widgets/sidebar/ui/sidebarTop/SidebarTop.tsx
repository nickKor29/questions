import Logo from '@/shared/ui/logo/Logo';
import SidebarIcon from '@/shared/assets/icons/Sidebar-icon.svg?react';
import styles from './SidebarTop.module.css';
function SidebarTop() {
  return (
    <div className={styles.container}>
      <Logo />
      <button className={styles.button}>
        <SidebarIcon className="icon" />
      </button>
    </div>
  );
}

export default SidebarTop;
