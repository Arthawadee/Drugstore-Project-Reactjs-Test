import React, { Component } from 'react';
import { Tab, Header } from "semantic-ui-react";
import SmokingForm from './SmokingForm';
import PatientInfo from './PatientInfo';
import StrokeForm from './StrokeForm';
import COPDForm from './COPDForm';
import AsthmaForm from './AsthmaForm';

const panes = [
    { menuItem: 'ข้อมูลทั่วไป', render: () => <Tab.Pane><PatientInfo/></Tab.Pane> },
    { menuItem: 'แบบคัดกรองการสูบบุหรี่', render: () => <Tab.Pane><SmokingForm/></Tab.Pane> },
    { menuItem: 'แบบคัดกรองโรคหลอดเลือดสมอง', render: () => <Tab.Pane><StrokeForm/></Tab.Pane> },
    { menuItem: 'แบบคัดกรองโรคปอดอุดกั้นเรื้อรัง', render: () => <Tab.Pane><COPDForm/></Tab.Pane> },
    { menuItem: 'แบบคัดกรองโรคหืด', render: () => <Tab.Pane><AsthmaForm/></Tab.Pane> }
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
