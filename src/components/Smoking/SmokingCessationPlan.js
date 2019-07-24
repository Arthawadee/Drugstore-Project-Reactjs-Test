import React, { Component } from "react";
import { Form, Select, Input, Button } from "semantic-ui-react";
import { inject, observer } from "mobx-react";

@inject('store')
@observer
class SmokingCessationPlan extends Component {
    constructor(props) {
      super(props);
      this.state = {
        item17: "",
        stopDate: ""
      };
      // console.log(this.props.store);
    }

    componentDidMount(){
      console.log('SmokingCessationPlan',this.props.store.smoking.SmokingCessationPlan)
    }

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
                this.props.store.smoking.updateSmokingCessationPlan(value, "value17");
              }}
            />

            <Form.Field
              required
              control={Input}
              type="date"
              label="กำหนดวันหยุดบุหรี่ (0 มวน) วันที่"
              onChange={(e, { value }) => {
                this.props.store.smoking.updateSmokingCessationPlan(value, "stopDate");
              }}
            />
          </Form>

          {/* <Button onClick={this.setSmokingCessationPlan}>บันทึก</Button> */}
        </div>
      );
    }
  }
export default SmokingCessationPlan;
