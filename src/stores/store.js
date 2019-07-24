import { extendObservable, action } from "mobx";
import DiseaseDataStore from './disease'
import SmokingStore from './smoking'
class Store {
  constructor() {
    this.disease = new DiseaseDataStore(this)
    this.smoking = new SmokingStore(this)
    extendObservable(this, {
      count: 199,
      type: 0,
      form: {
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
      }
    });
  }

  @action
  increment() {
    this.count++;
  }

  @action
  updateItem(value, type) {
    // this.count = value;
    console.log(value, type);
    switch (type) {
      case "follow":
        this.form.value1 = value;
        break;
    }
  }

//   @action
//   updateNewA5(value, id) {
//     switch (id) {
//       case "value1": {
//         this.form.value1 = value;
//         console.log("value1 = ", this.form.value1);
//         break;
//       }
//       case "value1Other": {
//         this.form.value1Other = value;
//         console.log("value1Other = ", this.form.value1Other);
//         break;
//       }
//       case "value3": {
//         this.form.value3 = value;
//         console.log("value3 = ", this.form.value3);
//         break;
//       }
//     }
//   }
}
export default Store;
