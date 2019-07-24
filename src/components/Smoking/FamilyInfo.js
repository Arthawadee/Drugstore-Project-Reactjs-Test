import React, { Component } from "react";
import { Header, Form, Select, Button } from "semantic-ui-react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class FamilyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: [],
      value2: []
    };
    // console.log(this.props.store);
  }

  // setFamilyInfo = () => {
  //   this.props.store.setFamilyInfo(this.state.value1, this.state.value2);
  // };
  // componentDidUpdate(prevProps) {
  //   this.setFamilyInfo();
  // }
  render() {
    // const { updateItem } = this.props.store;
    return (
      <div className="FamilyInfoPage">
        <Header as="h2">
          ประวัติเจ็บป่วยในครอบครัว (พ่อ แม่ และพี่ น้องสายตรง)
        </Header>
        <Form>
          <Form.Field
            control={Select}
            required
            clearable
            multiple
            label="ประวัติเจ็บป่วยในครอบครัว (พ่อ แม่ และพี่ น้องสายตรง)"
            placeholder="ประวัติเจ็บป่วยในครอบครัว (พ่อ แม่ และพี่ น้องสายตรง)"
            options={[
              { key: 1, text: "โรคเบาหวาน", value: 1 },
              { key: 2, text: "โรคความดันโลหิตสูง", value: 2 },
              { key: 3, text: "โรคไขมันในเลือดสูง", value: 3 },
              { key: 4, text: "โรคกล้ามเนื้อหัวใจขาดเลือด", value: 4 },
              { key: 5, text: "อัมพาธ", value: 5 },
              { key: 6, text: "ไม่มีโรคประจำตัว", value: 6 },
              { key: 7, text: "ไม่ทราบ", value: 7 }
            ]}
            onChange={(e, { value }) => {
              this.props.store.smoking.updateFamilyInfo(value, "value1");
            }}
          />
        </Form>

        <Header as="h2">โรคประจำตัว/ภาวะผู้สูบ</Header>
        <Form>
          <Form.Field
            control={Select}
            required
            clearable
            multiple
            label="โรคประจำตัว/ภาวะผู้สูบ"
            placeholder="โรคประจำตัว/ภาวะผู้สูบ"
            options={[
              { key: 1, text: "โรคเบาหวาน", value: 1, score: 1 },
              { key: 2, text: "โรคความดันโลหิตสูง", value: 2, score: 2 },
              { key: 3, text: "โรคไขมันในเลือดสูง", value: 3, score: 3 },
              {
                key: 4,
                text: "โรคกล้ามเนื้อหัวใจขาดเลือด",
                value: 4,
                score: 4
              },
              { key: 5, text: "โรคหลอดเลือดสมองอุดตัน", value: 5, score: 5 },
              { key: 6, text: "โรคซึมเศร้า", value: 6, score: 6 },
              { key: 7, text: "โรคปอดอุดกั้นเรื้อรัง", value: 7, score: 7 },
              { key: 8, text: "โรคหืด", value: 8, score: 8 },
              { key: 9, text: "โรคภูมิแพ้", value: 9, score: 9 },
              {
                key: 10,
                text: "ตั้งครรภ์ / ให้นมบุตร",
                value: 10,
                score: 10
              },
              { key: 11, text: "อื่นๆ", value: 11, score: 11 },
              { key: 12, text: "ไม่มีโรคประจำตัว", value: 12, score: 12 },
              { key: 13, text: "ไม่ทราบ", value: 13, score: 13 }
            ]}
            onChange={(e, { value }) => {
              this.props.store.smoking.updateFamilyInfo(value, "value2");
            }}
          />
        </Form>
        {/* <Button onClick={this.setFamilyInfo}>บันทึก</Button> */}
      </div>
    );
  }
}

export default FamilyInfo;
