import React, { Component } from "react";
import { Header, Icon, Image, Step, Segment } from "semantic-ui-react";
import StrokeScreeningForm from "./Stroke/StrokeScreeningForm";
import StrokeEducation from './Stroke/StrokeEducation';

export default class StrokeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // item1: 0,
      // item2: 0,
      // item3: 0,
      // item4: 0,
      // item5: 0,
      // item6: 0,
      // item7: 0,
      // item8: 0
      active1: true,
      active2: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    // console.log(nextProps)
    console.log(nextState);
    return true;
  }

  showStrokeScreeningForm=()=>{
    document.getElementById('StrokeScreeningForm').style.display = 'block';
    document.getElementById('StrokeEducation').style.display = 'none';
    this.setState({active1: true,active2: false});
}
showStrokeEducation=()=>{
  document.getElementById('StrokeScreeningForm').style.display = 'none';
  document.getElementById('StrokeEducation').style.display = 'block';
  this.setState({active1: false,active2: true});
}

  render() {
    return (
      <div className="StrokeFormPage">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-vnGpxvkhxkqpPrOlyKyajMu6ve-q1dGK_q_gvdUOA7DYZUNc"
          size="medium"
          circular
        />
        <Header as="h2" textAlign="center">
          <Header.Content>แบบคัดกรองโรคหลอดเลือดสมอง</Header.Content>
        </Header>

        {/* <div className="AddNewPatientForm">
          <StrokeScreeningForm />
        </div> */}

        <Step.Group>
          <Step active={this.state.active1} onClick={this.showStrokeScreeningForm}>
            <Icon name="truck" />
            <Step.Content>
              <Step.Title>แบบคัดกรองโรคหลอดเลือดสมอง</Step.Title>
            </Step.Content>
          </Step>

          <Step  active={this.state.active2} onClick={this.showStrokeEducation}>
            <Icon name="payment" />
            <Step.Content>
              <Step.Title>การให้ความรู้</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
        <Segment attached>
          <div id='StrokeScreeningForm' style={{display:'block'}}><StrokeScreeningForm /></div>
          <div id='StrokeEducation' style={{display:'none'}}><StrokeEducation/></div>
          
    </Segment>
      </div>
    );
  }
}
