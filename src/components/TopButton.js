import React, { Component } from "react";
import { Icon, Button } from "semantic-ui-react";

export default class TopButton extends Component {
  
  componentDidMount() {
    window.addEventListener("scroll", this.handeleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handeleScroll);
  }

  handeleScroll() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("TopBtn").style.display = "block";
    } else {
      document.getElementById("TopBtn").style.display = "none";
    }
  }

  topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <div className="BackToTopBtn">
        <Button animated="vertical" onClick={this.topFunction} id="TopBtn">
          <Button.Content hidden>Back to Top</Button.Content>
          <Button.Content visible>
            <Icon name="angle up" />
          </Button.Content>
        </Button>
      </div>
    );
  }
}
