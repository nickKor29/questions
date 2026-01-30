import { Icon } from '@/shared/ui/icon/Icon';
import styles from './SidebarMain.module.css';
import SubMenu from './SubMenu';
import clsx from 'clsx';
function SidebarMain() {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <a className={clsx(styles.listItem, styles.active)} href="#">
            <Icon type="home" />
            <span>Главная</span>
          </a>
        </li>

        <li>
          <a className={styles.listItem} href="#">
            <Icon type="user" />
            <span>Мой профиль</span>
          </a>
        </li>
        <SubMenu
          buttonText="Обучение"
          buttonIcon={<Icon type="book" />}
          links={[
            { icon: <Icon type="student" />, text: 'Собеседование', path: '#' },
            { icon: <Icon type="broadcast" />, text: 'Roadmap', path: '#' },
          ]}
        />

        <SubMenu
          buttonText="Блог"
          buttonIcon={<Icon type="notebook" />}
          links={[
            { icon: <Icon type="list" />, text: 'Все статьи', path: '#' },
            { icon: <Icon type="userHeart" />, text: 'Личный блог', path: '#' },
            { icon: <Icon type="pencil" />, text: 'Написать статью', path: '#' },
            { icon: <Icon type="bookmark" />, text: 'Сохранённые', path: '#' },
          ]}
        />
      </ul>
    </nav>
  );
}

export default SidebarMain;
