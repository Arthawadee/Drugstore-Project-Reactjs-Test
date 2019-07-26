import React, { Component } from "react";
import { Header, Image, Step, Segment } from "semantic-ui-react";
import StrokeScreeningForm from "./Stroke/StrokeScreeningForm";
import StrokeEducation from "./Stroke/StrokeEducation";
import { inject,observer } from "mobx-react";

@inject('store')

@observer
class StrokeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active1: true,
      active2: false
    };
    // console.log(this.props.store)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("shouldComponentUpdate");
  //   // console.log(nextProps)
  //   console.log(nextState);
  //   return true;
  // }

  showStrokeScreeningForm = () => {
    document.getElementById("StrokeScreeningForm").style.display = "block";
    document.getElementById("StrokeEducation").style.display = "none";
    this.setState({ active1: true, active2: false });
  };
  showStrokeEducation = () => {
    document.getElementById("StrokeScreeningForm").style.display = "none";
    document.getElementById("StrokeEducation").style.display = "block";
    this.setState({ active1: false, active2: true });
  };

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

        <Step.Group ordered attached="top" size="large">
          <Step
            active={this.state.active1}
            onClick={this.showStrokeScreeningForm}
            completed = {this.props.store.stroke.complete.complete1}
            // disabled = {this.props.store.StrokeDisable.disable1}
          >
            <Step.Content>
              <Step.Title>แบบคัดกรองโรคหลอดเลือดสมอง</Step.Title>
              <Step.Description>Choose your shipping options</Step.Description>
            </Step.Content>
          </Step>

          <Step active={this.state.active2} onClick={this.showStrokeEducation}
            completed = {this.props.store.stroke.complete.complete2}
            // disabled = {this.props.store.StrokeDisable.disable2}
            >
            <Step.Content>
              <Step.Title>การให้ความรู้</Step.Title>
              <Step.Description>Choose your shipping options</Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
        <Segment attached>
          <div id="StrokeScreeningForm" style={{ display: "block" }}>
            <StrokeScreeningForm  />
          </div>
          <div id="StrokeEducation" style={{ display: "none" }}>
            <StrokeEducation  />
          </div>
        </Segment>
      </div>
    );
  }
}
export default StrokeForm;
