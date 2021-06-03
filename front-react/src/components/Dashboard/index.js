import React from 'react';
import { compose } from 'recompose';
import { withAuthorization} from '../Session';
import Messages from '../Messages';
import "./logicx.css"
import UploadDatasetForm from '../UploadDatasetForm'
import Newproblem from '../Newproblem'
import DataTable from '../DataTable'
import SimpleAccordion from '../SimpleAccordion'

const DashboardPage = () => (

<div>

  <div class="box">


<div class="alta"><DataTable/></div>

</div> 

<br></br>
<br></br>
<div class="box">




<div class="alta"><Messages/></div>



</div> 




</div>






);

const condition = authUser => !!authUser;

export default compose(
 /// withEmailVerification,
  withAuthorization(condition),
)(DashboardPage);