import React, { Component } from "react";
import { Segment, Form, Button, Divider, Grid } from "semantic-ui-react";
// import "./HomePage.css";

export default class HomePage extends Component {
  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  state = { email: "", password: "", activeItem: "home", visible: false };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    var { email, password, visible } = this.state;
    return (
      <div className="home" style={style.menu}>
        <main style={{ marginTop: "64px", backgroundColor: "#e3fbff" }}>
          <div className="pageContent">
            {/* <Header as='h1' icon textAlign='center'>
                        <Icon name='users' circular />
                        <Header.Content>ยินดีต้อนรับสู่</Header.Content>
                        <Header.Content>Drugstore Clinic</Header.Content>
                    </Header> */}
            <div className="headline">
              <h1 class="ui icon header pageHeader">
                {/* <i aria-hidden="true" class="users icon"></i> */}
                ยินดีต้อนรับสู่
                {/* <div class="sub header">ยินดีต้อนรับสู่</div>
                        <div class="sub header">Drugstore Clinic</div> */}
              </h1>
              <div style={{ marginBottom: "30px" }}>
                <h1 class="ui icon header pageHeader">Drugstore Clinic</h1>
              </div>
            </div>

            <Grid centered columns={3}>
              <Grid.Column>
                <Segment
                  textAlign="center"
                  inverted
                  style={{ backgroundColor: "#98d8e3" }}
                >
                  <Form>
                    <h2 icon textAlign="center" className="loginHeader">
                      กรุณาลงชื่อเข้าสู่ระบบ
                    </h2>
                    <Divider />
                    <div className="loginForm">
                      <Form.Input
                        required
                        icon="user"
                        iconPosition="left"
                        label="Email"
                        type="email"
                        placeholder="Enter Email"
                        onChange
                      />
                      <Form.Input
                        required
                        icon="lock"
                        iconPosition="left"
                        label="Password"
                        type="password"
                        placeholder="Enter Password"
                      />
                    </div>

                    <a href="https://www.google.com/search?q=forgot+password&rlz=1C1OKWM_thTH854TH854&oq=forgot&aqs=chrome.2.69i57j0l5.5095j0j7&sourceid=chrome&ie=UTF-8">
                      ลืมรหัสผ่าน?
                    </a>
                    {/* <Button className='forgotPW' content='ลืมรหัสผ่าน?' color='blue'/> */}
                  </Form>
                </Segment>
                <div className="submitBtn">
                  <Button circular content="เข้าสู่ระบบ" color="blue" />
                </div>
              </Grid.Column>
            </Grid>
          </div>
        </main>
      </div>
    );
  }
}
const style = {
  menu: {
    backgroundColor: "#D8F6FF",
    color: "#000",
    height: "100%"
  },
  menuContent: {
    color: "white",
    fontWeight: "bold"
  }
};
