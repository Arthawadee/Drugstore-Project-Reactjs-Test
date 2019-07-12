import React, { Component } from "react";
import { Segment, Responsive } from "semantic-ui-react";
import HomePageLarge from "./HomePage/HomepageLarge";
import HomepageSmall from "./HomePage/HomepageSmall";
import store from './stores/TodoStore';
// import "./HomePage.css";

export default class HomePage extends Component {
  constructor(props){
    super(props)
    // console.log(this.props.store)
    console.log(store)
  }
  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  state = { email: "", password: "", activeItem: "home", visible: false };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    // var { email, password, visible } = this.state;
    return (
      <div style={style.menu}>
        <Segment.Group>
          <Responsive as={Segment} basic {...Responsive.onlyMobile}>
            <HomepageSmall />
          </Responsive>
          <Responsive as={Segment} basic {...Responsive.onlyTablet}>
            <HomepageSmall />
          </Responsive>
          <Responsive as={Segment} basic {...Responsive.onlyComputer}>
            <HomePageLarge />
          </Responsive>
        </Segment.Group>
      </div>
    );
  }
}
const style = {
  menu: {
    backgroundColor: "#D8F6FF",
    color: "#000",
    height: "100%"
  }
};
