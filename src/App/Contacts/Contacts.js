import React from 'react'



export class Contacts extends React.Component {

    componentWillMount(){
        console.log('component will mount')
        fetch(process.env.PUBLIC_URL + '/data/contacts.json')
            .then(response => response.json()).then(data => console.log(data))
    }

    render() {
        return (
            <div>
                <h1>Contacts</h1>
            </div>
        )
    }
}

export default Contacts
