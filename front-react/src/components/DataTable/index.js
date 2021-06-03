import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import Firebase, { withFirebase, FirebaseContext } from '../Firebase';


const Datatable = () => {
  const firebase = React.useContext(FirebaseContext)


 const df =  [
    {
      id: 1,
      name: "a",
      age: 29,
      qualification: "B.Com",
      rating: 3,
      gender: "male",
      city: "Kerala",
      skills: ["reactjs", "angular", "vuejs"]
    },
    {
      id: 2,
      name: "b",
      age: 35,
      qualification: "B.Sc",
      rating: 5,
      gender: "female",
      city: "Mumbai",
      skills: ["reactjs", "angular"]
    },
    {
      id: 3,
      name: "c",
      age: 42,
      qualification: "B.E",
      rating: 3,
      gender: "female",
      city: "Bangalore",
      skills: ["reactjs"]
    }
  ];









  const columns = Object.keys(df[0]).map((key, id)=>{
    return {
      label: key,
      field: key
    }
  })









  const data = {
    columns: columns,
    rows: df
  };


console.log(data)
















    
  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}

export default Datatable;