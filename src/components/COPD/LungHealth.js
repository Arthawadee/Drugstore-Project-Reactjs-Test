import React, { Component } from "react";
import { Form, Select, Radio, Button } from "semantic-ui-react";
import { observer } from "mobx-react";

const LungHealth = observer(
  class LungHealth extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value1: "",
        value2: "",
        value3: "",
        value4: "",
        value5: ""
      };
      console.log(this.props.store);
    }

    setLungHealth = () => {
      this.props.store.setLungHealth(
        this.state.value1,
        this.state.value2,
        this.state.value3,
        this.state.value4,
        this.state.value5
      );
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //   console.log("shouldComponentUpdate");
    //   // console.log(nextProps)
    //   console.log(nextState);
    //   return true;
    // }

    componentDidUpdate(prevProps) {
      this.setLungHealth();
    }

    render() {
      return (
        <div className="LungHealthPage">
          <Form>
            <Form.Group inline required>
              <label>1. อายุ มากกว่าหรือเท่ากับ(>=) 50 ปี</label>
              <Form.Field
                required
                control={Radio}
                label="ใช่ (1)"
                value="1"
                checked={this.state.value1 === "1"}
                onChange={(e, { value }) => {
                  this.setState({ value1: value });
                }}
              />
              <Form.Field
                control={Radio}
                label="ไม่ใช่ (0)"
                value="2"
                checked={this.state.value1 === "2"}
                onChange={(e, { value }) => {
                  this.setState({ value1: value });
                }}
              />
            </Form.Group>
            <Form.Group inline required>
              <label>2. เคยมีเสียงดัง (เสียงหวีด) ระหว่างหายใจหรือไม่</label>
              <Form.Field
                required
                control={Radio}
                label="มี (1)"
                value="1"
                checked={this.state.value2 === "1"}
                onChange={(e, { value }) => {
                  this.setState({ value2: value });
                }}
              />
              <Form.Field
                control={Radio}
                label="ไม่มี (0)"
                value="2"
                checked={this.state.value2 === "2"}
                onChange={(e, { value }) => {
                  this.setState({ value2: value });
                }}
              />
            </Form.Group>
            <Form.Group inline>
              <label>
                3. เคยมีเสียงดังหรือหายใจถี่ๆ
                ระหว่างออกกำลังกายหรือเดินขึ้นทางลาดชันโดยไม่หยุดพักหรือไม่
              </label>
              <Form.Field
                required
                control={Radio}
                label="มี (1)"
                value="1"
                checked={this.state.value3 === "1"}
                onChange={(e, { value }) => {
                  this.setState({ value3: value });
                }}
              />
              <Form.Field
                control={Radio}
                label="ไม่มี (0)"
                value="2"
                checked={this.state.value3 === "2"}
                onChange={(e, { value }) => {
                  this.setState({ value3: value });
                }}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field
                label="4.ไอมีเสมหะบ่อยๆหรือไม่"
                control={Select}
                required
                clearable
                value={this.state.value4}
                options={[
                  { key: 1, text: "มี (1)", value: "1" },
                  { key: 2, text: "ไม่มี (0)", value: "0" }
                ]}
                placeholder="ไอมีเสมหะบ่อยๆหรือไม่"
                onChange={(e, { value }) => {
                  console.log("4.: " + value);
                  this.setState({ value4: value });
                }}
              />

              <Form.Field
                label="5.มีประวัติสูบบุหรี่มา มากกว่าหรือเท่ากับ(>=) 20 ปี"
                control={Select}
                required
                clearable
                value={this.state.value5}
                options={[
                  { key: 1, text: "ใช่ (1)", value: "1" },
                  { key: 2, text: "ไม่ใช่ (0)", value: "0" }
                ]}
                placeholder="มีประวัติสูบบุหรี่มา มากกว่าหรือเท่ากับ(>=) 20 ปี"
                onChange={(e, { value }) => {
                  console.log("5.: " + value);
                  this.setState({ value5: value });
                }}
              />
            </Form.Group>
          </Form>
          <Button
            circular
            content="บันทึก"
            color="blue"
            onClick={this.setLungHealth}
          />
        </div>
      );
    }
  }
);
export default LungHealth;
