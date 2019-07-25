import React, { Component } from "react";
import { Header, Button, Form, Divider, Radio, Grid } from "semantic-ui-react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class SmokingCessationMedicine extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("medicine", this.props.store.smoking.medicine);
  }

  showMedicine() {
    let ncard = [];
    for (let i = 0; i < this.props.store.smoking.medicine.length; i++) {
      ncard.push(
        <div key={i} className='addMedicineForm'>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width={1}>
                <h3>{i + 1}.</h3>
              </Grid.Column>
              <Grid.Column width={15}>
                <Form.Group widths="equal">
                  <Form.Input
                    disabled={this.props.store.smoking.noMedicine}
                    required
                    icon="pills"
                    iconPosition="left"
                    label="ชื่อยา"
                    type="text"
                    placeholder="กรุณากรอกชื่อยา"
                    value={this.props.store.smoking.medicine[i].value1}
                    onChange={(e, { value }) => {
                      this.props.store.smoking.updateAddMedicine(
                        value,
                        "value1",
                        i
                      );
                    }}
                  />
                  <Form.Input
                    disabled={this.props.store.smoking.noMedicine}
                    required
                    icon="pills"
                    iconPosition="left"
                    label="จำนวน(เม็ด)"
                    type="text"
                    placeholder="กรุณากรอกจำนวน"
                    value={this.props.store.smoking.medicine[i].value2}
                    onChange={(e, { value }) => {
                      this.props.store.smoking.updateAddMedicine(
                        value,
                        "value2",
                        i
                      );
                    }}
                  />
                </Form.Group>
                <Form.TextArea
                  disabled={this.props.store.smoking.noMedicine}
                  required
                  rows={5}
                  label="วิธีรับประทาน"
                  //   value={this.state.address}
                  placeholder="กรุณากรอกวิธีรับประทาน"
                  icon="pills"
                  value={this.props.store.smoking.medicine[i].value3}
                  onChange={(e, { value }) => {
                    this.props.store.smoking.updateAddMedicine(
                      value,
                      "value3",
                      i
                    );
                  }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />
        </div>
      );
    }
    return ncard;
  }
  render() {
    var i = 0;
    return (
      <div className="SmokingCessationMedicinePage">
        <Header as="h2">ยาช่วยเลิกบุหรี่</Header>

        <Form>
          <Form.Field
            control={Radio}
            toggle
            label="ไม่มีการจ่ายยาช่วยเลิกบุหรี่"
            checked={this.props.store.smoking.noMedicine}
            onChange={this.props.store.smoking.updateNoMedicine}
          />
          {this.showMedicine()}
          <Button
            icon="add"
            labelPosition="left"
            primary
            disabled={this.props.store.smoking.noMedicine}
            content="เพิ่ม"
            onClick={this.props.store.smoking.addMedicine}
          />
        </Form>
      </div>
    );
  }
}
export default SmokingCessationMedicine;
