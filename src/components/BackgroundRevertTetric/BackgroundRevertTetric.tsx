import styles from './BackgroundRevertTetric.module.scss';

const BackgroundRevertTetric: React.FC = () => {
  const buildBackground = (): JSX.Element[] => {
    const blocks: JSX.Element[] = [];

    for (let i = 0; i < 400; i++) {
      blocks.push(
        <div
          key={i}
          className={styles.blocks}
          style={{ animationDelay: `${i * 0.05}s` }}
        ></div>
      );
    }

    return blocks;
  };

  return (
    <div className={styles.backgroundRevertTetricContainer}>
      <section>
        <h2>Revert Tetric Background</h2>
        <div className={styles.banner}>{buildBackground()}</div>
      </section>
    </div>
  );
};

export default BackgroundRevertTetric;
