import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

export default class AddNewPharmacist extends Component {
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
      address: ""
    };
  }

  render() {
    return (
      <div className="AddNewPharmacistPage">
        <h2 className="ui icon aligned header">
          <i aria-hidden="true" className="user plus circular icon" />
          <div className="content">เพิ่มเภสัชกร</div>
        </h2>

        <div className="AddNewPatientForm">
          <Form>
          <Form.Group widths="equal">
              <Form.Input
                required
                icon="user"
                iconPosition="left"
                label="ชื่อ"
                type="text"
                placeholder="กรุณากรอกชื่อ"
                onChange={(e, { value }) => {
                  this.setState({ firstName: value });
                  console.log("firstName: " + this.state.firstName);
                }}
              />
              <Form.Input
                required
                icon="user"
                iconPosition="left"
                label="นามสกุล"
                type="text"
                placeholder="กรุณากรอกนามสกุล"
                onChange={(e, { value }) => {
                  this.setState({ lastName: value });
                  console.log("lastName: " + this.state.lastName);
                }}
              />
            </Form.Group>
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
