// import LogoIcon from '@/shared/assets/logo.svg?react';
// import YeahubIcon from '@/shared/assets/yeahub.svg?react';
import styles from './Logo.module.css';
function Logo() {
  return (
    <a href="#" className={styles.link}>
      <img src="logo.svg" alt="" />
      <img src="yeahub.svg" alt="" />
      {/* <LogoIcon />
      <YeahubIcon /> */}
    </a>
  );
}

export default Logo;
