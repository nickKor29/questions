import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icon/Icon';
import styles from './SupportButton.module.css';
export function SupportButton() {
  return (
    <Button className={styles.button} variant="support">
      <Icon type="support" />
      <span>Поддержка</span>
    </Button>
  );
}
