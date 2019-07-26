import React, { Component } from "react";
import { Header, Form, Input, Select } from "semantic-ui-react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class HealthBehavior extends Component {
 
  componentDidMount() {
    console.log("HealthBehavior = ", this.props.store.smoking.HealthBehavior);
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
              this.props.store.smoking.updateHealthBehavior(value, "value1");
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
              this.props.store.smoking.updateHealthBehavior(value, "value2");
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
              checked={this.props.store.smoking.HealthBehavior.value3 === "1"}
              onChange={(e, { value }) => {
                this.props.store.smoking.updateHealthBehavior(value, "value3");
              }}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              // disabled={this.state.disable3}
              required
              type="number"
              min="0"
              max="11"
              label="เดือน"
              placeholder="เดือน"
              onChange={(e, { value }) => {
                this.props.store.smoking.updateHealthBehavior(
                  value,
                  "value3month"
                );
              }}
            />
            <Form.Input
              // disabled={this.state.disable3}
              required
              min="0"
              max="100"
              type="number"
              label="ปี"
              placeholder="ปี"
              onChange={(e, { value }) => {
                this.props.store.smoking.updateHealthBehavior(
                  value,
                  "value3year"
                );
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
                this.props.store.smoking.updateHealthBehavior(value, "value4");
              }}
            />
            <Form.Input
              // disabled={this.state.disable4}
              required
              value={this.props.store.smoking.HealthBehavior.value4Amount}
              min="0"
              type="number"
              label="โดยหยุดมาแล้ว วันละประมาณ (มวน)"
              placeholder="โดยหยุดมาแล้ว วันละประมาณ (มวน)"
              onChange={(e, { value }) => {
                this.props.store.smoking.updateHealthBehavior(
                  value,
                  "value4Amount"
                );
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
              this.props.store.smoking.updateHealthBehavior(value, "value5");
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
              this.props.store.smoking.updateHealthBehavior(value, "value6");
            }}
          />
        </Form>
        {/* <Button onClick={this.setHealthBehavior}>บันทึก</Button> */}
      </div>
    );
  }
}
export default HealthBehavior;
