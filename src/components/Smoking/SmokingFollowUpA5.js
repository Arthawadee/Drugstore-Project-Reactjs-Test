import React, { Component } from "react";
// import { Button } from "semantic-ui-react";
import CreateNewA5Form from "./CreateNewA5Form";
import OldA5Form from "./OldA5Form";

export default class SmokingFollowUpA5 extends Component {
  showCreateNewA5Form = () => {
    document.getElementById("CreateNewA5Form").style.display = "block";
    document.getElementById("OldA5Form").style.display = "none";
  };

  showOldA5Form = () => {
    document.getElementById("CreateNewA5Form").style.display = "none";
    document.getElementById("OldA5Form").style.display = "block";
  };

  render() {
    return (
      <div className="SmokingFollowUpA5Page">
        {/* <Button.Group widths="2">
          <Button
            icon="redo"
            content="ดูแบบคัดกรองการติดตามผลที่ทำไปแล้ว"
            onClick={this.showOldA5Form}
          />
          <Button
            icon="add"
            content="เพิ่มแบบคัดกรองการติดตามผลใหม่"
            onClick={this.showCreateNewA5Form}
          />
        </Button.Group> */}

        <div className="ui buttons">
          <button className="ui button newA5" onClick={this.showCreateNewA5Form}>เพิ่มแบบคัดกรองการติดตามผลใหม่</button>
          <div className="or" data-text="หรือ" />
          <button className="ui positive button oldA5" onClick={this.showOldA5Form}>
            ดูแบบคัดกรองการติดตามผลที่ทำไปแล้ว
          </button>
        </div>

        <div
          id="CreateNewA5Form"
          style={{ display: "none", marginTop: "50px" }}
        >
          <CreateNewA5Form />
        </div>
        <div id="OldA5Form" style={{ display: "none", marginTop: "50px" }}>
          <OldA5Form />
        </div>
      </div>
    );
  }
}
