import React, { Component } from 'react';
import { Tab, Header } from "semantic-ui-react";
import SmokingForm from './SmokingForm';
import PatientInfo from './PatientInfo';
import StrokeForm from './StrokeForm';
import COPDForm from './COPDForm';
import AsthmaForm from './AsthmaForm';
import RecommendMedicine from './RecommendMedicine';
import store from './stores/TodoStore';

const panes = [
    { menuItem: 'ข้อมูลทั่วไป', render: () => <Tab.Pane><PatientInfo store={store}/></Tab.Pane> },
    { menuItem: 'แบบคัดกรองการสูบบุหรี่', render: () => <Tab.Pane><SmokingForm store={store}/></Tab.Pane> },
    { menuItem: 'แบบคัดกรองโรคหลอดเลือดสมอง', render: () => <Tab.Pane><StrokeForm store={store}/></Tab.Pane> },
    { menuItem: 'แบบคัดกรองโรคปอดอุดกั้นเรื้อรัง', render: () => <Tab.Pane><COPDForm store={store}/></Tab.Pane> },
    { menuItem: 'แบบคัดกรองโรคหืด', render: () => <Tab.Pane><AsthmaForm store={store}/></Tab.Pane>},
    { menuItem: 'แนะนำยา', render: () => <Tab.Pane><RecommendMedicine store={store}/></Tab.Pane> }
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
        // console.log(store)
      }

    render() {
        // const { firstName, lastName, id } = this.state;
        return (
            <div className= 'EditPatientDataPage'>

                <div>
                    {/* <h1>{store.patient.patientFirstname+' '+store.patient.patientLastname}</h1> */}
                    <Header as='h2'>ชื่อ-นามสกุล: {store.patient.patientFirstname+' '+store.patient.patientLastname}</Header>
                    {/* <Header as='h2'>ชื่อ-นามสกุล: {firstName+' '+lastName}</Header> */}
                    <Header as='h2'>เลขประจำตัวประชาชน: {store.patient.id}</Header>
                </div>
                <Tab panes={panes} defaultActiveIndex={1} />
            </div>
        )
    }
}
