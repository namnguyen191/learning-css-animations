import { lazy, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tennis-ball" element={<TennisBall />} />
          <Route path="/flipping-window" element={<FlippingWindowLoader />} />
          <Route
            path="/yellow-black-arrow"
            element={<YellowAndBlackArrowSignLoader />}
          />
          <Route path="/loading-text" element={<LoadingText />} />
          <Route path="/moon-night" element={<MoonNight />} />
          <Route path="/css-storm" element={<CssStorm />} />
          <Route path="/animated-leaves" element={<AnimatedLeaves />} />
          <Route path="/gradient-shadow" element={<GradientShadow />} />
          <Route path="/endless-road" element={<EndlessRoad />} />
          <Route path="/face-cursor-tracer" element={<FaceCursorTracer />} />
          <Route path="/neon-button" element={<NeonButton />} />
          <Route path="/neon-text" element={<NeonText />} />
          <Route path="/neon-loading" element={<NeonLoading />} />
          <Route
            path="/animated-icon-background"
            element={<AnimatedIconBackground />}
          />
          <Route
            path="/background-revert-tetric"
            element={<BackgroundRevertTetric />}
          />
          <Route path="/three-d-wavy-circle" element={<ThreeDWavyCircle />} />
          <Route path="/hot-cup-of-tea" element={<HotCupOfTea />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
