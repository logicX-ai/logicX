import React, { useState } from 'react';
import 'rsuite/lib/styles/index.less';
import "./rsuite-dark.css"
import Firebase, { withFirebase, FirebaseContext } from '../Firebase';



function Newproblem() {{
    const [count, setCount] = useState(0);
    const firebase = React.useContext(FirebaseContext)
    console.log(firebase.db.ref("newdatasets").child("dafq"))

    var ref = firebase.db.ref("newdatasets");
ref.orderByKey().on("child_added", function(snapshot) {
  console.log(snapshot.val());
});








    const panelStyles = {
       padding: '15px 20px',
       color: '#aaa'
     };
     
     const headerStyles = {
       padding: 20,
       fontSize: 16,
       background: '#c7d6df',
       color: ' #fff'
     };

     
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

