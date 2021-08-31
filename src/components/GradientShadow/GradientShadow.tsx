import styles from './GradientShadow.module.scss';

const GradientShadow: React.FC = () => {
  return (
    <div className={styles.gradientShadowContainer}>
      <div className={styles.shadowContainer}>
        <div className={styles.shadow}></div>
      </div>
    </div>
  );
};

export default GradientShadow;
