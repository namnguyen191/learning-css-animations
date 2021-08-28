import { Link } from 'react-router-dom';
import ParallaxCard from '../../shared/ParallaxCard/ParallaxCard';
import styles from './HomePage.module.scss';
import animatedIconBg from './images/animated-icons-bg.gif';
import endlessRoadBg from './images/endless-road.gif';
import faceCursorTracerBg from './images/face-cursor-tracer.gif';
import hotCupOfTeaBg from './images/hot-cup-of-tea.gif';
import neonButtonsBg from './images/neon-buttons.gif';
import neonLoadingBg from './images/neon-loading.gif';
import neonTextBg from './images/neon-text.gif';
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
      <Link to="/neon-loading">
        <ParallaxCard
          title="Neon Loading"
          text="Trippy AF"
          imageUrl={neonLoadingBg}
        />
      </Link>
      <Link to="/neon-text">
        <ParallaxCard
          title="Neon Text"
          text="Hello darkness my old friend"
          imageUrl={neonTextBg}
        />
      </Link>
      <Link to="/neon-button">
        <ParallaxCard
          title="Neon Button"
          text="Oooh So Shiny!"
          imageUrl={neonButtonsBg}
        />
      </Link>
      <Link to="/face-cursor-tracer">
        <ParallaxCard
          title="Eye Tracker"
          text="No touchy my facy"
          imageUrl={faceCursorTracerBg}
        />
      </Link>
      <Link to="/endless-road">
        <ParallaxCard
          title="Endless Road"
          text="Life's like a road that you travel on"
          imageUrl={endlessRoadBg}
        />
      </Link>
    </div>
  );
};

export default HomePage;
