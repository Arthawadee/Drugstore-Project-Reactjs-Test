import { extendObservable, action } from "mobx";
import DiseaseDataStore from './disease'
import PatientInfoStore from './PatientInfo'
import SmokingStore from './smoking'
import StrokeStore from './stroke'
import COPDStore from './COPD'
import AsthmaStore from './asthma'
class Store {
  constructor() {
    this.disease = new DiseaseDataStore(this)
    this.patientInfo = new PatientInfoStore(this)
    this.smoking = new SmokingStore(this)
    this.stroke = new StrokeStore(this)
    this.copd = new COPDStore(this)
    this.asthma = new AsthmaStore(this)
    extendObservable(this, {
      // count: 199,
      // type: 0,
      // form: {
      //   amount: 2,
      //   value1: "",
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
      // }
      // ,
      RecommendMedicine:
        [
          {
            image: "https://5.imimg.com/data5/TQ/RH/MY-18174683/pradaxa-debigatran-capsule-250x250.jpg",
            header: 'Pradaxa',
            categories:"Stroke",
            description: 'Pradaxa® (dabigatran etexilate mesylate) capsules is a prescription blood thinner medicine that lowers the chance of blood clots forming in your body.',
            recommend: 'ละลายในน้ำเย็น 180 – 250 mL วันละ 1 ซอง พร้อมมื้ออาหาร เมื่อทานติดต่อกันทุกวันเพียง 4-6 สัปดาห์ พบว่า มีสิวอักเสบลดลง ผิวขาวและเรียบเนียนขึ้นกว่า 80% หากรับประทานติดต่อกัน 24 สัปดาห์ จะช่วยบำรุงสุขภาพข้อต่อในผู้สูงอายุให้ยืดหยุ่นแข็งแรง',
            caution: ['ที่พบได้ทั่วไป เช่น ภาวะเลือดออก และเกี่ยวกับทางเดินอาหาร', 'มีปฏิกริยาระหว่างยากับยาต้านการแข็งตัวของเลือดตัวอื่น (ออกฤทธิ์มากไป) และยาที่เกี่ยวกับ P-glycoprotein (จะขับยาเราออกจากเซลล์ทำให้ไปออกฤทธิ์ไม่ได้)'],
            sideEffect: ['severe agitation, distress, or restless feeling'
            , 'twitching or uncontrollable movements of your eyes, lips, tongue, face, arms, or legs'
            , 'mask-like appearance of the face, trouble swallowing, problems with speech'
            , 'seizure (convulsions)'
            , 'thoughts about suicide or hurting yourself'
            , 'severe nervous system reaction--very stiff (rigid) muscles, high fever, sweating, confusion, fast or uneven heartbeats, tremors, feeling like you might pass out'
            , 'low blood cell counts--sudden weakness or ill feeling, fever, chills, sore throat, swollen gums, painful mouth sores, red or swollen gums, skin sores, cold or flu symptoms, cough, trouble breathing or high blood sugar--increased thirst, increased urination, hunger, dry mouth, fruity breath odor, drowsiness, dry skin, weight loss.'],
            contain: '10 เม็ด/แผง',
            price: 1685.25
          },
          {
            image: "https://pics.drugstore.com/prodimg/369649/900.jpg",
            header: 'B-Aspirin',
            categories:"Stroke",
            description: 'ยาละลายลิ่มเลือด 81มก. ขนาดบรรจุ 10เม็ด/แผง ตัวยา Aspirin ป้องกันการจับตัวของเกล็ดเลือด เพื่อลดภาวะอุดตันของหลอดเลือดที่ไปเลี้ยงสมองและหัวใจ',
            recommend: 'ละลายในน้ำเย็น 180 – 250 mL วันละ 1 ซอง พร้อมมื้ออาหาร เมื่อทานติดต่อกันทุกวันเพียง 4-6 สัปดาห์ พบว่า มีสิวอักเสบลดลง ผิวขาวและเรียบเนียนขึ้นกว่า 80% หากรับประทานติดต่อกัน 24 สัปดาห์ จะช่วยบำรุงสุขภาพข้อต่อในผู้สูงอายุให้ยืดหยุ่นแข็งแรง',
            caution: ['ที่พบได้ทั่วไป เช่น ภาวะเลือดออก และเกี่ยวกับทางเดินอาหาร', 'มีปฏิกริยาระหว่างยากับยาต้านการแข็งตัวของเลือดตัวอื่น (ออกฤทธิ์มากไป) และยาที่เกี่ยวกับ P-glycoprotein (จะขับยาเราออกจากเซลล์ทำให้ไปออกฤทธิ์ไม่ได้)'],
            sideEffect: ['severe agitation, distress, or restless feeling'
            , 'twitching or uncontrollable movements of your eyes, lips, tongue, face, arms, or legs'
            , 'mask-like appearance of the face, trouble swallowing, problems with speech'
            , 'seizure (convulsions)'
            , 'thoughts about suicide or hurting yourself'
            , 'severe nervous system reaction--very stiff (rigid) muscles, high fever, sweating, confusion, fast or uneven heartbeats, tremors, feeling like you might pass out'
            , 'low blood cell counts--sudden weakness or ill feeling, fever, chills, sore throat, swollen gums, painful mouth sores, red or swollen gums, skin sores, cold or flu symptoms, cough, trouble breathing or high blood sugar--increased thirst, increased urination, hunger, dry mouth, fruity breath odor, drowsiness, dry skin, weight loss.'],
            contain: '10 เม็ด/แผง',
            price: 100
          },
          {
            image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
            header: 3,
            categories:"Friend",
            description: 'Daniel is a comedian living in Nashville.',
            recommend: 'ละลายในน้ำเย็น 180 – 250 mL วันละ 1 ซอง พร้อมมื้ออาหาร เมื่อทานติดต่อกันทุกวันเพียง 4-6 สัปดาห์ พบว่า มีสิวอักเสบลดลง ผิวขาวและเรียบเนียนขึ้นกว่า 80% หากรับประทานติดต่อกัน 24 สัปดาห์ จะช่วยบำรุงสุขภาพข้อต่อในผู้สูงอายุให้ยืดหยุ่นแข็งแรง',
            caution: ['ที่พบได้ทั่วไป เช่น ภาวะเลือดออก และเกี่ยวกับทางเดินอาหาร', 'มีปฏิกริยาระหว่างยากับยาต้านการแข็งตัวของเลือดตัวอื่น (ออกฤทธิ์มากไป) และยาที่เกี่ยวกับ P-glycoprotein (จะขับยาเราออกจากเซลล์ทำให้ไปออกฤทธิ์ไม่ได้)'],
            sideEffect: ['severe agitation, distress, or restless feeling'
            , 'twitching or uncontrollable movements of your eyes, lips, tongue, face, arms, or legs'
            , 'mask-like appearance of the face, trouble swallowing, problems with speech'
            , 'seizure (convulsions)'
            , 'thoughts about suicide or hurting yourself'
            , 'severe nervous system reaction--very stiff (rigid) muscles, high fever, sweating, confusion, fast or uneven heartbeats, tremors, feeling like you might pass out'
            , 'low blood cell counts--sudden weakness or ill feeling, fever, chills, sore throat, swollen gums, painful mouth sores, red or swollen gums, skin sores, cold or flu symptoms, cough, trouble breathing or high blood sugar--increased thirst, increased urination, hunger, dry mouth, fruity breath odor, drowsiness, dry skin, weight loss.'],
            contain: '10 เม็ด/แผง',
            price: 30
          },
          {
            image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
            header: 3,
            categories:"Friend",
            description: 'Daniel is a comedian living in Nashville.',
            recommend: 'ละลายในน้ำเย็น 180 – 250 mL วันละ 1 ซอง พร้อมมื้ออาหาร เมื่อทานติดต่อกันทุกวันเพียง 4-6 สัปดาห์ พบว่า มีสิวอักเสบลดลง ผิวขาวและเรียบเนียนขึ้นกว่า 80% หากรับประทานติดต่อกัน 24 สัปดาห์ จะช่วยบำรุงสุขภาพข้อต่อในผู้สูงอายุให้ยืดหยุ่นแข็งแรง',
            caution: ['ที่พบได้ทั่วไป เช่น ภาวะเลือดออก และเกี่ยวกับทางเดินอาหาร', 'มีปฏิกริยาระหว่างยากับยาต้านการแข็งตัวของเลือดตัวอื่น (ออกฤทธิ์มากไป) และยาที่เกี่ยวกับ P-glycoprotein (จะขับยาเราออกจากเซลล์ทำให้ไปออกฤทธิ์ไม่ได้)'],
            sideEffect: ['severe agitation, distress, or restless feeling'
            , 'twitching or uncontrollable movements of your eyes, lips, tongue, face, arms, or legs'
            , 'mask-like appearance of the face, trouble swallowing, problems with speech'
            , 'seizure (convulsions)'
            , 'thoughts about suicide or hurting yourself'
            , 'severe nervous system reaction--very stiff (rigid) muscles, high fever, sweating, confusion, fast or uneven heartbeats, tremors, feeling like you might pass out'
            , 'low blood cell counts--sudden weakness or ill feeling, fever, chills, sore throat, swollen gums, painful mouth sores, red or swollen gums, skin sores, cold or flu symptoms, cough, trouble breathing or high blood sugar--increased thirst, increased urination, hunger, dry mouth, fruity breath odor, drowsiness, dry skin, weight loss.'],
            contain: '10 เม็ด/แผง',
            price: 30
          },
          {
            image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
            header: 3,
            categories:"Friend",
            description: 'Daniel is a comedian living in Nashville.',
            recommend: 'ละลายในน้ำเย็น 180 – 250 mL วันละ 1 ซอง พร้อมมื้ออาหาร เมื่อทานติดต่อกันทุกวันเพียง 4-6 สัปดาห์ พบว่า มีสิวอักเสบลดลง ผิวขาวและเรียบเนียนขึ้นกว่า 80% หากรับประทานติดต่อกัน 24 สัปดาห์ จะช่วยบำรุงสุขภาพข้อต่อในผู้สูงอายุให้ยืดหยุ่นแข็งแรง',
            caution: ['ที่พบได้ทั่วไป เช่น ภาวะเลือดออก และเกี่ยวกับทางเดินอาหาร', 'มีปฏิกริยาระหว่างยากับยาต้านการแข็งตัวของเลือดตัวอื่น (ออกฤทธิ์มากไป) และยาที่เกี่ยวกับ P-glycoprotein (จะขับยาเราออกจากเซลล์ทำให้ไปออกฤทธิ์ไม่ได้)'],
            sideEffect: ['severe agitation, distress, or restless feeling'
            , 'twitching or uncontrollable movements of your eyes, lips, tongue, face, arms, or legs'
            , 'mask-like appearance of the face, trouble swallowing, problems with speech'
            , 'seizure (convulsions)'
            , 'thoughts about suicide or hurting yourself'
            , 'severe nervous system reaction--very stiff (rigid) muscles, high fever, sweating, confusion, fast or uneven heartbeats, tremors, feeling like you might pass out'
            , 'low blood cell counts--sudden weakness or ill feeling, fever, chills, sore throat, swollen gums, painful mouth sores, red or swollen gums, skin sores, cold or flu symptoms, cough, trouble breathing or high blood sugar--increased thirst, increased urination, hunger, dry mouth, fruity breath odor, drowsiness, dry skin, weight loss.'],
            contain: '10 เม็ด/แผง',
            price: 30
          },
          {
            image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
            header: 3,
            categories:"Friend",
            description: 'Daniel is a comedian living in Nashville.',
            recommend: 'ละลายในน้ำเย็น 180 – 250 mL วันละ 1 ซอง พร้อมมื้ออาหาร เมื่อทานติดต่อกันทุกวันเพียง 4-6 สัปดาห์ พบว่า มีสิวอักเสบลดลง ผิวขาวและเรียบเนียนขึ้นกว่า 80% หากรับประทานติดต่อกัน 24 สัปดาห์ จะช่วยบำรุงสุขภาพข้อต่อในผู้สูงอายุให้ยืดหยุ่นแข็งแรง',
            caution: ['ที่พบได้ทั่วไป เช่น ภาวะเลือดออก และเกี่ยวกับทางเดินอาหาร', 'มีปฏิกริยาระหว่างยากับยาต้านการแข็งตัวของเลือดตัวอื่น (ออกฤทธิ์มากไป) และยาที่เกี่ยวกับ P-glycoprotein (จะขับยาเราออกจากเซลล์ทำให้ไปออกฤทธิ์ไม่ได้)'],
            sideEffect: ['severe agitation, distress, or restless feeling'
            , 'twitching or uncontrollable movements of your eyes, lips, tongue, face, arms, or legs'
            , 'mask-like appearance of the face, trouble swallowing, problems with speech'
            , 'seizure (convulsions)'
            , 'thoughts about suicide or hurting yourself'
            , 'severe nervous system reaction--very stiff (rigid) muscles, high fever, sweating, confusion, fast or uneven heartbeats, tremors, feeling like you might pass out'
            , 'low blood cell counts--sudden weakness or ill feeling, fever, chills, sore throat, swollen gums, painful mouth sores, red or swollen gums, skin sores, cold or flu symptoms, cough, trouble breathing or high blood sugar--increased thirst, increased urination, hunger, dry mouth, fruity breath odor, drowsiness, dry skin, weight loss.'],
            contain: '10 เม็ด/แผง',
            price: 30
          },
          {
            image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
            header: 3,
            categories:"Friend",
            description: 'Daniel is a comedian living in Nashville.',
            recommend: 'ละลายในน้ำเย็น 180 – 250 mL วันละ 1 ซอง พร้อมมื้ออาหาร เมื่อทานติดต่อกันทุกวันเพียง 4-6 สัปดาห์ พบว่า มีสิวอักเสบลดลง ผิวขาวและเรียบเนียนขึ้นกว่า 80% หากรับประทานติดต่อกัน 24 สัปดาห์ จะช่วยบำรุงสุขภาพข้อต่อในผู้สูงอายุให้ยืดหยุ่นแข็งแรง',
            caution: ['ที่พบได้ทั่วไป เช่น ภาวะเลือดออก และเกี่ยวกับทางเดินอาหาร', 'มีปฏิกริยาระหว่างยากับยาต้านการแข็งตัวของเลือดตัวอื่น (ออกฤทธิ์มากไป) และยาที่เกี่ยวกับ P-glycoprotein (จะขับยาเราออกจากเซลล์ทำให้ไปออกฤทธิ์ไม่ได้)'],
            sideEffect: ['severe agitation, distress, or restless feeling'
            , 'twitching or uncontrollable movements of your eyes, lips, tongue, face, arms, or legs'
            , 'mask-like appearance of the face, trouble swallowing, problems with speech'
            , 'seizure (convulsions)'
            , 'thoughts about suicide or hurting yourself'
            , 'severe nervous system reaction--very stiff (rigid) muscles, high fever, sweating, confusion, fast or uneven heartbeats, tremors, feeling like you might pass out'
            , 'low blood cell counts--sudden weakness or ill feeling, fever, chills, sore throat, swollen gums, painful mouth sores, red or swollen gums, skin sores, cold or flu symptoms, cough, trouble breathing or high blood sugar--increased thirst, increased urination, hunger, dry mouth, fruity breath odor, drowsiness, dry skin, weight loss.'],
            contain: '10 เม็ด/แผง',
            price: 30
          },
          {
            image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
            header: 3,
            categories:"Friend",
            description: 'Daniel is a comedian living in Nashville.',
            recommend: 'ละลายในน้ำเย็น 180 – 250 mL วันละ 1 ซอง พร้อมมื้ออาหาร เมื่อทานติดต่อกันทุกวันเพียง 4-6 สัปดาห์ พบว่า มีสิวอักเสบลดลง ผิวขาวและเรียบเนียนขึ้นกว่า 80% หากรับประทานติดต่อกัน 24 สัปดาห์ จะช่วยบำรุงสุขภาพข้อต่อในผู้สูงอายุให้ยืดหยุ่นแข็งแรง',
            caution: ['ที่พบได้ทั่วไป เช่น ภาวะเลือดออก และเกี่ยวกับทางเดินอาหาร', 'มีปฏิกริยาระหว่างยากับยาต้านการแข็งตัวของเลือดตัวอื่น (ออกฤทธิ์มากไป) และยาที่เกี่ยวกับ P-glycoprotein (จะขับยาเราออกจากเซลล์ทำให้ไปออกฤทธิ์ไม่ได้)'],
            sideEffect: ['severe agitation, distress, or restless feeling'
            , 'twitching or uncontrollable movements of your eyes, lips, tongue, face, arms, or legs'
            , 'mask-like appearance of the face, trouble swallowing, problems with speech'
            , 'seizure (convulsions)'
            , 'thoughts about suicide or hurting yourself'
            , 'severe nervous system reaction--very stiff (rigid) muscles, high fever, sweating, confusion, fast or uneven heartbeats, tremors, feeling like you might pass out'
            , 'low blood cell counts--sudden weakness or ill feeling, fever, chills, sore throat, swollen gums, painful mouth sores, red or swollen gums, skin sores, cold or flu symptoms, cough, trouble breathing or high blood sugar--increased thirst, increased urination, hunger, dry mouth, fruity breath odor, drowsiness, dry skin, weight loss.'],
            contain: '10 เม็ด/แผง',
            price: 30
          },
          {
            image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
            header: 3,
            categories:"Friend",
            description: 'Daniel is a comedian living in Nashville.',
            recommend: 'ละลายในน้ำเย็น 180 – 250 mL วันละ 1 ซอง พร้อมมื้ออาหาร เมื่อทานติดต่อกันทุกวันเพียง 4-6 สัปดาห์ พบว่า มีสิวอักเสบลดลง ผิวขาวและเรียบเนียนขึ้นกว่า 80% หากรับประทานติดต่อกัน 24 สัปดาห์ จะช่วยบำรุงสุขภาพข้อต่อในผู้สูงอายุให้ยืดหยุ่นแข็งแรง',
            caution: ['ที่พบได้ทั่วไป เช่น ภาวะเลือดออก และเกี่ยวกับทางเดินอาหาร', 'มีปฏิกริยาระหว่างยากับยาต้านการแข็งตัวของเลือดตัวอื่น (ออกฤทธิ์มากไป) และยาที่เกี่ยวกับ P-glycoprotein (จะขับยาเราออกจากเซลล์ทำให้ไปออกฤทธิ์ไม่ได้)'],
            sideEffect: ['severe agitation, distress, or restless feeling'
            , 'twitching or uncontrollable movements of your eyes, lips, tongue, face, arms, or legs'
            , 'mask-like appearance of the face, trouble swallowing, problems with speech'
            , 'seizure (convulsions)'
            , 'thoughts about suicide or hurting yourself'
            , 'severe nervous system reaction--very stiff (rigid) muscles, high fever, sweating, confusion, fast or uneven heartbeats, tremors, feeling like you might pass out'
            , 'low blood cell counts--sudden weakness or ill feeling, fever, chills, sore throat, swollen gums, painful mouth sores, red or swollen gums, skin sores, cold or flu symptoms, cough, trouble breathing or high blood sugar--increased thirst, increased urination, hunger, dry mouth, fruity breath odor, drowsiness, dry skin, weight loss.'],
            contain: '10 เม็ด/แผง',
            price: 30
          },
          {
            image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
            header: 3,
            categories:"Friend",
            description: 'Daniel is a comedian living in Nashville.',
            recommend: 'ละลายในน้ำเย็น 180 – 250 mL วันละ 1 ซอง พร้อมมื้ออาหาร เมื่อทานติดต่อกันทุกวันเพียง 4-6 สัปดาห์ พบว่า มีสิวอักเสบลดลง ผิวขาวและเรียบเนียนขึ้นกว่า 80% หากรับประทานติดต่อกัน 24 สัปดาห์ จะช่วยบำรุงสุขภาพข้อต่อในผู้สูงอายุให้ยืดหยุ่นแข็งแรง',
            caution: ['ที่พบได้ทั่วไป เช่น ภาวะเลือดออก และเกี่ยวกับทางเดินอาหาร', 'มีปฏิกริยาระหว่างยากับยาต้านการแข็งตัวของเลือดตัวอื่น (ออกฤทธิ์มากไป) และยาที่เกี่ยวกับ P-glycoprotein (จะขับยาเราออกจากเซลล์ทำให้ไปออกฤทธิ์ไม่ได้)'],
            sideEffect: ['severe agitation, distress, or restless feeling'
            , 'twitching or uncontrollable movements of your eyes, lips, tongue, face, arms, or legs'
            , 'mask-like appearance of the face, trouble swallowing, problems with speech'
            , 'seizure (convulsions)'
            , 'thoughts about suicide or hurting yourself'
            , 'severe nervous system reaction--very stiff (rigid) muscles, high fever, sweating, confusion, fast or uneven heartbeats, tremors, feeling like you might pass out'
            , 'low blood cell counts--sudden weakness or ill feeling, fever, chills, sore throat, swollen gums, painful mouth sores, red or swollen gums, skin sores, cold or flu symptoms, cough, trouble breathing or high blood sugar--increased thirst, increased urination, hunger, dry mouth, fruity breath odor, drowsiness, dry skin, weight loss.'],
            contain: '10 เม็ด/แผง',
            price: 30
          },
          {
            image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
            header: 3,
            categories:"Friend",
            description: 'Daniel is a comedian living in Nashville.',
            recommend: 'ละลายในน้ำเย็น 180 – 250 mL วันละ 1 ซอง พร้อมมื้ออาหาร เมื่อทานติดต่อกันทุกวันเพียง 4-6 สัปดาห์ พบว่า มีสิวอักเสบลดลง ผิวขาวและเรียบเนียนขึ้นกว่า 80% หากรับประทานติดต่อกัน 24 สัปดาห์ จะช่วยบำรุงสุขภาพข้อต่อในผู้สูงอายุให้ยืดหยุ่นแข็งแรง',
            caution: ['ที่พบได้ทั่วไป เช่น ภาวะเลือดออก และเกี่ยวกับทางเดินอาหาร', 'มีปฏิกริยาระหว่างยากับยาต้านการแข็งตัวของเลือดตัวอื่น (ออกฤทธิ์มากไป) และยาที่เกี่ยวกับ P-glycoprotein (จะขับยาเราออกจากเซลล์ทำให้ไปออกฤทธิ์ไม่ได้)'],
            sideEffect: ['severe agitation, distress, or restless feeling'
            , 'twitching or uncontrollable movements of your eyes, lips, tongue, face, arms, or legs'
            , 'mask-like appearance of the face, trouble swallowing, problems with speech'
            , 'seizure (convulsions)'
            , 'thoughts about suicide or hurting yourself'
            , 'severe nervous system reaction--very stiff (rigid) muscles, high fever, sweating, confusion, fast or uneven heartbeats, tremors, feeling like you might pass out'
            , 'low blood cell counts--sudden weakness or ill feeling, fever, chills, sore throat, swollen gums, painful mouth sores, red or swollen gums, skin sores, cold or flu symptoms, cough, trouble breathing or high blood sugar--increased thirst, increased urination, hunger, dry mouth, fruity breath odor, drowsiness, dry skin, weight loss.'],
            contain: '10 เม็ด/แผง',
            price: 30
          },
          {
            image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
            header: 3,
            categories:"Friend",
            description: 'Daniel is a comedian living in Nashville.',
            recommend: 'ละลายในน้ำเย็น 180 – 250 mL วันละ 1 ซอง พร้อมมื้ออาหาร เมื่อทานติดต่อกันทุกวันเพียง 4-6 สัปดาห์ พบว่า มีสิวอักเสบลดลง ผิวขาวและเรียบเนียนขึ้นกว่า 80% หากรับประทานติดต่อกัน 24 สัปดาห์ จะช่วยบำรุงสุขภาพข้อต่อในผู้สูงอายุให้ยืดหยุ่นแข็งแรง',
            caution: ['ที่พบได้ทั่วไป เช่น ภาวะเลือดออก และเกี่ยวกับทางเดินอาหาร', 'มีปฏิกริยาระหว่างยากับยาต้านการแข็งตัวของเลือดตัวอื่น (ออกฤทธิ์มากไป) และยาที่เกี่ยวกับ P-glycoprotein (จะขับยาเราออกจากเซลล์ทำให้ไปออกฤทธิ์ไม่ได้)'],
            sideEffect: ['severe agitation, distress, or restless feeling'
            , 'twitching or uncontrollable movements of your eyes, lips, tongue, face, arms, or legs'
            , 'mask-like appearance of the face, trouble swallowing, problems with speech'
            , 'seizure (convulsions)'
            , 'thoughts about suicide or hurting yourself'
            , 'severe nervous system reaction--very stiff (rigid) muscles, high fever, sweating, confusion, fast or uneven heartbeats, tremors, feeling like you might pass out'
            , 'low blood cell counts--sudden weakness or ill feeling, fever, chills, sore throat, swollen gums, painful mouth sores, red or swollen gums, skin sores, cold or flu symptoms, cough, trouble breathing or high blood sugar--increased thirst, increased urination, hunger, dry mouth, fruity breath odor, drowsiness, dry skin, weight loss.'],
            contain: '10 เม็ด/แผง',
            price: 30
          },
          {
            image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
            header: 3,
            categories:"Friend",
            description: 'Daniel is a comedian living in Nashville.',
            recommend: 'ละลายในน้ำเย็น 180 – 250 mL วันละ 1 ซอง พร้อมมื้ออาหาร เมื่อทานติดต่อกันทุกวันเพียง 4-6 สัปดาห์ พบว่า มีสิวอักเสบลดลง ผิวขาวและเรียบเนียนขึ้นกว่า 80% หากรับประทานติดต่อกัน 24 สัปดาห์ จะช่วยบำรุงสุขภาพข้อต่อในผู้สูงอายุให้ยืดหยุ่นแข็งแรง',
            caution: ['ที่พบได้ทั่วไป เช่น ภาวะเลือดออก และเกี่ยวกับทางเดินอาหาร', 'มีปฏิกริยาระหว่างยากับยาต้านการแข็งตัวของเลือดตัวอื่น (ออกฤทธิ์มากไป) และยาที่เกี่ยวกับ P-glycoprotein (จะขับยาเราออกจากเซลล์ทำให้ไปออกฤทธิ์ไม่ได้)'],
            sideEffect: ['severe agitation, distress, or restless feeling'
            , 'twitching or uncontrollable movements of your eyes, lips, tongue, face, arms, or legs'
            , 'mask-like appearance of the face, trouble swallowing, problems with speech'
            , 'seizure (convulsions)'
            , 'thoughts about suicide or hurting yourself'
            , 'severe nervous system reaction--very stiff (rigid) muscles, high fever, sweating, confusion, fast or uneven heartbeats, tremors, feeling like you might pass out'
            , 'low blood cell counts--sudden weakness or ill feeling, fever, chills, sore throat, swollen gums, painful mouth sores, red or swollen gums, skin sores, cold or flu symptoms, cough, trouble breathing or high blood sugar--increased thirst, increased urination, hunger, dry mouth, fruity breath odor, drowsiness, dry skin, weight loss.'],
            contain: '10 เม็ด/แผง',
            price: 30
          }
        ]
      
    });
  }

  // @action
  // increment() {
  //   this.count++;
  // }

  // @action
  // updateItem(value, type) {
  //   // this.count = value;
  //   console.log(value, type);
  //   switch (type) {
  //     case "follow":
  //       this.form.value1 = value;
  //       break;
  //   }
  // }


}
export default Store;
