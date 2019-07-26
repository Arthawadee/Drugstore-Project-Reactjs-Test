import React, { Component } from "react";
import { Form, Header, Icon } from "semantic-ui-react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class PatientInfo extends Component {
  
  componentDidMount() {
    console.log("PatientInfo = ", this.props.store.patientInfo.PatientInfo);
  }

  render() {
    return (
      <div className="PatientInfoPage">
        <Header as="h2" icon textAlign="center">
          <Icon name="users" circular />
          <Header.Content>ข้อมูลทั่วไป</Header.Content>
        </Header>
        <Form>
          <Form.Input
            required
            icon="user"
            iconPosition="left"
            label="น้ำหนัก"
            type="number"
            min="1"
            max="150"
            placeholder="กรุณากรอกน้ำหนักในหน่วยกิโลกรัม"
            onChange={(e, { value }) => {
              this.props.store.patientInfo.updatePatientInfo(value, "weight");
            }}
          />
          <Form.Input
            required
            icon="user"
            iconPosition="left"
            label="ส่วนสูง"
            type="number"
            placeholder="กรุณากรอกส่วนสูงในหน่วยเซนติมตร"
            onChange={(e, { value }) => {
              this.props.store.patientInfo.updatePatientInfo(value, "height");
            }}
          />
          {/* <Header as="h2">
            BMI: {this.props.store.patientInfo.PatientInfo.BMI} kg/m*m
          </Header> */}
          <Form.Input
            icon="heartbeat"
            iconPosition="left"
            value={this.props.store.patientInfo.PatientInfo.BMI}
            label="BMI"
           
            placeholder="BMI หน่วยเป็น kg/m*m"
          />
          <Form.Input
            required
            icon="heartbeat"
            iconPosition="left"
            label="อัตราการเต้นของหัวใจ"
            type="number"
            placeholder="กรุณากรอกอัตราการเต้นของหัวใจ"
            onChange={(e, { value }) => {
              this.props.store.patientInfo.updatePatientInfo(value, "HR");
            }}
          />
          <Form.Input
            required
            icon="user"
            iconPosition="left"
            label="อัตราการหายใจ"
            type="number"
            placeholder="กรุณากรอกอัตราการหายใจ"
            onChange={(e, { value }) => {
              this.props.store.patientInfo.updatePatientInfo(value, "RR");
            }}
          />
          <Form.Input
            required
            icon="user"
            iconPosition="left"
            label="ความดันโลหิต"
            type="number"
            placeholder="กรุณากรอกความดันโลหิต"
            onChange={(e, { value }) => {
              this.props.store.patientInfo.updatePatientInfo(value, "BP");
            }}
          />
          <Form.Input
            required
            icon="user"
            iconPosition="left"
            label="โรคประจำตัว"
            type="text"
            placeholder="กรุณากรอกโรคประจำตัว"
            onChange={(e, { value }) => {
              this.props.store.patientInfo.updatePatientInfo(
                value,
                "UnderlyDisease"
              );
            }}
          />
          <Form.Input
            required
            icon="user"
            iconPosition="left"
            label="การแพ้ยา"
            type="text"
            placeholder="กรุณากรอกการแพ้ยา"
            onChange={(e, { value }) => {
              this.props.store.patientInfo.updatePatientInfo(
                value,
                "DrugAllergy"
              );
            }}
          />
        </Form>
        {/* <Button onClick={this.setPatientInfo}>send all data</Button> */}
      </div>
    );
  }
}
export default PatientInfo;
