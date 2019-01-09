import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavLink,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';
 import {Link} from 'react-router-dom'
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
                <NavLink href="/chart">Chart</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/pools">Pools</NavLink>
              </NavItem>
              <NavItem>
              <NavItem>
                <NavLink href="/market">Market</NavLink>
              </NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  My Account
                </DropdownToggle>
                <DropdownMenu right>
                {
                  !token ?
                <Fragment>
                  <DropdownItem>
                    <Link to="/register"> Register </Link>
                  </DropdownItem>
                    <DropdownItem>
                    <Link to="/login"> Login </Link>
                    </DropdownItem>
                </Fragment>
                    :
                  <Fragment>
                    <DropdownItem>
                      <Link to="/wishlist"> Wishlist </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/cart"> Cart </Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link to="/profile"> Profile </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/" onClick={logOut}> Logout </Link>
                    </DropdownItem>
                  </Fragment>
                  }
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

      </div>
    );
  }
}

export default withUser(NavbarComponent)

