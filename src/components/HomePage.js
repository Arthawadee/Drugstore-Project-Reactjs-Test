import React, { Component } from "react";
import { Segment, Responsive } from "semantic-ui-react";
import HomePageLarge from "./HomepageLarge";
import HomepageSmall from "./HomepageSmall";
// import "./HomePage.css";

export default class HomePage extends Component {
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
