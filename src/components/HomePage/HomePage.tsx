import { Link } from 'react-router-dom';
import ParallaxCard from '../../shared/ParallaxCard/ParallaxCard';
import styles from './HomePage.module.scss';
import animatedIconBg from './images/animated-icons-bg.gif';
import blackYellowBg from './images/black-yellow-arrow-bg.gif';
import cssRainBg from './images/css-rain-bg.gif';
import endlessRoadBg from './images/endless-road.gif';
import faceCursorTracerBg from './images/face-cursor-tracer.gif';
import flippingWindowBg from './images/flipping-window-bg.gif';
import gradientShadowBg from './images/gradient-shadow.gif';
import hotCupOfTeaBg from './images/hot-cup-of-tea.gif';
import loadingTextBg from './images/loading-text-bg.gif';
import moonNightBg from './images/moon-night.png';
import neonButtonsBg from './images/neon-buttons.gif';
import neonLoadingBg from './images/neon-loading.gif';
import neonTextBg from './images/neon-text.gif';
import revertTetricBg from './images/revert-tetric.gif';
import tennisBallBg from './images/tennis-ball-bg.gif';
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
      <Link to="/gradient-shadow">
        <ParallaxCard
          title="Gradient Shadow"
          text="There's a rainbow on otherside of the dark side"
          imageUrl={gradientShadowBg}
        />
      </Link>
      <Link to="/css-storm">
        <ParallaxCard
          title="CSS Storm"
          text="The rain calm the mind"
          imageUrl={cssRainBg}
        />
      </Link>
      <Link to="/moon-night">
        <ParallaxCard
          title="Moon Night"
          text="One of those nights"
          imageUrl={moonNightBg}
        />
      </Link>
      <Link to="/loading-text">
        <ParallaxCard
          title="Loading Text"
          text="Waiting for stuffs to load is fun!"
          imageUrl={loadingTextBg}
        />
      </Link>
      <Link to="/yellow-black-arrow">
        <ParallaxCard
          title="Loading Indicator"
          text="Hazardous Warning, this might take a while"
          imageUrl={blackYellowBg}
        />
      </Link>
      <Link to="/flipping-window">
        <ParallaxCard
          title="Flipping Windows"
          text="When flipping tables is not enough"
          imageUrl={flippingWindowBg}
        />
      </Link>
      <Link to="/tennis-ball">
        <ParallaxCard
          title="Tennis Ball"
          text="Fetch boy fetch!"
          imageUrl={tennisBallBg}
        />
      </Link>
    </div>
  );
};

export default HomePage;
