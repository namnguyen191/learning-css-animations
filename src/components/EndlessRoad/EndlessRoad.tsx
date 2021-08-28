import { useEffect, useState } from 'react';
import styles from './EndlessRoad.module.scss';

const EndlessRoad: React.FC = () => {
  const [hueRotate, setHueRotate] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      setHueRotate((old) => old + 1);
    }, 50);
  }, []);

  return (
    <div
      className={styles.endlessRoadContainer}
      style={{
        filter: `hue-rotate(${hueRotate}deg)`,
      }}
    >
      <div className={styles.infinite}>
        <div className={styles.shadow}></div>
      </div>
    </div>
  );
};

export default EndlessRoad;
