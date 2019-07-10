import React, { Component } from "react";
import { Header, Form, Radio, Input, Select } from "semantic-ui-react";

export default class SmokingFollowUpA5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 2,
      value1: "",
      disable1: true,
      value1Other: ""
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
          <Form.Group>
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
          <Form.Group>
            <Form.Field
              control={Select}
              clearable
              label="2.วิธีติดตาม"
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
        </Form>
      </div>
    );
  }
}
