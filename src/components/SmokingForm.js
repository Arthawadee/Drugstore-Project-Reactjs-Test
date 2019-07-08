import React, { Component } from "react";
import { Form, Button, Radio } from "semantic-ui-react";

export default class SmokingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      activeItem: "home",
      visible: false,
      DrugStoreName: "",
      licenseNo: "",
      date: "",
      ID: "",
      phoneNumber: "",
      telNumber: "",
      address: "",
      value: ""
    };
  }
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="SmokingFormPage">
        <h2 className="ui icon aligned header">
          <i aria-hidden="true" className="user plus circular icon" />
          <div className="content">แบบประเมินการสูบบุหรี่</div>
        </h2>

        <div className="AddNewPatientForm">
          <Form>
            {/* <Form.Group inline>
              <label>Quantity</label>
              <Form.Field
                control={Radio}
                label="One"
                value="1"
                checked={value === "1"}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label="Two"
                value="2"
                checked={value === "2"}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label="Three"
                value="3"
                checked={value === "3"}
                onChange={this.handleChange}
              />
            </Form.Group> */}
            <Form.Group widths="equal">
              <Form.Input
                required
                icon="drivers license"
                iconPosition="left"
                label="เลขที่ใบอนุญาต"
                type="text"
                placeholder="กรุณากรอกเลขที่ใบอนุญาต"
                onChange={(e, { value }) => {
                  this.setState({ licenseNo: value });
                  console.log("licenseNo: " + this.state.licenseNo);
                }}
              />
              <Form.Input
                required
                icon="mail"
                iconPosition="left"
                label="อีเมล"
                type="email"
                placeholder="กรุณากรอกอีเมล"
                onChange={(e, { value }) => {
                  this.setState({ email: value });
                  console.log("email: " + this.state.email);
                }}
              />
            </Form.Group>

            <Form.TextArea
              required
              rows={5}
              label="ที่อยู่"
              value={this.state.address}
              placeholder="กรุณากรอกที่อยู่"
              icon="phone"
              onChange={e => {
                this.setState({ address: e.target.value });
                console.log("address: " + this.state.address);
              }}
            />
          </Form>

          <Button circular content="เพิ่ม" color="blue" />
        </div>
      </div>
    );
  }
}
