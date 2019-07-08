import React, { Component } from 'react';
import { Tab, Header } from "semantic-ui-react";
import SmokingForm from './SmokingForm';
import PatientInfo from './PatientInfo';

const panes = [
    { menuItem: 'ข้อมูลทั่วไป', render: () => <Tab.Pane><PatientInfo/></Tab.Pane> },
    { menuItem: 'แบบประเมิน', render: () => <Tab.Pane><SmokingForm/></Tab.Pane> }
  ]
  
//   const TabExampleBasic = () => <Tab menu={{ color, inverted: true, attached: false, tabular: false }} panes={panes} />

export default class EditPatientData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: 'มานะ',
            lastName: 'มานี',
            id: 'dfxcjbmb'
        };
      }

    render() {
        const { firstName, lastName, id } = this.state;
        return (
            <div className= 'EditPatientDataPage'>

                <div>
                    <Header as='h2'>ชื่อ-นามสกุล: {firstName+' '+lastName}</Header>
                    <Header as='h2'>เลขประจำตัวประชาชน: {id}</Header>
                </div>
                <Tab panes={panes} defaultActiveIndex={2} />
            </div>
        )
    }
}
