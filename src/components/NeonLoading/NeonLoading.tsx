import styles from './NeonLoading.module.scss';

const NeonLoading: React.FC = () => {
  const generateDots = (): JSX.Element[] => {
    const dots: JSX.Element[] = [];

    for (let i = 1; i <= 20; i++) {
      dots.push(
        <span
          key={i}
          style={{
            transform: `rotate(calc(18deg * ${i}))`,
          }}
        >
          <div
            style={{
              animationDelay: `calc(0.1s * ${i})`,
            }}
          ></div>
        </span>
      );
    }

    return dots;
  };

  return (
    <div className={styles.neonLoadingContainer}>
      <div className={styles.loader}>{generateDots()}</div>
    </div>
  );
};

export default NeonLoading;
