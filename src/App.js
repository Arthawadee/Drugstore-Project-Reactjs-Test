import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import HomePage from "./components/HomePage";
import { Link, Switch, Route } from "react-router-dom";
import AddNewPatient from "./components/AddNewPatient";
import AddNewDrugstore from "./components/AddNewDrugstore";
import AddNewPharmacist from "./components/AddNewPharmacist";
// import SmokingForm from "./components/SmokingForm";
import EditPatientData from "./components/EditPatientData";
import ContactUs from "./components/ContactUs";
import Graph from './components/graph'
import AboutUs from './components/AboutUs'
import { Menu, Icon, Segment, Sidebar } from "semantic-ui-react";
import { withCookies } from 'react-cookie';
import { Provider } from "mobx-react";
import { inject, observer } from 'mobx-react';
import "./scss/style.scss";

@inject('store')
@observer
class App extends Component {

  constructor(props){
    super(props)
    // console.log(this.props.store.todos)
    // console.log(this.props)
  }
// componentDidMount(){
//   console.log(this.props)
// }

  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  state = {
    activeItem: "home",
    visible: false
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  componentDidMount(){
    // console.log('App',this.props.store.count);
    // this.props.store.increment();
    // console.log('App',this.props.store.count);
    // console.log('disease',this.props.store.disease.disease)
    // console.log('smoking',this.props.store)
    console.log('smoking',this.props.store.smoking)
  }

  render() {
    var { visible, activeItem } = this.state;
    return (
      // <Provider >
      <div className="Layout">
        <Menu stackable color="blue" inverted fluid>
          {/* <Menu.Item >
                    <img src='https://banner2.kisspng.com/20180705/rwq/kisspng-logo-cross-red-hospital-medical-office-5b3db923b667f6.3943560215307717477472.jpg' />
                     Drugstore Clinic
                    </Menu.Item> */}
          {/* <Menu.Item>
            <Button
              primary
              icon
              disabled={visible}
              onClick={this.handleShowClick}
            >
              <Icon name="align justify" />
            </Button>
          </Menu.Item> */}
          <Menu.Item style={{ color: "white", fontWeight: "bold" }}>
            {/* <Icon name='add' /> */}
            <img
              src="https://cdn1.iconfinder.com/data/icons/medicine-1/512/medicine-512.png"
              alt="eror"
            />
            <div className="headline">DRUGSTORE CLINIC</div>
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            หน้าแรก
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/screening"
            name="Screening"
            active={activeItem === "Screening"}
            onClick={this.handleItemClick}
          >
            การคัดกรองโรค
          </Menu.Item>
          
          <Menu.Item
            as={Link}
            to="/AddNewDrugstore"
            name="AddNewDrugstore"
            active={activeItem === "AddNewDrugstore"}
            onClick={this.handleItemClick}
          >
            เพิ่มร้านยา
          </Menu.Item>
          
          <Menu.Item
            as={Link}
            to="/AddNewPatient"
            name="AddNewPatient"
            active={activeItem === "AddNewPatient"}
            onClick={this.handleItemClick}
          >
            เพิ่มผู้ป่วยรายใหม่
          </Menu.Item>
          
          <Menu.Item
            as={Link}
            to="/AddNewPharmacist"
            name="AddNewPharmacist"
            active={activeItem === "AddNewPharmacist"}
            onClick={this.handleItemClick}
          >
            เพิ่มเภสัชกร
          </Menu.Item>
          
          <Menu.Item
            as={Link}
            to="/graph"
            name="Graph"
            active={activeItem === "Graph"}
            onClick={this.handleItemClick}
          >
            สถิติ
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/contactus"
            name="ContactUs"
            active={activeItem === "ContactUs"}
            onClick={this.handleItemClick}
          >
            ติดต่อเรา
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/aboutus"
            name="AboutUs"
            active={activeItem === "AboutUs"}
            onClick={this.handleItemClick}
          >
            เกี่ยวกับเรา
          </Menu.Item>

          {/* <Menu.Menu position='right'>
                        <Menu.Item
                            name='login'
                            active={this.activeItem === 'login'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu> */}
        </Menu>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as={Link} to="/">
              <Icon name="home" />
              หน้าแรก
            </Menu.Item>
            <Menu.Item as={Link} to="/ContactUs">
              <Icon name="call" />
              ติดต่อเรา
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="sign-out" />
              ลงชื่อออก
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            <Segment basic style={{ backgroundColor: "#e3fbff", minHeight: 600 }}>
              
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/screening" component={EditPatientData} />
                  <Route path="/AddNewDrugstore" component={AddNewDrugstore} />
                  <Route path="/AddNewPatient" component={AddNewPatient} />
                  <Route path="/AddNewPharmacist" component={AddNewPharmacist} />
                  <Route path="/graph" component={Graph} />
                  <Route path="/contactus" component={ContactUs} />
                  <Route path="/aboutus" component={AboutUs} />
                </Switch>
              
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
      // </Provider>
    );
  }
}



export default withCookies(App);