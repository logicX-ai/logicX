import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import Clock from '../Clock'

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
  <ul>
    <li>
      <Link to={ROUTES.HOME}>HOME</Link>
    </li>
    <li>
      <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
      <div> <Clock /></div>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    {!!authUser.roles[ROLES.ADMIN] && (
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    )}
    <li>
      <SignOutButton />
    </li>
  </ul>

</div>
);

const NavigationNonAuth = () => (
  
  <div> <ul>
    <li>
      <Link to={ROUTES.HOME}>HOME</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>

</div>

  


);


export default Navigation;
