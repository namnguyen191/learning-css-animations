/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './NeonButton.module.scss';

const NeonButton: React.FC = () => {
  return (
    <div className={styles.neonButtonContainer}>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Neon Button
      </a>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Neon Button
      </a>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Neon Button
      </a>
    </div>
  );
};

export default NeonButton;
