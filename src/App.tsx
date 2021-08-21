import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const BackgroundRevertTetric = lazy(
  () => import('./components/BackgroundRevertTetric/BackgroundRevertTetric')
);
const HotCupOfTea = lazy(() => import('./components/HotCupOfTea/HotCupOfTea'));
const ThreeDWavyCircle = lazy(
  () => import('./components/3DWavyCircle/ThreeDWavyCircle')
);

const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading</p>}>
        <Switch>
          <Route path="/">
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
