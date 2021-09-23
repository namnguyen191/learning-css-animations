import styles from './FlippingWindowLoader.module.scss';

const FlippingWindowLoader: React.FC = () => {
  return (
    <div className={styles.FlippingWindowLoaderContainer}>
      <div className={styles.loaderContainer}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default FlippingWindowLoader;
