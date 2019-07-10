import React, { Component } from 'react';
import { Header, Icon, Form, Select, Radio, Image } from "semantic-ui-react";

export default class COPDScreeningForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value1: '',
          value2: '',
          value3: '',
          value4: '',
          value5: ''
        };
      }
    
      shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        // console.log(nextProps)
        console.log(nextState);
        return true;
      }
    
    render() {
        return (
            <div className='COPDScreeningForm'>
          <Form>
            <Form.Field
              label="1.อายุ"
              control={Select}
              required
              clearable
              options={[
                { key: 1, text: "<= 49 ปี (0)", value: 1 },
                { key: 2, text: "50-59 ปี (1)", value: 2 },
                { key: 3, text: ">= 60 ปี (0)", value: 3 }
              ]}
              placeholder="อายุ"
              onChange={(e, { value }) => {
                console.log("1.: " + value);
                this.setState({ value1: value });
              }}
            />
            <Form.Field
              label="2.ช่วง 4 สัปดาห์ที่ผ่านมา คุณเคยรู้สึกหอบหรือต้องหายใจถี่ๆ บ่อยหรือไม่"
              control={Select}
              required
              clearable
              options={[
                { key: 1, text: "ไม่เคยเลยถึงน้อยมาก (0)", value: 1 },
                { key: 2, text: "บางครั้ง (1)", value: 2 },
                { key: 3, text: "บ่อยครั้ง (2)", value: 3 },
                { key: 4, text: "ตลอดเวลา (2)", value: 4 }
              ]}
              placeholder="ช่วง 4 สัปดาห์ที่ผ่านมา คุณเคยรู้สึกหอบหรือต้องหายใจถี่ๆ บ่อยหรือไม่"
              onChange={(e, { value }) => {
                console.log("2.: " + value);
                this.setState({ value2: value });
              }}
            />
            <Form.Field
              label="3.คุณเคยไอ มีเสมหะ"
              control={Select}
              required
              clearable
              options={[
                { key: 1, text: "ไม่เคยเลย (0)", value: 1 },
                { key: 2, text: "บางเวลาที่อากาศเย็น (0)", value: 2 },
                { key: 3, text: "บางวันใน 1 เดือน (1)", value: 3 },
                { key: 4, text: "หลายวันใน 1 สัปดาห์ (1)", value: 4 },
                { key: 5, text: "ทุกวัน (2)", value: 5 }
              ]}
              placeholder="คุณเคยไอ มีเสมหะ"
              onChange={(e, { value }) => {
                console.log("3.: " + value);
                this.setState({ value3: value });
              }}
            />
            
            <Form.Field
              label="4.ในช่วงเวลา 1 ปีที่ผ่านมาคุณมีความสามารถในการทำกิจกรรมต่างๆลดลงเพราะมีปัญหาเรื่องระบบหายใจ"
              control={Select}
              required
              clearable
              options={[
                { key: 1, text: "ไม่เห็นด้วย/ไม่แน่ใจ (0)", value: 1 },
                { key: 2, text: "เห็นด้วย (1)", value: 2 },
                { key: 3, text: "เห็นด้วยมากที่สุด (2)", value: 3 }
              ]}
              placeholder="ในช่วงเวลา 1 ปีที่ผ่านมาคุณมีความสามารถในการทำกิจกรรมต่างๆลดลงเพราะมีปัญหาเรื่องระบบหายใจ"
              onChange={(e, { value }) => {
                console.log("4.: " + value);
                this.setState({ value4: value });
              }}
            />
            
            <Form.Field
              label="5.ตลอดชีวิต เคยสูบบุหรี่มากกว่า 100 มวน"
              control={Select}
              required
              clearable
              options={[
                { key: 1, text: "ใช่ (1)", value: 1 },
                { key: 2, text: "ไม่ใช่ (0)", value: 2 }
              ]}
              placeholder="ในช่วงเวลา 1 ปีที่ผ่านมาคุณมีความสามารถในการทำกิจกรรมต่างๆลดลงเพราะมีปัญหาเรื่องระบบหายใจ"
              onChange={(e, { value }) => {
                console.log("5.: " + value);
                this.setState({ value5: value });
              }}
            />
          </Form>
            </div>
        )
    }
}
