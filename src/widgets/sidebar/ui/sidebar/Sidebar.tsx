import SidebarMain from '../sidebarMain/SidebarMain';
import SidebarTop from '../sidebarTop/SidebarTop';
import styles from './Sidebar.module.css';
import SidebarBottom from '../sidebarBottom/SidebarBottom';
function Sidebar() {
  return (
    <aside className={styles.aside}>
      <SidebarTop />
      <SidebarMain />
      <SidebarBottom />
    </aside>
  );
}

export { Sidebar };
