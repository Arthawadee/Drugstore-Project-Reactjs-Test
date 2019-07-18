import React, { Component } from "react";
import { Form, Select, Input, Button } from "semantic-ui-react";
import { observer } from "mobx-react";

const SmokingCessationPlan = observer(
  class SmokingCessationPlan extends Component {
    constructor(props) {
      super(props);
      this.state = {
        item17: "",
        stopDate: ""
      };
      console.log(this.props.store);
    }

    setSmokingCessationPlan = () => {
      this.props.store.setSmokingCessationPlan(
        this.state.item17,
        this.state.stopDate
      );
    };

    render() {
      return (
        <div className="SmokingCessationPlanPage">
          <h2 className="ui icon aligned header">แผนการเลิกบุหรี่</h2>
          <Form>
            <Form.Field
              control={Select}
              required
              clearable
              label="17.แผนการเลิกบุหรี่"
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
              onChange={(e, { value }) => {
                this.setState({ item17: value });
                console.log(value);
              }}
            />

            <Form.Field
              required
              control={Input}
              type="date"
              label="กำหนดวันหยุดบุหรี่ (0 มวน) วันที่"
              onChange={(e, { value }) => {
                this.setState({ stopDate: value });
                console.log(value);
              }}
            />
          </Form>

          <Button onClick={this.setSmokingCessationPlan}>บันทึก</Button>
        </div>
      );
    }
  }
);
export default SmokingCessationPlan;
