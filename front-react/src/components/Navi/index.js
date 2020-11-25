import React from 'react';
import "./rsuite-dark2.css"
import Navigation from '../Navigation';
import { Dropdown, Icon, Nav, Navbar } from 'rsuite'


function Navi() {
    return(
 <div class='hoj'>

    
    <Navbar>
  
    <Navbar.Body>   <Navbar.Header>
      <a href="www.logicx.ai/" className="navbar-brand logo">LogicX</a>
    </Navbar.Header>
      <Nav>
        <Nav.Item icon={<Icon icon="home" />} >Home</Nav.Item>
        <Nav.Item>News</Nav.Item>
        <Nav.Item>Products</Nav.Item>
        <Dropdown title="About">
          <Dropdown.Item>Company</Dropdown.Item>
          <Dropdown.Item>Team</Dropdown.Item>
          <Dropdown.Item>Contact</Dropdown.Item>
        </Dropdown>
      </Nav>
 
      <Navigation/>
    </Navbar.Body>

  </Navbar></div>);}

export default Navi;
