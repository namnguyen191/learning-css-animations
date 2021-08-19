import styles from './HotCupOfTea.module.scss';

const HotCupOfTea: React.FC = () => {
  const generateVapour = () => {
    const vaporDelay = [
      1, 3, 16, 5, 13, 20, 6, 7, 10, 8, 17, 11, 12, 14, 2, 9, 15, 4, 19,
    ];

    return vaporDelay.map((de) => {
      return <span style={{ animationDelay: `calc(${de} * -0.5s)` }}></span>;
    });
  };

  return (
    <div className={styles.hotCupOfTeaContainer}>
      <div className={styles.container}>
        <div className={styles.plate}></div>
        <div className={styles.cup}>
          <div className={styles.top}>
            <div className={styles.vapour}>{generateVapour()}</div>
            <div className={styles.circle}>
              <div className={styles.tea}></div>
            </div>
          </div>
          <div className={styles.handle}></div>
        </div>
      </div>
    </div>
  );
};

export default HotCupOfTea;
