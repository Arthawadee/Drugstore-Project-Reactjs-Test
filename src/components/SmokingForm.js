import React, { Component } from "react";
import { Form, Button, Radio, Select } from "semantic-ui-react";

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
  handleChange = (e, { value }) => {
    this.setState({ value });
    console.log(value);
  };

  render() {
    const { value } = this.state;
    return (
      <div className="SmokingFormPage">
        <h2 className="ui icon aligned header">
          <i aria-hidden="true" className="user plus circular icon" />
          <div className="content">แบบคัดกรองการสูบบุหรี่</div>
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
            <Form.Group>
              {/* <Form.Input
                required
                icon="drivers license"
                iconPosition="left"
                label="1.ในอดีตเคยพยายามเลิกสูบบุหรี่หรือไม่"
                type="text"
                placeholder="กรุณากรอกเลขที่ใบอนุญาต"
                onChange={(e, { value }) => {
                  this.setState({ licenseNo: value });
                  console.log("licenseNo: " + this.state.licenseNo);
                }}
              /> */}
              <Form.Field
                control={Select}
                required
                clearable
                label="1.ในอดีตเคยพยายามเลิกสูบบุหรี่หรือไม่"
                options={[
                  { key: 1, text: "ไม่เคย", value: 1 },
                  { key: 2, text: "เคยเลิก", value: 2 },
                  { key: 3, text: "เลิกได้นานสุด", value: 3 }
                ]}
                placeholder="ในอดีตเคยพยายามเลิกสูบบุหรี่หรือไม่"
                onChange={(e, { value }) => {
                  console.log("1. " + value);
                }}
              />
              <Form.Input
                type="number"
                id="pppp"
                onChange={(e, { value }) => {
                  console.log(value + " ครั้ง");
                }}
              />

              <Form.Group inline>
                <Form.Field
                  control={Radio}
                  label="วัน"
                  value="1"
                  checked={value === "1"}
                  onChange={this.handleChange}
                />
                <Form.Field
                  control={Radio}
                  label="เดือน"
                  value="2"
                  checked={value === "2"}
                  onChange={this.handleChange}
                />
                <Form.Field
                  control={Radio}
                  label="ปี"
                  value="3"
                  checked={value === "3"}
                  onChange={this.handleChange}
                />
              </Form.Group>
              {/* <Dropdown
                options={[
                  { key: 1, text: "Choice 1", value: 1 },
                  { key: 2, text: "Choice 2", value: 2 },
                  { key: 3, text: "Choice 3", value: 3 }
                ]}
                selection
              /> */}
              {/* <Form.Input
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
              /> */}
            </Form.Group>

            <Form.Group widths="equal">
            <Form.Field
                control={Select}
                required
                multiple
                clearable
                label="2.เคยเลิิกโดยวิธี"
                options={[
                  { key: 1, text: "หักดิบ", value: 1 },
                  { key: 2, text: "ค่อยๆลด", value: 2 },
                  { key: 3, text: "ใช้ยา", value: 3 }
                ]}
                placeholder="เคยเลิิกโดยวิธี"
                onChange={(e, { value }) => {
                  console.log("2. " + value);
                }}
              />
              <Form.Field
                control={Select}
                required
                multiple
                clearable
                options={[
                  { key: 1, text: "Nicotine", value: "Nicotine" },
                  { key: 2, text: "Nicotin patch", value: "Nicotin patch" },
                  { key: 3, text: "Nortripyline", value: "Nortripyline" },
                  { key: 4, text: "Bupropion", value: "Bupropion" },
                  { key: 5, text: "Varenicline", value: "Varenicline" },
                  { key: 6, text: "สมุนไพรชงหญ้าดอกขาว", value: "สมุนไพรชงหญ้าดอกขาว" },
                  { key: 7, text: "อื่นๆ", value: "อื่นๆ" }
                ]}
                placeholder="ใช้ยา"
                onChange={(e, { value }) => {
                  console.log("ใช้ยา: " + value);
                }}
              />
{/* 
<Dropdown placeholder='Skills' fluid multiple selection options={[
                  { key: 1, text: "ไม่เคย", value: 1 },
                  { key: 2, text: "เคยเลิก", value: 2 },
                  { key: 3, text: "เลิกได้นานสุด", value: 3 }
                ]} /> */}
            </Form.Group>
          </Form>

          <Button circular content="เพิ่ม" color="blue" />
        </div>
      </div>
    );
  }
}
