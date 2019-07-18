import { autorun, observable } from "mobx";
var weight = 60,
  height = 160;
class TodoStore {
//   @observable todos = ["buy milk", "buy eggs"];
//   @observable filter = "por";

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
    if (value1.length !== 0 && value2 !== 0) {
      this.smokingComplete.complete1 = true;
    } else this.smokingComplete.complete1 = false;
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
    } else this.smokingComplete.complete2 = false;
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
    } else this.smokingComplete.complete3 = false;
  }

  setSmokingCessationPlan(item17, stopDate) {
    this.SmokingCessationPlan = {
      item17: item17,
      stopDate: stopDate
    };
    if (item17 && stopDate !== "") {
      this.smokingComplete.complete4 = true;
    } else this.smokingComplete.complete4 = false;
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
    } else this.smokingComplete.complete6 = false;
  }
}
var store = (window.store = new TodoStore());

export default store;

autorun(() => {
  // console.log(store.todos[0]);
  // console.log(store.filter);
  console.log(store.PatientInfo);
  console.log(store.FamilyInfo);
  console.log(store.HealthBehavior);
  console.log(store.SmokingCessationForm);
  console.log(store.SmokingCessationPlan);
  console.log(store.SmokingFollowUpA5);
});
