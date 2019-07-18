import React, { Component } from "react";
import {
  Segment,
  Form,
  Button,
  Divider,
  Header
} from "semantic-ui-react";
import ModalExampleMultiple from "./ModalExampleMultiple";
import {Cookies} from "react-cookie";
const cookies = new Cookies();
export default class HomepageSmall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "password",
      score: "null",
      email: '',
      password: ''
    };
    this.showHide = this.showHide.bind(this);
  }

  componentDidMount(){
    console.log('props',cookies)
  }

  showHide(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === "input" ? "password" : "input"
    });
  }

  Login = () => {
    console.log('email: '+this.state.email)
    console.log('password: '+this.state.password)
    const userData = {
      email: this.state.email,
      pasword: this.state.password
    }
    cookies.set("userData", userData, {maxAge: 60*60*24, path:'/'});
    console.log(cookies.get('userData'))
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
              <Header as="h1" className="ui icon header pageHeader">
                ยินดีต้อนรับสู่
              </Header>
              <div style={{ marginBottom: "30px" }}>
                {/* <h1 class="ui icon header pageHeader">Drugstore Clinic</h1> */}
                <Header as="h1" className="ui icon header pageHeader">
                  Drugstore Clinic
                </Header>
              </div>
            </div>

            
                <Segment
                  inverted
                  style={{ backgroundColor: "#98d8e3", textAlign: "center" }}
                >
                  <Form>
                    <h2 className="loginHeader" style={{ textAlign: "center" }}>
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
                        onChange={(e, { value }) => {
                          // console.log("email: ", value);
                          this.setState({email: value})
                        }}
                      />
                      <Form.Input
                        required
                        icon="lock"
                        iconPosition="left"
                        label="Password"
                        type={this.state.type}
                        placeholder="Enter Password"
                        onChange={(e,{value})=>{
                          // console.log("password: ", value);
                          this.setState({password: value})
                        }}
                      />
                      {/* <Form.Button color='blue' icon="eye" onClick={this.showHide}>{this.state.type === "input" ? "Hide" : "Show"}</Form.Button> */}
                      {/* <Button icon="eye" onClick={this.showHide}>
                        {this.state.type === "input" ? "Hide" : "Show"}
                      </Button> */}
                    </div>

                    {/* <Button className='forgotPW' content='ลืมรหัสผ่าน?' color='blue'/> */}
                  </Form>
                  <Button color="linkedin" onClick={this.showHide}>
                    {this.state.type === "input"
                      ? "HidePassword"
                      : "ShowPassword"}
                  </Button>
                  <div style={{ marginTop: "20px", marginBottom: "10px" }}>
                    <ModalExampleMultiple />
                    {/* <a onClick={this.closeConfigShow(true, false)}>
                      ลืมรหัสผ่าน?
                    </a> */}
                  </div>
                </Segment>
                <div className="submitBtn">
                  <Button circular content="เข้าสู่ระบบ" color="blue" onClick={this.Login} />
                </div>
          </div>
        </main>
      </div>
    );
  }
}
