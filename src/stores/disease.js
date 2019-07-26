import { extendObservable } from "mobx";
class DiseaseDataStore {
  constructor(store) {
      this.store = store;
    extendObservable(this, {
        disease: 0
    })}

}
export default DiseaseDataStore;
