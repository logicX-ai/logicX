import React from 'react';
import DropzoneComponent from 'react-dropzone-component';
import { Navbar } from 'rsuite';

function Clock() {

   {

  var componentConfig = {
    iconFiletypes: ['.csv', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: 'http://127.0.0.1:5000/'
};

 const djsConfig = {
  addRemoveLinks: true,
  acceptedFiles: ".csv",
};
var eventHandlers = { addedfile: (file) => console.log(file, file.name) }
  return (
    <DropzoneComponent config={componentConfig}
  
    djsConfig={djsConfig}
    eventHandlers={eventHandlers} />
  );
}}

export default Clock;


