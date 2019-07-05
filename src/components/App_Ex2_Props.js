import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class App_Ex2_Props extends Component {
    render() {
        return (
            <div>
                <Entry label="Email" type="email" placeholder="Enter Email"/>
                <Entry label="Password" type="password" placeholder="Enter Password"/>
            </div>
        )
    }
}

class Entry extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                {/* <Form>
                    <Form.Field>
                        <label>{this.props.label}</label>
                        <input placeholder={this.props.placeholder} />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form> */}
                <Form.Input label={this.props.label} type={this.props.type} placeholder={this.props.placeholder} />
            </div>
        )
    }
}

