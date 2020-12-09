import React, { useState, useEffect } from 'react';
import 'rsuite/lib/styles/index.less';
import "./rsuite-dark.css"
import Firebase, { withFirebase, FirebaseContext } from '../Firebase';



function Newproblem() {{
    const firebase = React.useContext(FirebaseContext)
    const [datalist, setDatalist] = useState([]);
    const ref = firebase.db.ref("newdatasets");


    useEffect(() => {
    ref.orderByKey().on("value", function(snapshot) {
   
    //  setDatalist(snapshot.val()['-MN3_Q8JI7ZSb6BVYdt8'])


      // individual dataset (list of dicts)
      const myDataArray = []
      snapshot.forEach(doc =>
        myDataArray.push({ ...doc.key},
          console.log(doc.key))
      )
      



     

      console.log(snapshot.val()['dafq'])
      console.log('WE HERE__________________________')
      const myDataArray2 = []
        Object.entries(snapshot.val()['dafq'])
        .map( ([key, value]) => myDataArray2.push(key))
        setDatalist(myDataArray2)
    //console.log(snapshot.val()['-MN3_Q8JI7ZSb6BVYdt8'])
 
});






}, []);

console.log(datalist)
      return (
        <div> 


<ul>
    {datalist.map(function(item) {
      return <li key={item}>{item}</li>;
    })}
  </ul>

    </div>);
   
   }}

export default withFirebase(Newproblem);

