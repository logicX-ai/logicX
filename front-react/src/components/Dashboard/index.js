import React from 'react';
import { compose } from 'recompose';
import { withAuthorization} from '../Session';
import Messages from '../Messages';
import "./logicx.css"
import Makepost from '../Makepost'

const DashboardPage = () => (







  <div class="box">

      
<div class="alta">



<Messages/>
</div>

<div class="alta"></div>
<Makepost/>

<div class="alta"><ul>
  <li>Preprocess and clean the data.</li>
  <li>Select and construct appropriate features.</li>
  <li>Select an appropriate model family.</li>
  <li>Optimize model hyperparameters.</li>
  <li>Postprocess machine learning models.</li>


  
  <li>Critically analyze the results obtained.</li></ul></div>


</div> 










);

const condition = authUser => !!authUser;

export default compose(
 /// withEmailVerification,
  withAuthorization(condition),
)(DashboardPage);