import { extendObservable, action } from "mobx";
class AsthmaStore {
  constructor(store) {
    this.store = store;
    extendObservable(this, {
      screening: {
        disable: true,
        value: "",
        value1: "",
        value2: ""
      }
    });
  }

  @action
  updateCOPDScreeningForm(value, id) {
    switch (id) {
      case "value": {
        this.screening.value = value;
        if(value === 1){
            this.screening.disable = false;
        } else{
            this.screening.disable = true;
            this.screening.value1 = '';
            this.screening.value2 = '';
        }
        console.log("value = ", this.screening.value);
        break;
      }
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
    }
  }
}
export default AsthmaStore;
