import { extendObservable, action, autorun } from "mobx";
class SmokingStore {
  constructor(store) {
    this.store = store;
    extendObservable(this, {
      A5: {
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
        followUpDate: ""
      },
      FamilyInfo: {
        value1: [],
        value2: []
      },
      HealthBehavior: {
        value1: "",
        value2: "",
        value3: "",
        disable3: true,
        value3month: 0,
        value3year: 0,
        value4: "",
        disable4: true,
        value4Amount: 0,
        value5: "",
        value6: ""
      },
      SmokingCessationForm: {
        disable1_1: true,
        disable2_1: true,
        disable2_2: true,
        disable14: true,
        value1: 0,
        value2: 0,
        value2Select: [],
        value2Other: "",
        value3: 0,
        value4: 0,
        value5: 0,
        value6: 0,
        value7: 0,
        value8: 0,
        value9: 0,
        value10: 0,
        value11: 0,
        value12: 0,
        value13: 0,
        value14: 0,
        value14Other: ""
      },
      SmokingCessationPlan: {
        value17: "",
        stopDate: ""
      }
    });
  }

  @action
  updateNewA5(value, id) {
    switch (id) {
      case "value1": {
        this.A5.value1 = value;
        console.log("value1 = ", this.A5.value1);
        break;
      }
      case "value1Other": {
        this.A5.value1Other = value;
        console.log("value1Other = ", this.A5.value1Other);
        break;
      }
      case "value3": {
        this.A5.value3 = value;
        console.log("value3 = ", this.A5.value3);
        break;
      }
      case "value3Advice": {
        this.A5.value3Advice = value;
        console.log("value3Advice = ", this.A5.value3Advice);
        break;
      }
      case "value4": {
        this.A5.value4 = value;
        console.log("value4 = ", this.A5.value4);
        break;
      }
      case "value4Advice": {
        this.A5.value4Advice = value;
        console.log("value4Advice = ", this.A5.value4Advice);
        break;
      }
      case "value5": {
        this.A5.value5 = value;
        console.log("value5 = ", this.A5.value5);
        break;
      }
      case "value5Advice": {
        this.A5.value5Advice = value;
        console.log("value5Advice = ", this.A5.value5Advice);
        break;
      }
      case "value6": {
        this.A5.value6 = value;
        console.log("value6 = ", this.A5.value6);
        break;
      }
      case "followUpDate": {
        this.A5.followUpDate = value;
        console.log("followUpDate = ", this.A5.followUpDate);
        break;
      }
    }
  }

  @action
  updateFamilyInfo(value, id) {
    switch (id) {
      case "value1": {
        this.FamilyInfo.value1 = value;
        console.log("value1 = ", this.FamilyInfo.value1);
        break;
      }
      case "value2": {
        this.FamilyInfo.value2 = value;
        console.log("value2 = ", this.FamilyInfo.value2);
        break;
      }
    }
  }

  @action
  updateHealthBehavior(value, id) {
    switch (id) {
      case "value1": {
        this.HealthBehavior.value1 = value;
        console.log("value1 = ", this.HealthBehavior.value1);
        break;
      }
      case "value2": {
        this.HealthBehavior.value2 = value;
        console.log("value2 = ", this.HealthBehavior.value2);
        break;
      }
      case "value3": {
        this.HealthBehavior.value3 = value;
        console.log("value3 = ", this.HealthBehavior.value3);
        break;
      }
      case "value3month": {
        this.HealthBehavior.value3month = value;
        console.log("value3month = ", this.HealthBehavior.value3month);
        break;
      }
      case "value3year": {
        this.HealthBehavior.value3year = value;
        console.log("value3year = ", this.HealthBehavior.value3year);
        break;
      }
      case "value4": {
        this.HealthBehavior.value4 = value;
        console.log("value4 = ", this.HealthBehavior.value4);
        break;
      }
      case "value4Amount": {
        this.HealthBehavior.value4Amount = value;
        console.log("value4Amount = ", this.HealthBehavior.value4Amount);
        break;
      }
      case "value5": {
        this.HealthBehavior.value5 = value;
        console.log("value5 = ", this.HealthBehavior.value5);
        break;
      }
      case "value6": {
        this.HealthBehavior.value6 = value;
        console.log("value6 = ", this.HealthBehavior.value6);
        break;
      }
    }
  }

  @action
  updateSmokingCessationForm(value, id) {
    switch (id) {
      case "value1": {
        this.SmokingCessationForm.value1 = value;
        console.log("value1 = ", this.SmokingCessationForm.value1);
        break;
      }
      case "value2": {
        this.SmokingCessationForm.value2 = value;
        if (value.includes(3)) {
          this.SmokingCessationForm.disable2_1 = false;
        } else {
          this.SmokingCessationForm.disable2_1 = true;
          this.SmokingCessationForm.value2Select = [];
          this.SmokingCessationForm.disable2_2 = true;
          this.SmokingCessationForm.value2Other = "";
        }
        console.log("value2 = ", this.SmokingCessationForm.value2);
        break;
      }
      case "value2Select": {
        this.SmokingCessationForm.value2Select = value;
        if (value.includes(6)) {
          this.SmokingCessationForm.disable2_2 = false;
        } else {
          this.SmokingCessationForm.disable2_2 = true;
          this.SmokingCessationForm.value2Other = "";
        }
        console.log("value2Select = ", this.SmokingCessationForm.value2Select);
        break;
      }
      case "value2Other": {
        this.SmokingCessationForm.value2Other = value;
        console.log("value2Other = ", this.SmokingCessationForm.value2Other);
        break;
      }
      case "value3": {
        this.SmokingCessationForm.value3 = value;
        console.log("value3 = ", this.SmokingCessationForm.value3);
        break;
      }
      case "value4": {
        this.SmokingCessationForm.value4 = value;
        console.log("value4 = ", this.SmokingCessationForm.value4);
        break;
      }
      case "value5": {
        this.SmokingCessationForm.value5 = value;
        console.log("value5 = ", this.SmokingCessationForm.value5);
        break;
      }
      case "value6": {
        this.SmokingCessationForm.value6 = value;
        console.log("value6 = ", this.SmokingCessationForm.value6);
        break;
      }
      case "value7": {
        this.SmokingCessationForm.value7 = value;
        console.log("value7 = ", this.SmokingCessationForm.value7);
        break;
      }
      case "value8": {
        this.SmokingCessationForm.value8 = value;
        console.log("value8 = ", this.SmokingCessationForm.value8);
        break;
      }
      case "value9": {
        this.SmokingCessationForm.value9 = value;
        console.log("value9 = ", this.SmokingCessationForm.value9);
        break;
      }
      case "value10": {
        this.SmokingCessationForm.value10 = value;
        console.log("value10 = ", this.SmokingCessationForm.value10);
        break;
      }
      case "value11": {
        this.SmokingCessationForm.value11 = value;
        console.log("value11 = ", this.SmokingCessationForm.value11);
        break;
      }
      case "value12": {
        this.SmokingCessationForm.value12 = value;
        console.log("value12 = ", this.SmokingCessationForm.value12);
        break;
      }
      case "value13": {
        this.SmokingCessationForm.value13 = value;
        console.log("value13 = ", this.SmokingCessationForm.value13);
        break;
      }
      case "value14": {
        this.SmokingCessationForm.value14 = value;
        if (value.includes(5)) {
          this.SmokingCessationForm.disable14 = false;
        } else {
          this.SmokingCessationForm.disable14 = true;
          this.SmokingCessationForm.value14Other = "";
        }
        console.log("value14 = ", this.SmokingCessationForm.value14);
        break;
      }
      case "value14Other": {
        this.SmokingCessationForm.value14Other = value;
        console.log("value14Other = ", this.SmokingCessationForm.value14Other);
        break;
      }
    }
  }

  @action
  updateSmokingCessationPlan(value, id) {
    switch (id) {
      case "value17": {
        this.SmokingCessationPlan.value17 = value;
        console.log("value17 = ", this.SmokingCessationPlan.value17);
        break;
      }
      case "stopDate": {
        this.SmokingCessationPlan.stopDate = value;
        console.log("stopDate = ", this.SmokingCessationPlan.stopDate);
        break;
      }
    }
  }
}
export default SmokingStore;
