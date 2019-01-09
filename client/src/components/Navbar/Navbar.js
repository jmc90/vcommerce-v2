import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';
 import { withUser } from '../../context/UserProvider'
 import Logo from '../../styles/media/miner-icon.jpeg'
 import './Navbar.css'

 class NavbarComponent extends Component {
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
    const { token, logOut } = this.props
    
    let name = this.props.user.name
    // let nameFirstLetter = name.charAt().toUpperCase() 
    // let properName = nameFirstLetter + name.slice(1)

    return (
      <div>
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand
            className='nav-brand'               
            href="/">
            <img src={Logo} />
            Crypto Minerz
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/store">Store</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Market Info
                </DropdownToggle>
                <DropdownMenu right>
                <Fragment>
                  <DropdownItem>
                    <NavLink href="/market">Market</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/pools">Pools</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/chart">Charts</NavLink>
                  </DropdownItem>
                </Fragment>
                </DropdownMenu>
              </UncontrolledDropdown>
              {
                  !token ?
              <UncontrolledDropdown nav inNavbar>
              
                <DropdownToggle nav caret>
                  My Account
                </DropdownToggle>
                
                <DropdownMenu right>
               
                <Fragment>
                  <DropdownItem>
                    <NavLink href="/register"> Register </NavLink>
                  </DropdownItem>
                    <DropdownItem>
                    <NavLink href="/login"> Login </NavLink>
                    </DropdownItem>
                </Fragment>
                  
                </DropdownMenu>
              </UncontrolledDropdown>
              :
              <UncontrolledDropdown nav inNavbar>
              
                <DropdownToggle nav caret>
                  {name }
                </DropdownToggle>
                
                <DropdownMenu right>
                  <Fragment>
                    <DropdownItem>
                      <NavLink href="/wishlist"> Wishlist </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/cart"> Cart </NavLink>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <NavLink href="/profile"> Profile </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/" onClick={logOut}> Logout </NavLink>
                    </DropdownItem>
                  </Fragment>
                  
                </DropdownMenu>
              </UncontrolledDropdown>
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>

      </div>
    );
  }
}

export default withUser(NavbarComponent)

