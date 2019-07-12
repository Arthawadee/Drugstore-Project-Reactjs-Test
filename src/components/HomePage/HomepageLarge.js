import React, { Component } from "react";
import { Segment, Form, Button, Divider, Grid, Header } from "semantic-ui-react";

export default class HomepageLarge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "input",
      score: "null"
    };
    this.showHide = this.showHide.bind(this);
  }
  showHide(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === "input" ? "password" : "input"
    });
  }
  render() {
    return (
      <div className="home">
        <main style={{ marginTop: "64px", backgroundColor: "#e3fbff" }}>
          <div className="pageContent">
            {/* <Header as='h1' icon textAlign='center'>
                        <Icon name='users' circular />
                        <Header.Content>ยินดีต้อนรับสู่</Header.Content>
                        <Header.Content>Drugstore Clinic</Header.Content>
                    </Header> */}
            <div className="headline">
              {/* <h1 class="ui icon header pageHeader">
                <i aria-hidden="true" class="users icon"></i>
                ยินดีต้อนรับสู่
                <div class="sub header">ยินดีต้อนรับสู่</div>
                        <div class="sub header">Drugstore Clinic</div>
              </h1> */}
              <Header as='h1' className="ui icon header pageHeader">ยินดีต้อนรับสู่</Header>
              <div style={{ marginBottom: "30px" }}>
                {/* <h1 class="ui icon header pageHeader">Drugstore Clinic</h1> */}
                <Header as='h1' className="ui icon header pageHeader">Drugstore Clinic</Header>
              </div>
            </div>

            <Grid centered columns={2}>
              <Grid.Column>
                <Segment
                  inverted
                  style={{ backgroundColor: "#98d8e3",textAlign:"center" }}
                >
                  <Form>
                    <h2 className="loginHeader" style={{textAlign:"center"}}>
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
                        onChange={(e,{value}) => {
                          console.log('email: ',value)
                        }}
                      />
                      <Form.Input
                        required
                        icon="lock"
                        iconPosition="left"
                        label="Password"
                        type={this.state.type}
                        placeholder="Enter Password"
                      />
                      {/* <Form.Button color='blue' icon="eye" onClick={this.showHide}>{this.state.type === "input" ? "Hide" : "Show"}</Form.Button> */}
                      {/* <Button icon="eye" onClick={this.showHide}>
                        {this.state.type === "input" ? "Hide" : "Show"}
                      </Button> */}
                    </div>

                    {/* <Button className='forgotPW' content='ลืมรหัสผ่าน?' color='blue'/> */}
                  </Form>
                  <Button color='linkedin' onClick={this.showHide}>
                    {this.state.type === "input"
                      ? "HidePassword"
                      : "ShowPassword"}
                  </Button>
                  <div style={{marginTop: '20px',marginBottom: '10px'}}>
                    <a href="https://www.google.com/search?q=forgot+password&rlz=1C1OKWM_thTH854TH854&oq=forgot&aqs=chrome.2.69i57j0l5.5095j0j7&sourceid=chrome&ie=UTF-8">
                      ลืมรหัสผ่าน?
                    </a>
                  </div>
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
