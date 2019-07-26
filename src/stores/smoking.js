import { extendObservable, action } from "mobx";
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
      screening: {
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
      },
      complete: {
        complete1: false,
        complete2: false,
        complete3: false,
        complete4: false,
        complete5: false,
        complete6: false
      },
      disable: {
        disable1: false,
        disable2: true,
        disable3: true,
        disable4: true,
        disable5: true,
        disable6: false
      },
      medicine: [
        {
          value1: "",
          value2: "",
          value3: ""
        }
      ],
      noMedicine: false
    });
  }

  @action
  updateNewA5(value, id) {
    switch (id) {
      case "value1": {
        this.A5.value1 = value;
        if(this.A5.value1 === 4){
          this.A5.disable1 = false;
        }else{
          this.A5.disable1 = true;
          this.A5.value1Other = ''
        }
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
        if(this.A5.value3 === 1){
          this.A5.disable3 = false;
        }else{
          this.A5.disable3 = true;
          this.A5.value3Advice = ''
        }
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
        if(this.A5.value4 === 1){
          this.A5.disable4 = false;
        }else{
          this.A5.disable4 = true;
          this.A5.value4Advice = ''
        }
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
        if(this.A5.value5 === 1){
          this.A5.disable5 = false;
        }else{
          this.A5.disable5 = true;
          this.A5.value5Advice = ''
        }
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
      default : break;
    }
    if( this.A5.value1 !== '' && this.A5.value2 !== '' && this.A5.value3 !== '' 
    && this.A5.value4 !== '' && this.A5.value5 !== '' && this.A5.value6 !== '' 
    && this.A5.followUpDate !== ''){
        this.complete.complete6 = true;
     }else this.complete.complete6 = false;
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
      default : break;
    }
    if (
      this.FamilyInfo.value1.length !== 0 &&
      this.FamilyInfo.value2.length !== 0
    ) {
      this.complete.complete1 = true;
    } else this.complete.complete1 = false;
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
      default : break;
    }
    if (
      this.HealthBehavior.value1 &&
      this.HealthBehavior.value2 &&
      this.HealthBehavior.value3 &&
      this.HealthBehavior.value3month &&
      this.HealthBehavior.value3year &&
      this.HealthBehavior.value4 &&
      this.HealthBehavior.value4Amount &&
      this.HealthBehavior.value5 &&
      this.HealthBehavior.value6
    ) {
      this.complete.complete2 = true;
    } else this.complete.complete2 = false;
  }

  @action
  updateSmokingCessationForm(value, id) {
    switch (id) {
      case "value1": {
        this.screening.value1 = value;
        console.log("value1 = ", this.screening.value1);
        break;
      }
      case "value2": {
        this.screening.value2 = value;
        if (value.includes(3)) {
          this.screening.disable2_1 = false;
        } else {
          this.screening.disable2_1 = true;
          this.screening.value2Select = [];
          this.screening.disable2_2 = true;
          this.screening.value2Other = "";
        }
        console.log("value2 = ", this.screening.value2);
        break;
      }
      case "value2Select": {
        this.screening.value2Select = value;
        if (value.includes(6)) {
          this.screening.disable2_2 = false;
        } else {
          this.screening.disable2_2 = true;
          this.screening.value2Other = "";
        }
        console.log("value2Select = ", this.screening.value2Select);
        break;
      }
      case "value2Other": {
        this.screening.value2Other = value;
        console.log("value2Other = ", this.screening.value2Other);
        break;
      }
      case "value3": {
        this.screening.value3 = value;
        console.log("value3 = ", this.screening.value3);
        break;
      }
      case "value4": {
        this.screening.value4 = value;
        console.log("value4 = ", this.screening.value4);
        break;
      }
      case "value5": {
        this.screening.value5 = value;
        console.log("value5 = ", this.screening.value5);
        break;
      }
      case "value6": {
        this.screening.value6 = value;
        console.log("value6 = ", this.screening.value6);
        break;
      }
      case "value7": {
        this.screening.value7 = value;
        console.log("value7 = ", this.screening.value7);
        break;
      }
      case "value8": {
        this.screening.value8 = value;
        console.log("value8 = ", this.screening.value8);
        break;
      }
      case "value9": {
        this.screening.value9 = value;
        console.log("value9 = ", this.screening.value9);
        break;
      }
      case "value10": {
        this.screening.value10 = value;
        console.log("value10 = ", this.screening.value10);
        break;
      }
      case "value11": {
        this.screening.value11 = value;
        console.log("value11 = ", this.screening.value11);
        break;
      }
      case "value12": {
        this.screening.value12 = value;
        console.log("value12 = ", this.screening.value12);
        break;
      }
      case "value13": {
        this.screening.value13 = value;
        console.log("value13 = ", this.screening.value13);
        break;
      }
      case "value14": {
        this.screening.value14 = value;
        if (value.includes(5)) {
          this.screening.disable14 = false;
        } else {
          this.screening.disable14 = true;
          this.screening.value14Other = "";
        }
        console.log("value14 = ", this.screening.value14);
        break;
      }
      case "value14Other": {
        this.screening.value14Other = value;
        console.log("value14Other = ", this.screening.value14Other);
        break;
      }
      default : break;
    }
    if (
      this.screening.value1 &&
      this.screening.value2.length !== 0 &&
      this.screening.value3 &&
      this.screening.value4 &&
      this.screening.value5 &&
      this.screening.value6 &&
      this.screening.value7 &&
      this.screening.value8 &&
      this.screening.value9 &&
      this.screening.value10 &&
      this.screening.value11 &&
      this.screening.value12 &&
      this.screening.value13 &&
      this.screening.value14.length !== 0
    ) {
      this.complete.complete3 = true;
    } else this.complete.complete3 = false;
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
      default : break;
    }
    if(this.SmokingCessationPlan.value17 !== '' && this.SmokingCessationPlan.stopDate !== ''){
      this.complete.complete4 = true;
    } else this.complete.complete4 = false;
  }

  @action
  addMedicine = () => {
    var obj = {
      value1: "",
      value2: "",
      value3: ""
    };
    // console.log(this.medicine);
    var newData = [...this.medicine, obj];
    // console.log('newData', newData);
    this.medicine = newData;
    console.log("newMedicine = ", this.medicine);
    console.log(this.medicine[2]);
  };

  @action
  updateAddMedicine(value, id, i) {
    switch (id) {
      case "value1": {
        this.medicine[i].value1 = value;
        console.log("medicine[", i, "].value1 = ", this.medicine[i].value1);
        break;
      }
      case "value2": {
        this.medicine[i].value2 = value;
        console.log("medicine[", i, "].value2 = ", this.medicine[i].value2);
        break;
      }
      case "value3": {
        this.medicine[i].value3 = value;
        console.log("medicine[", i, "].value3 = ", this.medicine[i].value3);
        break;
      }
      default : break;
    }
  }

  @action
  updateNoMedicine = () => {
    console.log("noMedicine-before = ", this.noMedicine);
    this.noMedicine = !this.noMedicine;
    console.log("noMedicine-after = ", this.noMedicine);
    if (this.noMedicine) {
      for (let i = 0; i < this.medicine.length; i++) {
        this.medicine[i].value1 = "";
        this.medicine[i].value2 = "";
        this.medicine[i].value3 = "";
      }
      this.medicine.length = 0;
    }else{
      this.medicine = [{
        value1: "",
        value2: "",
        value3: ""
      }]
    }
    console.log('medicine-after-disable',this.medicine)
  };


  @action
  checkComplete = () => {
    const result1 = this.medicine.filter((member) => {
      return member.value1 === ''
    })
    const result2 = this.medicine.filter((member) => {
      return member.value2 === ''
    })
    const result3 = this.medicine.filter((member) => {
      return member.value3 === ''
    })
    // console.log('result1 = ',result1)
    // console.log('result2 = ',result2)
    // console.log('result3 = ',result3)
    
    if((result1.length === 0 && result2.length === 0 && result3.length === 0) || this.noMedicine){
      this.complete.complete5 = true;
    }else{
      this.complete.complete5 = false;
    }
  }
}
export default SmokingStore;
