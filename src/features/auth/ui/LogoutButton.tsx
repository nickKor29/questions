import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icon/Icon';
import styles from './LogoutButton.module.css';
export function LogoutButton() {
  return (
    <Button className={styles.button} variant="exit">
      <Icon type="exit" />
      <span>Выход</span>
    </Button>
  );
}
