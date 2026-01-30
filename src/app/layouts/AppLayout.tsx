import styles from './AppLayout.module.css';
import '../styles/style.css';
import { Header } from '@/widgets/header';
import { Sidebar } from '@/widgets/sidebar';
import { Outlet } from 'react-router';
//
function AppLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <Header />
      <div>Крошки</div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
