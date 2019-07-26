import React, { Component } from "react";
import {
  Form,
  Input,
  Select,
  TextArea,
  Message,
  Radio
} from "semantic-ui-react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class OldA5Form extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   amount: 2,
    //   value1: this.props.store.SmokingFollowUpA5.value1,
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
    console.log(this.props.store);
  }

  // componentDidUpdate(){

  //     console.log(this.props.store.SmokingFollowUpA5)
  // }
  componentWillReceiveProps(nextProps) {
    // console.log(this.props.store.SmokingFollowUpA5);
  }

  componentDidUpdate() {
    // console.log('UPDATE',this.props.store.SmokingFollowUpA5.value1)
    // console.log('BOOLEAN',this.props.store.SmokingFollowUpA5.value1 === "อื่นๆ")
  }
  render() {
    return (
      <div className="OldA5FormPage">
        {/* <h1>OldA5Form Page</h1> */}
        {/* <Header as="h2">
          ติดตามผลครั้งที่ {this.props.store.SmokingFollowUpA5.amount} (A5-
          {this.props.store.SmokingFollowUpA5.amount})
        </Header> */}

        <Message
          attached
          header={
            <p className="header">
              {" "}
              ติดตามผลครั้งที่ {this.props.store.smoking.A5.amount} (A5-
              {this.props.store.smoking.A5.amount})
            </p>
          }
        />
        <Form>
          <Form.Group inline>
            <label>1.วิธีติดตาม</label>
            <Form.Field
              control={Radio}
              label="วิธีการติดตาม"
              checked={
                this.props.store.smoking.A5.value1 === 1
              }
              
            />
            <Form.Field
              control={Radio}
              label="โทรศัพท์"
              checked={this.props.store.smoking.A5.value1 === 2}
              
            />
            <Form.Field
              control={Radio}
              label="ที่ร้าน"
              checked={this.props.store.smoking.A5.value1 === 3}
              
            />
            <Form.Field
              control={Radio}
              label="อื่นๆ"
              checked={this.props.store.smoking.A5.value1 === 4}
              
            />
          </Form.Group>

          <Form.Field
            control={Input}
            // disabled={this.props.store.SmokingFollowUpA5.disable1}
            value={this.props.store.smoking.A5.value1Other}
            label="ระบุ"
            placeholder={this.props.store.smoking.A5.value1Other}
          />

          {/* <Form.Group widths="equal">
            <Form.Field
              control={Select}
              label="1.วิธีติดตาม"
              placeholder={this.props.store.SmokingFollowUpA5.value1}
              value={this.props.store.SmokingFollowUpA5.value1}
              options={[
                { key: 1, text: "วิธีการติดตาม", value: "วิธีการติดตาม" },
                { key: 2, text: "โทรศัพท์", value: "โทรศัพท์" },
                { key: 3, text: "ที่ร้าน", value: "ที่ร้าน" },
                { key: 4, text: "อื่นๆ", value: "อื่นๆ" }
              ]}
            />
            <Form.Field
              control={Input}
              disabled={this.props.store.SmokingFollowUpA5.disable1}
              value={this.props.store.SmokingFollowUpA5.value1Other}
              label="ระบุ"
              placeholder={this.props.store.SmokingFollowUpA5.value1Other}
            />
          </Form.Group> */}

          <Form.Group widths="equal">
            <Form.Field
              control={Select}
              value={this.props.store.smoking.A5.value3}
              label="3.อาการถอนนิโคติน"
              placeholder="อาการถอนนิโคติน"
              options={[
                { key: 1, text: "พบ", value: 1 },
                { key: 2, text: "ไม่พบ", value: 2 }
              ]}
            />
            <Form.Field
              control={TextArea}
              // disabled={this.props.store.SmokingFollowUpA5.disable3}
              value={this.props.store.smoking.A5.value3Advice}
              label="อาการที่พบและคำแนะนำ"
              placeholder="อาการที่พบและคำแนะนำ"
            />
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field
              control={Select}
              value={this.props.store.smoking.A5.value4}
              label="4.กรณีการใช้ยาช่วยเลิกบุหรี่ อาการข้างเคียงจากยาช่วยเลิกบุหรี"
              placeholder="กรณีการใช้ยาช่วยเลิกบุหรี่ อาการข้างเคียงจากยาช่วยเลิกบุหรี"
              options={[
                { key: 1, text: "พบ", value: 1 },
                { key: 2, text: "ไม่พบ", value: 2 }
              ]}
            />
            <Form.Field
              control={TextArea}
              // disabled={this.props.store.SmokingFollowUpA5.disable4}
              value={this.props.store.smoking.A5.value4Advice}
              label="อาการที่พบและคำแนะนำ"
              placeholder="อาการที่พบและคำแนะนำ"
            />
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field
              control={Select}
              value={this.props.store.smoking.A5.value5}
              label="5.ปัญหาเชิงพฤติกรรม สังคมและความเคยชิน หรือความเชื่อ"
              placeholder="ปัญหาเชิงพฤติกรรม สังคมและความเคยชิน หรือความเชื่อ"
              options={[
                { key: 1, text: "พบ", value: 1 },
                { key: 2, text: "ไม่พบ", value: 2 }
              ]}
            />
            <Form.Field
              control={TextArea}
              // disabled={this.props.store.SmokingFollowUpA5.disable5}
              value={this.props.store.smoking.A5.value5Advice}
              label="ปัญหาที่พบและคำแนะนำ"
              placeholder="ปัญหาที่พบและคำแนะนำ"
            />
          </Form.Group>

          <Form.Field
            control={TextArea}
            value={this.props.store.smoking.A5.value6}
            label="6.คำแนะนำอื่นๆ เช่น การเสริมแรง การให้กำลังใจผู้ป่วย"
            placeholder="คำแนะนำ"
          />

          <Form.Field
            control={Input}
            type="date"
            label="นัดครั้งต่อไป วันที่"
            value={this.props.store.smoking.A5.followUpDate}
          />
        </Form>













        {/* <p>1.วิธีติดตาม: {this.state.value1}</p> */}

        {/* <Grid stackable divided="vertically">
          <Grid.Row columns={1}>
            <Grid.Column>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2} divide="true">
            <Grid.Column>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Grid.Column>
            <Grid.Column>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid> */}

        {/* <Grid stackable columns={1}>
          <Grid.Column>
            <Segment>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
              
            </Segment>
          </Grid.Column>
        </Grid>
        <Grid stackable columns={2}>
          <Grid.Column>
            <Segment>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Grid.Column>
        </Grid> */}
      </div>
    );
  }
}
export default OldA5Form;