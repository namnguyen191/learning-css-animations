import React from 'react';
import styles from './FaceCursorTracer.module.scss';

const FaceCursorTracer: React.FC = () => {
  const leftEye = React.useRef<HTMLDivElement | null>(null);
  const rightEye = React.useRef<HTMLDivElement | null>(null);

  const traceMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!leftEye || !rightEye || !leftEye.current || !rightEye.current) {
      return;
    }
    [leftEye.current, rightEye.current].forEach((eye) => {
      const x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      const y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
      const radian = Math.atan2(e.pageX - x, e.pageY - y);
      const rot = radian * (180 / Math.PI) * -1 + 270;
      eye.style.transform = `rotate(${rot}deg)`;
    });
  };

  return (
    <div className={styles.faceCursorTracerContainer} onMouseMove={traceMouse}>
      <div className={styles.face}>
        <div className={styles.eyes}>
          <div className={styles.eye} ref={leftEye}></div>
          <div className={styles.eye} ref={rightEye}></div>
        </div>
      </div>
    </div>
  );
};

export default FaceCursorTracer;
