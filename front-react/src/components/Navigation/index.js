import React from 'react';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import 'semantic-ui-css/semantic.min.css'

const Navigation = () => (

 
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>



);

const NavigationAuth = ({ authUser }) => (
  <div>
  
      <Link to={ROUTES.HOME}>HOME</Link>

      <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
  
      <Link to={ROUTES.ACCOUNT}>Account</Link>
  
    {!!authUser.roles[ROLES.ADMIN] && (
   
        <Link to={ROUTES.ADMIN}>Admin</Link>
    
    )}
  
      <SignOutButton />
 
 

</div>
);

const NavigationNonAuth = () => (
  
  <div> 
      <Link to={ROUTES.HOME}>HOME</Link>
   
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
 
</div>

  


);


export default Navigation;
