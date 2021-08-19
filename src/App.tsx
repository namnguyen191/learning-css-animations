import { Route, Switch } from 'react-router-dom';
import HotCupOfTea from './components/HotCupOfTea/HotCupOfTea';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/">
          <HotCupOfTea />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
