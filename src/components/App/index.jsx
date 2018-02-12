import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import SpinnerContainer from '../../containers/SpinnerContainer';
import './index.css';
import store from '../../store';

const App = () => (
  <Provider store={store}>
    <div>
      <SpinnerContainer />
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </Router>
    </div>
  </Provider>
);

export default App;
