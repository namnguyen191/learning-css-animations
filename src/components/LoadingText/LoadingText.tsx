import styles from './LoadingText.module.scss';

const LoadingText: React.FC = () => {
  return (
    <div className={styles.LoadingTextContainer}>
      <ul>
        <li data-title="L">L</li>
        <li data-title="O">O</li>
        <li data-title="A">A</li>
        <li data-title="D">D</li>
        <li data-title="I">I</li>
        <li data-title="N">N</li>
        <li data-title="G">G</li>
      </ul>
    </div>
  );
};

export default LoadingText;
