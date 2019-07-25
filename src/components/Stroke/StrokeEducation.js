import React, { Component } from "react";
import { Header, Form, Select, Input, Button } from "semantic-ui-react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class StrokeEducation extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("education = ", this.props.store.stroke.education);
  }

  render() {
    return (
      <div className="StrokeEducationPage">
        <Header as="h2">การให้ความรู้</Header>
        <Form>
          <Form.Field
            control={Select}
            required
            multiple
            clearable
            label="การให้ความรู้"
            placeholder="การให้ความรู้"
            options={[
              {
                key: 1,
                text: "สอน Stroke Application เน้น 270 นาทีเพื่อชีวิต",
                value: 1,
                score: 1
              },
              {
                key: 2,
                text:
                  "อธิบายอาการที่ต้องรีบไป รพ. : Facial Palsy ; Arm drip ; Speech ; Time",
                value: 2,
                score: 2
              },
              { key: 3, text: "MTM", value: 3, score: 3 },
              { key: 4, text: "ส่งต่อ", value: 4, score: 4 },
              { key: 5, text: "อื่นๆ", value: 5, score: 5 }
            ]}
            onChange={(e, { value }) => {
              this.props.store.stroke.updateStrokeEducation(value, "value");
            }}
          />
          <Form.Field
            disabled={this.props.store.stroke.education.disable}
            value={this.props.store.stroke.education.valueOther}
            required
            control={Input}
            type="text"
            label="ระบุ"
            placeholder="ระบุ..."
            onChange={(e, { value }) => {
              this.props.store.stroke.updateStrokeEducation(
                value,
                "valueOther"
              );
            }}
          />
        </Form>
        {/* <Button content="บันทึก" onClick={this.setStrokeEducation} /> */}
      </div>
    );
  }
}
export default StrokeEducation;
