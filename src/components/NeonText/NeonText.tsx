import styles from './NeonText.module.scss';

const NeonText: React.FC = () => {
  return (
    <div className={styles.neonTextContainer}>
      <h2 contentEditable="true">Text</h2>
    </div>
  );
};

export default NeonText;
