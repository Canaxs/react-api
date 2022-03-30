import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import { HashRouter as Router, Route, Redirect, Switch,MemoryRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home/:id" component={Home} />
          <Route exact path="/character/:id" component={Details} />
          <Redirect to="/home/1" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
