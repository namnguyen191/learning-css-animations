import { Link } from 'react-router-dom';
import ParallaxCard from '../../shared/ParallaxCard/ParallaxCard';
import styles from './HomePage.module.scss';
import animatedIconBg from './images/animated-icons-bg.gif';
import hotCupOfTeaBg from './images/hot-cup-of-tea.gif';
import revertTetricBg from './images/revert-tetric.gif';
import wavy3dBg from './images/wavy-three-d.gif';

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePageContainer}>
      <Link to="/animated-icon-background">
        <ParallaxCard
          title="Animated Icons Background"
          text="Icons, icons everywhere, RIP fps"
          imageUrl={animatedIconBg}
        />
      </Link>
      <Link to="/background-revert-tetric">
        <ParallaxCard
          title="Revert Tetric"
          text="When ur bad at tetric, just let css play the game for you"
          imageUrl={revertTetricBg}
        />
      </Link>
      <Link to="/three-d-wavy-circle">
        <ParallaxCard
          title="3D Wavy Circle"
          text="Don't know what this is, but it's so satisfying"
          imageUrl={wavy3dBg}
        />
      </Link>
      <Link to="/hot-cup-of-tea">
        <ParallaxCard
          title="Hot Cup of Tea"
          text="Cause coffee sucks!"
          imageUrl={hotCupOfTeaBg}
        />
      </Link>
    </div>
  );
};

export default HomePage;
