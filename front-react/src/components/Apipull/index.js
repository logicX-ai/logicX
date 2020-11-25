import React from 'react';
import 'rsuite/lib/styles/index.less';
import { Dropdown, Icon, Nav, Sidenav } from 'rsuite'
import "./rsuite-dark.css"
function Apipull() {{

 
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
     <div>
    <div style={{ display: 'flex', maxHeight: '50%',flexshrink: 2}}> 
    <Sidenav defaultOpenKeys={['3', '4']}>
      <Sidenav.Header>
        <div style={headerStyles}></div>
      </Sidenav.Header>
      <Sidenav.Body>
        <Nav>
          <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
            Datasets 
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
            Data Pre-processing
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
            Mobel Building
          </Nav.Item>
          <Dropdown eventKey="3" title="Model Building" icon={<Icon icon="magic" />}>
            <Dropdown.Item divider />
            <Dropdown.Item panel style={panelStyles}>
            Model Building
            </Dropdown.Item>
            <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
            <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
            <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
            <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
            <Dropdown.Item divider />


            <Dropdown.Item divider />
            <Dropdown.Item panel style={panelStyles}>
            Model Building
            </Dropdown.Item>
            <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
            <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
            <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
            <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
            <Dropdown.Item divider />


            <Dropdown.Item panel style={panelStyles}>
            Performance Metrics
            </Dropdown.Item>
            <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
            <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
            <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
            <Dropdown.Menu eventKey="4-5" title="Custom Action">
              <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
              <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  </div>
 </div>
   );

}}
 export default Apipull;
 
 