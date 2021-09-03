import styles from './MoonNight.module.scss';

const MoonNight: React.FC = () => {
  return (
    <div className={styles.moonNightContainer}>
      <div className={styles.bg}></div>
      <div className={styles.container}>
        <h1>The Night</h1>
        <div className={styles.center}>
          <div className={styles.moon}></div>
          <div className={styles.cloud}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`${styles.cloud} ${styles.cloud2}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoonNight;
