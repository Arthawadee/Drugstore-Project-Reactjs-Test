import React, { Component } from "react";
import { Form, Select, Input } from "semantic-ui-react";

export default class SmokingCessationPlan extends Component {
  render() {
    return (
      <div className="SmokingCessationPlanPage">
        <h2 className="ui icon aligned header">
          แผนการเลิกบุหรี่
        </h2>
        <Form>
            <Form.Field
            control={Select}
            required
            label='17.แผนการเลิกบุหรี่'
            options={[
              {
                key: 1,
                text: "ปรับพฤติกรรมและสร้างแรงจูงใจ",
                value: 1
              },
              {
                key: 2,
                text: "ใช้ยาช่วยเลิกบุหรี่",
                value: 2
              }
            ]}
            placeholder="แผนการเลิกบุหรี่"
            />
            <Form.Field
            required
            control={Input}
            type='date'
            label='กำหนดวันหยุดบุหรี่ (0 มวน) วันที่'
            />
        </Form>
      </div>
    );
  }
}
