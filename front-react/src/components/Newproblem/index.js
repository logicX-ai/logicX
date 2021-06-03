import React, { useState, useEffect } from 'react';
import 'rsuite/lib/styles/index.less';
import "./rsuite-dark.css"
import Firebase, { withFirebase, FirebaseContext } from '../Firebase';
import axios from 'axios';


function Newproblem() {
    const firebase = React.useContext(FirebaseContext)
    const [datalist, setDatalist] = useState([]);

    const config = {
      headers: {'Access-Control-Allow-Origin': '*'}
  };




  useEffect(() => {
    axios.get('http://127.0.0.1:5000/two', config)
  .then(response => setDatalist(response.data));
  }, []);
      return (
        <div style={{overflowY: 'scroll',

        width:'255px',
        float: 'left',
        height:'55px'}}> 


<ul>
    {datalist.map(function(item) {
      return <li key={item}>{item}</li>;
    })}
  </ul>

    </div>);
   
   }

export default withFirebase(Newproblem);

