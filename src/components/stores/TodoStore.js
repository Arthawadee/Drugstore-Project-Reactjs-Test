import { autorun, observable } from 'mobx';
var weight = 60, height = 160
class TodoStore{
    @observable todos = ['buy milk', 'buy eggs'];
    @observable filter = 'por';

    
    @observable patient = {patientFirstname:'มานะ',patientLastname:'มานี',id: '1142578459684'}
    @observable PatientInfo = {weight: weight, height: height, BMI: weight/(height*height/10000), 
                                HR: 0, RR: 0, BP: 0, UnderlyDisease: '',DrugAllergy: ''}



    
}
var store = window.store = new TodoStore()

export default store;

autorun(()=>{
    console.log(store.todos[0]);
    console.log(store.filter);
})