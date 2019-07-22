import { autorun, observable } from "mobx";
// import { observer } from "mobx-react";
var weight = 60,
  height = 160;
class TodoStore {
  //   @observable todos = ["buy milk", "buy eggs"];
  //   @observable filter = "por";


  
  @observable RecommendMedicine = [
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
  ];

  @observable patient = {
    patientFirstname: "มานะ",
    patientLastname: "มานี",
    id: "1142578459684"
  };

  @observable PatientInfo = {
    weight: weight,
    height: height,
    BMI: weight / ((height * height) / 10000),
    HR: 0,
    RR: 0,
    BP: 0,
    UnderlyDisease: "",
    DrugAllergy: ""
  };

  @observable FamilyInfo = { value1: "", value2: "" };

  @observable HealthBehavior = {
    value1: "",
    value2: "",
    item3: {},
    item4: {},
    value5: "",
    value6: ""
  };

  @observable SmokingCessationForm = {
    item1: "",
    disable1_1: "",
    item2: [],
    disable2_1: "",
    disable2_2: "",
    item2Select: [],
    item2Other: "",
    item3: "",
    item4: "",
    item5: "",
    item6: "",
    item7: "",
    item8: "",
    item9: "",
    item10: "",
    item11: "",
    item12: "",
    item13: "",
    item14: [],
    item14Other: ""
  };

  @observable SmokingFollowUpA5 = {
    amount: 2,
    value1: "",
    disable1: true,
    value1Other: "",
    value3: "",
    disable3: true,
    value3Advice: "",
    value4: "",
    disable4: true,
    value4Advice: "",
    value5: "",
    disable5: true,
    value5Advice: "",
    value6: "",
    disable6: true,
    value6Advice: "",
    followUpDate: ""
  };

  @observable SmokingCessationPlan = { item17: "", stopDate: "" };

  @observable smokingComplete = {
    complete1: false,
    complete2: false,
    complete3: false,
    complete4: false,
    complete5: false,
    complete6: false
  };

  @observable StrokeScreeningForm = {
    item1: "",
    item2: "",
    item3: "",
    item4: "",
    item5: "",
    item6: "",
    item7: "",
    item8: ""
  };

  @observable StrokeEducation = {
    value: "",
    disable: true,
    valueOther: ""
  };

  @observable strokeComplete = {
    complete1: false,
    complete2: false
  };

  @observable LungHealth = {
    value1: "",
    value2: "",
    value3: "",
    value4: "",
    value5: ""
  };

  @observable COPDScreeningForm = {
    value1: "",
    value2: "",
    value3: "",
    value4: "",
    value5: ""
  };

  @observable COPDComplete = {
    complete1: false,
    complete2: false
  };

  @observable SmokingDisable = {
    disable1: false, disable2: true, disable3: true, disable4: true, disable5: true, disable6: false
  }

  @observable StrokeDisable = {
    disable1: false, disable2: true
  }

  setPatientInfo(weight, height, HR, RR, BP, UnderlyDisease, DrugAllergy) {
    this.PatientInfo = {
      weight: weight,
      height: height,
      BMI: weight / ((height * height) / 10000),
      HR: HR,
      RR: RR,
      BP: BP,
      UnderlyDisease: UnderlyDisease,
      DrugAllergy: DrugAllergy
    };
  }

  setFamilyInfo(value1, value2) {
    this.FamilyInfo = { value1: value1, value2: value2 };

    if (value1.length !== 0 && value2.length !== 0) {
      this.smokingComplete.complete1 = true;
      this.SmokingDisable.disable2=false;
      
    } else {
      this.smokingComplete.complete1 = false;
      this.SmokingDisable.disable2= true;
      this.SmokingDisable.disable3= true;
      this.SmokingDisable.disable4= true;
      this.SmokingDisable.disable5= true;
      // this.SmokingDisable.disable6= true;
    }
  
  }

  setHealthBehavior(
    value1,
    value2,
    value3,
    disable3,
    month,
    year,
    value4,
    value4Amount,
    value5,
    value6
  ) {
    this.HealthBehavior = {
      value1: value1,
      value2: value2,
      value3: value3,
      disable3: disable3,
      month: month,
      year: year,
      value4: value4,
      value4Amount: value4Amount,
      value5: value5,
      value6: value6
    };
    if (value1 && value2 && value3 && value4 && value5 && value6) {
      this.smokingComplete.complete2 = true;
      this.SmokingDisable.disable3=false;
    } else {
      this.smokingComplete.complete2 = false;
      this.SmokingDisable.disable1= false;
      this.SmokingDisable.disable3= true;
      this.SmokingDisable.disable4= true;
      this.SmokingDisable.disable5= true;
      // this.SmokingDisable.disable6= true;
    } 
  }

  setSmokingCessationForm(
    item1,
    disable1_1,
    item2,
    disable2_1,
    disable2_2,
    item2Select,
    item2Other,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
    item10,
    item11,
    item12,
    item13,
    item14,
    item14Other
  ) {
    this.SmokingCessationForm = {
      item1: item1,
      disable1_1: disable1_1,
      item2: item2,
      disable2_1: disable2_1,
      disable2_2: disable2_2,
      item2Select: item2Select,
      item2Other: item2Other,
      item3: item3,
      item4: item4,
      item5: item5,
      item6: item6,
      item7: item7,
      item8: item8,
      item9: item9,
      item10: item10,
      item11: item11,
      item12: item12,
      item13: item13,
      item14: item14,
      item14Other: item14Other
    };

    if (
      item1 &&
      item2.length !== 0 &&
      item3 &&
      item4 &&
      item5 &&
      item6 &&
      item7 &&
      item8 &&
      item9 &&
      item10 &&
      item11 &&
      item12 &&
      item13 &&
      item14.length !== 0
    ) {
      this.smokingComplete.complete3 = true;
      this.SmokingDisable.disable4=false;
      this.SmokingDisable.disable5= true;
      // this.SmokingDisable.disable6= true;
      this.SmokingDisable.disable1= false;
      this.SmokingDisable.disable2= false;
    } else {
      this.smokingComplete.complete3 = false;
      this.SmokingDisable.disable4= true;
      this.SmokingDisable.disable5= true;
      // this.SmokingDisable.disable6= true;
    } 
  }

  setSmokingCessationPlan(item17, stopDate) {
    this.SmokingCessationPlan = {
      item17: item17,
      stopDate: stopDate
    };
    if (item17 && stopDate !== "") {
      this.smokingComplete.complete4 = true;
      this.SmokingDisable.disable5=false;
      // this.SmokingDisable.disable6= true;
      this.SmokingDisable.disable1= false;
      this.SmokingDisable.disable2= false;
      this.SmokingDisable.disable3= false;
    } else {
      this.smokingComplete.complete4 = false;
      this.SmokingDisable.disable5= true;
      // this.SmokingDisable.disable6= true;
    } 
  }

  setSmokingFollowUpA5(
    amount,
    value1,
    disable1,
    value1Other,
    value3,
    disable3,
    value3Advice,
    value4,
    disable4,
    value4Advice,
    value5,
    disable5,
    value5Advice,
    value6,
    disable6,
    value6Advice,
    followUpDate
  ) {
    this.SmokingFollowUpA5 = {
      amount: amount,
      value1: value1,
      disable1: disable1,
      value1Other: value1Other,
      value3: value3,
      disable3: disable3,
      value3Advice: value3Advice,
      value4: value4,
      disable4: disable4,
      value4Advice: value4Advice,
      value5: value5,
      disable5: disable5,
      value5Advice: value5Advice,
      value6: value6,
      disable6: disable6,
      value6Advice: value6Advice,
      followUpDate: followUpDate
    };

    if (
      value1 &&
      value3 &&
      value4 &&
      value5 &&
      value6.length !== 0 &&
      followUpDate !== ""
    ) {
      this.smokingComplete.complete6 = true;
      // this.SmokingDisable.disable6=false;
      this.SmokingDisable.disable1= false;
      this.SmokingDisable.disable2= false;
      this.SmokingDisable.disable3= false;
      this.SmokingDisable.disable4= false;
      this.SmokingDisable.disable5= false;
    } else {
      this.smokingComplete.complete6 = false;
      // this.SmokingDisable.disable6= false;
    }
  }

  setStrokeScreeningForm(
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8
  ) {
    this.StrokeScreeningForm = {
      item1: item1,
      item2: item2,
      item3: item3,
      item4: item4,
      item5: item5,
      item6: item6,
      item7: item7,
      item8: item8
    };
    if (
      item1 !== "" &&
      item2 !== "" &&
      item3 !== "" &&
      item4 !== "" &&
      item5 !== "" &&
      item6 !== "" &&
      item7 !== "" &&
      item8 !== ""
    ) {
      this.strokeComplete.complete1 = true;
      this.StrokeDisable.disable2 = false;
    } else {
      this.strokeComplete.complete1 = false;
      this.StrokeDisable.disable2 = true;
    }
  }

  setStrokeEducation(value, disable, valueOther) {
    this.StrokeEducation = {
      value: value,
      disable: disable,
      valueOther: valueOther
    };
    if (value.length !== 0) {
      this.strokeComplete.complete2 = true;
    } else this.strokeComplete.complete2 = false;
  }

  setLungHealth(value1, value2, value3, value4, value5) {
    this.LungHealth = {
      value1: value1,
      value2: value2,
      value3: value3,
      value4: value4,
      value5: value5
    };
    if (
      value1 !== "" &&
      value2 !== "" &&
      value3 !== "" &&
      value4 !== "" &&
      value5 !== ""
    ) {
      this.COPDComplete.complete1 = true;
    } else this.COPDComplete.complete1 = false;
  }

  setCOPDScreeningForm(value1, value2, value3, value4, value5) {
    this.COPDScreeningForm = {
      value1: value1,
      value2: value2,
      value3: value3,
      value4: value4,
      value5: value5
    };
    if (
      value1 !== "" &&
      value2 !== "" &&
      value3 !== "" &&
      value4 !== "" &&
      value5 !== ""
    ) {
      this.COPDComplete.complete2 = true;
    } else this.COPDComplete.complete2 = false;
  }
}
var store = (window.store = new TodoStore());

export default store;

autorun(() => {
  // console.log(store.todos[0]);
  // console.log(store.filter);
  // console.log(store.PatientInfo);
  console.log(store.FamilyInfo);
  // console.log(store.HealthBehavior);
  // console.log(store.SmokingCessationForm);
  // console.log(store.SmokingCessationPlan);
  // console.log(store.SmokingFollowUpA5);
});
