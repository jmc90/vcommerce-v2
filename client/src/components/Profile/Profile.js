import React, { Component } from "react";
import "./profileStyle.css";
import { withUser } from "../../context/UserProvider";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      name: this.props.user.name,
      email: this.props.user.email
    };
    this.profileImage = {
      width: "300px",
      height: "300px",
      backgroundImage: `url(https://static.boredpanda.com/blog/wp-content/uploads/2017/02/perfectly-round-chinchilla-camerons-chinchillas-15-58ad5374a8afb__700.jpg)`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    };
  }

  handleShowHideForm = () => {
    !this.state.showForm
      ? this.setState({ showForm: true })
      : this.setState({ showForm: false });
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const updates = {
      name: this.state.name,
      email: this.state.email
    };
    this.props.handleUserInfoEdit(updates);
    this.handleShowHideForm();
  };

  render() {
    return (
      <div className="pageWrapper">
        <h1 className="text-center m-4">My Profile</h1>
        <div className="profileWrapper d-flex justify-content-center">
          <div className="leftColumn">
            <div className="profilePhoto m-5" style={this.profileImage} />
          </div>
          {this.state.showForm === false ? (
            <div className="rightColumn">
              <h4 className="profileText">
                Name: <span className="textSpan"> {this.state.name} </span>
              </h4>
              <h4 className="profileText">
                Email: <span className="textSpan"> {this.state.email} </span>
              </h4>
              <div className="changeInfoButtounContainer">
                <button onClick={this.handleShowHideForm}> Change </button>
              </div>
            </div>
          ) : (
            <div className="rightColumn">
              <form onSubmit={this.handleSubmit} className="editInfoForm">
                <h4 className="profileText">
                  Name:{" "}
                  <input
                    className="inputField"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </h4>
                <h4 className="profileText">
                  Email:{" "}
                  <input
                    className="inputField"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </h4>
                <button> Save </button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withUser(Profile);
