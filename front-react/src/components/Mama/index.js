import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';
import Clock from '../Clock'
class Mama extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
              
                <Navbar color="inverse" light expand="md">
                    <NavbarBrand href="/">LogicX.ai</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                            <Button
                                        tag="a"
                                        color="dark"
                                        size="large"
                                        href="http://localhost:3000/"
                                        target="_blank"
                                    >
                                        HOME
                                    </Button>
                            </NavItem>

                            <NavItem>  <span>&nbsp;&nbsp;</span>
                            <Button
                                        tag="a"
                                        color="dark"
                                        size="large"
                                        href="http://reactstrap.github.io"
                                        target="_self"
                                    >
                                        DATA
                                    </Button>
                            </NavItem>
                            <NavItem> <span>&nbsp;&nbsp;</span>
                              <Button
                                        tag="a"
                                        color="dark"
                                        size="large"
                                        href="http://localhost:3000/dashboard"
                                        target="_self"
                                    >
                                        LAB
                                    </Button>
                            </NavItem>
          
                            <NavItem> <span>&nbsp;&nbsp;</span>
                            <Button
                                        tag="a"
                                        color="dark"
                                        size="large"
                                        href="http://localhost:3000/account"
                                        target="_self"
                                    >
                                        ACCOUNT
                                    </Button>
                                   </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>


                           
                                <h1>Time-Series Deep Learning</h1>
                                <p>
                                    <Button
                                        color="dark"
                                        size="large"
                                        target="_blank"
                                    >
                                         <Clock />
                            
                                    </Button>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Mama;