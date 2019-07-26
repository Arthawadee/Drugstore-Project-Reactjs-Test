import { extendObservable, action } from "mobx";
class COPDStore {
  constructor(store) {
    this.store = store;
    extendObservable(this, {
      LungHealth: {
        value1: "",
        value2: "",
        value3: "",
        value4: "",
        value5: ""
      },
      screening: {
        value1: "",
        value2: "",
        value3: "",
        value4: "",
        value5: ""
      },
      complete: {
        complete1: false,
        complete2: false
      }
    });
  }
  @action
  updateLungHealth(value, id) {
    switch (id) {
      case "value1": {
        this.LungHealth.value1 = value;
        console.log("value1 = ", this.LungHealth.value1);
        break;
      }
      case "value2": {
        this.LungHealth.value2 = value;
        console.log("value2 = ", this.LungHealth.value2);
        break;
      }
      case "value3": {
        this.LungHealth.value3 = value;
        console.log("value3 = ", this.LungHealth.value3);
        break;
      }
      case "value4": {
        this.LungHealth.value4 = value;
        console.log("value4 = ", this.LungHealth.value4);
        break;
      }
      case "value5": {
        this.LungHealth.value5 = value;
        console.log("value5 = ", this.LungHealth.value5);
        break;
      }
      default : break;
    }
    if( this.LungHealth.value1 !== '' && this.LungHealth.value2 !== '' && this.LungHealth.value3 !== '' 
    && this.LungHealth.value4 !== '' && this.LungHealth.value5 !== '' ){
      this.complete.complete1 = true;
    } else this.complete.complete1 = false;
  }

  @action
  updateCOPDScreeningForm(value, id) {
    switch (id) {
      case "value1": {
        this.screening.value1 = value;
        console.log("value1 = ", this.screening.value1);
        break;
      }
      case "value2": {
        this.screening.value2 = value;
        console.log("value2 = ", this.screening.value2);
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
      default : break;
    }
    
    if( this.screening.value1 !== '' && this.screening.value2 !== '' && this.screening.value3 !== '' 
    && this.screening.value4 !== '' && this.screening.value5 !== '' ){
      this.complete.complete2 = true;
    } else this.complete.complete2 = false;
  }
}
export default COPDStore;
