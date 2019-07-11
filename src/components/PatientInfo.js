import React, { Component } from 'react';
import { Form, Header, Icon } from "semantic-ui-react";


export default class PatientInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: 0,
            height: 0,
            HR: 0,
            RR: 0,
            BP: 0,
            UnderlyDisease: '',
            DrugAllergy: ''
        };
        
      }
    render() {
        console.log('PatientInfo');
        console.log(this.props.store.PatientInfo);
        return (
            <div className = 'PatientInfoPage'>
                <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>ข้อมูลทั่วไป</Header.Content>
    </Header>
                <Form>
                    <Form.Input
                        required
                        icon="user"
                        iconPosition="left"
                        label="น้ำหนัก"
                        type="number"
                        min="1" max="150"
                        placeholder="กรุณากรอกน้ำหนักในหน่วยกิโลกรัม"
                        onChange={(e, { value }) => {
                        this.setState({ weight: value });
                        console.log("weight: " + this.state.weight);
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
                        this.setState({ height: value });
                        console.log("height: " + this.state.height);
                        // console.log('BMI: '+ eval("this.state.weight / ((this.state.height/100)*(this.state.height/100))"));
                        // console.log('BMI: '+ {BMI}))
                        }}
                    />
                    <Header as = 'h2'>BMI: {this.props.store.PatientInfo.BMI} kg/m*m</Header>
                    <Form.Input
                        required
                        icon="heartbeat"
                        iconPosition="left"
                        label="อัตราการเต้นของหัวใจ"
                        type="number"
                        placeholder="กรุณากรอกอัตราการเต้นของหัวใจ"
                        onChange={(e, { value }) => {
                        this.setState({ HR: value });
                        console.log("Heart rate: " + this.state.HR);
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
                        this.setState({ RR: value });
                        console.log("Respiratory rate: " + this.state.RR);
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
                        this.setState({ BP: value });
                        console.log("Blood Pressure: " + this.state.BP);
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
                        this.setState({ UnderlyDisease: value });
                        console.log("Underlying disease: " + this.state.UnderlyDisease);
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
                        this.setState({ DrugAllergy: value });
                        console.log("Drug allergy: " + this.state.DrugAllergy);
                        }}
                    />
                </Form>
            </div>
        )
    }
}
