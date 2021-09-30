import styles from './TennisBall.module.scss';

const TennisBall: React.FC = () => {
  return (
    <div className={styles.TennisBallContainer}>
      <div className={styles.center}>
        <div className={styles.ball}></div>
        <div className={styles.shadow}></div>
      </div>
    </div>
  );
};

export default TennisBall;
