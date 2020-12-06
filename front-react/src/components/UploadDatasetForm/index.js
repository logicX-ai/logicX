import React, { Component } from 'react';
import { CSVReader } from 'react-papaparse';
import axios from 'axios';
import "./logicx.css"
import { withFirebase } from '../Firebase';


export default class UploadDatasetForm extends Component {






  handleOnDrop = (data) => {
    

  console.log(data.keys())

  
    axios.post('http://127.0.0.1:5000/',[{
      data}, {'Dataset_Name' : 'dafq'}]
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  handleOnRemoveFile = (data) => {
    console.log(data);
  };

  render() {
    return (
      <>
  
        <CSVReader
          onDrop={this.handleOnDrop}
          onError={this.handleOnError}
          addRemoveButton
          onRemoveFile={this.handleOnRemoveFile}>
          <span>Upload CSV </span>
    

        </CSVReader>
      </>
    );
  }
}