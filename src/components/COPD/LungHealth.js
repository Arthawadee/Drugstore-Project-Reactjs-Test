import React, { Component } from "react";
import { Form, Radio } from "semantic-ui-react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class LungHealth extends Component {
  
  componentDidMount() {
    console.log("LungHealth = ", this.props.store.copd);
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
              value={1}
              checked={this.props.store.copd.LungHealth.value1 === 1}
              onChange={(e, { value }) => {
                this.props.store.copd.updateLungHealth(value, "value1");
              }}
            />
            <Form.Field
              control={Radio}
              label="ไม่ใช่ (0)"
              value={2}
              checked={this.props.store.copd.LungHealth.value1 === 2}
              onChange={(e, { value }) => {
                this.props.store.copd.updateLungHealth(value, "value1");
              }}
            />
          </Form.Group>
          <Form.Group inline required>
            <label>2. เคยมีเสียงดัง (เสียงหวีด) ระหว่างหายใจหรือไม่</label>
            <Form.Field
              required
              control={Radio}
              label="มี (1)"
              value={1}
              checked={this.props.store.copd.LungHealth.value2 === 1}
              onChange={(e, { value }) => {
                this.props.store.copd.updateLungHealth(value, "value2");
              }}
            />
            <Form.Field
              control={Radio}
              label="ไม่มี (0)"
              value={2}
              checked={this.props.store.copd.LungHealth.value2 === 2}
              onChange={(e, { value }) => {
                this.props.store.copd.updateLungHealth(value, "value2");
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
              value={1}
              checked={this.props.store.copd.LungHealth.value3 === 1}
              onChange={(e, { value }) => {
                this.props.store.copd.updateLungHealth(value, "value3");
              }}
            />
            <Form.Field
              control={Radio}
              label="ไม่มี (0)"
              value={2}
              checked={this.props.store.copd.LungHealth.value3 === 2}
              onChange={(e, { value }) => {
                this.props.store.copd.updateLungHealth(value, "value3");
              }}
            />
          </Form.Group>

          <Form.Group inline>
            <label>4.ไอมีเสมหะบ่อยๆหรือไม่</label>
            <Form.Field
              required
              control={Radio}
              label="มี (1)"
              value={1}
              checked={this.props.store.copd.LungHealth.value4 === 1}
              onChange={(e, { value }) => {
                this.props.store.copd.updateLungHealth(value, "value4");
              }}
            />
            <Form.Field
              control={Radio}
              label="ไม่มี (0)"
              value={2}
              checked={this.props.store.copd.LungHealth.value4 === 2}
              onChange={(e, { value }) => {
                this.props.store.copd.updateLungHealth(value, "value4");
              }}
            />
          </Form.Group>
          <Form.Group inline required>
            <label>5.มีประวัติสูบบุหรี่มา มากกว่าหรือเท่ากับ(>=) 20 ปี</label>
            <Form.Field
              required
              control={Radio}
              label="ใช่ (1)"
              value={1}
              checked={this.props.store.copd.LungHealth.value5 === 1}
              onChange={(e, { value }) => {
                this.props.store.copd.updateLungHealth(value, "value5");
              }}
            />
            <Form.Field
              control={Radio}
              label="ไม่ใช่ (0)"
              value={2}
              checked={this.props.store.copd.LungHealth.value5 === 2}
              onChange={(e, { value }) => {
                this.props.store.copd.updateLungHealth(value, "value5");
              }}
            />
          </Form.Group>

          {/* <Form.Group widths="equal">
            <Form.Field
              label="4.ไอมีเสมหะบ่อยๆหรือไม่"
              control={Select}
              required
              clearable
              value={this.props.store.copd.LungHealth.value4}
              options={[
                { key: 1, text: "มี (1)", value: "1" },
                { key: 2, text: "ไม่มี (0)", value: "0" }
              ]}
              placeholder="ไอมีเสมหะบ่อยๆหรือไม่"
              onChange={(e, { value }) => {
                console.log("4.: " + value);
                this.setState({ value4: value });
              }}
            /> */}

          {/* <Form.Field
              label="5.มีประวัติสูบบุหรี่มา มากกว่าหรือเท่ากับ(>=) 20 ปี"
              control={Select}
              required
              clearable
              value={this.props.store.copd.LungHealth.value5}
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
          </Form.Group> */}
        </Form>
        {/* <Button
          circular
          content="บันทึก"
          color="blue"
          onClick={this.setLungHealth}
        /> */}
      </div>
    );
  }
}
export default LungHealth;
