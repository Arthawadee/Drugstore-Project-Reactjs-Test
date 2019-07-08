import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import HomePage from "./components/HomePage";
import { Link, Switch, Route } from "react-router-dom";
import AddNewPatient from "./components/AddNewPatient";
import AddNewDrugstore from "./components/AddNewDrugstore";
import AddNewPharmacist from "./components/AddNewPharmacist";
import SmokingForm from "./components/SmokingForm";
import EditPatientData from "./components/EditPatientData";
import ContactUs from "./components/ContactUs";
import { Menu, Icon, Segment, Button, Sidebar } from "semantic-ui-react";

import "./scss/style.scss";

export default class App extends Component {
  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  state = {
    activeItem: "home",
    visible: false
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    var { visible, activeItem } = this.state;
    return (
      <div className="Layout">
        <Menu color="blue" inverted>
          {/* <Menu.Item >
                    <img src='https://banner2.kisspng.com/20180705/rwq/kisspng-logo-cross-red-hospital-medical-office-5b3db923b667f6.3943560215307717477472.jpg' />
                     Drugstore Clinic
                    </Menu.Item> */}
          <Menu.Item>
            <Button
              primary
              icon
              disabled={visible}
              onClick={this.handleShowClick}
            >
              <Icon name="align justify" />
            </Button>
          </Menu.Item>
          <Menu.Item style={{ color: "white", fontWeight: "bold" }}>
            {/* <Icon name='add' /> */}
            <img
              src="https://cdn1.iconfinder.com/data/icons/medicine-1/512/medicine-512.png"
              alt="eror"
            />{" "}
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
            to="/contactus"
            name="ContactUs"
            active={activeItem === "ContactUs"}
            onClick={this.handleItemClick}
          >
            ติดต่อเรา
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
            <Segment basic style={{ backgroundColor: "#e3fbff", minHeight: 500 }}>
              
                <Switch>
                  <Route exact path="/" component={EditPatientData} />
                  <Route path="/contactus" component={ContactUs} />
                </Switch>
              
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
