import React, { Component, Fragment } from "react";
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
} from "reactstrap";
import { withUser } from "../../context/UserProvider";
import Logo from "../../styles/media/miner-icon.jpeg";
import "./Navbar.css";

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
    const { token, logOut } = this.props;

    let name = this.props.user.name;
    // let nameFirstLetter = name.charAt().toUpperCase()
    // let properName = nameFirstLetter + name.slice(1)

    return (
      <div>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand className="nav-brand" href="/">
              <img src={Logo} alt="logo" />
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
                  <NavLink href="/about">Learn</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Mining Info
                  </DropdownToggle>
                  <DropdownMenu right>
                    <Fragment>
                      <DropdownItem>
                        <NavLink href="/chart">Profitability Chart</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink href="/pools">Mining Pools</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink href="/market">Crypto Market</NavLink>
                      </DropdownItem>
                    </Fragment>
                  </DropdownMenu>
                </UncontrolledDropdown>
                {!token ? (
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
                ) : (
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      <span className="navbarName"> {name} </span>
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
                          <NavLink href="/" onClick={logOut}>
                            {" "}
                            Logout{" "}
                          </NavLink>
                        </DropdownItem>
                      </Fragment>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                )}
              </Nav>
            </Collapse>
            { token ? (
              <NavLink href="/profile"> 
                <img className='profileIcon' src='https://static.boredpanda.com/blog/wp-content/uploads/2017/02/perfectly-round-chinchilla-camerons-chinchillas-15-58ad5374a8afb__700.jpg' alt="profile"></img>
              </NavLink>
            ) : (
              null
            )
            }
          </Navbar>
        </div>
      </div>
    );
  }
}

export default withUser(NavbarComponent);
