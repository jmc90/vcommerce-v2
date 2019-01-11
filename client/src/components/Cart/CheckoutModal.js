import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class CheckoutModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="fName">First Name</Label>
                <Input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Enter First Name.."
                />
              </FormGroup>
              <FormGroup>
                <Label for="fName">Last Name</Label>
                <Input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder="Enter Last Name.."
                />
              </FormGroup>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter address.."
                />
              </FormGroup>
              <FormGroup>
                <Label for="city">City</Label>
                <Input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter City.."
                />
              </FormGroup>
              <FormGroup>
                <Label for="state">State</Label>
                <Input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="Enter State.."
                />
              </FormGroup>
              <FormGroup>
                <Label for="zip">ZIP Code</Label>
                <Input
                  type="text"
                  name="zip"
                  id="zip"
                  placeholder="Enter Zip.."
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Submit Order
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CheckoutModal;

