import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';

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

const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading</p>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
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
