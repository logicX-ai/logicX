import React from 'react';
import DropzoneComponent from 'react-dropzone-component';
import "bootstrap/dist/css/bootstrap.min.css";


class Clock extends React.Component {

  render() {

  var componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: 'google.com'
};

 const djsConfig = {
  addRemoveLinks: false,
  acceptedFiles: "csv",
  autoProcessQueue: true
};
var eventHandlers = { addedfile: (file) => console.log(file, file.name) }
  return (
    <DropzoneComponent config={componentConfig}
  
    djsConfig={djsConfig}
    eventHandlers={eventHandlers} />
  );
}
}
export default Clock;


