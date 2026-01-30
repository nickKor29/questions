import { LogoutButton } from '@/features/auth';
import { SupportButton } from '@/features/support';
import styles from './SidebarBottom.module.css';
function SidebarBottom() {
  return (
    <div className={styles.container}>
      <SupportButton />
      <LogoutButton />
    </div>
  );
}

export default SidebarBottom;
