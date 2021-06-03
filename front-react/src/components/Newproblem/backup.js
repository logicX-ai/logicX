import React, { useState, useEffect } from 'react';
import 'rsuite/lib/styles/index.less';
import "./rsuite-dark.css"
import Firebase, { withFirebase, FirebaseContext } from '../Firebase';



function Newproblem() {{
    const [count, setCount] = useState(0);
    const [DataList, setDatalist] = useState(null);

    const firebase = React.useContext(FirebaseContext)
    const ref = firebase.db.ref("newdatasets");

    
    ref.orderByKey().on("child_added", function(snapshot) {

      console.log(snapshot.val());

      console.log(
        Object.entries(snapshot.val())
        .map( ([key, value]) => `Dataset: ${key}` )
      )
  //console.log(








      console.log(snapshot.val()['-MN3_Q8JI7ZSb6BVYdt8']);


});












useEffect(() => {
  // Update the document title using the browser API
  document.title = `You clicked ${count} times`;
});


      return (
        <div> {firebase.key}






       <div style={{ display: 'flex', maxHeight: '50%',flexshrink: 2}}> 
       <div className="Newproblem">
      <h1>Hello CodeSandbox</h1>
      <h2>You clicked {count} times!</h2>

      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
     </div>
    </div>);
   
   }}

export default withFirebase(Newproblem);










   ///const ref = firebase.db.ref("user");
    //ref.child("datasets").once("value", function(snapshot) {

    
    //ref.off()

//});