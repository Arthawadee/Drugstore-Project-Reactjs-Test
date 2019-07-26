import { extendObservable, action } from "mobx";
// import { updateExpression } from "@babel/types";
class PatientInfoStore {
  constructor(store) {
    this.store = store;
    extendObservable(this, {
      PatientInfo: {
        weight: 0,
        height: 0,
        BMI: '',
        HR: 0,
        RR: 0,
        BP: 0,
        UnderlyDisease: "",
        DrugAllergy: ""
      }
    });
  }
  @action
  updatePatientInfo(value, id) {
    switch (id) {
      case "weight": {
        this.PatientInfo.weight = value;
        if(this.PatientInfo.weight === 0 || this.PatientInfo.height === 0 ||
           this.PatientInfo.weight === '' || this.PatientInfo.height === ''){
          this.PatientInfo.BMI = '';
        }
        else{
          this.PatientInfo.BMI =
          this.PatientInfo.weight /
          ((this.PatientInfo.height * this.PatientInfo.height) / 10000);
        }
        console.log("weight = ", this.PatientInfo.weight);
        break;
      }
      case "height": {
        this.PatientInfo.height = value;
        if(this.PatientInfo.weight === 0 || this.PatientInfo.height === 0 ||
          this.PatientInfo.weight === '' || this.PatientInfo.height === ''){
          this.PatientInfo.BMI = '';
        }
        else{
          this.PatientInfo.BMI =
          this.PatientInfo.weight /
          ((this.PatientInfo.height * this.PatientInfo.height) / 10000);
        }
        console.log("height = ", this.PatientInfo.height);
        break;
      }
      case "HR": {
        this.PatientInfo.HR = value;
        console.log("HR = ", this.PatientInfo.HR);
        break;
      }
      case "RR": {
        this.PatientInfo.RR = value;
        console.log("RR = ", this.PatientInfo.RR);
        break;
      }
      case "BP": {
        this.PatientInfo.BP = value;
        console.log("BP = ", this.PatientInfo.BP);
        break;
      }
      case "UnderlyDisease": {
        this.PatientInfo.UnderlyDisease = value;
        console.log("UnderlyDisease = ", this.PatientInfo.UnderlyDisease);
        break;
      }
      case "DrugAllergy": {
        this.PatientInfo.DrugAllergy = value;
        console.log("DrugAllergy = ", this.PatientInfo.DrugAllergy);
        break;
      }
      default : break;
    }
  }
}
export default PatientInfoStore;
