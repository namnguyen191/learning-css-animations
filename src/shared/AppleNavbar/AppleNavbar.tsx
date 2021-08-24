import { PropsWithChildren } from 'react';
import styles from './AppleNavbar.module.scss';

export type AppleNavbarProps = {};

const AppleNavbar: React.FC<PropsWithChildren<AppleNavbarProps>> = (props) => {
  const { children } = props;

  return (
    <nav className={styles.appleNav} role="navigation">
      <ul className={styles.navItems}>{children}</ul>
    </nav>
  );
};

export default AppleNavbar;
