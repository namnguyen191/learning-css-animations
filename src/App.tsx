import { lazy, Suspense } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AppleNavbar from './shared/AppleNavbar/AppleNavbar';

const BackgroundRevertTetric = lazy(
  () => import('./components/BackgroundRevertTetric/BackgroundRevertTetric')
);
const HotCupOfTea = lazy(() => import('./components/HotCupOfTea/HotCupOfTea'));
const ThreeDWavyCircle = lazy(
  () => import('./components/3DWavyCircle/ThreeDWavyCircle')
);
const AnimatedIconBackground = lazy(
  () => import('./components/AnimatedIconBackground/AnimatedIconBackground')
);
const NeonLoading = lazy(() => import('./components/NeonLoading/NeonLoading'));
const NeonText = lazy(() => import('./components/NeonText/NeonText'));
const NeonButton = lazy(() => import('./components/NeonButton/NeonButton'));
const FaceCursorTracer = lazy(
  () => import('./components/FaceCursorTracer/FaceCursorTracer')
);
const EndlessRoad = lazy(() => import('./components/EndlessRoad/EndlessRoad'));
const GradientShadow = lazy(
  () => import('./components/GradientShadow/GradientShadow')
);
const AnimatedLeaves = lazy(
  () => import('./components/AnimatedLeaves/AnimatedLeaves')
);
const CssStorm = lazy(() => import('./components/CssStorm/CssStorm'));
const MoonNight = lazy(() => import('./components/MoonNight/MoonNight'));
const LoadingText = lazy(() => import('./components/LoadingText/LoadingText'));
const YellowAndBlackArrowSignLoader = lazy(
  () =>
    import(
      './components/YellowAndBlackArrowSignLoader/YellowAndBlackArrowSignLoader'
    )
);
const FlippingWindowLoader = lazy(
  () => import('./components/FlippingWindowLoader/FlippingWindowLoader')
);
const TennisBall = lazy(() => import('./components/TennisBall/TennisBall'));

const App = () => {
  return (
    <div>
      <AppleNavbar>
        <Link to="/" style={{ color: '#fff' }}>
          Home
        </Link>
        <Link to="/" style={{ color: '#fff' }}>
          <i style={{ fontSize: '27px' }} className="fab fa-github"></i>
        </Link>
      </AppleNavbar>
      <Suspense fallback={<p>Loading</p>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/tennis-ball">
            <TennisBall />
          </Route>
          <Route exact path="/flipping-window">
            <FlippingWindowLoader />
          </Route>
          <Route exact path="/yellow-black-arrow">
            <YellowAndBlackArrowSignLoader />
          </Route>
          <Route exact path="/loading-text">
            <LoadingText />
          </Route>
          <Route exact path="/moon-night">
            <MoonNight />
          </Route>
          <Route exact path="/css-storm">
            <CssStorm />
          </Route>
          <Route exact path="/animated-leaves">
            <AnimatedLeaves />
          </Route>
          <Route exact path="/gradient-shadow">
            <GradientShadow />
          </Route>
          <Route exact path="/endless-road">
            <EndlessRoad />
          </Route>
          <Route exact path="/face-cursor-tracer">
            <FaceCursorTracer />
          </Route>
          <Route exact path="/neon-button">
            <NeonButton />
          </Route>
          <Route exact path="/neon-text">
            <NeonText />
          </Route>
          <Route exact path="/neon-loading">
            <NeonLoading />
          </Route>
          <Route path="/animated-icon-background">
            <AnimatedIconBackground />
          </Route>
          <Route path="/background-revert-tetric">
            <BackgroundRevertTetric />
          </Route>
          <Route path="/three-d-wavy-circle">
            <ThreeDWavyCircle />
          </Route>
          <Route path="/hot-cup-of-tea">
            <HotCupOfTea />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
