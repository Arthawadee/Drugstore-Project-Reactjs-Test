import React, { Component } from 'react'
import { Form, FormGroup } from 'semantic-ui-react'

export default class App_Ex4_State extends Component {
    constructor(props){
        super(props)
        this.state = { email: '', password: '', submittedName: '', submittedEmail: '' }

        this.handleChange = (e, { name, value }) => this.setState({ [name]: value })
        this.handleSubmit = () => {
            const { email, password } = this.state
        
            this.setState({ submittedEmail: email, submittedPassword: password })
          }
    }
    render() {
        const { email, password, submittedEmail, submittedPassword } = this.state
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Form.Input label="Email" name='email'
                        value={email} type="email" placeholder="Enter Email" onChange={this.handleChange}/>
                        <Form.Input label="Password" name='password'
                        value={password} type="password" placeholder="Enter Password" onChange={this.handleChange}/>

                        <Form.Button content='Submit' />
                    </FormGroup>
                
                </Form>

                {/* <strong>onChange:</strong>
                <pre>{JSON.stringify({ email, password }, null, 2)}</pre>
                <strong>onSubmit:</strong>
                <pre>{JSON.stringify({ submittedEmail, submittedPassword }, null, 2)}</pre> */}
            </div>
        )
    }
}
