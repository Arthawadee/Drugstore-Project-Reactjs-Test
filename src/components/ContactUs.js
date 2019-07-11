import React, { Component } from "react";
import {
  Responsive,
  Segment
} from "semantic-ui-react";
import ContactUsSmall from "./ContactUs/ContactUsSmall";
import ContactUsLarge from "./ContactUs/ContactUsLarge";
import {observer} from 'mobx-react';
import store from './stores/TodoStore';



const TodoView = observer(class ContactUs extends Component {
  constructor(props){
    super(props)
    console.log(store)
  }
  render() {
    return (
      <div>
        {/* <h1>{store.filter}</h1> */}
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
})

export default TodoView;