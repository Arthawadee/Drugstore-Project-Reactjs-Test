import React, { Component } from "react";
import { Header, Image, Step, Segment } from "semantic-ui-react";
import FamilyInfo from "./Smoking/FamilyInfo";
import HealthBehavior from "./Smoking/HealthBehavior";
import SmokingCessationForm from "./Smoking/SmokingCessationForm";
import SmokingCessationPlan from "./Smoking/SmokingCessationPlan";
import SmokingFollowUpA5 from "./Smoking/SmokingFollowUpA5";
import SmokingCessationMedicine from "./Smoking/SmokingCessationMedicine";
import TopButton from "./TopButton";
import { observer } from "mobx-react";

// const panes = [
//   {
//     menuItem: "ประวัติครอบครัว",
//     render: () => (
//       <Tab.Pane>
//         <FamilyInfo />
//       </Tab.Pane>
//     )
//   },
//   {
//     menuItem: "พฤติกรรมสุขภาพ",
//     render: () => (
//       <Tab.Pane>
//         <HealthBehavior />
//       </Tab.Pane>
//     )
//   },
//   {
//     menuItem: "แบบคัดกรองการสูบบุหรี่ (A1-A4)",
//     render: () => (
//       <Tab.Pane>
//         <SmokingCessationForm />
//       </Tab.Pane>
//     )
//   },
//   {
//     menuItem: "แผนการเลิกบุหรี่",
//     render: () => (
//       <Tab.Pane>
//         <SmokingCessationPlan />
//       </Tab.Pane>
//     )
//   },
//   {
//     menuItem: "ยาช่วยเลิกบุหรี่",
//     render: () => (
//       <Tab.Pane>
//         <SmokingCessationMedicine />
//       </Tab.Pane>
//     )
//   },
//   {
//     menuItem: "ติดตามผล (A5)",
//     render: () => (
//       <Tab.Pane>
//         <SmokingFollowUpA5 />
//       </Tab.Pane>
//     )
//   }
// ];

const SmokingForm = observer(
  class SmokingForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        step1Complete: true,
        active1: true,
        active2: false,
        active3: false,
        active4: false,
        active5: false,
        active6: false,
        store: this.props.store
      };
      // console.log(props);
      // let store = this.props.store;
      // console.log(this.state.store);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //   console.log("shouldComponentUpdate");
    //   // console.log(nextProps)
    //   console.log(nextState);
    //   return true;
    // }

    showFamilyInfo = () => {
      document.getElementById("FamilyInfo").style.display = "block";
      document.getElementById("HealthBehavior").style.display = "none";
      document.getElementById("SmokingCessationForm").style.display = "none";
      document.getElementById("SmokingCessationPlan").style.display = "none";
      document.getElementById("SmokingCessationMedicine").style.display =
        "none";
      document.getElementById("SmokingFollowUpA5").style.display = "none";
      this.setState({
        active1: true,
        active2: false,
        active3: false,
        active4: false,
        active5: false,
        active6: false
      });
    };
    showHealthBehavior = () => {
      document.getElementById("FamilyInfo").style.display = "none";
      document.getElementById("HealthBehavior").style.display = "block";
      document.getElementById("SmokingCessationForm").style.display = "none";
      document.getElementById("SmokingCessationPlan").style.display = "none";
      document.getElementById("SmokingCessationMedicine").style.display =
        "none";
      document.getElementById("SmokingFollowUpA5").style.display = "none";
      this.setState({
        active1: false,
        active2: true,
        active3: false,
        active4: false,
        active5: false,
        active6: false
      });
    };
    showSmokingCessationForm = () => {
      document.getElementById("FamilyInfo").style.display = "none";
      document.getElementById("HealthBehavior").style.display = "none";
      document.getElementById("SmokingCessationForm").style.display = "block";
      document.getElementById("SmokingCessationPlan").style.display = "none";
      document.getElementById("SmokingCessationMedicine").style.display =
        "none";
      document.getElementById("SmokingFollowUpA5").style.display = "none";
      this.setState({
        active1: false,
        active2: false,
        active3: true,
        active4: false,
        active5: false,
        active6: false
      });
    };

    showSmokingCessationPlan = () => {
      document.getElementById("FamilyInfo").style.display = "none";
      document.getElementById("HealthBehavior").style.display = "none";
      document.getElementById("SmokingCessationForm").style.display = "none";
      document.getElementById("SmokingCessationPlan").style.display = "block";
      document.getElementById("SmokingCessationMedicine").style.display =
        "none";
      document.getElementById("SmokingFollowUpA5").style.display = "none";
      this.setState({
        active1: false,
        active2: false,
        active3: false,
        active4: true,
        active5: false,
        active6: false
      });
    };

    showSmokingCessationMedicine = () => {
      document.getElementById("FamilyInfo").style.display = "none";
      document.getElementById("HealthBehavior").style.display = "none";
      document.getElementById("SmokingCessationForm").style.display = "none";
      document.getElementById("SmokingCessationPlan").style.display = "none";
      document.getElementById("SmokingCessationMedicine").style.display =
        "block";
      document.getElementById("SmokingFollowUpA5").style.display = "none";
      this.setState({
        active1: false,
        active2: false,
        active3: false,
        active4: false,
        active5: true,
        active6: false
      });
    };

    showSmokingFollowUpA5 = () => {
      document.getElementById("FamilyInfo").style.display = "none";
      document.getElementById("HealthBehavior").style.display = "none";
      document.getElementById("SmokingCessationForm").style.display = "none";
      document.getElementById("SmokingCessationPlan").style.display = "none";
      document.getElementById("SmokingCessationMedicine").style.display =
        "none";
      document.getElementById("SmokingFollowUpA5").style.display = "block";
      this.setState({
        active1: false,
        active2: false,
        active3: false,
        active4: false,
        active5: false,
        active6: true
      });
    };

    handleChange = (e, { value }) => {
      this.setState({ value });
      console.log(value);
    };
    render() {
      return (
        <div className="SmokingFormPage">
          <Image
            src="https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/nosmoling_0.png"
            size="medium"
            circular
          />
          <Header as="h1" textAlign="center">
            แบบคัดกรองการสูบบุหรี่
          </Header>
          {/* <h2 className="ui icon aligned header">
          <i aria-hidden="true" className="user plus circular icon" />
          <div className="content">แบบคัดกรองการสูบบุหรี่</div>
        </h2> */}

          {/* <Tab
          menu={{ color: "blue", secondary: true, pointing: true }}
          panes={panes}
        /> */}

          <Step.Group ordered attached="top" size="large">
            <Step
              active={this.state.active1}
              completed={this.props.store.smokingComplete.complete1}
              onClick={this.showFamilyInfo}
              disabled = {this.props.store.SmokingDisable.disable1}
            >
              <Step.Content>
                <Step.Title>ประวัติครอบครัว</Step.Title>
                <Step.Description>
                  Choose your shipping options
                </Step.Description>
              </Step.Content>
            </Step>

            <Step
              active={this.state.active2}
              onClick={this.showHealthBehavior}
              completed={this.props.store.smokingComplete.complete2}
              disabled = {this.props.store.SmokingDisable.disable2}
            >
              <Step.Content>
                <Step.Title>พฤติกรรมสุขภาพ</Step.Title>
                <Step.Description>
                  Choose your shipping options
                </Step.Description>
              </Step.Content>
            </Step>

            <Step
              active={this.state.active3}
              onClick={this.showSmokingCessationForm}
              completed={this.props.store.smokingComplete.complete3}
              disabled = {this.props.store.SmokingDisable.disable3}
            >
              <Step.Content>
                <Step.Title>แบบคัดกรองการสูบบุหรี่ (A1-A4)</Step.Title>
                <Step.Description>
                  Choose your shipping options
                </Step.Description>
              </Step.Content>
            </Step>

            <Step
              active={this.state.active4}
              onClick={this.showSmokingCessationPlan}
              completed={this.props.store.smokingComplete.complete4}
              disabled = {this.props.store.SmokingDisable.disable4}
            >
              <Step.Content>
                <Step.Title>แผนการเลิกบุหรี่</Step.Title>
                <Step.Description>
                  Choose your shipping options
                </Step.Description>
              </Step.Content>
            </Step>

            <Step
              active={this.state.active5}
              onClick={this.showSmokingCessationMedicine}
              completed={this.props.store.smokingComplete.complete5}
              disabled = {this.props.store.SmokingDisable.disable5}
            >
              <Step.Content>
                <Step.Title>ยาช่วยเลิกบุหรี่</Step.Title>
                <Step.Description>Enter billing information</Step.Description>
              </Step.Content>
            </Step>

            <Step
              active={this.state.active6}
              onClick={this.showSmokingFollowUpA5}
              completed={this.props.store.smokingComplete.complete6}
              disabled = {this.props.store.SmokingDisable.disable6}
            >
              <Step.Content>
                <Step.Title>ติดตามผล (A5)</Step.Title>
                <Step.Description>
                  Choose your shipping options
                </Step.Description>
              </Step.Content>
            </Step>
          </Step.Group>

          <Segment attached>
            <div id="FamilyInfo" style={{ display: "block" }}>
              <FamilyInfo store={this.props.store} />
            </div>
            <div id="HealthBehavior" style={{ display: "none" }}>
              <HealthBehavior store={this.props.store} />
            </div>
            <div id="SmokingCessationForm" style={{ display: "none" }}>
              <SmokingCessationForm store={this.props.store} />
            </div>
            <div id="SmokingCessationPlan" style={{ display: "none" }}>
              <SmokingCessationPlan store={this.props.store} />
            </div>
            <div id="SmokingCessationMedicine" style={{ display: "none" }}>
              <SmokingCessationMedicine store={this.props.store} />
            </div>
            <div id="SmokingFollowUpA5" style={{ display: "none" }}>
              <SmokingFollowUpA5 store={this.props.store} />
            </div>
          </Segment>
          <TopButton />
        </div>
      );
    }
  }
);

export default SmokingForm;
