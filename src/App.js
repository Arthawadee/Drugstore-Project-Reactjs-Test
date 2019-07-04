import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
// import HomePage from "./HomePage";
import AddNewPatient from "./AddNewPatient";
import {
  Menu,
  Label,
  Icon,
  Header,
  Segment,
  Form,
  Button,
  Input,
  Divider,
  FormGroup,
  Grid,
  Sidebar,
  TextArea
} from "semantic-ui-react";
import "./AddNewPatient.css";

export default class App extends Component {
  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  state = {
    email: "",
    password: "",
    activeItem: "home",
    visible: false,
    address: ""
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    var { email, password, visible } = this.state;
    return (
      <div>
        {/* <HomePage/> */}
        {/* <AddNewPatient/> */}

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
            <img src="https://cdn1.iconfinder.com/data/icons/medicine-1/512/medicine-512.png" />{" "}
            DRUGSTORE CLINIC
          </Menu.Item>
          <Menu.Item name="home">หน้าแรก</Menu.Item>
          <Menu.Item name="ContactUs">ติดต่อเรา</Menu.Item>

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
            <Menu.Item as="a">
              <Icon name="home" />
              หน้าแรก
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="call" />
              ติดต่อเรา
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="sign-out" />
              ลงชื่อออก
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            <Segment basic style={{ backgroundColor: "#e3fbff" }}>
              {/* <HomePage /> */}
              <AddNewPatient/>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
