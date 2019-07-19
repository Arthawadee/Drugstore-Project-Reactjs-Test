import React, { Component } from "react";
import { Header, Form, Input, Select, Radio, Button } from "semantic-ui-react";
import { observer } from "mobx-react";

const HealthBehavior = observer(
  class HealthBehavior extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value1: "",
        value2: "",
        value3: "",
        disable3: true,
        month: 0,
        year: 0,
        value4: "",
        disable4: true,
        value4Amount: 0,
        value5: "",
        value6: ""
      };
      // console.log(this.props)
      console.log(this.props.store);
    }

    setHealthBehavior = () => {
      this.props.store.setHealthBehavior(
        this.state.value1,
        this.state.value2,
        this.state.value3,
        this.state.disable3,
        this.state.month,
        this.state.year,
        this.state.value4,
        this.state.value4Amount,
        this.state.value5,
        this.state.value6
      );
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //   console.log("shouldComponentUpdate");
    //   // console.log(nextProps)
    //   console.log(nextState);
    //   // console.log(value: this.state.value1)
    //   // var item1

    //   var item3 = {
    //       value3: nextState.value3,
    //       disable3: nextState.disable3,
    //       month: nextState.month,
    //       year: nextState.year
    //   };

    //   var item4 = {
    //     value4: nextState.value4,
    //     disable4: nextState.disable4,
    //     value4Amount: nextState.value4Amount
    //   };
    //   console.log(item3);
    //   // console.log(item3.month);

    //   console.log(item4);
    //   return true;
    // }

    // componentDidUpdate(prevProps, prevState) {
    //   console.log("componentDidUpdate");
    //   console.log(prevState);
    // }

    componentDidUpdate(prevProps) {
      this.setHealthBehavior();
    }

    render() {
      return (
        <div className="HealthBehaviorPage">
          <Header as="h2">พฤติกรรมสุขภาพ</Header>
          <Form>
            <Form.Field
              control={Input}
              required
              label="ยาที่ใช้ประจำตัว"
              type="text"
              placeholder="ยาที่ใช้ประจำตัว"
              onChange={(e, { value }) => {
                this.setState({ value1: value });
              }}
            />
            <Form.Field
              control={Select}
              required
              clearable
              label="การดื่มเครื่องดื่มแอลกอฮอล์"
              placeholder="การดื่มเครื่องดื่มแอลกอฮอล์"
              options={[
                { key: 1, text: "ดื่มทุกวัน", value: 1, score: 1 },
                { key: 2, text: "ดื่มเป็นครั้งคราว", value: 2, score: 2 },
                { key: 3, text: "เคยดื่มแต่เลิกแล้ว", value: 3, score: 3 },
                { key: 4, text: "ไม่ดื่ม", value: 4, score: 4 },
                { key: 5, text: "ไม่มีข้อมูล", value: 5, score: 5 }
              ]}
              onChange={(e, { value }) => {
                this.setState({ value2: value });
              }}
            />

            {/* <Form.Group inline required>
            <label>สูบบุหรี่</label>
            <Form.Field
              required
              control={Radio}
              label="สูบมาเป็นเวลานาน"
              value="1"
              checked={this.state.value1 === "1"}
              onChange={(e, { value }) => {
                this.setState({ value1: value });
              }}
            />
          </Form.Group> */}

            <Form.Group inline>
              <label>สูบบุหรี่</label>
              <Form.Radio
                required
                label="สูบมาเป็นเวลานาน"
                value="1"
                checked={this.state.value3 === "1"}
                onChange={(e, { value }) => {
                  this.setState({ value3: value });
                  if (value === "1") {
                    this.setState({ disable3: false });
                  } else {
                    this.setState({ disable3: true });
                  }
                }}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                disabled={this.state.disable3}
                required
                type="number"
                min="0"
                max="11"
                label="เดือน"
                placeholder="เดือน"
                onChange={(e, { value }) => {
                  this.setState({ month: value });
                }}
              />
              <Form.Input
                disabled={this.state.disable3}
                required
                min="0"
                max="100"
                type="number"
                label="ปี"
                placeholder="ปี"
                onChange={(e, { value }) => {
                  this.setState({ year: value });
                }}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field
                control={Select}
                required
                clearable
                label="ปัจจุบันสูบบุหรี่"
                options={[
                  { key: 1, text: "ปัจจุบันสูบทุกวัน", value: 1, score: 1 },
                  {
                    key: 2,
                    text: "ปัจจุบันสูบเป็นครั้งคราว",
                    value: 2,
                    score: 2
                  },
                  { key: 3, text: "ปัจจุบันหยุดสูบ", value: 3, score: 3 }
                ]}
                onChange={(e, { value }) => {
                  console.log(value);
                  this.setState({ value4: value });
                  if (value === 3) {
                    this.setState({ disable4: false });
                  } else {
                    this.setState({ disable4: true });
                    this.setState({ value4Amount: "" });
                  }
                }}
              />
              <Form.Input
                disabled={this.state.disable4}
                required
                value={this.state.value4Amount}
                min="0"
                type="number"
                label="โดยหยุดมาแล้ว วันละประมาณ (มวน)"
                placeholder="โดยหยุดมาแล้ว วันละประมาณ (มวน)"
                onChange={(e, { value }) => {
                  console.log(value);
                  this.setState({ value4Amount: value });
                }}
              />
            </Form.Group>
            <Form.Field
              control={Select}
              required
              clearable
              label="ประเภทของบุหรี่"
              placeholder="ประเภทของบุหรี่"
              options={[
                { key: 1, text: "มวนเอง", value: 1 },
                { key: 2, text: "บุหรี่ซอง", value: 2 },
                { key: 3, text: "อื่นๆ", value: 3 }
              ]}
              onChange={(e, { value }) => {
                console.log(value);
                this.setState({ value5: value });
              }}
            />

            <Form.Field
              control={Select}
              required
              clearable
              label="บุคคลใกล้ชิดที่สูบบุหรี่"
              placeholder="ประเภทของบุหรี่"
              options={[
                { key: 1, text: "ไม่มี", value: 1 },
                { key: 2, text: "มี", value: 2 }
              ]}
              onChange={(e, { value }) => {
                console.log(value);
                this.setState({ value6: value });
              }}
            />
          </Form>
          <Button onClick={this.setHealthBehavior}>บันทึก</Button>
        </div>
      );
    }
  }
);
export default HealthBehavior;
