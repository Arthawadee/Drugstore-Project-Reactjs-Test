import React, { Component } from "react";
import { Form, Radio, Select, Input } from "semantic-ui-react";
import { inject, observer } from "mobx-react";
// import SmokingCessationPlan from './SmokingCessationPlan';
@inject("store")
@observer
class SmokingCessationForm extends Component {
  
  render() {
    return (
      <div className="SmokingCessationFormPage">
        <h2 className="ui icon aligned header">แบบคัดกรองการสูบบุหรี่</h2>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              control={Select}
              required
              clearable
              label="1.ในอดีตเคยพยายามเลิกสูบบุหรี่หรือไม่"
              options={[
                { key: 1, text: "ไม่เคย", value: 1, score: 1 },
                { key: 2, text: "เคยเลิก", value: 2, score: 2 },
                { key: 3, text: "เลิกได้นานสุด", value: 3, score: 3 }
              ]}
              placeholder="ในอดีตเคยพยายามเลิกสูบบุหรี่หรือไม่"
              onChange={(e, { value }) => {
                this.props.store.smoking.updateSmokingCessationForm(
                  value,
                  "value1"
                );
              }}
            />
            <Form.Field
              control={Input}
              // disabled={this.state.disable1_1}
              label="จำนวน"
              type="number"
              onChange={(e, { value }) => {
                console.log(value + " ครั้ง");
              }}
            />

            <Form.Group inline>
              <Form.Field
                control={Radio}
                label="วัน"
                value="1"
                // checked={value === "1"}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label="เดือน"
                value="2"
                // checked={value === "2"}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label="ปี"
                value="3"
                // checked={value === "3"}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field
              control={Select}
              required
              multiple
              clearable
              label="2.เคยเลิิกโดยวิธี (ตอบได้หลายข้อ)"
              options={[
                { key: 1, text: "หักดิบ", value: 1 },
                { key: 2, text: "ค่อยๆลด", value: 2 },
                { key: 3, text: "ใช้ยา", value: 3 }
              ]}
              placeholder="เคยเลิิกโดยวิธี"
              onChange={(e, { value }) => {
                this.props.store.smoking.updateSmokingCessationForm(
                  value,
                  "value2"
                );
              }}
            />
            <Form.Field
              disabled={
                this.props.store.smoking.screening.disable2_1
              }
              label="ใช้ยา"
              control={Select}
              required
              multiple
              clearable
              value={this.props.store.smoking.screening.value2Select}
              options={[
                { key: 1, text: "Nicotine", value: 1 },
                { key: 2, text: "Nicotin patch", value: 2 },
                { key: 3, text: "Nortripyline", value: 3 },
                { key: 4, text: "Bupropion", value: 4 },
                { key: 5, text: "Varenicline", value: 5 },
                {
                  key: 6,
                  text: "สมุนไพรชงหญ้าดอกขาว",
                  value: "สมุนไพรชงหญ้าดอกขาว"
                },
                { key: 7, text: "อื่นๆ", value: 6 }
              ]}
              placeholder="ใช้ยา"
              onChange={(e, { value }) => {
                this.props.store.smoking.updateSmokingCessationForm(
                  value,
                  "value2Select"
                );
              }}
            />

            <Form.Field
              control={Input}
              disabled={
                this.props.store.smoking.screening.disable2_2
              }
              value={this.props.store.smoking.screening.value2Other}
              label="ระบุ"
              placeholder="ระบุ..."
              onChange={(e, { value }) => {
                this.props.store.smoking.updateSmokingCessationForm(
                  value,
                  "value2Other"
                );
              }}
            />
          </Form.Group>

          <Form.Field
            control={Select}
            required
            clearable
            label="3.ปัญหาและอุปสรรคในการเลิกครั้งที่ผ่านมา / เหตุผลที่ทำให้กลับมาสูบใหม่"
            options={[
              { key: 1, text: "อาการหงุดหงิดจากการใช้นิโคติน", value: 1 },
              {
                key: 2,
                text: "ถูกกระตุ้นโดยผู้คนรอบข้างหรือสภาพแวดล้อมเดิมๆ",
                value: 2
              },
              { key: 3, text: "ภาวะเครียด", value: 3 },
              { key: 4, text: "ยังมีความอยากบุหรี่", value: 4 },
              { key: 5, text: "อื่นๆ", value: 5 },
              { key: 6, text: "ไม่มีข้อมูล", value: 6 }
            ]}
            placeholder="ปัญหาและอุปสรรคในการเลิกครั้งที่ผ่านมา / เหตุผลที่ทำให้กลับมาสูบใหม่"
            onChange={(e, { value }) => {
              this.props.store.smoking.updateSmokingCessationForm(
                value,
                "value3"
              );
            }}
          />

          <Form.Field
            control={Select}
            required
            clearable
            label="4.ครั้งนี้มีความตั้งใจเลิกบุหรี่ี่ระดับ"
            options={[
              {
                key: 1,
                text: "ยังไม่สนใจที่จะเลิก (Pre-contemplation)",
                value: 1
              },
              {
                key: 2,
                text:
                  "คิดจะเลิกสูบบุหรี่/ยาสูบ แต่ยังไม่มีแผนชัดเจน (Contemplation)",
                value: 2
              },
              {
                key: 3,
                text:
                  "กำลังวางแผนเลิกบุหรี่/ยาสูบภายใน 1 เดือน หรือกำลังเริ่มเข้าสู่กระบวนการเลิกบุหรี่ (Preparation)",
                value: 3
              },
              {
                key: 4,
                text: "กำลังสูบบุหรี่/ยาสูบมาได้ไม่เกิน 6 เดือน (Action)",
                value: 4
              },
              {
                key: 5,
                text:
                  "เลิกบุหรี่/ยาสูบมาได้เกิน 6 เดือน แต่ไม่เกิน 1 ปี (Maintenance)",
                value: 5
              },
              { key: 6, text: "ไม่มีข้อมูล", value: 6 }
            ]}
            placeholder="ครั้งนี้มีความตั้งใจเลิกบุหรี่ี่ระดับ"
            onChange={(e, { value }) => {
              this.props.store.smoking.updateSmokingCessationForm(
                value,
                "value4"
              );
            }}
          />

          <Form.Field
            control={Select}
            required
            clearable
            label="5.คุณสูบบุหรี่มวนแรกหลังตื่นนอนตอนเช้าเมื่อใด"
            options={[
              {
                key: 1,
                text:
                  "สูบบุหรี่หลังตื่นนอน หรือภายในเวลาไม่เกิน 5 นาที (3 คะแนน)",
                value: 1
              },
              {
                key: 2,
                text:
                  "สูบบุหรี่หลังตื่นนอน 5 นาที แต่ไม่เกินครึ่งชั่วโมง (2 คะแนน)",
                value: 2
              },
              {
                key: 3,
                text:
                  "สูบบุหรี่หลังตื่นนอนเกินครึ่งชั่วโมง แต่ไม่เกิน 1 ชั่วโมง (1 คะแนน)",
                value: 3
              },
              {
                key: 4,
                text: "สูบบุหรี่หลังตื่นนอนเกิน 1 ชั่วโมง (0 คะแนน)",
                value: 4
              },
              {
                key: 5,
                text:
                  "เลิกบุหรี่/ยาสูบมาได้เกิน 6 เดือน แต่ไม่เกิน 1 ปี (Maintenance)",
                value: 5
              },
              { key: 6, text: "ไม่มีข้อมูล", value: 6 }
            ]}
            placeholder="คุณสูบบุหรี่มวนแรกหลังตื่นนอนตอนเช้าเมื่อใด"
            onChange={(e, { value }) => {
              this.props.store.smoking.updateSmokingCessationForm(
                value,
                "value5"
              );
            }}
          />

          <Form.Field
            control={Select}
            required
            clearable
            label="6.คุณรู้สึกอย่างไร หากไม่สามารถสูบบุหรี่ได้ในที่ที่ห้ามสูบบุหรี่เป็นระยะเวลานาน เช่น ในห้องสมุด หรือ โรงภาพยนตร์"
            options={[
              {
                key: 1,
                text: "หงุดหงิด อึดอัด (1 คะแนน)",
                value: 1
              },
              {
                key: 2,
                text: "เฉยๆ",
                value: 2
              }
            ]}
            placeholder="คุณรู้สึกอย่างไร หากไม่สามารถสูบบุหรี่ได้ในที่ที่ห้ามสูบบุหรี่เป็นระยะเวลานาน เช่น ในห้องสมุด หรือ โรงภาพยนตร์"
            onChange={(e, { value }) => {
              this.props.store.smoking.updateSmokingCessationForm(
                value,
                "value6"
              );
            }}
          />

          <Form.Field
            control={Select}
            required
            clearable
            label="7.ในแต่ละวัน บุหรี่มวนใดที่คุณคิดว่าไม่ได้สูบแล้วจะหงุดหงิดมากที่สุด"
            options={[
              {
                key: 1,
                text: "มวนแรกที่สูบ ในตอนเช้า (1 คะแนน)",
                value: 1
              },
              {
                key: 2,
                text: "มวนไหนๆก็เหมือนกัน",
                value: 2
              }
            ]}
            placeholder="ในแต่ละวัน บุหรี่มวนใดที่คุณคิดว่าไม่ได้สูบแล้วจะหงุดหงิดมากที่สุด"
            onChange={(e, { value }) => {
              this.props.store.smoking.updateSmokingCessationForm(
                value,
                "value7"
              );
            }}
          />

          <Form.Field
            control={Select}
            required
            clearable
            label="8.โดยปกติท่านสูบบุหรี่/ยาสูบวันละกี่มวน"
            options={[
              {
                key: 1,
                text: "มากกว่า 31 มวนต่อวัน (3 คะแนน)",
                value: 1
              },
              {
                key: 2,
                text: "21-30 มวนต่อวัน (2 คะแนน)",
                value: 2
              },
              {
                key: 3,
                text: "11-20 มวนต่อวัน ( คะแนน)",
                value: 3
              },
              {
                key: 4,
                text: "ไม่เกิน 10 มวนต่อวัน",
                value: 4
              }
            ]}
            placeholder="โดยปกติท่านสูบบุหรี่/ยาสูบวันละกี่มวน"
            onChange={(e, { value }) => {
              this.props.store.smoking.updateSmokingCessationForm(
                value,
                "value8"
              );
            }}
          />

          <Form.Field
            control={Select}
            required
            clearable
            label="9.โดยเฉลี่ยคุณสูบบุหรี่มากที่สุดในช่วง 2-3 ชั่วโมงแรกหลังตื่นนอนมากกว่าช่วงอื่นๆของวันใช่หรือไม่"
            options={[
              {
                key: 1,
                text: "ใช่ (1 คะแนน)",
                value: 1
              },
              {
                key: 2,
                text: "ไม่ใช่ (0 คะแนน)",
                value: 2
              }
            ]}
            placeholder="โดยเฉลี่ยคุณสูบบุหรี่มากที่สุดในช่วง 2-3 ชั่วโมงแรกหลังตื่นนอนมากกว่าช่วงอื่นๆของวันใช่หรือไม่"
            onChange={(e, { value }) => {
              this.props.store.smoking.updateSmokingCessationForm(
                value,
                "value9"
              );
            }}
          />

          <Form.Field
            control={Select}
            required
            clearable
            label="10.ขณะที่คุณป่วยต้องนอนอยู่บนเตียงเกือบตลอดเวลา คุณต้องการสูบบุหรี่หรือไม่"
            options={[
              {
                key: 1,
                text: "ต้องการ (1 คะแนน)",
                value: 1
              },
              {
                key: 2,
                text: "ไม่ต้องการ (0 คะแนน)",
                value: 2
              }
            ]}
            placeholder="ขณะที่คุณป่วยต้องนอนอยู่บนเตียงเกือบตลอดเวลา คุณต้องการสูบบุหรี่หรือไม่"
            onChange={(e, { value }) => {
              this.props.store.smoking.updateSmokingCessationForm(
                value,
                "value10"
              );
            }}
          />

          <Form.Field
            control={Select}
            required
            clearable
            label="11.ประเมินภาวะติดนิโคติน โดย Fagerstrom test for Nicotine Dependence"
            options={[
              {
                key: 1,
                text: "7-10 คะแนน ติดนิโคตินสูง",
                value: 1
              },
              {
                key: 2,
                text: "4-6 คะแนน ติดนิโคตินปานกลาง",
                value: 2
              },
              {
                key: 3,
                text: "น้อยกว่า 4 คะแนน ติดนิโคตินต่ำ",
                value: 3
              }
            ]}
            placeholder="ประเมินภาวะติดนิโคติน โดย Fagerstrom test for Nicotine Dependence"
            onChange={(e, { value }) => {
              this.props.store.smoking.updateSmokingCessationForm(
                value,
                "value11"
              );
            }}
          />

          <Form.Field
            control={Select}
            required
            clearable
            label="12.ประเมินภาวะติดด้านความเคยชิน/ด้านสังคม"
            options={[
              {
                key: 1,
                text: "คุณสูบบุหรี่หลังอาหาร",
                value: 1
              },
              {
                key: 2,
                text: "คุณสูบบุหรี่พร้อมดื่มกาแฟหรือหลังดื่มกาแฟ",
                value: 2
              },
              {
                key: 3,
                text: "คุณสูบบุหรี่เวลาดื่มเหล้า",
                value: 3
              }
            ]}
            placeholder="ประเมินภาวะติดด้านความเคยชิน/ด้านสังคม"
            onChange={(e, { value }) => {
              this.props.store.smoking.updateSmokingCessationForm(
                value,
                "value12"
              );
            }}
          />

          <Form.Field
            control={Select}
            required
            clearable
            label="13.ประเมินภาวะติดด้านจิตใจ"
            options={[
              {
                key: 1,
                text: "คุณสูบบุหรี่เวลาว่าง",
                value: 1
              },
              {
                key: 2,
                text: "คุณสูบบุหรี่ขณะทำงาน",
                value: 2
              },
              {
                key: 3,
                text: "คุณสูบบุหรี่เวลาเครียด",
                value: 3
              }
            ]}
            placeholder="ประเมินภาวะติดด้านจิตใจ"
            onChange={(e, { value }) => {
              this.props.store.smoking.updateSmokingCessationForm(
                value,
                "value13"
              );
            }}
          />
          <Form.Group widths="equal">
            <Form.Field
              control={Select}
              required
              multiple
              clearable
              label="14.แรงจูงใจในการเลิกบุหรี่"
              options={[
                {
                  key: 1,
                  text: "ครอบครัว",
                  value: 1
                },
                {
                  key: 2,
                  text: "สุขภาพ",
                  value: 2
                },
                {
                  key: 3,
                  text: "รู้สึกว่าสังคมไม่ยอมรับ",
                  value: 3
                },
                {
                  key: 4,
                  text: "เศรษฐกิจ",
                  value: 4
                },
                {
                  key: 5,
                  text: "อื่นๆ",
                  value: 5
                }
              ]}
              placeholder="แรงจูงใจในการเลิกบุหรี่"
              onChange={(e, { value }) => {
                this.props.store.smoking.updateSmokingCessationForm(
                  value,
                  "value14"
                );
              }}
            />
            <Form.Field
              control={Input}
              disabled={this.props.store.smoking.screening.disable14}
              value={this.props.store.smoking.screening.value14Other}
              label="ระบุ"
              placeholder="ระบุ..."
              onChange={(e, { value }) => {
                this.props.store.smoking.updateSmokingCessationForm(
                  value,
                  "value14Other"
                );
              }}
            />
          </Form.Group>
        </Form>

        {/* <Button
            circular
            content="เพิ่ม"
            color="blue"
            onClick={this.setSmokingCessationForm}
          /> */}

        {/* <SmokingCessationPlan/> */}
      </div>
    );
  }
}
export default SmokingCessationForm;
