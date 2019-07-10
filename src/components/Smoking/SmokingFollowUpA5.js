import React, { Component } from "react";
import { Header, Form, Radio, Input, Select, TextArea, Label } from "semantic-ui-react";

export default class SmokingFollowUpA5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 2,
      value1: "",
      disable1: true,
      value1Other: "",
      value3: "",
      disable3: true,
      value3Advice: '',
      value4: "",
      disable4: true,
      value4Advice: '',
      value5: "",
      disable5: true,
      value5Advice: '',
      value6: "",
      disable6: true,
      value6Advice: '',
      followUpDate: ''
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    // console.log(nextProps)
    console.log(nextState);
    return true;
  }

  render() {
    return (
      <div className="SmokingFollowUpA5Page">
        <Header as="h2">
          ติดตามผลครั้งที่ {this.state.amount} (A5-{this.state.amount})
        </Header>

        <Form>
          {/* <Form.Group inline>
            <label>1.วิธีติดตาม</label>
            <Form.Field
              control={Radio}
              label="วิธีการติดตาม"
              value="1"
              checked={this.state.value1 === "1"}
              onChange={(e, { value }) => {
                this.setState({ value1: value });
                this.setState({ disable1: true });
                this.setState({ value1Other: "" });
              }}
            />
            <Form.Field
              control={Radio}
              label="โทรศัพท์"
              value="2"
              checked={this.state.value1 === "2"}
              onChange={(e, { value }) => {
                this.setState({ value1: value });
                this.setState({ disable1: true });
                this.setState({ value1Other: "" });
              }}
            />
            <Form.Field
              control={Radio}
              label="ที่ร้าน"
              value="3"
              checked={this.state.value1 === "3"}
              onChange={(e, { value }) => {
                this.setState({ value1: value });
                this.setState({ disable1: true });
                this.setState({ value1Other: "" });
              }}
            />
            <Form.Field
              control={Radio}
              label="อื่นๆ"
              value="4"
              checked={this.state.value1 === "4"}
              onChange={(e, { value }) => {
                this.setState({ value1: value });
                this.setState({ disable1: false });
              }}
            />
            <Form.Field
              control={Input}
              disabled={this.state.disable1}
              value={this.state.value1Other}
              label="ระบุ"
              placeholder="ระบุ..."
              onChange={(e, { value }) => {
                this.setState({ value1Other: value });
                console.log("ระบุ" + value);
              }}
            />
          </Form.Group> */}

          <Form.Group widths='equal'>
            <Form.Field
              control={Select}
              clearable
              label="1.วิธีติดตาม"
              placeholder="วิธีติดตาม"
              options={[
                { key: 1, text: "วิธีการติดตาม", value: 1 },
                { key: 2, text: "โทรศัพท์", value: 2 },
                { key: 3, text: "ที่ร้าน", value: 3 },
                { key: 4, text: "อื่นๆ", value: 4 }
              ]}
              onChange={(e, { value }) => {
                this.setState({ value1: value });
                if(value === 4) {
                    this.setState({ disable1: false });
                }
                else {
                    this.setState({ disable1: true });
                    this.setState({ value1Other: '' });
                }
              }}
            />
            <Form.Field
              control={Input}
              disabled={this.state.disable1}
              value={this.state.value1Other}
              label="ระบุ"
              placeholder="ระบุ..."
              onChange={(e, { value }) => {
                this.setState({ value1Other: value });
                console.log("ระบุ" + value);
              }}
            />
          </Form.Group>

          <Form.Group widths='equal'>
            <Form.Field
              control={Select}
              clearable
              label="3.อาการถอนนิโคติน"
              placeholder="อาการถอนนิโคติน"
              options={[
                { key: 1, text: "พบ", value: 1 },
                { key: 2, text: "ไม่พบ", value: 2 }
              ]}
              onChange={(e, { value }) => {
                this.setState({ value3: value });
                if(value === 1) {
                    this.setState({ disable3: false });
                }
                else {
                    this.setState({ disable3: true });
                    this.setState({ value3Advice: '' });
                }
              }}
            />
            <Form.Field
              control={TextArea}
              disabled={this.state.disable3}
              value={this.state.value3Advice}
              label="อาการที่พบและคำแนะนำ"
              placeholder="อาการที่พบและคำแนะนำ"
              onChange={(e, { value }) => {
                this.setState({ value3Advice: value });
              }}
            />
          </Form.Group>

          
          <Form.Group widths='equal'>
            <Form.Field
              control={Select}
              clearable
              label="4.กรณีการใช้ยาช่วยเลิกบุหรี่ อาการข้างเคียงจากยาช่วยเลิกบุหรี"
              placeholder="กรณีการใช้ยาช่วยเลิกบุหรี่ อาการข้างเคียงจากยาช่วยเลิกบุหรี"
              options={[
                { key: 1, text: "พบ", value: 1 },
                { key: 2, text: "ไม่พบ", value: 2 }
              ]}
              onChange={(e, { value }) => {
                this.setState({ value4: value });
                if(value === 1) {
                    this.setState({ disable4: false });
                }
                else {
                    this.setState({ disable4: true });
                    this.setState({ value4Advice: '' });
                }
              }}
            />
            <Form.Field
              control={TextArea}
              disabled={this.state.disable4}
              value={this.state.value4Advice}
              label="อาการที่พบและคำแนะนำ"
              placeholder="อาการที่พบและคำแนะนำ"
              onChange={(e, { value }) => {
                this.setState({ value4Advice: value });
              }}
            />
          </Form.Group>
          
          <Form.Group widths='equal'>
            <Form.Field
              control={Select}
              clearable
              label="5.ปัญหาเชิงพฤติกรรม สังคมและความเคยชิน หรือความเชื่อ"
              placeholder="ปัญหาเชิงพฤติกรรม สังคมและความเคยชิน หรือความเชื่อ"
              options={[
                { key: 1, text: "พบ", value: 1 },
                { key: 2, text: "ไม่พบ", value: 2 }
              ]}
              onChange={(e, { value }) => {
                this.setState({ value5: value });
                if(value === 1) {
                    this.setState({ disable5: false });
                }
                else {
                    this.setState({ disable5: true });
                    this.setState({ value5Advice: '' });
                }
              }}
            />
            <Form.Field
              control={TextArea}
              disabled={this.state.disable5}
              value={this.state.value4Advice}
              label="ปัญหาที่พบและคำแนะนำ"
              placeholder="ปัญหาที่พบและคำแนะนำ"
              onChange={(e, { value }) => {
                this.setState({ value5Advice: value });
              }}
            />
          </Form.Group>
          
          
            <Form.Field
              control={TextArea}
              value={this.state.value6Advice}
              label="6.คำแนะนำอื่นๆ เช่น การเสริมแรง การให้กำลังใจผู้ป่วย"
              placeholder="คำแนะนำ"
              onChange={(e, { value }) => {
                this.setState({ value6Advice: value });
              }}
            />
            
            <Form.Field
            required
              control={Input}
              type='date'
              label="นัดครั้งต่อไป วันที่"
              placeholder="วันที่"
              onChange={(e, { value }) => {
                this.setState({ followUpDate: value });
              }}
            />
        </Form>
      </div>
    );
  }
}
