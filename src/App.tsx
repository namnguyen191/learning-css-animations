import { Route, Switch } from 'react-router-dom';
import ThreeDWavyCircle from './components/3DWavyCircle/ThreeDWavyCircle';
import HotCupOfTea from './components/HotCupOfTea/HotCupOfTea';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/">
          <ThreeDWavyCircle />
        </Route>
        <Route path="/hot-cup-of-tea">
          <HotCupOfTea />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
