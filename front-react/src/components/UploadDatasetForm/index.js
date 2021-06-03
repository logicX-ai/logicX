import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


  import "react-dropzone-uploader/dist/styles.css";
  import Dropzone from "react-dropzone-uploader";
  import axios from 'axios';
  export default function UploadDatasetForm() {
    const [datalist, setDatalist] = useState([]);


    const doit = (data) => {
    setDatalist(data)
    }

    const getUploadParams = () => {
      return { url: "http://127.0.0.1:5000/", };
    };
  
    const handleChangeStatus = ({ meta }, status) => {
      //console.log(status, meta);
    };
  
      const handleSubmit = (files, allFiles) => {
      //console.log(files.map(f => f.meta));
      allFiles.forEach(f => f.remove());
      

      const config = {
        headers: {'Access-Control-Allow-Origin': '*'}
    };
       axios.get('http://127.0.0.1:5000/two', config)
      .then(function (response) {
        console.log('hi',response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
       
      }) 
    };
  
 

    return (
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        inputContent="UPLOAD"
        onSubmit={handleSubmit}
        onSubmit={doit}
        maxFiles={1}

        styles={{ dropzone: { minHeight: 100, maxHeight: 70 } }}
      />
    );
  }