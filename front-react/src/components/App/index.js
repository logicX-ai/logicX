import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from '../Home';
import SignUpPage from '../SignUp'; 
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import DashboardPage from '../Dashboard';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import "./logicx.css"
import LeftNav from '../LeftNav'
import TopNav from '../TopNav'


const App = () => (
<Router>




    
{/* Master FlexBox Starts*/}
<div class='flexbox'>
  <div class="flexboxnav"> 
  <TopNav/>

  </div>  
 
    <div class="mid-box"> 
    
        <div class="left-body-panel"> <LeftNav/></div>  
     
        {/* Right Mid column */}                
        <div class="right-body-panel"> 
        
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.DASHBOARD} component={DashboardPage} />

      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
     
   
 </div>  </div>












 </div>



{/* Master FlexBox Ends*/}
</Router>);

export default withAuthentication(App);
