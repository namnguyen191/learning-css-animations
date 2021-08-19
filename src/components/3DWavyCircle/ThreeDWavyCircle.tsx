import styles from './ThreeDWavyCircle.module.scss';

const ThreeDWavyCircle: React.FC = () => {
  const generateCircle = (): JSX.Element[] => {
    const circles = [];

    for (let i = 14; i >= 1; i--) {
      circles.push(
        <span
          key={i}
          style={{
            top: `${10 * i}px`,
            left: `${10 * i}px`,
            bottom: `${10 * i}px`,
            right: `${10 * i}px`,
            animationDelay: `${i * 0.1}s`,
          }}
        ></span>
      );
    }

    return circles;
  };

  return (
    <div className={styles.threeDwavycirclecontainer}>
      <div className={styles.loader}>{generateCircle()}</div>
    </div>
  );
};

export default ThreeDWavyCircle;
