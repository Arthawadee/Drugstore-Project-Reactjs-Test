import { extendObservable, action } from "mobx";
class StrokeStore {
  constructor(store) {
    this.store = store;
    extendObservable(this, {
      screening: {
        value1: "",
        value2: "",
        value3: "",
        value4: "",
        value5: "",
        value6: "",
        value7: "",
        value8: ""
      },
      education: {
        value: "",
        disable: true,
        valueOther: ""
      },
      complete: {
        complete1: false,
        complete2: false
      }
    });
  }

  @action
  updateStrokeScreeningForm(value, id) {
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
      default : break;
    }
    if( this.screening.value1 !== '' && this.screening.value2 !== '' && this.screening.value3 !== '' 
    && this.screening.value4 !== '' && this.screening.value5 !== '' && this.screening.value6 !== '' 
    && this.screening.value7 !== '' && this.screening.value8 !== '' ){
      this.complete.complete1 = true;
    } else this.complete.complete1 = false;
  }

  @action
  updateStrokeEducation(value, id) {
    switch (id) {
      case "value": {
        this.education.value = value;
        console.log("value = ", this.education.value);
        if (value.includes(5)) {
          this.education.disable = false;
        } else {
          this.education.disable = true;
          this.education.valueOther = "";
        }
        break;
      }
      case "valueOther": {
        this.education.valueOther = value;
        console.log("valueOther = ", this.education.valueOther);
        break;
      }
      default : break;
    }
    if(this.education.value.length !== 0){
      this.complete.complete2 = true;
    }else this.complete.complete2 = false;
  }
}
export default StrokeStore;
