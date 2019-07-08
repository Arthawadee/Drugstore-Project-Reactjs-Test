import React, { Component } from "react";
import {
  Responsive,
  Segment
} from "semantic-ui-react";
import ContactUsSmall from "./ContactUsSmall";
import ContactUsLarge from "./ContactUsLarge";

export default class ContactUs extends Component {
  render() {
    return (
      <div>
        <Segment.Group>
          <Responsive as={Segment} basic {...Responsive.onlyMobile}>
            <ContactUsSmall />
          </Responsive>
          <Responsive as={Segment} basic {...Responsive.onlyTablet}>
            <ContactUsSmall />
          </Responsive>
          <Responsive as={Segment} basic {...Responsive.onlyComputer}>
            <ContactUsLarge />
          </Responsive>
          <Responsive as={Segment} basic {...Responsive.onlyLargeScreen}>
            <ContactUsLarge />
          </Responsive>
          <Responsive as={Segment} basic {...Responsive.onlyWidescreen}>
            <ContactUsLarge />
          </Responsive>
        </Segment.Group>
      </div>
    );
  }
}
