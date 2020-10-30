import React from 'react';
import DropzoneComponent from 'react-dropzone-component';

function Clock() {
  var componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: '/uploadHandler'
};

const djsConfig = {
  addRemoveLinks: true,
  acceptedFiles: "csv",
  autoProcessQueue: true
};
var eventHandlers = { addedfile: (file) => console.log(file, file.size) }
  return (
    <DropzoneComponent config={componentConfig}
  
    djsConfig={djsConfig}
    eventHandlers={eventHandlers} />
  );
}

export default Clock;


