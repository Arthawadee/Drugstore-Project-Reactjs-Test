import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import store from './stores/TodoStore';
import TopButton from "./TopButton";

export default class AddNewDrugstore extends Component {
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
      <div className="AddNewDrugstorePage">
        <h2 className="ui icon aligned header">
          <i aria-hidden="true" className="home circular icon" />
          <div className="content">เพิ่มร้านยา</div>
          {/* <div className="content">{store.todos}</div> */}
        </h2>

        <div className="AddNewPatientForm">
          <Form>
            <Form.Input
              required
              icon="home"
              iconPosition="left"
              label="ชื่อร้านยา"
              type="text"
              placeholder="กรุณากรอกชื่อร้านยา"
              onChange={(e, { value }) => {
                this.setState({ DrugStoreName: value });
                console.log("DrugStoreName: " + this.state.DrugStoreName);
              }}
            />
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
                icon="phone"
                iconPosition="left"
                label="เบอร์โทรศัพท์บ้าน"
                type="text"
                placeholder="กรุณากรอกเบอร์โทรศัพท์บ้าน"
                onChange={(e, { value }) => {
                  this.setState({ telNumber: value });
                  console.log("telNumber: " + this.state.telNumber);
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
        <TopButton />
      </div>
    );
  }
}
