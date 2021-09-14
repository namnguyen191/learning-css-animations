import styles from './YellowAndBlackArrowSignLoader.module.scss';

const YellowAndBlackArrowSignLoader: React.FC = () => {
  return (
    <div className={styles.YellowAndBlackArrowSignLoaderContainer}>
      <div className={styles.loadingContainer}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default YellowAndBlackArrowSignLoader;
