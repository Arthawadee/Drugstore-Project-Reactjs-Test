import React, { Component } from "react";
import { Form, Header, Image, Select } from "semantic-ui-react";
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class AsthmaForm extends Component {
    constructor(props){
        super(props)
        this.state={
            disable: true,
            value: '',
            value1: '',
            value2: ''
        }
    }
    componentDidMount(){
      console.log('AsthmaForm = ', this.props.store.asthma.screening);
    }
  render() {
    return (
      <div className="AsthmaFormPage">
        <Image
          src="https://cdn.impactinit.com/cdn/x/x@dd5bc7d97f/smss52/smsimg30/pv/isignstockcontributors/iss_20539_01593.jpg"
          size="medium"
          circular
        />
        {/* <Image
          src="https://foxcitiesallergists.com/wp-content/uploads/2018/01/Asthma-Icon.png"
          size="medium"
          circular
        /> */}
        <Header as="h1" icon textAlign="center">
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
                  { key: 1, text: "ใช่ (1)", value: 1 },
                  { key: 2, text: "ไม่ใช่ (0)", value: 0 }
                ]}
                placeholder="ในช่วง 1 ปีที่ผ่านมาคุณไอ / แน่นหน้าอก / หายใจมีเสียงหวีด มากกว่าหรือเท่ากับ(>=) 3 ครั้ง/ปี"
                onChange={(e, { value }) => {
                  this.props.store.asthma.updateCOPDScreeningForm(value, 'value')
                }}
              />
              <Form.Group width="equal">
              <Form.Field
              disabled={this.props.store.asthma.screening.disable}
                label="1.มีประวัติครอบครัว พ่อ/แม่ เป็นโรคหืด หรือเคยถูกแพทย์วินิจฉัยเป็น Atopic Dermatitis"
                control={Select}
                required
                value={this.props.store.asthma.screening.value1}
                clearable
                options={[
                  { key: 1, text: "ใช่ (1)", value: 1 },
                  { key: 2, text: "ไม่ใช่ (0)", value: 0 }
                ]}
                placeholder="มีประวัติครอบครัว พ่อ/แม่ เป็นโรคหืด หรือเคยถูกแพทย์วินิจฉัยเป็น Atopic Dermatitis"
                onChange={(e, { value }) => {
                  this.props.store.asthma.updateCOPDScreeningForm(value, 'value1')
                }}
              />
              <Form.Field
              disabled={this.props.store.asthma.screening.disable}
                label="2.เคยหายใจมีเสียงหวีดที่ไม่ได้เกิดจากอากาศเย็น และเคยถูกแพทย์วินิจฉัยเป็น Allergic Rhinitis"
                control={Select}
                required
                value={this.props.store.asthma.screening.value2}
                clearable
                options={[
                  { key: 1, text: "ใช่ (1)", value: 1 },
                  { key: 2, text: "ไม่ใช่ (0)", value: 0 }
                ]}
                placeholder="เคยหายใจมีเสียงหวีดที่ไม่ได้เกิดจากอากาศเย็น และเคยถูกแพทย์วินิจฉัยเป็น Allergic Rhinitis"
                onChange={(e, { value }) => {
                  this.props.store.asthma.updateCOPDScreeningForm(value, 'value2')
                }}
              />
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}
export default AsthmaForm;