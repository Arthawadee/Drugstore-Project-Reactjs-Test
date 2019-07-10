import React, { Component } from "react";
import { Header, Form, Input, Select, Radio } from "semantic-ui-react";

export default class HealthBehavior extends Component {
    constructor(props){
        super(props)
        this.state={
            value1: '',
            disable1: true,
            month: null,
            year: null,
            smokingNow: '',
            stopAmount: 0,
            disable2: true,
            smokingType: ''
        }
    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        // console.log(nextProps)
        console.log(nextState);
        return true;
      }
      componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate");
        console.log(prevState);
      }



  render() {
    return (
      <div className="HealthBehaviorPage">
        <Header as="h2">พฤติกรรมสุขภาพ</Header>
        <Form>
          <Form.Field
            control={Input}
            required
            label="ยาที่ใช้ประจำตัว"
            type="text"
            placeholder="ยาที่ใช้ประจำตัว"
          />
          <Form.Field
            control={Select}
            required
            clearable
            label="การดื่มเครื่องดื่มแอลกอฮอล์"
            placeholder="การดื่มเครื่องดื่มแอลกอฮอล์"
            options={[
              { key: 1, text: "ดื่มทุกวัน", value: 1, score: 1 },
              { key: 2, text: "ดื่มเป็นครั้งคราว", value: 2, score: 2 },
              { key: 3, text: "เคยดื่มแต่เลิกแล้ว", value: 3, score: 3 },
              { key: 4, text: "ไม่ดื่ม", value: 4, score: 4 },
              { key: 5, text: "ไม่มีข้อมูล", value: 5, score: 5 }
            ]}
          />

          
          {/* <Form.Group inline required>
            <label>สูบบุหรี่</label>
            <Form.Field
              required
              control={Radio}
              label="สูบมาเป็นเวลานาน"
              value="1"
              checked={this.state.value1 === "1"}
              onChange={(e, { value }) => {
                this.setState({ value1: value });
              }}
            />
          </Form.Group> */}

          <Form.Group widths='equal'>
          <label>สูบบุหรี่</label>
            <Form.Field
              required
              control={Radio}
              label="สูบมาเป็นเวลานาน"
              value="1"
              checked={this.state.value1 === "1"}
              onChange={(e, { value }) => {
                this.setState({ value1: value });
                if(value==="1"){
                    this.setState({disable1: false});
                }
                else{
                    this.setState({disable1: true});
                }
              }}
            />
          <Form.Input
            disabled = {this.state.disable1}
            required
            type='number'
            min='0' max='11'
            label='เดือน'
            placeholder='เดือน'
            onChange={(e,{value})=>{
                this.setState({month: value})
            }}
            />
            <Form.Input
            disabled = {this.state.disable1}
            required
            min='0' max='100'
            type='number'
            label='ปี'
            placeholder='ปี'
            />
                <Form.Field
            control={Select}
            required
            clearable
            label='ปัจจุบันสูบบุหรี่'
            options={[
              { key: 1, text: "ปัจจุบันสูบทุกวัน", value: 1, score: 1 },
              { key: 2, text: "ปัจจุบันสูบเป็นครั้งคราว", value: 2, score: 2 },
              { key: 3, text: "ปัจจุบันหยุดสูบ", value: 3, score: 3 }
            ]}
            onChange={(e,{value})=>{
                console.log(value)
                this.setState({smokingNow: value})
                if(value===3){
                    this.setState({disable2: false});
                }
                else {
                    this.setState({disable2: true});
                    this.setState({stopAmount: ''});
                }
            }}
            
            />
            <Form.Input
            disabled = {this.state.disable2}
            required
            value={this.state.stopAmount}
            min='0'
            type='number'
            label='โดยหยุดมาแล้ว วันละประมาณ (มวน)'
            placeholder='โดยหยุดมาแล้ว วันละประมาณ (มวน)'
            onChange={(e,{value})=>{
                console.log(value)
                this.setState({stopAmount: value})
            }}
            />

            <Form.Field
            control={Select}
            required
            clearable
            label='ประเภทของบุหรี่'
            placeholder='ประเภทของบุหรี่'
            options={[
              { key: 1, text: "มวนเอง", value: 1 },
              { key: 2, text: "บุหรี่ซอง", value: 2 },
              { key: 3, text: "อื่นๆ", value: 3 }
            ]}
            onChange={(e,{value})=>{
                console.log(value)
                this.setState({smokingType: value})
            }}
            
            />
            
          </Form.Group>


        
          
                <Form.Field
            control={Select}
            required
            clearable
            label='บุคคลใกล้ชิดที่สูบบุหรี่'
            placeholder='ประเภทของบุหรี่'
            options={[
              { key: 1, text: "ไม่มี", value: 1 },
              { key: 2, text: "มี", value: 2 }
            ]}
            onChange={(e,{value})=>{
                console.log(value)
                this.setState({smokingType: value})
            }}
            
            />


        </Form>
      </div>
    );
  }
}
