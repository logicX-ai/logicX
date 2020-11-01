import React from 'react';
import { compose } from 'recompose';
import { withAuthorization} from '../Session';
import Messages from '../Messages';
import Clock from '../Clock'
import Mama from '../Mama'

const DashboardPage = () => (

 
  <div>
        <center>

<Mama />

 
    <p>Welcome to our Time-Series Prediction Lab using Deep Learning.</p>
   
    <Clock />
   
   
    <Messages />
    
    
    </center>




  </div>






);

const condition = authUser => !!authUser;

export default compose(
 /// withEmailVerification,
  withAuthorization(condition),
)(DashboardPage);