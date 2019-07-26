import React, { Component } from 'react';
import { Tab } from "semantic-ui-react";
import SmokingForm from './SmokingForm';
import PatientInfo from './PatientInfo';
import StrokeForm from './StrokeForm';
import COPDForm from './COPDForm';
import AsthmaForm from './AsthmaForm';
import RecommendMedicine from './RecommendMedicine';
// import store from './Smoking/stores/TodoStore';

const panes = [
    { menuItem: 'ข้อมูลทั่วไป', render: () => <Tab.Pane><PatientInfo /></Tab.Pane> },
    { menuItem: 'แบบคัดกรองการสูบบุหรี่', render: () => <Tab.Pane><SmokingForm /></Tab.Pane> },
    { menuItem: 'แบบคัดกรองโรคหลอดเลือดสมอง', render: () => <Tab.Pane><StrokeForm /></Tab.Pane> },
    { menuItem: 'แบบคัดกรองโรคปอดอุดกั้นเรื้อรัง', render: () => <Tab.Pane><COPDForm /></Tab.Pane> },
    { menuItem: 'แบบคัดกรองโรคหืด', render: () => <Tab.Pane><AsthmaForm /></Tab.Pane>},
    { menuItem: 'แนะนำยา', render: () => <Tab.Pane><RecommendMedicine /></Tab.Pane> }
  ]
  
//   const TabExampleBasic = () => <Tab menu={{ color, inverted: true, attached: false, tabular: false }} panes={panes} />

export default class EditPatientData extends Component {

    render() {
        return (
            <div className= 'EditPatientDataPage'>

                <div>
                    {/* <h1>{store.patient.patientFirstname+' '+store.patient.patientLastname}</h1> */}
                    {/* <Header as='h2'>ชื่อ-นามสกุล: {this.props.patient.patientFirstname+' '+this.props.patient.patientLastname}</Header> */}
                    {/* <Header as='h2'>ชื่อ-นามสกุล: {firstName+' '+lastName}</Header> */}
                    {/* <Header as='h2'>เลขประจำตัวประชาชน: {this.props.patient.id}</Header> */}
                </div>
                <Tab panes={panes} defaultActiveIndex={1} />
            </div>
        )
    }
}
