import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { HashRouter as Router, Route, Redirect, Switch,MemoryRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
