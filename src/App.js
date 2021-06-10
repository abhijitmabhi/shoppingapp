import './App.css';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Products from './pages/Products';
import Settings from './pages/Settings';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Products/>
        </Route>
        <Route path='/settings'>
          <Settings/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
