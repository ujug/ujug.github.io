import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import {
  FaHome,
  FaBullhorn,
  FaComments,
  FaInfo,
  FaCalendar
} from 'react-icons/lib/fa';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: true
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
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Utrecht JUG</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>                
                <NavLink tag={Link} to="/"> 
                  <FaHome />
                  <span> Home </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about">
                  <FaInfo />
                  <span> About </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/talk">
                  <FaBullhorn />
                  <span> Submit a talk </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/event">
                  <FaCalendar />
                  <span> Events </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact">
                  <FaComments />
                  <span> Contact us </span>
                </NavLink>
              </NavItem> 
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
