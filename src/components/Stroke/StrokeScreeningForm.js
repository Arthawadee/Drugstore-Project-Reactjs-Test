import React, { Component } from "react";
import { Form, Select, Button } from "semantic-ui-react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class StrokeScreeningForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: ""
    };
  }
  componentDidMount() {
    console.log(
      "screening = ",
      this.props.store.stroke.screening
    );
  }

  render() {
    return (
      <div className="StrokeScreeningForm">
        <Form>
          <Form.Field
            control={Select}
            required
            clearable
            label="1.ท่านมีญาติสายตรง ( พ่อ หรือแม่ หรือพี่ หรือน้อง ) เป็นโรคหัวใจขาดเลือดหรืออัมพาตใช่หรือไม่"
            options={[
              {
                key: 1,
                text: "ใช่ (1)",
                value: 1
              },
              {
                key: 2,
                text: "ไม่ใช่ (0)",
                value: 2
              },
              {
                key: 3,
                text: "ไม่ทราบ (0)",
                value: 3
              }
            ]}
            placeholder="ท่านมีญาติสายตรง ( พ่อ หรือแม่ หรือพี่ หรือน้อง ) เป็นโรคหัวใจขาดเลือดหรืออัมพาตใช่หรือไม่"
            onChange={(e, { value }) => {
              this.props.store.stroke.updateStrokeScreeningForm(
                value,
                "value1"
              );
            }}
          />
          <Form.Field
            control={Select}
            required
            clearable
            label="2.ในระยะ 6 เดือนที่ผ่านมา จนถึงปัจจุบัน ท่านสูบบุหรี่ใช่หรือไม่"
            options={[
              {
                key: 1,
                text: "ใช่ (1)",
                value: 1
              },
              {
                key: 2,
                text: "ไม่ใช่ (0)",
                value: 2
              },
              {
                key: 3,
                text: "ไม่ทราบ (0)",
                value: 3
              }
            ]}
            placeholder="ในระยะ 6 เดือนที่ผ่านมา จนถึงปัจจุบัน ท่านสูบบุหรี่ใช่หรือไม่"
            onChange={(e, { value }) => {
              this.props.store.stroke.updateStrokeScreeningForm(
                value,
                "value2"
              );
            }}
          />
          <Form.Field
            control={Select}
            required
            clearable
            label="3.ท่านมีระดับความดันโลหิตที่วัดได้ มากกว่า หรือเท่ากับ 140 /90 mmHg หรือเคยได้รับการวินิจฉัยว่าเป็นโรคความดันโลหิตสูง"
            options={[
              {
                key: 1,
                text: "ใช่ (1)",
                value: 1
              },
              {
                key: 2,
                text: "ไม่ใช่ (0)",
                value: 2
              },
              {
                key: 3,
                text: "ไม่ทราบ (0)",
                value: 3
              }
            ]}
            placeholder="ท่านมีระดับความดันโลหิตที่วัดได้ มากกว่า หรือเท่ากับ 140 /90 mmHg หรือเคยได้รับการวินิจฉัยว่าเป็นโรคความดันโลหิตสูง"
            onChange={(e, { value }) => {
              this.props.store.stroke.updateStrokeScreeningForm(
                value,
                "value3"
              );
            }}
          />
          <Form.Field
            control={Select}
            required
            clearable
            label="4.ท่านมีระดับน้ำตาลในเลือดจากหลอดเลื่อดฝอย มากกว่า 120 มิลลิกรัมเปอร์เซ็นต์ หรือเคยได้รับการวินิจฉัยว่าเป็นเบาหวาน"
            options={[
              {
                key: 1,
                text: "ใช่ (1)",
                value: 1
              },
              {
                key: 2,
                text: "ไม่ใช่ (0)",
                value: 2
              },
              {
                key: 3,
                text: "ไม่ทราบ (0)",
                value: 3
              }
            ]}
            placeholder="ท่านมีระดับน้ำตาลในเลือดจากหลอดเลื่อดฝอย มากกว่า 120 มิลลิกรัมเปอร์เซ็นต์ หรือเคยได้รับการวินิจฉัยว่าเป็นเบาหวาน"
            onChange={(e, { value }) => {
              this.props.store.stroke.updateStrokeScreeningForm(
                value,
                "value4"
              );
            }}
          />
          <Form.Field
            control={Select}
            required
            clearable
            label="5.ท่านเคยได้รับการบอกจากแพทย์หรือพยาบาลว่ามีไขมันในเลือดผิดปกติ"
            options={[
              {
                key: 1,
                text: "ใช่ (1)",
                value: 1
              },
              {
                key: 2,
                text: "ไม่ใช่ (0)",
                value: 2
              },
              {
                key: 3,
                text: "ไม่ทราบ (0)",
                value: 3
              }
            ]}
            placeholder="ท่านเคยได้รับการบอกจากแพทย์หรือพยาบาลว่ามีไขมันในเลือดผิดปกติ"
            onChange={(e, { value }) => {
              this.props.store.stroke.updateStrokeScreeningForm(
                value,
                "value5"
              );
            }}
          />
          <Form.Field
            control={Select}
            required
            clearable
            label="6.ท่านมีดัชนีมวลกาย (BMI) 25 กิโลกรัมต่อตารางเมตร(kg/m*m) หรือขนาดรอบเอวที่วัดได้ ชาย มากกว่า 90 ซม. หญิง มากกว่า 80 ซม."
            options={[
              {
                key: 1,
                text: "ใช่ (1)",
                value: 1
              },
              {
                key: 2,
                text: "ไม่ใช่ (0)",
                value: 2
              },
              {
                key: 3,
                text: "ไม่ทราบ (0)",
                value: 3
              }
            ]}
            placeholder="ท่านมีดัชนีมวลกาย (BMI) 25 กิโลกรัมต่อตารางเมตร(kg/m*m) หรือขนาดรอบเอวที่วัดได้ ชาย มากกว่า 90 ซม. หญิง มากกว่า 80 ซม."
            onChange={(e, { value }) => {
              this.props.store.stroke.updateStrokeScreeningForm(
                value,
                "value6"
              );
            }}
          />
          <Form.Field
            control={Select}
            required
            clearable
            label="7.ท่านเป็นโรคหลอดเลือดสมองหรือไม่"
            options={[
              {
                key: 1,
                text: "ใช่ (1)",
                value: 1
              },
              {
                key: 2,
                text: "ไม่ใช่ (0)",
                value: 2
              }
            ]}
            placeholder="ท่านเป็นโรคหลอดเลือดสมองหรือไม่"
            onChange={(e, { value }) => {
              this.props.store.stroke.updateStrokeScreeningForm(
                value,
                "value7"
              );
            }}
          />
          <Form.Field
            control={Select}
            required
            clearable
            label="8.ท่านเป็นโรคหัวใจหรือไม่"
            options={[
              {
                key: 1,
                text: "ใช่ (1)",
                value: 1
              },
              {
                key: 2,
                text: "ไม่ใช่ (0)",
                value: 2
              }
            ]}
            placeholder="ท่านเป็นโรคหัวใจหรือไม่"
            onChange={(e, { value }) => {
              this.props.store.stroke.updateStrokeScreeningForm(
                value,
                "value8"
              );
            }}
          />
        </Form>
        {/* <Button content="บันทึก" onClick={this.setStrokeScreeningForm} /> */}
      </div>
    );
  }
}
export default StrokeScreeningForm;
