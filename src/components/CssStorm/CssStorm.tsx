import styles from './CssStorm.module.scss';

const CssStorm: React.FC = () => {
  return (
    <div className={styles.cssStormContainer}>
      <div className={styles.rain}></div>
    </div>
  );
};

export default CssStorm;
