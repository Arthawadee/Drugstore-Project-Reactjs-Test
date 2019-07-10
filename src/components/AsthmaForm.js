import React, { Component } from "react";
import { Form, Header, Image, Select } from "semantic-ui-react";

export default class AsthmaForm extends Component {
    constructor(props){
        super(props)
        this.state={
            disable: true,
            value: '',
            value1: '',
            value2: ''
        }
    }
  render() {
    return (
      <div className="AsthmaFormPage">
        <Image
          src="https://www.medacess.com/assets/img/copd%20icon.png"
          size="medium"
          circular
        />
        <Header as="h2" icon textAlign="center">
          <Header.Content>แบบคัดกรองโรคหืด</Header.Content>
        </Header>

        <div className="AddNewPatientForm">
          <Form>
            
              <Form.Field
                label="ในช่วง 1 ปีที่ผ่านมาคุณไอ / แน่นหน้าอก / หายใจมีเสียงหวีด มากกว่าหรือเท่ากับ(>=) 3 ครั้ง/ปี"
                control={Select}
                required
                clearable
                options={[
                  { key: 1, text: "ใช่ (1)", value: "1" },
                  { key: 2, text: "ไม่ใช่ (0)", value: "0" }
                ]}
                placeholder="ในช่วง 1 ปีที่ผ่านมาคุณไอ / แน่นหน้าอก / หายใจมีเสียงหวีด มากกว่าหรือเท่ากับ(>=) 3 ครั้ง/ปี"
                onChange={(e, { value }) => {
                  console.log(value);
                  this.setState({ value: value });
                  if(value === '1'){
                    this.setState({ disable: false });
                  }
                  else{
                    this.setState({ disable: true });
                  }
                }}
              />
              <Form.Group width="equal">
              <Form.Field
              disabled={this.state.disable}
                label="1.มีประวัติครอบครัว พ่อ/แม่ เป็นโรคหืด หรือเคยถูกแพทย์วินิจฉัยเป็น Atopic Dermatitis"
                control={Select}
                required
                clearable
                options={[
                  { key: 1, text: "ใช่ (1)", value: "1" },
                  { key: 2, text: "ไม่ใช่ (0)", value: "0" }
                ]}
                placeholder="มีประวัติครอบครัว พ่อ/แม่ เป็นโรคหืด หรือเคยถูกแพทย์วินิจฉัยเป็น Atopic Dermatitis"
                onChange={(e, { value }) => {
                  console.log("1.: " + value);
                  this.setState({ value1: value });
                }}
              />
              <Form.Field
              disabled={this.state.disable}
                label="2.เคยหายใจมีเสียงหวีดที่ไม่ได้เกิดจากอากาศเย็น และเคยถูกแพทย์วินิจฉัยเป็น Allergic Rhinitis"
                control={Select}
                required
                clearable
                options={[
                  { key: 1, text: "ใช่ (1)", value: "1" },
                  { key: 2, text: "ไม่ใช่ (0)", value: "0" }
                ]}
                placeholder="เคยหายใจมีเสียงหวีดที่ไม่ได้เกิดจากอากาศเย็น และเคยถูกแพทย์วินิจฉัยเป็น Allergic Rhinitis"
                onChange={(e, { value }) => {
                  console.log("2.: " + value);
                  this.setState({ value2: value });
                }}
              />
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}
