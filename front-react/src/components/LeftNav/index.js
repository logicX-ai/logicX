import React from 'react';
import 'rsuite/lib/styles/index.less';
import { Dropdown, Icon, Nav, Sidenav } from 'rsuite'
import "./rsuite-dark.css"
import UploadDatasetForm from '../UploadDatasetForm'
import Newproblem from '../Newproblem'
function LeftNav() {{

 
 const panelStyles = {
    padding: '15px 20px',
    color: '#aaa'
  };
  
  const headerStyles = {
    padding: 20,
    fontSize: 16,
    background: '#ffffff',
    color: ' #fff'
  };
   return (
     <div>
    <div style={{ display: 'flex', maxHeight: '50%',flexshrink: 2}}> 
    <Sidenav defaultOpenKeys={['1']}>
      <Sidenav.Header>
        <div style={headerStyles}></div>
      </Sidenav.Header>
      <Sidenav.Body>
        <Nav>
          
     
          <Dropdown eventKey="1" title="Datasets" icon={<Icon icon="dashboard" /> } > 
            <Dropdown.Item divider />
            <Dropdown.Item panel style={panelStyles}>
            <UploadDatasetForm/>  
            </Dropdown.Item>
          
          
            <Dropdown.Item divider />
           

            <Dropdown.Item divider />
            <Dropdown.Item panel style={panelStyles}>
        
            <div><Newproblem/></div>
            </Dropdown.Item>
            <Dropdown.Item eventKey="1-1">        </Dropdown.Item>
    
            <Dropdown.Item divider />
            
         
          </Dropdown>






          <Dropdown eventKey="2" title="Manipulation" icon={<Icon icon="dashboard" /> } > 
            <Dropdown.Item divider />
            <Dropdown.Item panel style={panelStyles}>
            <UploadDatasetForm/>  
            </Dropdown.Item>
          
    
            <Dropdown.Item divider />


            <Dropdown.Item divider />
            <Dropdown.Item panel style={panelStyles}>
        
            <div style={{overflowY: 'scroll',

width:'255px',
float: 'left',
height:'75px'}}>  </div>
            </Dropdown.Item>
            <Dropdown.Item eventKey="2-1">        </Dropdown.Item>
          
            <Dropdown.Item divider />


            <Dropdown.Item panel style={panelStyles}>
            Performance Metrics
            </Dropdown.Item>
            <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
          
            <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
            <Dropdown.Menu eventKey="4-5" title="Custom Action">
             
            </Dropdown.Menu>
          </Dropdown>

       
          <Nav.Item eventKey="3" icon={<Icon icon="group" />}>
            Data Pre-processing
          </Nav.Item>

        </Nav>
      </Sidenav.Body>
    </Sidenav>
  </div>
 </div>
   );

}}
 export default LeftNav;
 
 