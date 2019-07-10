import React, { Component } from "react";
import { Header, Icon, Image, Step, Segment } from "semantic-ui-react";
import LungHealth from "./COPD/LungHealth";
import COPDScreeningForm from "./COPD/COPDScreeningForm";

export default class COPDForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  showLungHealth = () => {
    document.getElementById("LungHealth").style.display = "block";
    document.getElementById("COPDScreeningForm").style.display = "none";
    this.setState({ active1: true, active2: false });
  };

  showCOPDScreeningForm = () => {
    document.getElementById("LungHealth").style.display = "none";
    document.getElementById("COPDScreeningForm").style.display = "block";
    this.setState({ active1: false, active2: true });
  };

  //   handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="COPDFormPage">
        <Image
          src="https://www.medacess.com/assets/img/copd%20icon.png"
          size="medium"
          circular
        />
        <Header as="h2" icon textAlign="center">
          <Header.Content>แบบคัดกรองโรคปอดอุดกั้นเรื้อรัง</Header.Content>
        </Header>
        {/* <Header as="h3">
          <Header.Content>1.แบบประเมินสมรรถภาพปอด</Header.Content>
        </Header> */}

        <Step.Group>
          <Step active={this.state.active1} onClick={this.showLungHealth}>
            <Icon name="truck" />
            <Step.Content>
              <Step.Title>แบบประเมินสมรรถภาพปอด</Step.Title>
            </Step.Content>
          </Step>

          <Step
            active={this.state.active2}
            onClick={this.showCOPDScreeningForm}
          >
            <Icon name="payment" />
            <Step.Content>
              <Step.Title>แบบคัดกรองโรคปอดอุดกั้นเรื้อรัง</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
        <Segment attached>
          <div id="LungHealth" style={{ display: "block" }}>
            <LungHealth />
          </div>
          <div id="COPDScreeningForm" style={{ display: "none" }}>
            <COPDScreeningForm />
          </div>
        </Segment>
      </div>
    );
  }
}
