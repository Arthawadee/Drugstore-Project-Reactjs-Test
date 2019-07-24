import React, { Component } from "react";
import { Form, Select, Button } from "semantic-ui-react";

export default class StrokeScreeningForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item1: "",
      item2: "",
      item3: "",
      item4: "",
      item5: "",
      item6: "",
      item7: "",
      item8: ""
    };
    // console.log(this.props.store)
  }

  // setStrokeScreeningForm = () => {
  //   this.props.store.setStrokeScreeningForm(
  //     this.state.item1,
  //     this.state.item2,
  //     this.state.item3,
  //     this.state.item4,
  //     this.state.item5,
  //     this.state.item6,
  //     this.state.item7,
  //     this.state.item8
  //   );
  // };

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("shouldComponentUpdate");
  //   // console.log(nextProps)
  //   console.log(nextState);
  //   return true;
  // }

  // componentDidUpdate(prevProps) {
  //   this.setStrokeScreeningForm();
  // }

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
              // console.log("1. " + value);
              this.setState({ item1: value });
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
              // console.log("2. " + value);
              this.setState({ item2: value });
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
              // console.log("3. " + value);
              this.setState({ item3: value });
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
              // console.log("4. " + value);
              this.setState({ item4: value });
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
              // console.log("5. " + value);
              this.setState({ item5: value });
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
              // console.log("6. " + value);
              this.setState({ item6: value });
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
              // console.log("7. " + value);
              this.setState({ item7: value });
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
              // console.log("8. " + value);
              this.setState({ item8: value });
            }}
          />
        </Form>
        <Button content="บันทึก" onClick={this.setStrokeScreeningForm} />
      </div>
    );
  }
}
