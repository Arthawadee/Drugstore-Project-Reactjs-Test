import React, { Component } from 'react';
import { Header,Icon } from "semantic-ui-react";

export default class StrokeForm extends Component {
    render() {
        return (
            <div className='StrokeForm'>
                <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>แบบคัดกรองโรคหลอดเลือดสมอง</Header.Content>
    </Header>
            </div>
        )
    }
}