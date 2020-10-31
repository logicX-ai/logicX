import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import HomePage from '../Home';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import DashboardPage from '../Dashboard';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import Clock from '../Clock'
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';





const App = () => (
  <Router>
    <div>

    <Navigation />

    <Clock />
      <hr />

      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.DASHBOARD} component={DashboardPage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />



    </div>

   
  </Router>

  
);

export default withAuthentication(App);
