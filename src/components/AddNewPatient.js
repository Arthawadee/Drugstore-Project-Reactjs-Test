import React, { Component } from "react";
import { Form, Button, Dropdown, Radio } from "semantic-ui-react";
// import "./css/AddNewPatient.css";
// import "./scss/AddNewPatient.scss";
const options = [
  { key: "m", text: "ชาย", value: "male" },
  { key: "f", text: "หญิง", value: "female" }
];
export default class AddNewPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      activeItem: "home",
      visible: false,
      firstName: "",
      lastName: "",
      date: "",
      ID: "",
      phoneNumber: "",
      telNumber: "",
      address: ""
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleChange = (e, { value }) => this.setState({ value });

  // test = (e,{value}) => {console.log(value);
  //   //  console.log(id)
  // }

  render() {
    // var { email, password, visible } = this.state;
    return (
      <div className="AddNewPatientPage">
        {/* <Header as='div' className="head headName">First Header</Header> */}
        {/* <h1 class="ui icon header pageHeader" textAlign="left">
          เพิ่มผู้ป่วยรายใหม่
        </h1> */}

        <h2 className="ui icon aligned header">
          <i aria-hidden="true" className="user plus circular icon" />
          <div className="content">เพิ่มผู้ป่วยรายใหม่</div>
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
              {/* <Form.Group widths="equal">
                <Form.Field>
                  เพศ: <b>{this.state.value}</b>
                </Form.Field>
                <Form.Field>
                  <Radio
                    label="ชาย"
                    name="radioGroup"
                    value="male"
                    checked={this.state.value === "male"}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                    label="หญิง"
                    name="radioGroup"
                    value="female"
                    checked={this.state.value === "female"}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                </Form.Group> */}

              <Form.Select
                required
                options={options}
                placeholder="กรุณาเลือกเพศ"
                label="เพศ"
              />
              <Form.Field>
                <Form.Input
                  required
                  icon="calendar alternate outline"
                  iconPosition="left"
                  label="วัน/เดือน/ปีเกิด"
                  type="Date"
                  placeholder="กรุณากรอกวัน/เดือน/ปีเกิด"
                  onChange={(e, { value }) => {
                    this.setState({ date: value });
                    console.log("date: " + this.state.date);
                  }}
                />
              </Form.Field>
            </Form.Group>
            {/* <div style={{ width: "50%", display: "inline-block" }}>
            <Form.Dropdown
              placeholder='Select Friend'
              fluid
              selection
              options={[]}
            />
              />
            </div>
            <div style={{ width: "50%", display: "inline-block" }}>
            <Form.Input
              required
              icon="calendar alternate outline"
              iconPosition="left"
              label="วัน/เดือน/ปีเกิด"
              type="Date"
              placeholder="กรุณากรอกวัน/เดือน/ปีเกิด"
              onChange={(e,{value}) => {
                this.setState({date: value})
                console.log('date: '+ this.state.date)
              }}
            />
            </div> */}
            <Form.Input
              required
              icon="id card"
              iconPosition="left"
              label="เลขประจำตัวประชาชน"
              type="text"
              placeholder="กรุณากรอกเลขประจำตัวประชาชน"
              onChange={(e, { value }) => {
                this.setState({ ID: value });
                console.log("ID: " + this.state.ID);
              }}
            />
            <Form.Input
              required
              icon="mobile alternate"
              iconPosition="left"
              label="เบอร์โทรศัพท์มือถือ"
              type="text"
              placeholder="กรุณากรอกเบอร์โทรศัพท์มือถือ"
              onChange={(e, { value }) => {
                this.setState({ phoneNumber: value });
                console.log("phoneNumber: " + this.state.phoneNumber);
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
