import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBDropdown, MDBDropdownToggle, MDBIcon, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink } from 'reactstrap';

class NavBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
    const bgPink = {backgroundColor: '#9e9e9e'}
    return(
      <div>
        <Router>
          <header>
            <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
                <MDBNavbarToggler onClick={ this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <NavLink href='/'>Home</NavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <NavLink href="/portfolio">Portfolio</NavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <NavLink href="/resume">Resume</NavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <NavLink href="/contact">Contact</NavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
                    <MDBDropdown>
                        <MDBDropdownToggle className='white-text' nav caret>
                          <MDBIcon className='white-text' icon="plus-circle" />
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-default">
                            <MDBDropdownItem href="https://github.com/baronvontoby" target='_blank'>
                              <MDBIcon className='grey-text' fab icon="github" /> GitHub</MDBDropdownItem>
                            <MDBDropdownItem href="https://www.linkedin.com/in/lorenzo-dandrea-41b720157/" target='_blank'>
                              <MDBIcon className='grey-text' fab icon="linkedin" /> LinkedIn</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
            </MDBNavbar>
          </header>
        </Router>
      </div>
    );
  }
}

export default NavBar;