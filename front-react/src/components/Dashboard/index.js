import React from 'react';
import { compose } from 'recompose';
import { withAuthorization} from '../Session';
import Messages from '../Messages';
import "./logicx.css"
import UploadDatasetForm from '../UploadDatasetForm'
import Newproblem from '../Newproblem'
import DataTable from '../DataTable'


const DashboardPage = () => (


  <div class="box">


<div class="alta">
<Messages/>
</div>


<div class="alta"><Newproblem/></div>


</div> 










);

const condition = authUser => !!authUser;

export default compose(
 /// withEmailVerification,
  withAuthorization(condition),
)(DashboardPage);