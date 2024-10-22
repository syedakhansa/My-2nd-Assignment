
// components/Header.js
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Pinch of Yum</h1>
      <h2 className={styles.subtitle}>Delicious Food, Creative Photography</h2>
    </header>
  );
};

export default Header;