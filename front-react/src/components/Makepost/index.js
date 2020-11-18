import React, { Component } from 'react';
import { CSVReader } from 'react-papaparse';
import axios from 'axios';
import "./logicx.css"

export default class Makepost extends Component {
  handleOnDrop = (data) => {
    console.log(data);
    axios.post('http://127.0.0.1:5000/', {
      data
    })
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
        <h5>Upload Dataset</h5>
        <CSVReader
          onDrop={this.handleOnDrop}
          onError={this.handleOnError}
          addRemoveButton
          onRemoveFile={this.handleOnRemoveFile}>
          <span>Drop CSV file here</span>
        </CSVReader>
      </>
    );
  }
}