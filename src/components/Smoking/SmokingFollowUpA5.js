import React, { Component } from "react";
import {
  Header,
  Form,
  Input,
  Select,
  TextArea,
  Button
} from "semantic-ui-react";
import CreateNewA5Form from './CreateNewA5Form'
import OldA5Form from './OldA5Form'

export default class SmokingFollowUpA5 extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   amount: 2,
    //   value1: "",
    //   disable1: true,
    //   value1Other: "",
    //   value3: "",
    //   disable3: true,
    //   value3Advice: "",
    //   value4: "",
    //   disable4: true,
    //   value4Advice: "",
    //   value5: "",
    //   disable5: true,
    //   value5Advice: "",
    //   value6: "",
    //   disable6: true,
    //   followUpDate: ""
    // };
    // console.log('store',this.props.store)
    // console.log(this.state.followUpDate)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("shouldComponentUpdate");
  //   // console.log(nextProps)
  //   console.log(nextState);
  //   return true;
  // }

  // setSmokingFollowUpA5 = () => {
  //   this.props.store.setSmokingFollowUpA5(
  //     this.state.amount,
  //     this.state.value1,
  //     this.state.disable1,
  //     this.state.value1Other,
  //     this.state.value3,
  //     this.state.disable3,
  //     this.state.value3Advice,
  //     this.state.value4,
  //     this.state.disable4,
  //     this.state.value4Advice,
  //     this.state.value5,
  //     this.state.disable5,
  //     this.state.value5Advice,
  //     this.state.value6,
  //     this.state.disable6,
  //     this.state.value6,
  //     this.state.followUpDate
  //   );
  // };

  // componentDidUpdate(prevProps) {
  //   this.setSmokingFollowUpA5();
  // }

  showCreateNewA5Form = () => {
    document.getElementById('CreateNewA5Form').style.display = "block";
    document.getElementById('OldA5Form').style.display = "none";
  }

  showOldA5Form = () => {
    document.getElementById('CreateNewA5Form').style.display = "none";
    document.getElementById('OldA5Form').style.display = "block";
  }

  render() {
    return (
      <div className="SmokingFollowUpA5Page">
        <Button fluid icon='redo' content='ดูแบบคัดกรองการติดตามผลที่ทำไปแล้ว' onClick={this.showOldA5Form}/>
        <Button fluid icon='add' content='เพิ่มแบบคัดกรองการติดตามผลใหม่' onClick={this.showCreateNewA5Form}/>

        <div id='CreateNewA5Form' style={{display: 'none',marginTop: '50px'}}><CreateNewA5Form /></div>
        <div id='OldA5Form' style={{display: 'none',marginTop: '50px'}}><OldA5Form /></div>
        
      </div>
    );
  }
}
