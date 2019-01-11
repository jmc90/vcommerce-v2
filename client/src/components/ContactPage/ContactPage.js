import React, { Component } from "react";
import "./ContactPage.css";
import { withUser } from "../../context/UserProvider";
import ContactModal from "./ContactModal";
import "./ModalStyle.css";

class ContactPage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  toggleModal = (e) => {
    e.preventDefault()
    this.props.toggleItemAddedNotification();
  };
  render() {
    return (
      <div className="contact-container">
        <h3>Contact Form</h3>
        <form action="/">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />
          <label htmlFor="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: "200px" }}
            defaultValue={""}
          />
          {this.props.productAddedModalOn === true ? <ContactModal /> : null}
          <button className="alert" onClick={this.toggleModal}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withUser(ContactPage);
