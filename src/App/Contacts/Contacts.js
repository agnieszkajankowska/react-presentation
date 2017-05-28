import React from 'react'
import {Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'


export class Contacts extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            surname: '',
            contacts: ''
        }

        this.handleSubmit = (event) => {
            event.preventDefault()
            this.setState({
                contacts: this.state.contacts.concat({
                    id: new Date().getTime(),
                    name: this.state.name,
                    surname: this.state.surname
                })
            })
        }

        this.handleRemoveContact = (contactId) => {
            this.setState({
                contacts: this.state.contacts.filter(
                    user => user.id !== contactId
                )
            })
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
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>Name</ControlLabel>
                        {' '}
                        <FormControl type="text"
                                     placeholder="Enter contact name"
                                     onChange={event =>
                                         this.setState({
                                             name: event.target.value
                                         })
                                     }
                        />
                    </FormGroup>
                    {' '}
                    <FormGroup controlId="formInlineSurname">
                        <ControlLabel>Surname</ControlLabel>
                        {' '}
                        <FormControl type="text"
                                     placeholder="Enter contact surname"
                                     onChange={event =>
                                         this.setState({
                                             surname: event.target.value
                                         })
                                     }
                        />
                    </FormGroup>
                    <Button type="submit">
                        Add contact
                    </Button>
                </Form>
                <h2>{this.state.name}</h2>
                <h2>{this.state.surname}</h2>
                <h3>All users</h3>
                {
                    !contacts ? '' :
                        <ul>
                            {
                                contacts.map(
                                    user =>
                                        <li key={user.id}>{user.name} {user.surname}
                                            <Button bsStyle="danger"
                                                    onClick={() => this.handleRemoveContact(user.id)}
                                            >Remove</Button>
                                        </li>
                                )
                            }
                        </ul>
                }
            </div>
        )
    }
}

export default Contacts
