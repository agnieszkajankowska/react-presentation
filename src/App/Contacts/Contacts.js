import React from 'react'
import {Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'


export class Contacts extends React.Component {
    constructor() {
        super()
        this.state = {
            contacts: ''
        }
    }

    componentWillMount() {
        console.log('component will mount')
        fetch(process.env.PUBLIC_URL + '/data/contacts.json')
            .then(response => response.json())
            .then(data => this.setState({contacts: data}))
    }

    render() {
        console.log("state.contacts", this.state.contacts)
        const contacts = this.state.contacts
        return (
            <div>
                <h1>Contacts</h1>
                <Form horizontal>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>Name</ControlLabel>
                        {' '}
                        <FormControl type="text" placeholder="Enter contact name"/>
                    </FormGroup>
                    {' '}
                    <FormGroup controlId="formInlineSurname">
                        <ControlLabel>Surname</ControlLabel>
                        {' '}
                        <FormControl type="text" placeholder="Enter contact surname"/>
                    </FormGroup>
                    <Button type="submit">
                        Add contact
                    </Button>
                </Form>
                <h3>All users</h3>
                {
                    !contacts ? '' :
                        <ul>
                            {
                                contacts.map(
                                    user => <li key={user.id}>{user.name} {user.surname}</li>
                                )
                            }
                        </ul>
                }
            </div>
        )
    }
}

export default Contacts
